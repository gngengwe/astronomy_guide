import PageHeader from '../components/PageHeader'

const FAQS = [
  {
    q: 'Do I need a telescope to enjoy astronomy?',
    a: "No. There is a great deal to see with the naked eye or binoculars. In fact, binoculars are often the best first observing instrument, because they're wide-field, portable, and forgiving while you learn the sky.",
  },
  {
    q: 'Why do stars drift across the sky?',
    a: 'Because Earth rotates. The stars are not racing around us; our viewpoint is turning. The celestial sphere model is the standard beginner way to understand this.',
  },
  {
    q: 'Why do planets look like bright stars?',
    a: 'To unaided eyes they often do, but they usually twinkle less and stay near the ecliptic. A sky app or a monthly sky guide is the easiest way to confirm them.',
  },
  {
    q: "Why doesn't my telescope show Hubble-like colors?",
    a: 'Because visual observing and long-exposure imaging are different experiences. Your eye is not integrating light the way a camera sensor and stacking software do, and many deep-sky objects are faint enough that visual views are subtle rather than vividly colored. Space telescopes also observe above the atmosphere and with extremely specialized instruments.',
  },
  {
    q: 'Is higher magnification always better?',
    a: 'No. Magnification is commonly overemphasized in novice advertising and buying decisions. Too much magnification often makes images dimmer, shakier, and blurrier. Aperture, atmospheric steadiness, and mount stability matter just as much or more.',
  },
  {
    q: 'Can one telescope be perfect for both visual use and astrophotography?',
    a: 'Usually no. There is overlap, but visual astronomy and deep-sky imaging reward different priorities. The "one perfect do-everything setup" is more myth than standard beginner reality.',
  },
  {
    q: 'What should I photograph first?',
    a: "The Moon. It's bright, easy to locate, and achievable even with a smartphone. It teaches focus, exposure, and steadiness without the complexity of faint-object imaging.",
  },
  {
    q: 'Is it safe to photograph the Sun with eclipse glasses or ordinary filters?',
    a: 'No. Visual eclipse glasses are not the same as proper front-mounted solar filters for cameras, binoculars, or telescopes. Improper solar viewing can permanently damage vision and equipment.',
  },
]

export default function Faq() {
  return (
    <div className="content">
      <PageHeader
        eyebrow="Part five"
        title="FAQ & Next Steps"
        subtitle="Common beginner questions, and a sequential path into intermediate-level astronomy."
      />

      <h2>Frequently asked questions</h2>
      <div className="space-y-6 mb-8">
        {FAQS.map(({ q, a }) => (
          <div key={q}>
            <h3 className="!mt-0 !mb-2">{q}</h3>
            <p>{a}</p>
          </div>
        ))}
      </div>

      <h2>Next steps for growing into an intermediate hobbyist</h2>
      <p>
        Once you finish the beginner path, the best next steps are not random
        upgrades — they're sequential.
      </p>
      <p>
        <strong>First</strong>, join an astronomy club or visit a
        planetarium/observatory so you can try equipment before buying more. The
        Astronomical League and Sky &amp; Telescope both maintain club directories,
        and Griffith Observatory and the Royal Observatory Greenwich both offer strong
        public educational resources.
      </p>
      <p>
        <strong>Second</strong>, begin a structured observing program. Good
        intermediate bridges include the Astronomical League's Messier Observing
        Program, binocular observing programs, and AAVSO beginner observing resources
        if you become interested in variable stars and citizen science. These are
        especially useful because they turn "looking up" into a repeatable
        skill-building practice.
      </p>
      <p>
        <strong>Third</strong>, separate your visual path from your imaging path. If
        your heart belongs to visual observing, a larger Dobsonian may be the most
        satisfying upgrade. If your heart belongs to astrophotography, the next
        serious step is usually a tracker-based camera rig or a small refractor on a
        tracking mount, not a giant all-purpose telescope.
      </p>
      <p>
        <strong>Fourth</strong>, keep learning the sky in all seasons. Monthly sky
        guides from NASA, Griffith Observatory, and the Royal Observatory Greenwich
        are ideal for that, and printable monthly charts from SkyMaps remain one of
        the most useful low-tech habits you can build.
      </p>

      <h2>Open questions and limitations</h2>
      <p>
        A few recommendations in this guide are intentionally broad rather than
        model-specific, on purpose. App features, hardware bundles, and prices change
        frequently, and the most trustworthy beginner advice from observatories and
        astronomy organizations is to match equipment to your actual observing style
        rather than chase the newest branded setup.
      </p>
      <blockquote>
        <p>
          When in doubt, use this decision order:{' '}
          <strong>learn the sky, borrow or try equipment, buy simple, upgrade
          slowly</strong>.
        </p>
      </blockquote>
    </div>
  )
}
