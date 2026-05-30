import { site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__name">{site.name}</p>
          <p className="footer__role">{site.role}</p>
        </div>

        <div className="footer__contacts">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer">
            Instagram {site.instagramHandle}
          </a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span className="footer__city">{site.city}</span>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {new Date().getFullYear()} {site.name}. Изделия ручной работы.
        </span>
      </div>
    </footer>
  )
}
