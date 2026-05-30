import { products, statusLabels } from '../data/products.js'
import { orderLink } from '../data/site.js'
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
            Каждая вещь — в единственном экземпляре. Нажмите на фото, чтобы
            открыть пост в Instagram, или напишите мне в Telegram, чтобы заказать.
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
                <a
                  className="product-card__media"
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} — открыть в Instagram`}
                >
                  <SmartImage src={p.image} alt={p.name} tone={p.tone} />
                  <span className={`badge badge--${p.status}`}>
                    {statusLabels[p.status]}
                  </span>
                  <span className="product-card__ig" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18">
                      <path
                        fill="currentColor"
                        d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.52.01-4.76.07-1.15.05-1.77.24-2.19.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.42-.35 1.04-.4 2.19-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.15.24 1.77.4 2.19.22.55.47.94.88 1.35.41.41.8.66 1.35.88.42.16 1.04.35 2.19.4 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.15-.05 1.77-.24 2.19-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.42.35-1.04.4-2.19.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.15-.24-1.77-.4-2.19a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.42-.16-1.04-.35-2.19-.4-1.24-.06-1.61-.07-4.76-.07Zm0 2.76a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Zm0 1.62a3.68 3.68 0 1 0 0 7.36 3.68 3.68 0 0 0 0-7.36Zm5.5-2.9a1.24 1.24 0 1 1 0 2.48 1.24 1.24 0 0 1 0-2.48Z"
                      />
                    </svg>
                  </span>
                </a>
                <div className="product-card__body">
                  <h3 className="product-card__name">{p.name}</h3>
                  <p className="product-card__desc">{p.description}</p>
                  <div className="product-card__foot">
                    <span
                      className={`product-card__price ${
                        p.price ? '' : 'product-card__price--ask'
                      }`}
                    >
                      {p.price ? priceFmt.format(p.price) : 'Цена по запросу'}
                    </span>
                    <a
                      className="product-card__btn"
                      href={orderLink}
                      target="_blank"
                      rel="noopener noreferrer"
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
