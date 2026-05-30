import { products, statusLabels } from '../data/products.js'
import { site } from '../data/site.js'
import SmartImage from './SmartImage.jsx'

const priceFmt = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  maximumFractionDigits: 0,
})

export default function Products() {
  return (
    <section className="section products" id="products">
      <div className="container">
        <header className="section__head">
          <p className="section__eyebrow">Товары</p>
          <h2 className="section__title">Изделия в наличии и под заказ</h2>
          <p className="section__sub">
            Каждая вещь — в единственном экземпляре. Чтобы оформить заказ,
            напишите мне в Instagram или на почту.
          </p>
        </header>

        <div className="product-grid">
          {products.map((p) => {
            const sold = p.status === 'sold'
            return (
              <article
                className={`product-card ${sold ? 'is-sold' : ''}`}
                key={p.id}
              >
                <div className="product-card__media">
                  <SmartImage src={p.image} alt={p.name} tone={p.tone} />
                  <span className={`badge badge--${p.status}`}>
                    {statusLabels[p.status]}
                  </span>
                </div>
                <div className="product-card__body">
                  <h3 className="product-card__name">{p.name}</h3>
                  <p className="product-card__desc">{p.description}</p>
                  <div className="product-card__foot">
                    <span className="product-card__price">
                      {priceFmt.format(p.price)}
                    </span>
                    <a
                      className="product-card__btn"
                      href={`mailto:${site.email}?subject=${encodeURIComponent(
                        'Заказ: ' + p.name,
                      )}`}
                      aria-disabled={sold}
                      onClick={(e) => sold && e.preventDefault()}
                    >
                      {sold ? 'Продано' : 'Заказать'}
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
