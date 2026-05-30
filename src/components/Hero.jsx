import { site } from '../data/site.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__blob hero__blob--1" />
        <span className="hero__blob hero__blob--2" />
      </div>

      <div className="container hero__inner">
        <p className="hero__eyebrow">{site.role}</p>
        <h1 className="hero__title">
          Керамика,<br />
          <em>сделанная руками</em>
        </h1>
        <p className="hero__lead">{site.tagline}</p>

        <div className="hero__actions">
          <a href="#products" className="btn btn--primary">
            Смотреть товары
          </a>
          <a href="#gallery" className="btn btn--ghost">
            В галерею
          </a>
        </div>

        <a href="#about" className="hero__scroll" aria-label="Листать вниз">
          <span />
        </a>
      </div>
    </section>
  )
}
