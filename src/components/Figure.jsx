export default function Figure({ image, caption }) {
  return (
    <div className="figure">
      <img
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        loading="lazy"
        decoding="async"
      />
      <p className="figure-caption">
        {caption}
        <span className="figure-credit">
          {' '}
          — Credit: {image.credit}
          {image.source ? `, ${image.source}` : ''}
        </span>
      </p>
    </div>
  )
}
