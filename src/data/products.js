// Каталог работ. Описания, материалы и цены — по подписям из профиля
// instagram.com/liza.bukina. price: число (₽) или null, если «под заказ».
// status: 'in_stock' | 'made_to_order' | 'sold'.

export const products = [
  {
    id: 'vase-silver',
    name: 'Ваза «Серебро»',
    description:
      'Ваза, оплетённая жгутами глины с металлической глазурью, и эмалевые цветы. Керамика, глазурь, стекло. Высота 20 см.',
    price: null,
    image: '/images/products/vase-silver.jpg',
    tone: '#b9b2a6',
    status: 'made_to_order',
  },
  {
    id: 'vase-night',
    name: 'Ваза «Ночь»',
    description:
      'Та же форма в чёрно-графитовой глазури с синими цветами. Керамика, глазурь, стекло. Высота 20 см.',
    price: null,
    image: '/images/products/vase-night.jpg',
    tone: '#5a5560',
    status: 'made_to_order',
  },
  {
    id: 'candle-flowers',
    name: 'Подсвечники «Цветы»',
    description:
      'Подсвечники в форме цветка со спёкшимся цветным стеклом в лепестках. Каждый — в единственном экземпляре. Глина, глазурь, стекло.',
    price: null,
    image: '/images/products/candle-flowers.jpg',
    tone: '#cdb89a',
    status: 'made_to_order',
  },
  {
    id: 'lamp',
    name: 'Светильник «Свет»',
    description:
      'Скульптурный светильник: керамическое основание и плафон из литого стекла. Совместный проект с @_hani_light_. Белое или розовое стекло на выбор.',
    price: null,
    image: '/images/products/lamp.jpg',
    tone: '#8f7e84',
    status: 'in_stock',
  },
  {
    id: 'plates',
    name: 'Тарелки «Про себя»',
    description:
      'Тарелки с авторским рисунком в технике деколь — «люблю покушать и поспать». Не для СВЧ и посудомойки.',
    price: 3000,
    image: '/images/products/plates.jpg',
    tone: '#d8d2c6',
    status: 'in_stock',
  },
  {
    id: 'candle-casanier',
    name: 'Подсвечник (серия ST.CASANIER)',
    description:
      'Подсвечник из серии, сделанной для бренда ST.CASANIER. Ручная лепка, авторская форма. Возможен повтор под заказ.',
    price: null,
    image: '/images/products/candle-casanier.jpg',
    tone: '#9a8a76',
    status: 'made_to_order',
  },
]

export const statusLabels = {
  in_stock: 'В наличии',
  made_to_order: 'Под заказ',
  sold: 'Продано',
}
