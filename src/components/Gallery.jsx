export default function Gallery({ items }) {
  return (
    <div className="gallery">
      {items.map((item) => (
        <figure key={item.label} className="gallery-item">
          <img
            src={item.src}
            width={item.width}
            height={item.height}
            alt={item.alt}
            loading="lazy"
            decoding="async"
          />
          <figcaption>{item.label}</figcaption>
        </figure>
      ))}
    </div>
  )
}
