'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        id: 1,
        gender: 'M',
        category_id: 101,
        name: '男裝素色圓領短袖T恤',
        desc: '使用有機棉製成，舒適棉質，親膚透氣。領口設計經過精心熟慮的思考，製成舒適耐用的t恤。素色基本款實穿百搭，搭配不出錯。',
        material: '100%棉',
        washing: '最高水洗溫度攝氏三十度溫和洗程序。不可漂白，不可翻滾烘乾。不可以專業乾洗，不可浸泡。',
        sold: 87,
        price_standard: 299,
        price_sale: 199,
        is_on: 1,
        is_sale: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        gender: 'F',
        category_id: 106,
        name: '女裝長版翻領風衣外套',
        desc: '長版俐落的風衣版型，襯托個人氣勢與時髦品味。採用經典色系、高雅的經典款式，是衣櫃的必備單品。不論日常活動、休閒聚會、逛街約會、微正式場合都好搭配！',
        material: '67％棉, 33％聚酯纖維',
        washing: '不可水洗。用四氯乙烯及所有編列於(F)字樣所使用溶劑的專業乾洗，並採標準乾洗程序。',
        sold: 12,
        price_standard: 5990,
        price_sale: 3990,
        is_on: 1,
        is_sale: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        gender: 'F',
        category_id: 106,
        name: '女裝雙排扣格紋西裝外套',
        desc: '採用親膚面料搭配質感的純色調，襯柔滑舒適內裡，給予自在好感穿著體驗。俐落的西裝領營造知性氣息，雙排釦點綴展現細節品味設計，滑順的面料搭配俐落的剪裁展現魅力風格！',
        material: '面料: 65%聚酯纖維, 33%嫘縈, 2%彈性纖維; 襯裡: 100%聚酯纖維',
        washing: '不可水洗。用四氯乙烯及所有編列於(F)字樣所使用溶劑的專業乾洗，並採標準乾洗程序。',
        sold: 19,
        price_standard: 1490,
        price_sale: 1190,
        is_on: 1,
        is_sale: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        gender: 'M',
        category_id: 104,
        name: '男裝圓領針織衫',
        desc: '特殊刷毛加工，穿起來不刺癢且輕盈舒適。採用溫暖且蓬鬆的壓克力、羊毛、尼龍混紡材質，加上刷毛加工，更柔軟不刺癢，且十分輕盈。無縫設計，穿脫輕鬆。',
        material: '61％聚丙烯腈纖維, 30％聚醯胺纖維, 9％羊毛',
        washing: '最高水洗溫度攝氏四十度溫和洗程序。不可漂白，不可翻滾烘乾。不可以專業乾洗，不可浸泡。',
        sold: 32,
        price_standard: 990,
        price_sale: 790,
        is_on: 1,
        is_sale: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        gender: 'M',
        category_id: 201,
        name: '男裝 SLIM FIT 刷破牛仔褲',
        desc: '採用舒適彈力布料，使活動更輕鬆自在。褲管不對稱刷破設計，展現率性時尚感。膝部位置較高，藉由延伸至下擺的筆直線條，打造俐落修長腿部線條。個性水洗牛仔布，凸顯男性休閒風格。',
        material: '98％棉, 2％彈性纖維',
        washing: '最高水洗溫度攝氏四十度溫和洗程序。不可漂白，不可翻滾烘乾。不可以專業乾洗，不可浸泡。',
        sold: 20,
        price_standard: 1290,
        price_sale: 990,
        is_on: 1,
        is_sale: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        gender: 'F',
        category_id: 301,
        name: '女裝蝴蝶結綁帶西裝短裙',
        desc: '選用高含棉量的面料，輕柔飄逸，穿著舒適透氣。濃郁的質感色調帶出唯美的氛圍，腰圍後鬆緊設計更貼合腰身曲線，具有良好彈性的滑面褲型內裡，走動不怕曝光更安心。',
        material: '主布: 100%棉 (無彈性), 配布: 100%聚酯纖維 (有彈性)',
        washing: '最高水洗溫度攝氏三十度溫和洗程序。不可漂白，不可翻滾烘乾。不可以專業乾洗，不可浸泡。',
        sold: 22,
        price_standard: 569,
        price_sale: 469,
        is_on: 1,
        is_sale: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        gender: 'F',
        category_id: 401,
        name: '女裝綾織棉質漁夫帽',
        desc: '選用具良好膚觸的微刷毛素材製成，具秋季氣息的漁夫帽。帽沿輕微傾斜，營造不過於休閒的清新氛圍。除去多餘部分的精緻設計，可輕鬆搭配各種穿搭風格。',
        material: '面料: 100%棉; 襯裡: 80%聚酯纖維, 20%棉',
        washing: '方法一: 以手洗滌，水溫最高不應超過攝氏四十度。方法二: 用四氯乙烯及所有編列於(F)字樣所使用溶劑的專業乾洗，並採標準乾洗程序。',
        sold: 13,
        price_standard: 790,
        price_sale: 590,
        is_on: 1,
        is_sale: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};