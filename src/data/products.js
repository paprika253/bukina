// Каталог товаров.
// Поля: id, name, description, price (в рублях), image, tone (цвет-заглушка),
// status ('in_stock' | 'made_to_order' | 'sold').
// Чтобы добавить товар — скопируйте объект и положите фото в /public/images/products/.

export const products = [
  {
    id: 'mug-morning',
    name: 'Чашка «Утро»',
    description: 'Чашка для кофе с матовой молочной глазурью и каплей терракоты по краю. 300 мл.',
    price: 2200,
    image: '/images/products/mug-morning.jpg',
    tone: '#e7d8c4',
    status: 'in_stock',
  },
  {
    id: 'bowl-sand',
    name: 'Пиала «Песок»',
    description: 'Глубокая пиала ручной лепки для салатов и завтраков. Тёплый песочный тон, 500 мл.',
    price: 2600,
    image: '/images/products/bowl-sand.jpg',
    tone: '#d8c3a5',
    status: 'in_stock',
  },
  {
    id: 'vase-dune',
    name: 'Ваза «Дюна»',
    description: 'Высокая ваза с рельефной фактурой. Подходит для сухоцветов и одиночных веток.',
    price: 4800,
    image: '/images/products/vase-dune.jpg',
    tone: '#c9a98a',
    status: 'made_to_order',
  },
  {
    id: 'plate-clay',
    name: 'Тарелка «Глина»',
    description: 'Обеденная тарелка Ø22 см с открытым краем без глазури — виден натуральный цвет глины.',
    price: 2900,
    image: '/images/products/plate-clay.jpg',
    tone: '#b5895f',
    status: 'in_stock',
  },
  {
    id: 'cup-pair',
    name: 'Пара «Вдвоём»',
    description: 'Набор из двух чашек на 200 мл с глазурью оттенка сливочной карамели. Идея для подарка.',
    price: 3900,
    image: '/images/products/cup-pair.jpg',
    tone: '#ddc6ad',
    status: 'in_stock',
  },
  {
    id: 'incense-stone',
    name: 'Подставка «Камень»',
    description: 'Керамическая подставка для благовоний с лужицей-глазурью глубокого зелёного.',
    price: 1500,
    image: '/images/products/incense-stone.jpg',
    tone: '#9aa583',
    status: 'sold',
  },
]

export const statusLabels = {
  in_stock: 'В наличии',
  made_to_order: 'Под заказ',
  sold: 'Продано',
}
