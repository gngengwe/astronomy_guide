export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="text-gold-400 text-sm font-semibold tracking-wide uppercase mb-2">
          {eyebrow}
        </p>
      )}
      <h1 className="font-display text-star-300 text-3xl sm:text-4xl leading-tight mb-3">
        {title}
      </h1>
      {subtitle && <p className="text-mist-400 text-base leading-relaxed max-w-2xl">{subtitle}</p>}
    </div>
  )
}
