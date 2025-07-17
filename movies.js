const movies = [
  {
    id: 'vinland-saga',
    title: 'Vinland Saga',
    image: 'https://i.pinimg.com/1200x/f7/a3/a8/f7a3a819b9abd49c301bb3daa724869d.jpg',
    embed: 'https://www.youtube.com/embed/f8JrZ7Q_p-8?si=QKDSjIy9dfGsjnGb', 
    category: 'anime',
    releaseYear: 2019,
    status: 'ongoing', 
    seasonStatus: 'completed', 
    rating: 8.8, 
    type: 'TV',
    genres: ['أكشن', 'تاريخية', 'مغامرة'],
    description:'انمي Vinland Saga (“ملحمة فينلاند”) تجري احداث القصة خلال القرن الحادي عشر في أوروبا، حيث ذاع صيت الفايكنج كمحاربين أقوياء، برز ثورفين، ابن أحد أبرز محاربيهم، ليفرض نفسه على عصابة أشيلاد المرتزقة. ولكن ما يشدّه لهذه العصابة ليس حبّه للنهب، بل رغبته الملحة في الانتقام من أشيلاد لما فعله بوالده، حيث أقسم على قتله في مبارزة عادلة. وعلى الرغم من عدم إجادته القتال بشكل كافٍ وعدم قدرته على التخلي عن فكرة الانتقام، يقضي ثورفين طفولته بين المرتزقة، يصقل مهاراته وهو ينتظر الفرصة المناسبة للانتقام. تتغير مجرى الأحداث عندما يعلم أشيلاد باحتجاز الأمير الدنماركي كانوت كرهينة. ليضع خطة ماكرة ستقرر مصير تاج إنجلترا، وتُغير حياة كل من أشيلاد، وثورفين، وكانوت إلى الأبد.',
    seasons: [
      {
        seasonNumber: 1,
        episodes: [
		{
            title: 'الحلقة 1',
            embed: 'https://mega.nz/embed/uUV2iB7S#WtOpx56SCdHVdWa3HON1Cxp12BEEKYPEzn40qOZFF3Q'
          },
		{
            title: 'الحلقة 2',
            embed: 'https://mega.nz/embed/WR9lnTba#q4n0vD0NDRLeKsouEtZgiUfILm2xaN5SghjhMClEEh4'
          },
		{
            title: 'الحلقة 3',
            embed: 'https://mega.nz/embed/qF9THY6b#p2ZvNodyuj_VcsSykKOH6R_6mEK5qf3gsakVZHP2pvo'
          },
		{
            title: 'الحلقة 4',
            embed: 'https://mega.nz/embed/ONNGBTAA#Gra1q6GJRm8qwAuhXAszemOthKmfXQg4paxBHEaA88E'
          },
		{
            title: 'الحلقة 5',
            embed: 'https://mega.nz/embed/KQNDAKYR#3CeVP_oVZ2_o2IH4Iv8FpCYMViHPrYMeo-EDmZEPA6I'
          },
		{
            title: 'الحلقة 6',
            embed: 'https://mega.nz/embed/SVMBnZII#RmH4bRtcrAQ03ySQvFQtoe66_k_buNdTaE-eDVBAWVo'
          },
		{
            title: 'الحلقة 7',
            embed: 'https://mega.nz/embed/KB0WjAib#yzKB0PPYMEJXhc1nPXzdmkO4wq8oNXQFFDrwLhJddm0'
          },
		{
            title: 'الحلقة 8',
            embed: 'https://mega.nz/embed/TQllACgK#J1AO4Whjq4hPteoIOk84VGgkI2AmAbGUSGsIyl62kNc'
          },
		{
            title: 'الحلقة 9',
            embed: 'https://mega.nz/embed/GcNTADQS#WyHzQwDZBXn-vq4QCc02uQUdvfyCgaIYSOzK-N3k5N8'
          },
		{
            title: 'الحلقة 10',
            embed: 'https://mega.nz/embed/uM03hZJT#9WuF7vxal4TtWWfCaA8oRrT-dNYxUjwj0PdWVtR_RGw'
          },
		{
            title: 'الحلقة 11',
            embed: 'https://mega.nz/embed/zVNzXCIC#KQSTJWtb3nZkUDBvsaPzS5-9pL3eccFphLZs7TH25Lk'
          },
		{
            title: 'الحلقة 12',
            embed: 'https://mega.nz/embed/2VdCzJ7D#QIe8t7SrXXk9nAKFLL88-TmWzLMe9jPAv5Knx0IjZ6Y'
          },
		{
            title: 'الحلقة 13',
            embed: 'https://mega.nz/embed/PBdVCJwB#6BPq6wHUwxyUnGRbNC17T_7zXCUYDvaqw35kSiVyugw'
          },
		{
            title: 'الحلقة 14',
            embed: 'https://mega.nz/embed/bYchwDSA#KTpJ-7D0p5LjqhxENk4XoDV3notqaMp_DUy127O8-Mk'
          },
		{
            title: 'الحلقة 15',
            embed: 'https://mega.nz/embed/zB8EQaRb#M35LOJDRrCEa1tQqO3tuka42ynDk26RhStOF4x_j1aI'
          },
		{
            title: 'الحلقة 16',
            embed: 'https://mega.nz/embed/SINi0RAT#_ZnfzZGYqDh5CmPCxA7FcCrvFwvpsVY_JurfJd57FX8'
          },
		{
            title: 'الحلقة 17',
            embed: 'https://mega.nz/embed/jIdRwIhY#FcVR15L41pSHl65zrjpj3GO6u7sJug-d1MmjJx5sFe8'
          },
		{
            title: 'الحلقة 18',
            embed: 'https://mega.nz/embed/XYMkDARR#Nzk283D5K51erd0ffcSOOw6wCMbOSka5ULNpNhG-KNc'
          },
		{
            title: 'الحلقة 19',
            embed: 'https://mega.nz/embed/rIM01RIL#0yiyTYH6LbT1ugMtJ1GUXtwdp8A2QC_M9_zFJrxRXkg'
          },
		{
            title: 'الحلقة 20',
            embed: 'https://mega.nz/embed/7QFBHSCJ#Xt63LdTkgquisMv4mohbdzjJ8chYe428Ge8ysaoOR6M'
          },
		{
            title: 'الحلقة 21',
            embed: 'https://mega.nz/embed/GEUiwYaT#hXI-ugclUjI1rxoRKjshfvuoAvXmjc5y3aakSA9-hb4'
          },
		{
            title: 'الحلقة 22',
            embed: 'https://mega.nz/embed/DZNRlR6I#ylMDUJi7JLAY7Wjn9hEgwpdFhhmdGSTAIgqBhCqx2xw'
          },
		{
            title: 'الحلقة 23',
            embed: 'https://mega.nz/embed/yA1UQACJ#M_H5XHPSqq4VLPFSvtV4Fe1pJyfwiXaByWCJkjtvwro'
          },
		{
            title: 'الحلقة 24',
            embed: 'https://mega.nz/embed/nV1yxarK#ZyzqSrawSipcjddfPTDqME4aJm8T4BAFitfME_PsH38'
          },
        ]
      },
        {
        seasonNumber: 2,
        episodes: [
		{
            title: 'الحلقة 1',
            embed: 'https://mega.nz/embed/6aw3TapR#6b8CMkrE9IU_PMZNu1A0izEOQvCcLIMAPIr9ptwFbLI'
          },
		{
            title: 'الحلقة 2',
            embed: 'https://mega.nz/embed/uXBlwKjR#CyWiabxhqLsDs8rp1EY2Syd4jK4l7H4rVPPGdPpodEw'
          },
		{
            title: 'الحلقة 3',
            embed: 'https://mega.nz/embed/CT5AjSbb#sfRZGIxQEU264qTU36mwMjfFswKsc-T2T5Y2Q1SKy10'
          },
		{
            title: 'الحلقة 4',
            embed: 'https://mega.nz/embed/qf5EEYSJ#aTRLhXXBAJNHJS7bvMTj-t-QpSnI4Opi-UZRMkMSUoU'
          },
		{
            title: 'الحلقة 5',
            embed: 'https://mega.nz/embed/LfZXTYSR#pdNdTCpdz2R8BSD7ANAhdAzr15VaDyr4JHUkwrBEjYQ'
          },
		{
            title: 'الحلقة 6',
            embed: 'https://mega.nz/embed/mTgTCQLQ#ZEsnhEgYJelXw0Mm_g87X07Z8kNbR_wTPjNE74yv3Uc'
          },
		{
            title: 'الحلقة 7',
            embed: 'https://mega.nz/embed/SeInyKYZ#Tp8oIAZHsZ4oj-HpE0qIVotvy-p4laav2lUOEgb8Y80'
          },
		{
            title: 'الحلقة 8',
            embed: 'https://mega.nz/embed/OPwXlASZ#w0kJjiKU59TKnchWM0ToUf9JUOoTP3SU6HxWJW2frRI'
          },
		{
            title: 'الحلقة 9',
            embed: 'https://mega.nz/embed/uSBxWD6L#hohljytMSMuXwBV4fxbtVsHtbeX0lyKpVyW0JSSUr5w'
          },
		{
            title: 'الحلقة 10',
            embed: 'https://mega.nz/embed/GahiXD4T#obZXGxsMVY0wvLqIl2guQ4rAUhQR9EgkTRwie0Sqy7A'
          },
		{
            title: 'الحلقة 11',
            embed: 'https://mega.nz/embed/GH4RUBpb#jHGNWDsZbowQ2Ok68SXO3Di1wzb0HHIvdRaPkhjbgmw'
          },
		{
            title: 'الحلقة 12',
            embed: 'https://mega.nz/embed/mTJXRbKB#SOgfR5Yah8jbufNYYcXUSuXiIp22JN6BZCY_3HVURD0'
          },
		{
            title: 'الحلقة 13',
            embed: 'https://mega.nz/embed/GLAkkThK#lWMiPrI7wjKzqZv1qOulSjWy3G4wThR3v6hTx_U_Iyk'
          },

        ]
      }
    ]
  },
  {
    id: 'Dr.Stone',
    title: 'Dr. Stone',
    image: 'https://i.pinimg.com/1200x/13/73/71/13737171f5866c965a996b2d50f9ed28.jpg',
    embed: 'https://www.youtube.com/embed/S6OmSIxSj14?si=9eSkK4xfQpnJ0vCG',
    category: 'anime',
    releaseYear: 2019,
    status: 'ongoing', 
    seasonStatus: 'ongoing', 
    rating: 8, 
    genres: ['Shonen', 'Adventure', 'Historical'],
    type: 'TV',
    description: 'بعد آلاف السنين من حدث غامض حوّل البشرية إلى حجر، يستيقظ سينكو إيشيغامي، طالب ثانوي ذكي، ليجد نفسه في عالم متحجر، حيث انهارت كل مظاهر الحضارة الإنسانية. بدافع من شغفه العلمي المتقد، يُقرر سينكو استغلال ذكائه لإعادة بناء الحضارة المفقودة، برفقة صديق طفولته تايجو أوكي، الذي نجا هو الآخر من التحجر. معاً، يشرع الثنائي في رحلة محفوفة بالمخاطر، تبدأ من نقطة الصفر. بهدف كشف أسرار التحول الغامض، وإيجاد علاج لإحياء البشرية وإعادة إعمار حضارتها العريقة. فهل ينجحان في مسعاهما ا',
    seasons: [
      {
        seasonNumber: 1,
        episodes: [
		{
            title: 'الحلقة 1',
            embed: 'https://mega.nz/embed/aDJ3GSwA#7R-GItBrk4NbPaKEjWyYxhcVWN5LXlDdUG68sWcvqHg'
          },
		{
            title: 'الحلقة 2',
            embed: 'https://mega.nz/embed/TKY1gJzR#Wo0eE-wvWqMXhQ9RxGQCFQfC7AM-xj13-Ma1B0ZrJws'
          },
		{
            title: 'الحلقة 3',
            embed: 'https://mega.nz/embed/XXIkHJYY#pCiLi8JN-MCOsTJSKKTuRkXX4ec_k9Ie5SIIH_p9dZs'
          },
		{
            title: 'الحلقة 4',
            embed: 'https://mega.nz/embed/fCxXkBoD#fZW6FF4fYUXndw7it0nUesETOecrAzkZFk0XuZ8YBFo'
          },
		{
            title: 'الحلقة 5',
            embed: 'https://mega.nz/embed/KWpTQRLK#rNd_gLy_5pCXc514EMXWHrrDcyM7yE5WLzG69QdrHrk'
          },
		{
            title: 'الحلقة 6',
            embed: 'https://mega.nz/embed/eGZGWTKb#G3Ie3ZoOUjjGpkEAHd9xQYSMRK-G8OTfCiITipJlCRE'
          },
		{
            title: 'الحلقة 7',
            embed: 'https://mega.nz/embed/jHhDhRaL#a1uqBNtly0Sp6Txejy0e77Ny8mNm6EzWLCt3G13rGZ0'
          },
		{
            title: 'الحلقة 8',
            embed: 'https://mega.nz/embed/iPQQGZCb#aRs-69EAEDzgLQnQyS71DJWrwVgh-iKfG-F-9b1UZmc'
          },
		{
            title: 'الحلقة 9',
            embed: 'https://mega.nz/embed/iCZ31AQS#NufNO0bxNAglqpsNApFEluUcGz9XemVQKgKSm7lBf40'
          },
		{
            title: 'الحلقة 10',
            embed: 'https://mega.nz/embed/iWh0UQKD#Y5kMC8BhJGwpq3b4pB8BrjWT7qoFqm4HCyVZnveJSg4'
          },
		{
            title: 'الحلقة 11',
            embed: 'https://mega.nz/embed/LXhjEIBa#pkQ69nPo7OdYd9DGQZ60sTcN_3HGeY3dDFUaWWhM96o'
          },
		{
            title: 'الحلقة 12',
            embed: 'https://mega.nz/embed/qLQgwahR#GLIgL3tuLRJquviWR9Dg0iCiBd73U4WwITS6W-UwdJo'
          },
		{
            title: 'الحلقة 13',
            embed: 'https://mega.nz/embed/GP5DwAIC#37T-zJvtjWhhfMXfwaXqlAPYa8mCYYCBCiLJniWai5o'
          },
		{
            title: 'الحلقة 14',
            embed: 'https://mega.nz/embed/ueZWVabR#eU8OxB5q2hSonz0ubuCNQk5qO7RQlaa_pQdmwSas15w'
          },
		{
            title: 'الحلقة 15',
            embed: 'https://mega.nz/embed/faQ0mRRb#xwjK53VzHjPsJuOVYrWVIN9xMdGGXYQvl8-WAIRW1U4'
          },
		{
            title: 'الحلقة 16',
            embed: 'https://mega.nz/embed/HLZD3CYR#HRCNWFOw4w2b7E5y3_TkRgwp2PBzqaGsTJ5QCQQ2ZLs'
          },
		{
            title: 'الحلقة 17',
            embed: 'https://mega.nz/embed/LCIhVbjC#D6m8LDMYCR7-MeIeJQV4NX-tWQzrg9JFQ3Y_NshAoVg'
          },
		{
            title: 'الحلقة 18',
            embed: 'https://mega.nz/embed/OGgw1BaD#7mQZZTkGjgsLhaScaZtqtCugRxP4TJ-grhuwnYH2tkw'
          },
		{
            title: 'الحلقة 19',
            embed: 'https://mega.nz/embed/XSRnABLB#5eQQ9aMKYKzo5e51ItAjD_yYEyD51eQ2fGWJ2lSTi2A'
          },
		{
            title: 'الحلقة 20',
            embed: 'https://mega.nz/embed/aDoTFbxS#nULQNgvcWGYSDRw7Xn5Lj5aUBmgTB4WQ4h-CVjcTC2E'
          },
		{
            title: 'الحلقة 21',
            embed: 'https://mega.nz/embed/mb4SwKhD#-n3WHKDdhBnO-2cbK4olqc6FwboWHbZngQa8ccmM7QQ'
          },
		{
            title: 'الحلقة 22',
            embed: 'https://mega.nz/embed/re4EXIba#t7ejT1_L-E8RzAd0YiwweM18kmLbLEN-vqZmkH413II'
          },
		{
            title: 'الحلقة 23',
            embed: 'https://mega.nz/embed/fbAkhYqB#v36FZJC50o438aiJ9E2MW1YBqAHnZlrQHjr9T4dU2wo'
          },
		{
            title: 'الحلقة 24',
            embed: 'https://mega.nz/embed/2GBRCaKD#2WGAn6fNpEzHUwR4D_n0dFx0uYi4F-H6HSBxyPSCKzo'
          },


        ]
      },
        {
        seasonNumber: 2,
        episodes: [
		{
            title: 'الحلقة 1',
            embed: 'https://mega.nz/embed/yHxnwRZS#aQEa2xYxInoPTfSJBUExJhsINKFtfPSOuRipMvcOkE0'
          },		{
            title: 'الحلقة 2',
            embed: 'https://mega.nz/embed/vaw2HCyY#_4ujypluuF6vJ_FensqD5ArM9n2OFJAA3PvdkcWxXhk'
          },
		{
            title: 'الحلقة 3',
            embed: 'https://mega.nz/embed/vfRCVBCa#-tlbNCCg_vtIijrwRNLADhxe5GjgE7qvq1Qqb7SKmEI'
          },
		{
            title: 'الحلقة 4',
            embed: 'https://mega.nz/embed/Xfw1GTAA#58gELxiew4QMI7j_b35SdQLX5PGteTtsBXFv-YgU4_4'
          },
		{
            title: 'الحلقة 5',
            embed: 'https://mega.nz/embed/jaomUBDR#KIPXXUYPSafEZ3hEoeDdbGMjJ3Z1zfP9yIC5LeskmxE'
          },
		{
            title: 'الحلقة 6',
            embed: 'https://mega.nz/embed/aGYUFS5C#-_MvocTbahNVQsdtAZVi7kkWgYf9DjnTtbi2NR6RwsE'
          },
		{
            title: 'الحلقة 7',
            embed: 'https://mega.nz/embed/nL50hZIA#DDbYmz9R4iU49lStd3OwYCWRo_bEqy0Uzy5KpArDk-g'
          },
		{
            title: 'الحلقة 8',
            embed: 'https://mega.nz/embed/SSRAXYIR#oPj02rcFg4VVcfq5tt6uBYdoQCF9JbNLntFFXq2Rmvo'
          },
		{
            title: 'الحلقة 9',
            embed: 'https://mega.nz/embed/rKJzRIaZ#FU7wjd-gQkdn50aqK2WuLtpk66k-NiJDj7Q71g8zAqs'
          },
		{
            title: 'الحلقة 10',
            embed: 'https://mega.nz/embed/7bZQUKxb#p9XXhgbkd9-EzDtECF1-zkIMFHwFCvq_an0Zygf4KVY'
          },
		{
            title: 'الحلقة 11',
            embed: 'https://mega.nz/embed/aXgwQKLI#lroL8yD_hU-zwd1W5JFq_8XRXM2b2_NYmNztP--CYL8'
          },
        ]
      }
    ]
  },

  {
    id: 'Solo-Leveling',
    title: 'Solo Leveling',
    image: 'https://i.pinimg.com/1200x/64/af/4e/64af4e82a80625d92414af68df8ceef5.jpg',
    embed: 'https://www.youtube.com/embed/I6JIwjWOhnQ?si=nuvMsfE_pFrIcTTz',
    category: 'anime',
    releaseYear: 2024,
    status: 'ongoing', 
    seasonStatus: 'completed', 
    rating: 8.6, 
    genres: ['أكشن', 'فانتازيا', 'شونين', 'خيال', 'مغامرات'],
    type: 'TV',
    description: 'منذ أكثر من عقد من الزمان، ظهرت “البوابات”، وهي ممرات تربط بين عالم البشر وعالم آخر. يُطلق على أولئك الذين يقاتلون الوحوش الكامنة وراء البوابات اسم “الصيادين”. يتم تصنيف الصيادين حسب كمية الطاقة السحرية التي يمتلكونها عند الاستيقاظ، ويُعتبر “سونغ جين وو” من أضعف الصيادين، حيث يحمل تصنيف E، وهو الأدنى، حتى أنه يُعتبر الأضعف بين حاملي هذا التصنيف. في أحد الأيام، يشارك سونغ في مهمة داخل زنزانة. وعندما ينجح في اجتيازها، يكتشف وجود بوابة أخرى في أعماقها. ما الذي ينتظر شون وراء هذه البوابة؟',
    seasons: [
      {
        seasonNumber: 1,
        episodes: [
		{
            title: 'الحلقة 1',
            embed: 'https://vk.com/video_ext.php?oid=721415423&id=456241213&hd=2&autoplay=1'
          },
		{
            title: 'الحلقة 2',
            embed: 'http://video.sibnet.ru/shell.php?videoid=5397588&share=1'
          },

        ]
      }
    ]
  },

  {

    id: 'Tokyo-Revengers',
    title: 'Tokyo Revengers',
    image: 'https://i.pinimg.com/736x/cb/76/b3/cb76b30904a7968646997834c492c02f.jpg',
    embed: 'https://www.youtube.com/embed/N5FVCA6OdCM?si=FFUXHDF65vtXsYyG', 
    category: 'anime',
    releaseYear: 2021,
    status: 'ongoing',           
    seasonStatus: 'completed',  
    rating: 7.9,                 
    genres: ['أكشن', 'دراما', 'سفر عبر الزمن', 'شونين', 'عصابات'],
    type: 'TV',
    description: 'انمي Tokyo Revengers (“منتقمي طوكيو”) تدور القصة حول تاكيميتشي هاناغاكي، وهو شاب يعمل في متجر البقالة، وصل إلى نوبات اليأس المطلقة في حياته. انتهى به المطاف إلى اكتشاف أن صديقته الوحيدة السابقة في المدرسة الإعدادية، هيناتا تاتشيبانا، قد قتلت على يد عصابة طوكيو مانجي. في اليوم التالي لسماعه خبر وفاتها، وجد نفسه يقف بالقرب من محطة القطار، حيث انتهى به الأمر بدفعه على السكة من قبل شخص مجهول. أغلق تاكيميتشي عينيه متوقعًا الموت، ولكن عندما فتحهما مجددًا، اكتشف بصدمة أنه قد عاد بطريقة ما في الزمن إلى الماضي بفترة تصل إلى 12 عامًا.',
    seasons: [
      {
        seasonNumber: 1,
        episodes: [

		{
            title: 'الحلقة 1',
            embed: 'https://mega.nz/embed/iUshXRLT#KYilMvdsxq7iuO9vJu7R7Wra8M9uecEGlPz8hixrv5g'
          },
		{
            title: 'الحلقة 2',
            embed: 'https://mega.nz/embed/yINkERJS#S8DXhgteFrYB4W5_w7pn3yU45w06RO2gJv7aN6qb5ik'
          },
		{
            title: 'الحلقة 3',
            embed: 'https://mega.nz/embed/SU1iXZ6Y#LsHZ-iGuM1WXZMwqRfIzxI_nHhHBzy_EekqT-dYih40'
          },
		{
            title: 'الحلقة 4',
            embed: 'https://mega.nz/embed/SAkUmYYB#ucDbXRr4tjDWN1YKJFY_vv-xVWcVDpOjMhf717Z738w'
          },
		{
            title: 'الحلقة 5',
            embed: 'https://mega.nz/embed/HFtBCbbZ#cKrWQz3lyqsJWauctV_UilLI8AyAP8rq6QWXyfvxQgU'
          },
		{
            title: 'الحلقة 6',
            embed: 'https://mega.nz/embed/HdVFUZSI#Qpzhs9yaGu4u1iUaOHaqec9XKytvXymyTzJdJckSOcE'
          },
		{
            title: 'الحلقة 7',
            embed: 'https://mega.nz/embed/mJEVlbID#7Lmr7tIuldz8DnmVXs8LBWA1eoDcz1kUBoRlojQUiUM'
          },
		{
            title: 'الحلقة 8',
            embed: 'https://mega.nz/embed/SYcwDQZB#OdrpJA6YHdZeCG7p2pAdd8Aaf-3Tuu64kxY2Hn2j6vo'
          },
		{
            title: 'الحلقة 9',
            embed: 'https://mega.nz/embed/zVtDnIYS#PIts37yW4JfeNvTHPmEfzFedTJjaETvYT-xpvc_54Io'
          },
		{
            title: 'الحلقة 10',
            embed: 'https://mega.nz/embed/nMlmUTpa#tzn6mNw6gNmB4QW4g6e-RaNfgt1Q87datLVOzU4kSVo'
          },
		{
            title: 'الحلقة 11',
            embed: 'https://mega.nz/embed/DEFiHRob#afIrXiZ3LcsJHi4kk1z-Vf1yoLhZNyltgzPaTgXFWkg'
          },
		{
            title: 'الحلقة 12',
            embed: 'https://mega.nz/embed/CINxgSjJ#3ZozldBGtrITt35B_9mvyU2R-l6X89H8fEJsPFa47uA'
          },
		{
            title: 'الحلقة 13',
            embed: 'https://mega.nz/embed/GBsA0LqA#Q1iYJn1T8Rp1D3h3Q3FQxNtoGTlxPfqxajC6LWZr2Mo'
          },
		{
            title: 'الحلقة 14',
            embed: 'https://mega.nz/embed/CAknjYoI#cn1FqD_Ho7FyXovSrQwtPbbgI57kVZ__zrthityIAew'
          },
		{
            title: 'الحلقة 15',
            embed: 'https://mega.nz/embed/fcFj0RjZ#oImTDXkpfihygXUgPqPUfI3-yKOq_2MJoXC6yuxCICM'
          },
		{
            title: 'الحلقة 16',
            embed: 'https://mega.nz/embed/GAlThBRK#02iqt1fL2GTUJxheUVytt2pmCTsBxmVQuV7B4kB2U_k'
          },
		{
            title: 'الحلقة 17',
            embed: 'https://mega.nz/embed/SItm3JIb#TBItVB5MDJvJfCYmLCjulHnxkL48ReV73OgPqVpM9K0'
          },
		{
            title: 'الحلقة 18',
            embed: 'https://mega.nz/embed/ONNxhKYC#yElLF80hc6i551ZaLcx3HR4jkaWZ-ATQnlawNkJacmE'
          },
		{
            title: 'الحلقة 19',
            embed: 'https://mega.nz/embed/GE032JYJ#Z8aGWHh0rWwPXL0F10J9BkHp_AM8cA67gF2YwhK-fQA'
          },
		{
            title: 'الحلقة 20',
            embed: 'https://mega.nz/embed/3cd1QazS#rp2iLDkyVlGOySphLlrwb9xRI2kPr9y-WIwyi1MbeJg'
          },
		{
            title: 'الحلقة 21',
            embed: 'https://mega.nz/embed/3QNghAKZ#hqRNTioKg7wAED1q1q0u9Vb3ct_Vhdmm20SUJQQIq8E'
          },
		{
            title: 'الحلقة 22',
            embed: 'https://mega.nz/embed/XRMgAQLL#BI0s2jN0kN3gE-yOJjzxkzOebi8U6qAcUmO2ZUT43cc'
          },
		{
            title: 'الحلقة 23',
            embed: 'https://mega.nz/embed/GA8iED5L#3_P27NFy3B76b4TwxzmLoBT_OBUXrRfeDPncavxmw2g'
          },
          
		{
            title: 'الحلقة 24',
            embed: 'https://mega.nz/embed/jBVjXJzC#zrHXE6GYeb7CsEWRU2VeeeAjcC6sT7l3jNLNSS-mMZU'
          },
          

        ]
      },
        {
        seasonNumber: 2,
        episodes: [
		{
            title: 'الحلقة 1',
            embed: 'https://mega.nz/embed/YuMUiRDa#QMmnZ40gAHjLlj6Wi-cMdaA2ipH509DhcOrxS8hhWRI'
          },
		{
            title: 'الحلقة 2',
            embed: 'https://mega.nz/embed/0ysRTALK#JuW9ssf3k4FLXJpamkaxB3zuDYLFG_wniz84oT8OKUk'
          },
		{
            title: 'الحلقة 3',
            embed: 'https://mega.nz/embed/tic02IZK#XxAt-sJ9hQC_JhbGHgueZiNmh6-hquU4UjDAvkAcvWA'
          },
		{
            title: 'الحلقة 4',
            embed: 'https://mega.nz/embed/9rswzbYS#-gfNjKCP0Tvl519YyrkI4wEY8bKknvQmAaA7wRL3Ydk'
          },
		{
            title: 'الحلقة 5',
            embed: 'https://mega.nz/embed/Bus2DTIL#hFuYdQrzCNwC-jtcP1VvSe2dL0Uoo30q9vgXyt6kH3Y'
          },
		{
            title: 'الحلقة 6',
            embed: 'https://mega.nz/embed/U7UBxBZC#UELjIzxJZ3zECBqUsh5Zk-RMKdX1Lyg1QMUTQ10pA4Q'
          },
		{
            title: 'الحلقة 7',
            embed: 'https://mega.nz/embed/MvcyzBqZ#aqd7zPPsdlckY9z9ghN5ygp6czMThH7S_RkIA5mpeqk'
          },
		{
            title: 'الحلقة 8',
            embed: 'https://mega.nz/embed/F6NGiI5I#9VYdBIu1CpWJ7CkDY7YbP4xH3zl-kcGQGuD0ls-kq1o'
          },
		{
            title: 'الحلقة 9',
            embed: 'https://mega.nz/embed/h7FDkCCR#F9D4hZz43DuAs3ffvuuT8E6t3Dqq-KQx9-k9AWjvOoI'
          },
		{
            title: 'الحلقة 10',
            embed: 'https://mega.nz/embed/hqUwCSbB#7-ElD9ml2Q-4I151iECX47UCTQ3UUBm-EAkg4Bgyw9Q'
          },
		{
            title: 'الحلقة 11',
            embed: 'https://mega.nz/embed/4msUTB5L#RCnkx8pixILbQabQrHoca6r9KesMpfWRKNoAIe4Fuzo'
          },
		{
            title: 'الحلقة 12',
            embed: 'https://mega.nz/embed/ZrsyEYSK#-ylZ1MQONh2lcIShRWp-zecNDZI-OctmYtipUpmjB9U'
          },
		{
            title: 'الحلقة 13',
            embed: 'https://mega.nz/embed/Jv023YhC#wb0avXtbcSzgkiWNErRGcOQAta7R2tmputqWMZurP9Y'
          },

        ]
      },

  ]

},
  {
    id: 'Shingeki-no-Kyojin',
    title: 'Attack on Titan',
    image: 'https://i.pinimg.com/1200x/44/9a/80/449a800a063afedaf60acf71078d9567.jpg',
    embed: 'https://www.youtube.com/embed/LV-nazLVmgo?si=3UAmzamhwQ8jCbVk', 
    category: 'anime',
    releaseYear: 2013,
    status: 'completed', 
    seasonStatus: 'completed', 
    rating: 9.1, 
    genres: ['أكشن', 'دراما', 'غموض', 'فانتازيا مظلمة', 'شونين'],
    type: 'TV',
    description: 'انمي Shingeki no Kyojin (“هجوم العمالقة”) تجري احداث القصة في عالم دمرته مخلوقات أكلة للبشر تدعى بالعمالقة لأكثر من قرن من الزمان ، وليس أمام الناجين القلائل من البشرية خيار سوى التحصن في مدن مسورة بجدران شاهقة. إيرين ييغر مراهق يعيش في أحد هذه المدن المحصنة ، والذي شاهد والدته تُؤكل وهي حية من قبل عملاق بعد هجوم مفاجئ. إيرين الأن لديه حلم واحد فقط وهو الانضمام الى فيلق النخبة المسؤولة عن اكتشاف أصل العمالقة ، وإبادتهم حتى النهاية.',
    seasons: [
  {
    seasonNumber: 1,
    episodes: [
		{
            title: 'الحلقة 1',
            embed: 'https://mega.nz/embed/CFsmFKyA#62wzTCuM1ZlkUtAjF0Ls10Ec2zHpGEiBh6c9voKtXUM'
          },
{
            title: 'الحلقة 2',
            embed: 'https://mega.nz/embed/CFsmFKyA#62wzTCuM1ZlkUtAjF0Ls10Ec2zHpGEiBh6c9voKtXUM'
          },
		{
            title: 'الحلقة 3',
            embed: 'https://mega.nz/embed/3UkVDBwB#bvmzc9G4WD73PtnDMniWX3HCYzl54E1jcuL2qzL8wKk'
          },
		{
            title: 'الحلقة 4',
            embed: 'https://mega.nz/embed/rBkFGRTB#_aQ_TZG_ap438qRpeVodNXqKcS6lW8wkO04dPBhxncs'
          },
		{
            title: 'الحلقة 6',
            embed: 'https://mega.nz/embed/jYshnBCD#lf5i_sreHlLbAaCwjD4-yW9CG5kwfwlWL2wLS-8xWME'
          },
		{
            title: 'الحلقة 7',
            embed: 'https://mega.nz/embed/GElRHRgY#i7gNVKBL171VnDK5CpknbUkvxgCPrjzynN-naNWPrSA'
          },
		{
            title: 'الحلقة 8',
            embed: 'https://mega.nz/embed/qcsCGagL#vTmhgkPJ7gqOwPVV2NA00n2DIYRIgJo0-6sa5HKBwFA'
          },
		{
            title: 'الحلقة 10',
            embed: 'https://mega.nz/embed/bQ9CnYZB#14D2rj_qxqbAxqgXkYwVRxQQqyp_4237wJxjUqGhjfo'
          },
		{
            title: 'الحلقة 11',
            embed: 'https://mega.nz/embed/bVdE2BYC#WoocSSqtApBF5TFHggkFmUatN6dGw-LM-tBiX89EeA4'
          },
		{
            title: 'الحلقة 12',
            embed: 'https://mega.nz/embed/iYlVzAYS#A5_IEgpF8JipQJUfDyBw39pyg1HtpVacXCUT0Pgi1Ew'
          },
		{
            title: 'الحلقة 14',
            embed: 'https://mega.nz/embed/KQ9z3SYJ#DeLuoaM8CVULcUAGUjKEHODvU2OBLuCUuBzXJdbnBjs'
          },
		{
            title: 'الحلقة 15',
            embed: 'https://mega.nz/embed/PF800LxS#pS8UaCvDJa3WXPRW-bp7AfJUySNHlPsph6Q_wO6jYIg'
          },
		{
            title: 'الحلقة 16',
            embed: 'https://mega.nz/embed/rR11UC4B#ekyCtgxgUDURxZGSQ_Fuo20ATNN4QZ55GUcGd7593Bo'
          },
		{
            title: 'الحلقة 18',
            embed: 'https://mega.nz/embed/PZ0g1QxK#Let78XQAxz5GBEotTJmhsoyyc-noBUNx9d6nOR3ozzc'
          },
		{
            title: 'الحلقة 19',
            embed: 'https://mega.nz/embed/zEVhmDZR#gUW936u7uWCAkVTDV_vZxUWb0DYvIEBczsCAnS92FqU'
          },
		{
            title: 'الحلقة 20',
            embed: 'https://mega.nz/embed/zNVhDLDA#nA6alq1TiPln-kTlyTQ6mBRDpplYavQz4JDFju7aGZM'
          },
		{
            title: 'الحلقة 21',
            embed: 'https://mega.nz/embed/vB9whL5I#BAZna2CQCwO-gG39DE9oZfO8ifLTsFW6Q1343Jkb6TY'
          },
		{
            title: 'الحلقة 22',
            embed: 'https://mega.nz/embed/2IEVkagR#ZR4t_Ghio3OqOUeMVrEFVr8rGSzcGDZHg10FAJFLeQc'
          },
		{
            title: 'الحلقة 23',
            embed: 'https://mega.nz/embed/bF0ThKrS#pmnaxFA6W6kYT18IeOV33IUXe5QQHErrdNBAo7dVwd4'
          },
		{
            title: 'الحلقة 24',
            embed: 'https://mega.nz/embed/KZFD1Q6S#tIBlKp-pOaVKvGADLdZysADnlLQOM1engZKrkDmt-LU'
          },
		{
            title: 'الحلقة 25',
            embed: 'https://mega.nz/embed/yMUGnSxZ#guhaiXTXkcv2wt5J3PUNB25pH8ioYKScx8n8IXELOPE'

          },
    ]
  },
  {
    seasonNumber: 2,
    episodes: [
		{
            title: 'الحلقة 1',
            embed: 'https://mega.nz/embed/edtSjADC#sqf30MPHdWfMc0eBkG7OSkl6znzFeQaJlH5iO-osIyg'
          },
		{
            title: 'الحلقة 2',
            embed: 'https://mega.nz/embed/uIdk1AaB#AT26YM8Jv2xUtHZX4u9EKVVDOZXyxzEDDHjmrOPgqG0'
          },
		{
            title: 'الحلقة 3',
            embed: 'https://mega.nz/embed/2FMiHaYB#ysbRlLLyMxK-BXKpoaelMCcuBgGZLAt-hUFMisNabqI'
          },
		{
            title: 'الحلقة 4',
            embed: 'https://mega.nz/embed/XEN2ib7B#mJc4ceZ1slMl1KV1DsFfRlcvtPtc9gbK4ArEA_1tfnk'
          },
		{
            title: 'الحلقة 5',
            embed: 'https://mega.nz/embed/2IsHUCqZ#Vgt0lQy0qB2cc2KFAFT-JPwJ5WygsZq5NnENaAv1yoA'
          },
		{
            title: 'الحلقة 6',
            embed: 'https://mega.nz/embed/vEVg0ITQ#D9SSELBIN00EXGACEdIjHzm7vi708fo6aT_UMsVXr_E'
          },
		{
            title: 'الحلقة 7',
            embed: 'https://mega.nz/embed/3VlSET5K#xac9RKbVpj-F_zEvX3Uh42DwQP5HLNmf-A5Dhnki34U'
          },
		{
            title: 'الحلقة 8',
            embed: 'https://mega.nz/embed/jc0TDBgT#4pDiUphdPpuRqNormBK9FBMHnYomSTK6SjoTX9hC2mE'
          },
		{
            title: 'الحلقة 9',
            embed: 'https://mega.nz/embed/PBcVQAwS#k14XQ8T65M0SOwRWKAgzDXGBTjA7hA1kqN_jIQyJ0pg'
          },
		{
            title: 'الحلقة 10',
            embed: 'https://mega.nz/embed/KN1CGY7Y#nTUZCZq9dm4u7tYviuSxtmYBnfsFNIRwcJZ44UFX9Oo'
          },
		{
            title: 'الحلقة 11',
            embed: 'https://mega.nz/embed/iUsAiBwJ#QH0asc7d0azlksJtYveJJZBwEEr4KtU5jNdsCRDOnyk'
          },
          		{
            title: 'الحلقة 12',
            embed: 'https://mega.nz/embed/7UV0DQBJ#7AZMCgwIP7yw1KkmHx_FvxKtqrv_tyspwa-Rq-Fm9ck'
          },

    ]
  },
  {
    seasonNumber: 3,
    episodes: [
		{
            title: 'الحلقة 1',
            embed: 'https://mega.nz/embed/qBsmEC4I#MP2uUr8_wgCYbCryH6GYLYgsWvPdCGEW320jdLPGUQU'
          },
		{
            title: 'الحلقة 2',
            embed: 'https://mega.nz/embed/XZUgVLbK#AnXUwiAAgWONjWV5UD3s4PNqh-M5sgA6wUnsUUavEOc'
          },
		{
            title: 'الحلقة 3',
            embed: 'https://mega.nz/embed/iZljiRhQ#XLba9KL2Iyde_Zg33OM18CKpn2KHF3EvLEqNd7SkOQI'
          },
		{
            title: 'الحلقة 4',
            embed: 'https://mega.nz/embed/vFtWAbrD#mqGFP84tMIHhQw1SLYlm6nFzVe8kmX5MgP9kt8QDCHA'
          },
		{
            title: 'الحلقة 5',
            embed: 'https://mega.nz/embed/XRdm0Aza#zOpXcEh-RcAd0pcEZ7Of1UhcbTurWFpzEv_pEeHKIww'
          },
		{
            title: 'الحلقة 6',
            embed: 'https://mega.nz/embed/bJ8WDT6Z#GzN6v5vPdOOb7wpa21P1wZp6Xy0INY9tR89PMwmVYZo'
          },
		{
            title: 'الحلقة 7',
            embed: 'https://mega.nz/embed/uVtkFbBI#ZvQZN01NWfggk9bLlGna5aeuv0eai4lJc7Kz8ydirk0'
          },
		{
            title: 'الحلقة 8',
            embed: 'https://mega.nz/embed/3Nkh0Tpa#elmZnFMpArE_1w_FBGV4WWBoWyxzVi9ZO5HlDjcnWFw'
          },
		{
            title: 'الحلقة 9',
            embed: 'https://mega.nz/embed/CEtTjLIK#ZnbtHf1rYYRFbrjeTwtJyNFVWg2QH4qAI5T_U6QtI_0'
          },
		{
            title: 'الحلقة 10',
            embed: 'https://mega.nz/embed/nUlTyQqb#f3U7_AU_35VMbBsw9SdX7MxTUW5JWmhJU4KPPti56JE'
          },
		{
            title: 'الحلقة 11',
            embed: 'https://mega.nz/embed/TYEiTYSI#nNFwUbnIApUM-AyreMdJTqeco1Z4vAQX8tKmqmlY6_0'
          },
		{
            title: 'الحلقة 12',
            embed: 'https://mega.nz/embed/XB80Eb4J#wtrcy9QKelGwBr9QYVF5fp70JEwe0PXcSLRWV3r9cfE'
          },
		{
            title: 'الحلقة 13',
            embed: 'https://mega.nz/embed/t3UV1IzD#jNfRMpkk7s5J86H7Crtj7WOg0PpujdzNtc0K2QSfZWw'
          },
		{
            title: 'الحلقة 14',
            embed: 'https://mega.nz/embed/JndBWLSI#GVqHC-x3hRll_IjLXxzPl55T8lsxnXLfxHL3ndu7nQE'
          },
		{
            title: 'الحلقة 15',
            embed: 'https://mega.nz/embed/AzUEgQQK#FHFHG4eCiDFLWkDV9ICngO1Xv8xA0PedbUptRlhhSZw'
          },
		{
            title: 'الحلقة 16',
            embed: 'https://mega.nz/embed/IvlzGQ4Q#AvHKKdqQPboQskwW-JqfFeYOocVy6_X-qeLH-FyEba4'
          },
		{
            title: 'الحلقة 17',
            embed: 'https://mega.nz/embed/oq8iWJ5S#IehjBA80ZINefPwD6knvlWpifdt7dGU6HZrUdhzO0G8'
          },
		{
            title: 'الحلقة 18',
            embed: 'https://mega.nz/embed/Bu0QQIBa#mum2ZNdCHAo-VNL1vI-eU0aTAogaR-OyjKTStd9Ih0k'
          },
		{
            title: 'الحلقة 19',
            embed: 'https://mega.nz/embed/Bz9BnSTT#rLyHULj0CHdNfdRSNFP3AVX1TBy3v5gXjBxsqbO-9OM'
          },
		{
            title: 'الحلقة 20',
            embed: 'https://mega.nz/embed/8q8nCJCS#OC4buVhBJZMkzPRVH0oBM7iDFi58oAKCS-PtVkASPWE'
          },
		{
            title: 'الحلقة 21',
            embed: 'https://mega.nz/embed/hyE1ySDQ#8etCZR6HsAiKkIDamaMW12k0_-KjKGNmuydrSD9STu4'
          },
		{
            title: 'الحلقة 22',
            embed: 'https://mega.nz/embed/ErE20aRK#olNTztK6FWzqPXdSku7M1dplOZXq484lCmvO1VYjcro'
          },
    ]
  },
   {
    seasonNumber: 4,
    episodes: [
		{
            title: 'الحلقة 1',
            embed: 'https://mega.nz/embed/cjsC0KLZ#zoc2BArKYiJJs0QOjcubWjeQv2_auZHmtbWVDYHyugY'
          },
		{
            title: 'الحلقة 2',
            embed: 'https://mega.nz/embed/561nwLBI#thC2-mf7yC8r0LP-SoXJv7eSZIRmRLEFbH2_ZujxLpA'
          },
		{
            title: 'الحلقة 3',
            embed: 'https://mega.nz/embed/pv9GRKZK#P71dOpMTe-ZRmeiwfgSWLQ5SKddMhU33XXQaTIyDFoY'
          },
		{
            title: 'الحلقة 4',
            embed: 'https://mega.nz/embed/R3cURAKT#mEeP2zlp2hiDjuE-BKyXLuBIvZA6Ff7Vgl93FgYTc5M'
          },
		{
            title: 'الحلقة 5',
            embed: 'https://mega.nz/embed/M3tDjDTJ#d1YbClGd3fHz56eYKhEfXOydU9EGUalKMCZXZdK_14U'
          },
		{
            title: 'الحلقة 6',
            embed: 'https://mega.nz/embed/5jtzyL7Q#TK1Nv0xi72HUuZoHFXUojQ2Vuh6SJyGg_VzIW6OYwlo'
          },
		{
            title: 'الحلقة 7',
            embed: 'https://mega.nz/embed/FuUy3CRZ#_bCSbgaaJR2PTE4depUobfmqWaanTLsYwzLlMisUsIU'
          },
		{
            title: 'الحلقة 8',
            embed: 'https://mega.nz/embed/Z3chAa6C#gnNhM6Z2Ke-kDPej7Wj-7D_h3XjN0bCrbOPoGPi6cpw'
          },
		{
            title: 'الحلقة 9',
            embed: 'https://mega.nz/embed/02tWAaTA#IUC4Mnu3XIplNMiEnzJ-fpvjwF_bxk3t5XRcgzHGj2w'
          },
		{
            title: 'الحلقة 10',
            embed: 'https://mega.nz/embed/wyM2BQBC#KlOICmVsIociHvIQzTZBWZ3OJM8zJnqdS1nKZUNfW0w'
          },
		{
            title: 'الحلقة 11',
            embed: 'https://mega.nz/embed/hjFWDbLA#D3HJQYSEa2hyUXxnQI5VnR5lBrpW2qi5Wfj1x1UPWY8'
          },
		{
            title: 'الحلقة 12',
            embed: 'https://mega.nz/embed/IysjWQzR#_2pYy1Ony_OfS9P8q1YVEJAENtUUKerHbV_zX107hw4'
          },
		{
            title: 'الحلقة 13',
            embed: 'https://mega.nz/embed/l2kiTK7J#foI2nzcS0_Q5M8xhRjQHfwUM4a4SEVe1XjBPWNovo-Y'
          },
		{
            title: 'الحلقة 14',
            embed: 'https://mega.nz/embed/06d3nRjK#79LCmnWjVuRNFvDMROVsVTMJ80hvDYCjs_92jS3LsPo'
          },
		{
            title: 'الحلقة 15',
            embed: 'https://mega.nz/embed/hjFEnA7B#ofWYCz9mnJQ5mlQeUU53gkq69Nvshsg4nQtD01yJ4A4'
          },
		{
            title: 'الحلقة 16',
            embed: 'https://mega.nz/embed/8uVmyAAK#WE5QoPBCtms9hPYrc_XxYsqNLdG2PcugxMoPOsdFO4E'
          },
		{
            title: 'الحلقة 17',
            embed: 'https://mega.nz/embed/c2FjELjY#c5AYZz_plbqqmcnzlR_QxdDcrHsh26mxxkR8TvJefQY'
          },
		{
            title: 'الحلقة 18',
            embed: 'https://mega.nz/embed/MntXSIJZ#BRe3dY6irpQ0bu6Lc6mhTHDM-CZFC0GWgnQZFd1aeqE'
          },
		{
            title: 'الحلقة 19',
            embed: 'https://mega.nz/embed/0yFyHILK#GFiE_2tKaxvoogACZ8fq18xaCvLS0r0fwTemeDCaI90'
          },
		{
            title: 'الحلقة 20',
            embed: 'https://mega.nz/embed/Nr0AjBxC#dNqAcQ3S9Kl5VEld-tn7nWMtvPXvY44VsHBt-3V3kIM'
          },
		{
            title: 'الحلقة 21',
            embed: 'https://mega.nz/embed/02NB1CSQ#ieyRiwULmfGbL6Qf1JaWwX-9iGXTHPTW5UIUvgH7Q48'
          },
		{
            title: 'الحلقة 22',
            embed: 'https://mega.nz/embed/Myt1WKZJ#Ou91Kfck3pnAwSuzCUln6BThg6ezAje5YxWaYmM4L-I'
          },
		{
            title: 'الحلقة 23',
            embed: 'https://mega.nz/embed/9mFkiSya#Pv-iLOeJkCg8vMpVK6GdUo52-zsrvmHu8-EN_pL02ys'
          },
		{
            title: 'الحلقة 24',
            embed: 'https://mega.nz/embed/Ar0VkTZI#WpHoUH79ERaeDSvZL7GxhO3Xfro3AtKvI3HIGxPwUeI'
          },
		{
            title: 'الحلقة 25',
            embed: 'https://mega.nz/embed/0qFVnbQb#17ufnND9bKctVY_QR9hmBCE2uJJM8wB9Zdg1D6v9oBM'
          },
		{
            title: 'الحلقة 26',
            embed: 'https://mega.nz/embed/9yVkSaCa#vW8FQ1tgVXhEQs9Fvo9sxB37HwJXYr6as3I8n4Eo6zY'
          },
		{
            title: 'الحلقة 27',
            embed: 'https://flaswish.com/976671c1-a4de-424f-b6a8-fb958e94add5'
          },
		{
            title: 'الحلقة 28',
            embed: 'https://mega.nz/embed/960FybzB#Rer-qlWXdvsqwF75wazlclof_qGTFI5qsVJ2Q0ylL-w'
          },
    ]
  },
     {
    seasonNumber: 5,
    episodes: [
		{
            title: 'الحلقة 1',
            embed: 'https://mega.nz/embed/RqFxELKK#BgegUfzQ2v1U065O4jUO5Id34G-e0Rnhfmr4O3aa3Hk'
          },
		{
            title: 'الحلقة 2',
            embed: 'https://uqload.cx/embed-tgla83cu6t39.html'
          },    ]
  }
]
},
  {
    id: 'hunter-x-hunter',
    title: 'hunter-x-hunter',
    image: 'https://i.pinimg.com/736x/f6/68/a3/f668a3141dc9ccd4afb7e4545ca1cf6b.jpg',
    embed: 'https://www.youtube.com/embed/d6kBeJjTGnY?si=XDaErZvd4QMw-OGq',
    category: 'anime',
    releaseYear: 2011,
    status: 'on-hold', 
    seasonStatus: 'paused', 
    rating: 9, 
    genres: ['شونين', 'مغامرات', 'أكشن', 'فانتازيا'],
    description: 'انمي Hunter x Hunter (“القناص”) تدور أحداث القصة في عالم مميز حيث تتواجد منظمة خاصة للصيادين. تُعطى هؤلاء الصيادين رخصة تمنحهم امتيازات عديدة، مثل السفر مجاناً في الدرجات الأولى لوسائل النقل المختلفة والوصول إلى معلومات سرية، وحق الحصول على مبالغ مالية كبيرة من البنوك. وبسبب هذه الامتيازات، يتطلع العديد من الأشخاص إلى أن يصبحوا صيادين. لذا، يُجرى امتحان سنوي للاختيار من بين هؤلاء الأشخاص القلة الذين يستحقون حقًا أن يكونوا جزءًا من تلك المنظمة. بطل قصتنا هو غون فريكس، الذي يقرر المشاركة في الامتحان بهدف أن يصبح صيادًا ويعثر على والده المفقود. ومن أجل تحقيق هذا الهدف، يتوجب عليه تجاوز العديد من التحديات في طريقه ويقابل أصدقاءً رائعين، لكل منهم أسبابه الخاصة ليصبح صيادً',
    seasons: [
      {
        seasonNumber: 1,
        episodes: [
		
		{
            title: 'الحلقة 1',
            embed: 'https://mega.nz/embed/oio1nD6K#v9VWvA2T1S2Ys2oNHNTrnixJfyvsOaIqxvXXqFs4ESU'
          },
		{
            title: 'الحلقة 2',
            embed: 'https://mega.nz/embed/crZ13S5D#FC6A0FYIBbbc6ISXWXc_ECA-iMYm5fMGCWf8UJ7Ne-Q'
          },
		{
            title: 'الحلقة 3',
            embed: 'https://mega.nz/embed/FyJlnIqJ#4_nuJwXYQAldt36bQykkveAMyIco2wHEv5jwXkv00vc'
          },
		{
            title: 'الحلقة 4',
            embed: 'https://mega.nz/embed/ojJHkbKK#R4WRCOkWmWkDY3R96G8UlvX84WhsGYhGLMfp_E17Wvc'
          },
		{
            title: 'الحلقة 5',
            embed: 'https://mega.nz/embed/BqJAnLSD#2oxf-AhoKjvUo9fjSUxqbdH0nfyP_VHXIuXIm-qYLeM'
          },
		{
            title: 'الحلقة 6',
            embed: 'https://mega.nz/embed/U3ZVABaL#KgLsQ20Yg8SLIC0JhfcgcyDvA--gq7RDp8DPAIVrYks'
          },
		{
            title: 'الحلقة 7',
            embed: 'https://mega.nz/embed/tmIkHIJB#v2TiCXxAkOANGuneV1G7lKLT01ibosNcWvhUi8nLamY'
          },
		{
            title: 'الحلقة 8',
            embed: 'https://mega.nz/embed/M7BQFYBD#I_gS5xExkckl9cYHO6ad69bt1N0t3X-wJ8-msHmau3k'
          },
		{
            title: 'الحلقة 9',
            embed: 'https://mega.nz/embed/k3wRybQS#bBpfNx_FuyUNimvrXaBPvQFkcz4SSYJssYF51sJfmJA'
          },
		{
            title: 'الحلقة 10',
            embed: 'https://mega.nz/embed/crw2HSJQ#2sATibNINnURgnDU47gPwmlhWeWbLDA4AppH1QIJ_9s'
          },
		{
            title: 'الحلقة 11',
            embed: 'https://mega.nz/embed/ZiIwQA5Q#uwyjbTKW3YnaRUOLZ65v4v766toMx26PjSlLQrU8O3o'
          },
		{
            title: 'الحلقة 12',
            embed: 'https://mega.nz/embed/N3hzURTa#a4LmqBbw0nt-TOeJj9t6fVpR520G_FoEk8USCOZvmwU'
          },
		{
            title: 'الحلقة 13',
            embed: 'https://mega.nz/embed/MvJj3RLT#lygTYPSE1cp8drl1HGSzWW_pWKHyFqYaA2Gzvaftxhc'
          },
		{
            title: 'الحلقة 14',
            embed: ' https://mega.nz/embed/BmRDWBoB#PV4rjdApWBeYt7AVoa1kZYxWCotF8_Xi7Zsfgq4Lz48'
          },
		{
            title: 'الحلقة 15',
            embed: 'https://mega.nz/embed/RvAhlBZb#pZ0Tl_KTiTo5gr38BxPpswkj3iR24ZqvvxohWuWm-E4'
          },
		{
            title: 'الحلقة 16',
            embed: 'https://mega.nz/embed/lixTCLoA#49Z3bBkOeXw1OgkbLbVwZ5CkWDJiPLTd4qc6Jp0PHgI'
          },
		{
            title: 'الحلقة 17',
            embed: 'https://mega.nz/embed/82pWTThb#ABnfLuzQ8sDpe-m4GxwcX7A68fm-6j9UcsLKJxa9NM4'
          },
		{
            title: 'الحلقة 18',
            embed: 'https://mega.nz/embed/lr4BFZZB#hZl8J7YUiTh_5sIDWIwL-4sr8u2BV9vDFLpGt1GALIE'
          },
		{
            title: 'الحلقة 19',
            embed: 'https://mega.nz/embed/om4VnQQI#4wqh-fcY51MddVTht80WpBnsADEj_cocUSsHdFE7EaM'
          },
		{
            title: 'الحلقة 20',
            embed: 'https://mega.nz/embed/FzJWFRrS#C4IZehpp0_8bwFKqaoULd55ZxRrw0YajrXrNvpK5rfw'
          },
		{
            title: 'الحلقة 21',
            embed: 'https://mega.nz/embed/NzhB0TaB#aH9aA-mmUX1GF_ZavMIoLyYyF4MSQJO2VvBHTlOq1Ls'
          },
		{
            title: 'الحلقة 22',
            embed: 'https://mega.nz/embed/92JG3ZpY#WWh7M1DC1EDNhcLXKIAHl6i9VNwvLeGqYIeIzWqhI-c'
          },
		{
            title: 'الحلقة 23',
            embed: 'https://mega.nz/embed/I7g1XRCA#XKl67hyuzhjSNyodxeaAaI1cR39xauRJMmFYIOSZ3ZI'
          },
		{
            title: 'الحلقة 24',
            embed: 'https://mega.nz/embed/suBCUTZT#aymVfJM0Xyk6VkvnZkv9KPNNFp4-naDRbNFAsePVQsw'
          },
		{
            title: 'الحلقة 25',
            embed: 'https://mega.nz/embed/IqpX2AzD#ymWdsXzjRTlNgRI9q6p6zWyNPrymHRpBX-BHze-aNOY'
          },
		{
            title: 'الحلقة 26',
            embed: 'https://mega.nz/embed/h7oSHbBC#YR2S8ZaRNoICSWYbATufhTfr-AoWwNbiSPweYd0_n9w'
          },
		{
            title: 'الحلقة 27',
            embed: 'https://mega.nz/embed/t3IBCKqD#eQ9rjkKqs8kZf8wguqZeztx8RT2mXKIYYcNTY0R6qmI'
          },
		{
            title: 'الحلقة 28',
            embed: 'https://mega.nz/embed/VqxzHS5S#8ebG3LgyXaoAIQAtQT7z9MBcMq3qTAEbCEUfdkF3gjw'
          },
		{
            title: 'الحلقة 29',
            embed: 'https://mega.nz/embed/sioGFSaI#M3Tq_sgIHSss6basRGXzd4xABw-Q9ghOILuEZ6KsLp0'
          },
		{
            title: 'الحلقة 30',
            embed: 'https://mega.nz/embed/QvpjDLoA#lKoRW53VGqVOofs_b-8lkD7SLFhIk1T00-OpgNEaiBM'
          },
		{
            title: 'الحلقة 31',
            embed: 'https://mega.nz/embed/E2YzjQTA#YWh32ZCBUO10xD-00Y9CthnUjixrJQYRj6Ubjf4D_to'
          },
		{
            title: 'الحلقة 32',
            embed: 'https://mega.nz/embed/UqAkxYCL#MBcSAgeDYzNUtFqVEqEkjVPD7jfeJzz2_8uHYLTwvb8'
          },
		{
            title: 'الحلقة 33',
            embed: 'https://mega.nz/embed/AnxiQRTA#uVFqzqrIzAIPe8_WhFTEz5fqXFlyRHeyWPbMtPC87zg'
          },
		{
            title: 'الحلقة 34',
            embed: 'https://mega.nz/embed/VnxBFbAL#hlAqcvBuw3U3BoU6L08Jk3iCZkmwmPYjTH7FHKr5LOk'
          },
		{
            title: 'الحلقة 35',
            embed: 'https://mega.nz/embed/46gzkK5S#et_i2AenTp4EG41PTTNH0WMg4q8iieXOeIpIlEd-bOA'
          },
		{
            title: 'الحلقة 36',
            embed: 'https://mega.nz/embed/0uAlmZyL#AqGIROa0Pj0yW_zSPZOFtfWhdZaI9hWgsUPEjK2E7o8'
          },
		{
            title: 'الحلقة 37',
            embed: 'https://mega.nz/embed/RyBDUJ5Z#D2MLagt6kA_APlTcSU8VaCwBrxrIINJZeNCJjqlRTeo'
          },
		{
            title: 'الحلقة 38',
            embed: 'https://mega.nz/embed/AugDyR4S#nUN5ziwAG-wKLMZqtTf_IdX59GsMTsQ_ka9XnMAz9G0'
          },
		{
            title: 'الحلقة 39',
            embed: 'https://mega.nz/embed/syIhGSpC#3z6ax0i1HBvsTN_jHIwsM1RB1IJJW3d35mI_CpgCrxg'
          },
		{
            title: 'الحلقة 40',
            embed: 'https://mega.nz/embed/0qoVVa4L#-6hjJ_HHu14CflZqSuTjUoy3WT4eBvv2YIKML30R8qU'
          },
		{
            title: 'الحلقة 41',
            embed: 'https://mega.nz/embed/tnhnEKRI#OTWdtrhaa9wTgVd2q2qMFw6D_vzBTTBUAWOZdlc4_Os'
          },
		{
            title: 'الحلقة 42',
            embed: 'https://mega.nz/embed/QmITxBKZ#E44FAzOKwNX2F4htjFFU_4q4qKjJ3c0HhTyPD4f_jRA'
          },
		{
            title: 'الحلقة 43',
            embed: 'https://mega.nz/embed/NuQTjbBC#q7gvsF1PzQOIdaMZj6t_Rg4-M99DYy6CefDyzjM3yZI'
          },
		{
            title: 'الحلقة 44',
            embed: 'https://mega.nz/embed/hmhFXK6R#XIRF0BTtmXkxf1e263LHj5nibEu4PDaPVjt0ib2tfiI'
          },
		{
            title: 'الحلقة 45',
            embed: 'https://mega.nz/embed/Qv5mQARY#aiDzDxbBGE8w9Y3W78CW1U3xVvNft4UarHdWGdMdJ5M'
          },
		{
            title: 'الحلقة 46',
            embed: ' https://mega.nz/embed/9vwxWYAb#S2QOioSx9RU5GdCsG2HD3CAifcAnbNIJxwFnKu8yuEQ'
          },
		{
            title: 'الحلقة 47',
            embed: 'https://mega.nz/embed/k7hn1CyS#DO9pUUD5-Rk89DuewANIMQ5e6Bj4WBPwvJkZ1CYk73U'
          },
		{
            title: 'الحلقة 48',
            embed: 'https://mega.nz/embed/YqBFSIZb#Ho_4SXHpVE3LY3W_EkHw4ZKPCll2TbNFeSVFzJbe7Cc'
          },
		{
            title: 'الحلقة 49',
            embed: 'https://mega.nz/embed/NiAAETTS#wsZimgloE3jBHSZO55G6jBYFsC_WYZQZEoQ098SGFrw'
          },
		{
            title: 'الحلقة 50',
            embed: 'https://mega.nz/embed/cm5FnJKJ#kNux2-8isuKLZzpRCYHmcdDQKXd4dnHjKmu0VpKL2W8'
          },
		{
            title: 'الحلقة 51',
            embed: 'https://mega.nz/embed/orIyXZaS#1eTtyiFTrX_wvKsKnImxEiUGXMquqfsGTK22-6qCanE'
          },
		{
            title: 'الحلقة 52',
            embed: 'https://mega.nz/embed/o2IUUDbJ#-z0U-419CfqfRUZ2Ug6QsKA5U7e0HRl4lrughu3Qe1Y'
          },
		{
            title: 'الحلقة 53',
            embed: 'https://mega.nz/embed/RygUBIwC#gcWL3M8KIxG1HBlUW08oRdxY_JNH5bgvdXkqnGx_SPA'
          },
		{
            title: 'الحلقة 55',
            embed: 'https://mega.nz/embed/RqpijIwb#LVJYg-o3HYPlTJecspOCk3643fvsGXkoFVQWp3qtrsQ'
          },
		{
            title: 'الحلقة 56',
            embed: 'https://mega.nz/embed/h35TDYLB#GBMcj3eZZ7UJUPMQUUdLjNhDKHmN5netJrdiZOSVs8A'
          },
		{
            title: 'الحلقة 57',
            embed: 'https://mega.nz/embed/RzQCUCKY#d1k4yEfNxCALzofu2uDGzII0h3gGkyMfJT5MH1pDPbg'
          },
		{
            title: 'الحلقة 58',
            embed: 'https://mega.nz/embed/5iBHzayK#InD46F5sjtzC9qjNu-HLlUxnQ_fiEvEIuPdcUgd5qE0'
          },
		{
            title: 'الحلقة 59',
            embed: 'https://mega.nz/embed/I7hwQCCC#-pgnRE0D_Tx-_-KDdwPGFmJ3sA9VgupbEUbnTkBKIVc'
          },
		{
            title: 'الحلقة 60',
            embed: 'https://mega.nz/embed/duAhgAbQ#l14gYT6TTVzLpY87O3yvr6GhFu1KbfupvIihGVcHWAc'
          },
		{
            title: 'الحلقة 61',
            embed: 'https://mega.nz/embed/gvZFxSRJ#9-7tNOfnJGQ_eFWsmQ902Ot_Quz5Hu8MRnkU9JQA8lY'
          },
		{
            title: 'الحلقة 62',
            embed: 'https://mega.nz/embed/Yr4SyAhL#wc1V_kCF9evrs3YV4YjyujzM_TjIGCwGwkO03lNm_88'
          },
		{
            title: 'الحلقة 63',
            embed: 'https://mega.nz/embed/9q43ULAR#gLiO-2cKQgxaEXYv0tXEU9Vok5invHdnv3CGgipjO6U'
          },
		{
            title: 'الحلقة 64',
            embed: 'https://mega.nz/embed/lqATSDjb#BfOyQLDbj5z-VvuhT4taInnUI_gSlZomBBWmA2gJaxU'
          },
		{
            title: 'الحلقة 65',
            embed: 'https://mega.nz/embed/IyQkVCAY#XXXnbVYJQl1Aky6GFjOPYxtxNzuE8StEJamhQYMOw9w'
          },
		{
            title: 'الحلقة 66',
            embed: 'https://mega.nz/embed/s7wWnbjA#aq2d6hTHcYpe4t4toHf3sKVIrNAhzCF8ktGNc6GxVX4'
          },
		{
            title: 'الحلقة 69',
            embed: 'https://mega.nz/embed/QmYUGZyJ#_4Mp7AB7t8IFZf_QB3SsPMSxJX1VXdAYF3iNWWHGJYc'
          },
		{
            title: 'الحلقة 70',
            embed: 'https://mega.nz/embed/I3IWwKZa#YbxBdiChGDNgiz8rXonQ0XVytQmTyxKRrbVTdpqCUuI'
          },
		{
            title: 'الحلقة 71',
            embed: 'https://mega.nz/embed/VyxT0LJD#StO42VyBY_c2ZY417wGEW7xEoGazz-SpwIYzJ7BsJdU'
          },
		{
            title: 'الحلقة 72',
            embed: 'https://mega.nz/embed/93Z3DDJK#c8L8uvMw1c-Mp2j3OMdoH7AQNJqL0tePuqnlf_CJ1hc'
          },
		{
            title: 'الحلقة 73',
            embed: 'https://mega.nz/embed/hmgHhaRA#PWVK3smROBbFwlKaa8MwbtBF2XBr9L14rYH_H3DPodY'
          },
		{
            title: 'الحلقة 74',
            embed: 'https://mega.nz/embed/xqgXVA7J#0arDJUdd_uqMB8jMQ8a_vRvrHpDcWJQDT8OmWeU4gUQ'
          },
		{
            title: 'الحلقة 75',
            embed: ' https://mega.nz/embed/gyIEyLrR#8ieGHBG8q8KKcIFeQaDtXWaLdBzMZkTdHpApkoUhiiM'
          },
		{
            title: 'الحلقة 76',
            embed: 'https://mega.nz/embed/AjhjyRYD#dNCTXJDZ9Kffk94ry2MPoTpzK867vbSRBsHzV6XnPeE'
          },
		{
            title: 'الحلقة 77',
            embed: 'https://mega.nz/embed/h6gC2CIS#aTV05XA4dDrU4WPuIJUIf7aMrAcrsBvVfWYtiWGmHC8'
          },
		{
            title: 'الحلقة 78',
            embed: 'https://mega.nz/embed/5i5j2LiJ#QPmR7SMIB6WuyHbAI_O4dJ2zwEHm13vWEzX65UQx6oo'
          },
		{
            title: 'الحلقة 79',
            embed: 'https://mega.nz/embed/E7BkRRpA#glMyeALr17v_261deGdE8UIMt-E1NNLwuh3Dgoi7i0o'
          },
		{
            title: 'الحلقة 80',
            embed: 'https://mega.nz/embed/FyxlxZLJ#uIOTWFOdqA-hTR9CIAFtmR5NEG1qpPZkeFpRuAvZdZQ'
          },
		{
            title: 'الحلقة 81',
            embed: 'https://mega.nz/embed/My4DlBRQ#X1xkKgNQKNmDR3kKB5Od--n9oykqmtPd5RxJEUKXdOw'
          },
		{
            title: 'الحلقة 82',
            embed: 'https://mega.nz/embed/E3IUHQ7B#MXDBm0B5Udr0qlFQ7r3m5c4W1BpYbHvgSNq9eE0h48k'
          },
		{
            title: 'الحلقة 83',
            embed: 'https://mega.nz/embed/tmpGETba#YYTCmicA_lY5nS-3GjoFhY3CHKJTMnnzUNBsr4H67eQ'
          },
		{
            title: 'الحلقة 84',
            embed: 'https://mega.nz/embed/NqQ1WC4T#HS2RsJLq3PzK1EzUc0hG5MqPn177xo6vaqH7CX_H4IQ'
          },
		{
            title: 'الحلقة 85',
            embed: 'https://mega.nz/embed/cn5xhYKD#fR7cPHOT9gQkJTeGi3i_0tP8_eBU0Y7acRdxYRw_VIU'
          },
		{
            title: 'الحلقة 86',
            embed: 'https://mega.nz/embed/Nvx3UTZQ#QIxJ_pG1jBEJqBSjR-PPZYXdQ3F0rvF-8F-HH5bo_HA'
          },
		{
            title: 'الحلقة 87',
            embed: ' https://mega.nz/embed/piYVmCDT#bmUlLlLQCUXR2Jig2C0kvpziv8xDvazILmwhMAr7KJc'
          },
		{
            title: 'الحلقة 88',
            embed: 'https://mega.nz/embed/hromQDyI#VbdrNJ775c4V8O2QwbtfJLbe7PZ6d5iUqhKBM6MHSbk'
          },
		{
            title: 'الحلقة 89',
            embed: 'https://mega.nz/embed/huxCWTJK#AkBOHi7Uvaep4vXo_xSMBKkZJd2NR4yMRC2TSJQ2pdQ'
          },
		{
            title: 'الحلقة 90',
            embed: 'https://mega.nz/embed/5nYGRJZT#4khrhGE0pk7cMR_ouSy9HpJ7hipIecw534rqtebO9S4'
          },
		{
            title: 'الحلقة 91',
            embed: 'https://mega.nz/embed/QnQj0IDB#ACKflfrld5wBkB7n1LAbEtFAQ-zbvpZpHZYRq-VHP60'
          },
		{
            title: 'الحلقة 92',
            embed: 'https://mega.nz/embed/UmwhkYKZ#qlmRehlz6IbOcAwzWeBXxb9iG11qF9Hk38LtYC29Hc4'
          },
		{
            title: 'الحلقة 93',
            embed: 'https://mega.nz/embed/Az5HyAQa#gUS6PdND9rbQ2MrC6m2uNoIe9vRVM2D8XAyQp2B1s7k'
          },
		{
            title: 'الحلقة 94',
            embed: 'https://mega.nz/embed/xc1k3B6B#f3ygBnMEg75ynakt-eeNnhkYS4W5kgXXDXbyLBZyMro'
          },
		{
            title: 'الحلقة 95',
            embed: 'https://mega.nz/embed/tmZTVIQJ#AoBH-qTqA-T8lMxYyi-75SpJEW8aVE5dfXdLgaPm7f0'
          },
		{
            title: 'الحلقة 96',
            embed: 'https://mega.nz/embed/BddTwYzQ#xtwixQiayBOOuR7cZLjxOIFWu9hJZdN3fCVc_H3bhj4'
          },
		{
            title: 'الحلقة 97',
            embed: 'https://mega.nz/embed/JdsCVQJJ#TRlStDOqOaK8gG-ylr3Sy7h9nbUsEK2rph3KVrtLSnM'
          },
		{
            title: 'الحلقة 98',
            embed: 'https://mega.nz/embed/9ccRDIyB#0jfzwTqN3IzEm_Vmd3gSrADV8xpOKtTkzU8hR41-7cg'
          },
		{
            title: 'الحلقة 99',
            embed: 'https://mega.nz/embed/4Ud03ZRZ#2mzKLzeEx4ViKu_uVT7ZQA5DwggvbbGvRnM8LzXzM3c'
          },
		{
            title: 'الحلقة 100',
            embed: 'https://mega.nz/embed/oNlmnCxI#mgW3CSc4ySvRGCOpfGoz9NGrxSxR9c_QVVs3EUp86iU'
          },
		{
            title: 'الحلقة 101',
            embed: 'https://mega.nz/embed/QBlQmaBb#qkaoX0jfgoTOcmWaXOI9sTLqrPWBWhIZ4PT8K6VQY_w'
          },
		{
            title: 'الحلقة 102',
            embed: 'https://mega.nz/embed/QZlkiazS#8tqoHzHzHKDMGaOfc0vYok7Ir9dAEUlzmn-clObGVw8'
          },
		{
            title: 'الحلقة 103',
            embed: 'https://mega.nz/embed/hFVm0TAa#bYwWZB7Hd07fr9HQlCn2YtW2xgg9zRpUOECTh7aLLvk'
          },
		{
            title: 'الحلقة 104',
            embed: 'https://mega.nz/embed/QcUDyJ7B#9_9ScSy_fggDb_Z9oM2lHhlEQgznzpqHt0pmwXkoBXE'
          },
		{
            title: 'الحلقة 105',
            embed: 'https://mega.nz/embed/1BNXwRTR#sVs-ekMhKFJZr3Rt3YJ7UZXNsywOL-LTheGssFFQMNI'
          },
		{
            title: 'الحلقة 106',
            embed: 'https://mega.nz/embed/1JkkRRKY#u3vUMzHgfSOfZ102eppQGCZ9PmjQTVgqfL-b_F3nGZE'
          },
		{
            title: 'الحلقة 107',
            embed: 'https://mega.nz/embed/sYcxGTpJ#JqeKdCmRBtwFcQi8zmM-8NwbyeXP656wKIuqIXzBHK8'
          },
		{
            title: 'الحلقة 108',
            embed: 'https://mega.nz/embed/UAt11boY#gYSQOOIr2T8wmbu16Dd82aOpTekgMqUcJxVM6XgWzkQ'
          },
		{
            title: 'الحلقة 109',
            embed: 'https://mega.nz/embed/NBEVWC4Q#v9Oz9ExNL4hmLFhM9uFm0bZRaUobCdZUVsLULYLv1hM'
          },
		{
            title: 'الحلقة 110',
            embed: 'https://mega.nz/embed/VVEGSYLY#bzJMFXwpKtPYFeHcRqWw9G26ktBEFptlP7ZPNTMZEXg'
          },
		{
            title: 'الحلقة 111',
            embed: 'https://mega.nz/embed/EAkHVYjL#dyy-SfADbfPFoP9vC0RsrIKWIfaquLMCCsIucqyrys8'
          },
		{
            title: 'الحلقة 112',
            embed: 'https://mega.nz/embed/8cET1QQL#vlBs95QKplLBoWzILWa9tm_PC0luIbs9_x_baNL3Juc'
          },
		{
            title: 'الحلقة 113',
            embed: 'https://mega.nz/embed/gMESGaKb#jydvPIZWbq1tQYMWaZnPKlrMhtNtP-u3FYY1vf1sSF0'
          },
		{
            title: 'الحلقة 114',
            embed: 'https://mega.nz/embed/VZFiFBwJ#ZJ53KQG7p2Fnto2qTTlTvH91dvkftY4bga2PWfDlg70'
          },
		{
            title: 'الحلقة 115',
            embed: 'https://mega.nz/embed/dUMAxRCI#rskJ7UvtVNMrZBRLIYFdYGhGcID5UJQ0a3s25IZZdM0'
          },
		{
            title: 'الحلقة 116',
            embed: 'https://mega.nz/embed/lI1gUYAC#gBOQ3-C1FDm2BhqwupUkIBrjZTLM1rJxDF4nmrnvLCo'
          },
		{
            title: 'الحلقة 117',
            embed: 'https://mega.nz/embed/BdVD2BgR#nX8LcI2dEedbvbhr-eoyDMiHoWFYqJBtUxnFux4hyWs'
          },
		{
            title: 'الحلقة 118',
            embed: 'https://mega.nz/embed/tMdzwYLL#BamM5FC1SamdXnU14K3N4hRMsshh3NP2LkSNPVr-jBs'
          },
		{
            title: 'الحلقة 119',
            embed: 'https://mega.nz/embed/xYUGAbqB#LPKDWDJZFok_dF6oj673Sj_yB5L81K7dUevzKAmFLYw'
          },
		{
            title: 'الحلقة 120',
            embed: 'https://mega.nz/embed/hddhSLQK#e9LpSag2PpNhfIwIYQK2vFf6xLYGUah2VeD1wGkEmRU'
          },
		{
            title: 'الحلقة 121',
            embed: 'https://mega.nz/embed/1FlFBYbL#xWu0drEN7xvn-FSqR3xDPPjCc4XLylSerYwqDbb-rEE'
          },
		{
            title: 'الحلقة 122',
            embed: 'https://mega.nz/embed/xItxzC4a#BJbvMGPuoDKStb7fkydvHn7lqVJU_YOe8onQ9VGWvss'
          },
		{
            title: 'الحلقة 123',
            embed: 'https://mega.nz/embed/kNlwjQYC#l-3x6y4YCCTYB6ew8DHm83P4D4VWuC-IkDh6aNFQgrA'
          },
		{
            title: 'الحلقة 124',
            embed: 'https://mega.nz/embed/0R0R3Q6T#LP7sjAh9h4ifRsezJAb5GXp8ZIt0U_axMQylpsk2NjY'
          },
		{
            title: 'الحلقة 125',
            embed: 'https://mega.nz/embed/xVNn1Z5R#7slHuIkUaBaKB8jOOpLyU_Qv2hdV-OEsSJsgreVIwH4'
          },
		{
            title: 'الحلقة 126',
            embed: ' https://mega.nz/embed/lRFgAQxS#eMWBJJDr2-rIRx9XSmqpj6W5l4lMwnkAh8Q5wzJDIFA'
          },
		{
            title: 'الحلقة 127',
            embed: 'https://mega.nz/embed/5V8SiKAY#GAk-IkqwkCGVuD9sk0oivOtBaN_r-rgGKcJUKggLEcY'
          },
		{
            title: 'الحلقة 128',
            embed: 'https://mega.nz/embed/gVciEKDR#_cEspZrHCjmRw1INUc6HzLzlL7DWdOAVYPtV8oMBB-0'
          },
		{
            title: 'الحلقة 129',
            embed: 'https://mega.nz/embed/cRcDzDhB#s0pjUwt8y167KgsSkPsWnwJ4pjQsbVLeIFwp2kZ-D6w'
          },
		{
            title: 'الحلقة 130',
            embed: 'https://mega.nz/embed/RA0D3ZLZ#v-mTTV768c4uRy181M-Q2TBqY-44TJlt2DqeRzcd4XA'
          },
		{
            title: 'الحلقة 131',
            embed: 'https://mega.nz/embed/VUsHAShS#FWJaceWY_3Mvlw2h_sgITzF3Q0Sm0CBuvbMyyQ5BhWQ'
          },
		{
            title: 'الحلقة 132',
            embed: 'https://mega.nz/embed/oM0mVIYZ#gpVnugFB8m4G2K2iC_D5NJ8RqCxVbIMfr1jiEbTxw44'
          },
		{
            title: 'الحلقة 133',
            embed: 'https://mega.nz/embed/NMl13Q6a#qLfIjJRDimYQwagApCbmti7fm9JlMF-WQtGTuUDCmG0'
          },
		{
            title: 'الحلقة 134',
            embed: 'https://mega.nz/embed/pFkxEIhI#cioBJubs03Xym139IZfEbkEigo1a8kb_SCApDF36u74'
          },
		{
            title: 'الحلقة 135',
            embed: 'https://mega.nz/embed/Vc1WBDKb#VXUTTSupPPDlk0IttKYdw5GGSwLKV3wl5MlAZGJ7X8o'
          },
		{
            title: 'الحلقة 136',
            embed: 'https://mega.nz/embed/sNkyQKAa#guz8xyt3Yl514wYx5dsw25-b6XzR8IuG6TLnk5Vc_Sk'
          },
		{
            title: 'الحلقة 137',
            embed: 'https://mega.nz/embed/IJ0hAC7B#t2pfvZDArbKA4LIl8FK4W_F-6GsAPrBgIX7PWW66Wqs'
          },
		{
            title: 'الحلقة 138',
            embed: 'https://mega.nz/embed/oIUA0ZAC#_LFytdq1Qd44ibYbXyuA9jh1GPj7AsyTRM6cZjMYa50'
          },
		{
            title: 'الحلقة 139',
            embed: 'https://mega.nz/embed/8JEnjTKD#vSG3Dh1Tv9l9n6cCruGzJ-VKYIyyeFk6J-726FA-cwE'
          },
		{
            title: 'الحلقة 140',
            embed: 'https://mega.nz/embed/ZRtAXK7S#nWmzL2emlYZ7_rnLkvwISpXco9_BZPFhaQQ1zw58Q4A'
          },
		{
            title: 'الحلقة 141',
            embed: 'https://mega.nz/embed/4NVCgApb#86VzhlapQLynNrHTuhD8StvLK5YweJn_5A_p1Z3Asr8'
          },
		{
            title: 'الحلقة 142',
            embed: 'https://mega.nz/embed/ZNERRCJR#0XLEfi6J8L6q7T98nSk_rw4zojonI8p2kMvlTYCs6P0'
          },
		{
            title: 'الحلقة 143',
            embed: 'https://mega.nz/embed/UAdnEZBJ#ilbAZyjd76Ol2vg45mfaRyc3DRv602Pj2gwypMAn7TQ'
          },
		{
            title: 'الحلقة 144',
            embed: 'https://mega.nz/embed/dEkmhDIb#NraLhr4DBjQKIbZZtNzWTSVtN6E-TNf6Qi4luhZJ3f4'
          },
		{
            title: 'الحلقة 145',
            embed: 'https://mega.nz/embed/1c0GiDxY#g0kX4WyNEeVvlEl16F6sOqOWyriUqlJ0TAKYF7PZ-ag'
          },
		{
            title: 'الحلقة 146',
            embed: 'https://mega.nz/embed/ZE1A3QbR#te5fO9yTisRF33rAOHOQ0XT65AHZ9yJ627xreOUcqbI'
          },
		{
            title: 'الحلقة 148',
            embed: 'https://mega.nz/embed/0U1GhBKb#PH4jTKkNtgHziRURhknduH7rejESYLkbSHwM5ZywxQg'
          },


        ]
      }
    ]
  },
  
];
