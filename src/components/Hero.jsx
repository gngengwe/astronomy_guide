export default function Hero({ image, eyebrow, title, subtitle }) {
  return (
    <div className="hero-banner">
      <img
        key={image.src}
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        loading="eager"
        decoding="async"
        className="hero-banner-img"
      />
      <div className="hero-banner-scrim" aria-hidden="true" />
      <div className="hero-banner-text">
        {eyebrow && <p className="hero-eyebrow">{eyebrow}</p>}
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
      </div>
      {image.credit && (
        <p className="hero-credit">
          Credit: {image.credit}
          {image.source ? ` — ${image.source}` : ''}
        </p>
      )}
    </div>
  )
}
