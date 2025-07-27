const ctx = document.getElementById('chart').getContext('2d');
let chart;
let isAuto = false;

const statusDot = document.getElementById('statusDot');
const connectionStatus = document.getElementById('connectionStatus');

const symInput = document.getElementById('symbolSearch');
const tfInput = document.getElementById('timeframe');
const limitInput = document.getElementById('dataLimit');
const refreshBtn = document.getElementById('refreshBtn');
const autoBtn = document.getElementById('autoRefreshBtn');

const patternsTableBody = document.getElementById('patternsTableBody');
const pcCount = document.getElementById('patternsCount');
const buyCount = document.getElementById('buySignals');
const sellCount = document.getElementById('sellSignals');

// ✅ checkboxes لتفعيل إشارات الرسم
['showBuy', 'showSell', 'showDoji'].forEach(id => {
  const checkbox = document.getElementById(id);
  if (checkbox) checkbox.addEventListener('change', runAnalysis);
});

function setStatus(online) {
  statusDot.style.background = online ? '#0f0' : '#f00';
  connectionStatus.textContent = online ? 'Connected' : 'Disconnected';
}

async function fetchCandles(symbol = "BTCUSDT", interval = "1h", limit = 100) {
  const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`;
  const response = await fetch(url);
  const data = await response.json();

  return data.map(c => ({
    x: c[0], // مباشرة الرقم (timestamp بالميللي ثانية)
    o: parseFloat(c[1]),
    h: parseFloat(c[2]),
    l: parseFloat(c[3]),
    c: parseFloat(c[4]),
    v: parseFloat(c[5])
  }));
}

function detectPatterns(candles) {
  let patterns = [], buy = 0, sell = 0;
  for (let i = 0; i < candles.length; i++) {
    const c = candles[i];
    const body = Math.abs(c.c - c.o);
    const wickL = Math.min(c.o, c.c) - c.l;
    const wickU = c.h - Math.max(c.o, c.c);
    let pattern = null, sig = null, conf = null;

    if (body <= (c.h - c.l) * 0.1) {
      pattern = 'Doji ⚪'; sig = 'Neutral'; conf = 'Low';
    } else if (wickL > body * 2 && body > 0) {
      pattern = 'Hammer 🟢'; sig = 'Buy'; conf = 'Medium';
    } else if (wickU > body * 2 && body > 0) {
      pattern = 'Shooting Star 🔴'; sig = 'Sell'; conf = 'Medium';
    }

    if (!pattern && i > 0) {
      const prev = candles[i - 1];
      if (prev.c < prev.o && c.c > c.o && c.o < prev.c && c.c > prev.o) {
        pattern = 'Bullish Engulfing 🟢'; sig = 'Buy'; conf = 'High';
      } else if (prev.c > prev.o && c.c < c.o && c.o > prev.c && c.c < prev.o) {
        pattern = 'Bearish Engulfing 🔴'; sig = 'Sell'; conf = 'High';
      }
    }

    if (pattern) {
      buy += sig === 'Buy' ? 1 : 0;
      sell += sig === 'Sell' ? 1 : 0;
      patterns.push({ ...c, pattern, sig, conf });
    }
  }
  return { candles, patterns, buy, sell };
}

function drawChart(result) {
  if (chart) chart.destroy();

  const { candles, patterns } = result;

  const showBuy = document.getElementById('showBuy')?.checked;
  const showSell = document.getElementById('showSell')?.checked;
  const showDoji = document.getElementById('showDoji')?.checked;

  const annotationPoints = patterns
    .filter(p => {
      if (p.sig === 'Buy' && showBuy) return true;
      if (p.sig === 'Sell' && showSell) return true;
      if (p.sig === 'Neutral' && showDoji) return true;
      return false;
    })
    .map(p => ({
      type: 'point',
      xValue: p.x,
      yValue: p.h,
      backgroundColor: p.sig === 'Buy' ? '#0f0' :
                       p.sig === 'Sell' ? '#f00' : '#999',
      radius: 6,
      borderColor: '#fff',
      borderWidth: 2,
      label: {
        display: true,
        content: p.sig === 'Buy' ? '🟢' : p.sig === 'Sell' ? '🔴' : '⚪',
        color: '#fff',
        font: { size: 12, weight: 'bold' }
      }
    }));

  chart = new Chart(ctx, {
    type: 'candlestick',
    data: {
      datasets: [{
        label: 'Candlesticks',
        data: candles,
        parsing: false,
        color: { up: '#26a69a', down: '#ef5350', unchanged: '#999' },
        borderColor: '#ccc', borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        annotation: { annotations: annotationPoints },
        tooltip: {
          callbacks: {
            label: ctx => {
              const d = ctx.raw;
              return [
                `🕒 ${d.x.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
                `Open: ${d.o}`,
                `High: ${d.h}`,
                `Low: ${d.l}`,
                `Close: ${d.c}`,
                d.pattern ? `📌 ${d.pattern}` : null
              ].filter(Boolean);
            }
          }
        }
      },

      
      scales: {
        x: {
          type: 'time',
          time: {
            tooltipFormat: 'HH:mm',
            displayFormats: {
              minute: 'HH:mm',
              hour: 'HH:mm',
              day: 'MMM d'
            }
          },
          ticks: { color: '#ccc' },
          grid: { color: 'rgba(255,255,255,0.05)' }
        },
        y: {
          ticks: {
            color: '#ccc',
            callback: val => val.toFixed(2)
          },
          grid: { color: 'rgba(255,255,255,0.1)' }
        }
      }
    },
    plugins: [Chart.registry.getPlugin('annotation')]
  });
}

function updateTable(result) {
  patternsTableBody.innerHTML = '';
  if (!result.patterns.length) {
    patternsTableBody.innerHTML = `<tr class="no-data"><td colspan="9"><i class="fas fa-search"></i> No patterns detected yet.</td></tr>`;
  } else {
    result.patterns.forEach(p => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${p.x.toLocaleString()}</td>
        <td>${p.pattern}</td>
        <td>${p.sig}</td>
        <td>${p.conf}</td>
        <td>${p.o}</td><td>${p.h}</td><td>${p.l}</td><td>${p.c}</td><td>${p.v}</td>`;
      patternsTableBody.appendChild(row);
    });
  }
  pcCount.textContent = result.patterns.length;
  buyCount.textContent = result.buy;
  sellCount.textContent = result.sell;
}

async function runAnalysis() {
  const symbol = symInput.value.toUpperCase();
  const tf = tfInput.value, lim = +limitInput.value;
  const candles = await fetchCandles(symbol, tf, lim);
  const result = detectPatterns(candles);
  drawChart(result);
  updateTable(result);

  document.getElementById('currentPrice').textContent = candles.length ? candles.at(-1).c.toFixed(2) : '--';
  const change = result.buy - result.sell;
  const el = document.getElementById('priceChange');
  el.textContent = change > 0 ? `+${change} Buy` : change < 0 ? `${-change} Sell` : '--';
  el.className = `price-change ${change > 0 ? 'buy' : change < 0 ? 'sell' : ''}`;
}
document.getElementById('fullscreenBtn').addEventListener('click', () => {
  const chartSection = document.querySelector('.chart-section');
  if (!document.fullscreenElement) {
    chartSection.requestFullscreen().catch(err => {
      alert(`Error: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
});

symInput.addEventListener('input', () => {
  const val = symInput.value.toUpperCase();
  const list = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'XRPUSDT'].filter(s => s.includes(val));
  const dom = document.getElementById('searchSuggestions');
  dom.innerHTML = list.map(s => `<div class="suggest-item">${s}</div>`).join('');
  Array.from(dom.children).forEach(ch => ch.addEventListener('click', () => {
    symInput.value = ch.textContent; dom.innerHTML = '';
  }));
});

refreshBtn.addEventListener('click', runAnalysis);

autoBtn.addEventListener('click', () => {
  isAuto = !isAuto;
  autoBtn.innerHTML = isAuto
    ? '<i class="fas fa-pause"></i> Stop Auto'
    : '<i class="fas fa-play"></i> Auto Refresh';
  if (isAuto) {
    runAnalysis();
    setInterval(runAnalysis, 60000);
  }
});

runAnalysis();
