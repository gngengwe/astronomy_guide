import Hero from '../components/Hero'
import { IMAGES } from '../data/images'

const GLOSSARY = [
  ['Altitude', 'How high an object is above the horizon.'],
  ['Azimuth', 'Direction around the horizon, usually measured clockwise from north.'],
  ['Celestial sphere', 'An imaginary giant sphere around Earth used to map the sky.'],
  ['Right ascension', "The sky's version of longitude."],
  ['Declination', "The sky's version of latitude."],
  ['Aperture', "Diameter of the telescope's main light-gathering lens or mirror."],
  ['Focal length', 'Distance over which the telescope or lens forms its image; influences magnification and field.'],
  ['Magnification', 'How much larger an image appears; determined by telescope and eyepiece combination.'],
  ['Field of view', 'How much sky you can see at one time.'],
  ['Exit pupil', 'Diameter of the light beam leaving the eyepiece.'],
  ['Dobsonian', 'A Newtonian reflector on a simple, low-cost alt-az mount.'],
  ['GoTo', 'A mount system that can automatically find and track objects after alignment.'],
  ['Collimation', 'Alignment of mirrors or optics, especially important in reflectors.'],
  ['Asterism', 'An informal star pattern such as the Big Dipper or Summer Triangle.'],
  ['Deep-sky object', 'A target beyond the Solar System, such as a cluster, nebula, or galaxy.'],
  ['RAW file', 'Image file containing minimally processed sensor data, useful for editing.'],
  ['Stacking', 'Combining many exposures to improve signal and reduce noise.'],
  ['Polar alignment', "Aligning a tracking mount with Earth's rotational axis."],
  ['Light pollution', 'Excessive or misdirected artificial light that brightens the sky and hides faint objects.'],
  ['Dark adaptation', 'The process by which your eyes become more sensitive in the dark.'],
]

export default function Resources() {
  return (
    <>
      <Hero
        image={IMAGES.resourcesHero}
        eyebrow="Part four"
        title="Resources & Glossary"
        subtitle="Curated tools, apps, books, channels, and plain-English definitions for the terms you'll run into."
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14 content">

      <h2>Night-sky learning resources</h2>
      <ul>
        <li>
          <strong>Open University — Astronomy with an online telescope</strong>: one of
          the best free structured beginner courses; explicitly teaches
          altitude/azimuth, right ascension/declination, and planning observations.
        </li>
        <li>
          <strong>OpenStax Astronomy 2e</strong>: free, peer-reviewed, and strong on
          core concepts such as the celestial sphere, coordinate systems, and Moon
          phases.
        </li>
        <li>
          <strong>NASA Skywatching and What's Up</strong>: the best monthly maintenance
          habit for current sky events and visible planets.
        </li>
        <li>
          <strong>Royal Observatory Greenwich astronomy guides</strong>: clear
          beginner explanations of constellations, naked-eye astronomy, and monthly
          highlights.
        </li>
        <li>
          <strong>Griffith Observatory observing resources</strong>: excellent
          public-facing sky reports and observing support from a respected
          observatory.
        </li>
        <li>
          <strong>Astronomical League outreach PDFs</strong>: practical,
          amateur-focused guidance on binoculars, telescope choice, and beginner
          observing.
        </li>
      </ul>

      <h2>Interactive websites, apps, and printable charts</h2>
      <ul>
        <li>
          <strong>Stellarium Web / Stellarium Desktop</strong>: free, visual, and
          extremely beginner-friendly for learning what's visible right now.
        </li>
        <li>
          <strong>Sky &amp; Telescope Interactive Sky Chart</strong>: strong
          observing-planning features and display layers for constellations, planets,
          the ecliptic, and deep-sky objects.
        </li>
        <li>
          <strong>SkyMaps monthly charts</strong>: excellent printable charts when you
          want a paper resource outdoors.
        </li>
        <li>
          <strong>ESASky</strong>: great for exploring professional astronomical
          imagery and data in an approachable interface.
        </li>
        <li>
          <strong>WorldWide Telescope</strong>: excellent for education,
          planetarium-style exploration, and multi-layer views of the sky and
          universe.
        </li>
        <li>
          <strong>NASA Eyes on the Solar System</strong>: best interactive Solar
          System explainer for planets, moons, missions, and motion through time.
        </li>
        <li>
          <strong>Clear Outside / Astrospheric</strong>: best beginner weather tools
          tailored to astronomy planning.
        </li>
        <li>
          <strong>DarkSky International / Globe at Night</strong>: best resources for
          understanding light pollution and finding darker skies.
        </li>
        <li>
          <strong>Stellarium Mobile / SkySafari</strong>: strong mobile sky-app
          choices; Stellarium is especially approachable, SkySafari is especially rich
          and grows with you.
        </li>
      </ul>

      <h2>Telescope and observing resources</h2>
      <ul>
        <li>
          <strong>Sky &amp; Telescope — How to Choose a Telescope</strong>: clear
          buyer-oriented explanation of trade-offs rather than brand hype.
        </li>
        <li>
          <strong>Sky &amp; Telescope — What to Know Before Buying a Telescope</strong>:
          especially good for correcting the "high magnification = good telescope"
          myth.
        </li>
        <li>
          <strong>Sky &amp; Telescope — Binoculars for Astronomy</strong>: one of the
          best practical arguments for binoculars as a first observing instrument.
        </li>
        <li>
          <strong>Astronomical League — What telescope is best for me?</strong>:
          concrete, beginner-centered buying decision framework.
        </li>
        <li>
          <strong>NASA Space Place — How do telescopes work?</strong>: simple,
          friendly conceptual explainer with trustworthy basics.
        </li>
      </ul>

      <h2>Astrophotography learning resources</h2>
      <ul>
        <li>
          <strong>NASA — A Guide to Smartphone Astrophotography</strong>: one of the
          best official beginner resources for using a phone, especially if you own no
          dedicated camera.
        </li>
        <li>
          <strong>NASA — Lunar Photography Guide</strong>: an excellent first-step
          project — the Moon is bright, forgiving, and rewarding.
        </li>
        <li>
          <strong>Nikon — Photographing the Night Sky / How to Photograph the Milky
          Way</strong>: practical settings and field habits for wide-field night
          imaging.
        </li>
        <li>
          <strong>Sky &amp; Telescope — Getting Started in Deep-Sky Astrophotography</strong>:
          strong advice for avoiding overcomplicated first imaging rigs.
        </li>
        <li>
          <strong>Sky &amp; Telescope — In Astrophotography, Bigger Is Not Always Better</strong>:
          a useful corrective to the tendency to overbuy equipment too early.
        </li>
        <li>
          <strong>Siril / DeepSkyStacker / PixInsight / GIMP</strong>: respectively —
          a free astro workflow tool, free stacking software, advanced paid astro
          processing, and a free general editor.
        </li>
      </ul>

      <h2>Video, audio, and books</h2>
      <p>
        NASA's <strong>What's Up</strong> video series is the best ongoing
        beginner-friendly skywatching video source, because it's monthly, current, and
        observation-oriented. <strong>Sky &amp; Telescope</strong> is excellent for
        observing techniques and equipment topics. <strong>Royal Observatory
        Greenwich</strong> is strong for clear educational explainers. For
        astrophotography specifically, <strong>AstroBackyard</strong> is one of the
        most accessible practitioner channels for beginners, especially once you've
        learned the visual basics first. For audio, <strong>Sky Tour</strong> is one
        of the best monthly observing podcasts, while NASA's{' '}
        <strong>Curious Universe</strong> is excellent for broader space understanding
        rather than field observing specifically.
      </p>
      <p>
        Three books consistently stand out for beginners. <strong>NightWatch</strong>{' '}
        is a classic visual introduction with updated charts and broad beginner
        coverage. <strong>Turn Left at Orion</strong> is especially strong if you plan
        to use a small telescope, because it's organized around real observing
        targets and what they actually look like. <strong>The Backyard Astronomer's
        Guide</strong> is the best "grow with the hobby" bridge from beginner to
        intermediate observer, and covers telescopes, observing, and
        astrophotography. For imaging specifically, <strong>Digital SLR
        Astrophotography</strong> and <strong>Astrophotography for the Amateur</strong>{' '}
        remain practical beginner-friendly references, though they're more useful
        once you already understand the observing basics.
      </p>

      <h2>Glossary of essential terms</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Term</th>
              <th>Plain-English meaning</th>
            </tr>
          </thead>
          <tbody>
            {GLOSSARY.map(([term, meaning]) => (
              <tr key={term}>
                <td className="whitespace-nowrap font-medium text-star-300">{term}</td>
                <td>{meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
  )
}
