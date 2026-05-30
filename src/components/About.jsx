import { about } from '../data/site.js'
import SmartImage from './SmartImage.jsx'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__media">
          <SmartImage
            src={about.photo}
            alt="Портрет мастера"
            tone="#c9a98a"
            className="about__photo"
          />
          <div className="about__facts">
            {about.facts.map((f) => (
              <div className="about__fact" key={f.label}>
                <strong>{f.value}</strong>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about__text">
          <p className="section__eyebrow">{about.heading}</p>
          <h2 className="section__title">Привет, я делаю керамику</h2>
          <p className="about__intro">{about.intro}</p>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="about__p">
              {p}
            </p>
          ))}

          <ul className="about__skills">
            {about.skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
