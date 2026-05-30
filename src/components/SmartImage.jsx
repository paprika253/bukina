import { useState } from 'react'

// Изображение с изящной заглушкой-фолбэком.
// Пока в /public/images/ нет реального файла (или он не загрузился),
// показывается мягкий керамический градиент с иконкой и подписью.
// Как только вы положите фото по нужному пути — оно подхватится само.

function Placeholder({ tone = '#d8c3a5', label }) {
  return (
    <div className="ph" style={{ '--ph-tone': tone }}>
      <svg className="ph__icon" viewBox="0 0 48 48" aria-hidden="true">
        <path
          d="M17 8h14c0 5-3 6.5-3 11s5 6.5 5 13c0 5.2-4.4 8.5-9 8.5s-9-3.3-9-8.5c0-6.5 5-8.5 5-13S17 13 17 8z"
          fill="currentColor"
          opacity="0.55"
        />
      </svg>
      {label && <span className="ph__label">{label}</span>}
    </div>
  )
}

export default function SmartImage({ src, alt, tone, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <div className={`smart-img ${className}`}>
        <Placeholder tone={tone} label={alt} />
      </div>
    )
  }

  return (
    <div className={`smart-img ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  )
}
