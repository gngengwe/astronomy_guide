import Hero from '../components/Hero'
import Figure from '../components/Figure'
import { IMAGES } from '../data/images'

export default function Astrophotography() {
  return (
    <>
      <Hero
        image={IMAGES.astrophotographyHero}
        eyebrow="Part three"
        title="Astrophotography 101"
        subtitle="Treat imaging as its own skill set — start with gear you already own, then upgrade deliberately."
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14 content">

      <h2>What astrophotography is and the main branches to know</h2>
      <p>
        Astrophotography is the imaging of celestial objects or the night sky. For a
        beginner, it helps to divide the hobby into a few practical categories rather
        than thinking of it as one thing: <strong>landscape astrophotography</strong>,{' '}
        <strong>Milky Way photography</strong>, <strong>Moon photography</strong>,{' '}
        <strong>planetary imaging</strong>, <strong>deep-sky imaging</strong>, and{' '}
        <strong>solar photography</strong>. Each category needs different gear,
        exposure strategy, and expectations.
      </p>
      <p>
        The easiest branch is usually <strong>Moon photography</strong>, followed by
        wide-field <strong>tripod nightscapes</strong> and <strong>Milky Way</strong>{' '}
        work. <strong>Planetary imaging</strong> often relies on short video clips and
        stacking, while <strong>deep-sky imaging</strong> is the most equipment- and
        workflow-intensive branch, because you're trying to record faint nebulae and
        galaxies with accurate tracking and significant post-processing.
      </p>

      <blockquote>
        <p>
          <strong>Solar photography requires a special warning:</strong> never look at
          or image the Sun through binoculars, cameras, finder scopes, or telescopes
          without proper purpose-built solar filtration mounted at the front of the
          optical system, or use a safe projection method when appropriate. NASA and
          the American Astronomical Society are unequivocal on this point — eclipse
          glasses are not the same as telescope solar filters.
        </p>
      </blockquote>

      <h2>Equipment choices that make sense at the beginning</h2>
      <p>
        You can start with gear you already own. A <strong>smartphone</strong> is
        viable for the Moon and for simple tripod nightscapes. A{' '}
        <strong>DSLR or mirrorless camera</strong> is the most flexible entry point for
        wide-field or basic tracked astrophotography. A{' '}
        <strong>dedicated astronomy camera</strong> is more specialized and becomes
        more attractive once you know you want deep-sky imaging through a telescope.
        Cooled cameras reduce thermal noise better than uncooled cameras, which matters
        especially for deeper imaging.
      </p>
      <p>
        A <strong>tripod</strong> is essential for any non-handheld night photography.
        An <strong>intervalometer</strong> helps automate repeated exposures or
        time-lapses. A <strong>star tracker</strong> is a portable motorized mount that
        compensates for Earth's rotation, allowing longer exposures with less star
        trailing — a simple sky tracker plus DSLR is one of the quickest paths to early
        success. If you later move into telescope imaging, the most beginner-friendly
        deep-sky path is usually a <strong>small refractor on a tracking mount</strong>,
        not a large or long-focal-length telescope.
      </p>

      <div className="table-wrap">
        <table style={{ minWidth: '46rem' }}>
          <thead>
            <tr>
              <th>Starter level</th>
              <th>Typical gear</th>
              <th>Best first targets</th>
              <th>Why it works</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Easiest</td>
              <td>Smartphone + tripod</td>
              <td>Moon, bright conjunctions, nightscapes</td>
              <td>Lowest barrier to entry</td>
            </tr>
            <tr>
              <td>Practical all-round start</td>
              <td>DSLR or mirrorless + tripod + wide lens</td>
              <td>Constellations, Milky Way, star trails, Moon</td>
              <td>Flexible, and teaches exposure, focus, and planning</td>
            </tr>
            <tr>
              <td>Best beginner upgrade</td>
              <td>DSLR/mirrorless + star tracker + tripod</td>
              <td>Longer Milky Way exposures, large nebula regions</td>
              <td>Tracker reduces trailing and improves signal quality</td>
            </tr>
            <tr>
              <td>Serious deep-sky beginner</td>
              <td>Small refractor + equatorial tracking mount + camera</td>
              <td>Bright nebulae, clusters, large galaxies</td>
              <td>Small refractors are the easiest deep-sky entry point</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Camera basics every beginner should know</h2>
      <p>
        The exposure triangle still rules astrophotography. <strong>ISO</strong>{' '}
        controls signal amplification and affects apparent brightness and noise;{' '}
        <strong>shutter speed</strong> controls how long light hits the sensor; and{' '}
        <strong>aperture</strong> controls how much light the lens admits. Higher ISO
        brightens images but increases graininess, while slow shutter speeds require a
        tripod. A practical starting point for stars: use your lens as wide open as
        practical and begin with a roughly 20-second exposure, adjusting ISO as needed.
      </p>
      <p>
        <strong>Manual focus</strong> is a night-sky skill, not a luxury. Autofocus
        usually struggles on stars. The standard beginner method is to magnify a bright
        star in live view and focus until it's as small and sharp as possible, then
        don't touch focus again unless temperature or framing changes enough to require
        it. Focus manually, verify on playback, and re-check often.
      </p>
      <p>
        Shoot <strong>RAW</strong> if your device supports it. RAW files store
        uncompressed or minimally processed sensor data, preserve more detail and
        color, and give you much more control in post-processing than JPEG. This
        matters even more in astrophotography, because stretching faint detail out of
        a dark frame is much easier when the file retains more information.
      </p>
      <p>
        <strong>White balance</strong> matters less if you shoot RAW, because you can
        adjust it later. For astronomy, that usually means you can worry less about
        getting it perfect in the field and focus more on exposure and focus accuracy.
      </p>

      <h2>A beginner workflow that actually works</h2>
      <p>
        A solid beginner workflow is: <strong>plan</strong>, check{' '}
        <strong>weather and darkness</strong>, consider <strong>Moon phase</strong>,{' '}
        <strong>set up</strong>, <strong>focus</strong>, capture{' '}
        <strong>multiple exposures</strong>, <strong>stack if needed</strong>, then{' '}
        <strong>process lightly</strong>. Clear Outside and Astrospheric are good
        planning tools because they include cloud cover, transparency-related
        information, darkness periods, and Moon data. Dark skies and new-Moon windows
        are usually best for faint Milky Way and galaxy work, though moonlight can be
        useful creatively for foreground illumination in nightscape work.
      </p>
      <p>
        For the <strong>Moon</strong>, start on a tripod or through a telescope
        eyepiece with a phone adapter or careful hand placement. Smartphone-through-
        telescope images can work very well for the Moon — one reason lunar
        photography is such an ideal first astrophotography project.
      </p>

      <Figure
        image={IMAGES.astrophotographyMoon}
        caption="A supermoon rising during a partial lunar eclipse — the kind of bright, forgiving target that makes the Moon the ideal first astrophotography project."
      />

      <p>
        For <strong>Milky Way</strong> and wide-field work, tripod imaging can be
        enough at first. About 20 seconds is a practical starting point for keeping
        stars recognizable as points, though the "rule of 500" is only a rough
        approximation, since focal length, pixel size, and where you point in the sky
        all matter. A star tracker becomes valuable when you want cleaner, longer
        exposures.
      </p>
      <p>
        For <strong>deep-sky imaging</strong>, stacking is central. Siril and
        DeepSkyStacker both exist specifically to align and combine multiple
        exposures, improving signal-to-noise ratio.
      </p>

      <h2>Editing software and the beginner mistakes to avoid</h2>
      <p>
        For free or low-cost software, the strongest beginner stack is usually{' '}
        <strong>Siril</strong> for astro-specific stacking and processing,{' '}
        <strong>DeepSkyStacker</strong> for Windows-based stacking, and{' '}
        <strong>GIMP</strong> for general image editing. For advanced paid processing,{' '}
        <strong>PixInsight</strong> is widely used, but it's not the easiest place to
        begin.
      </p>
      <p>
        The most common beginner mistakes are predictable: <strong>overexposure</strong>
        , <strong>missing focus</strong>, <strong>camera shake</strong>,{' '}
        <strong>too much noise</strong>, <strong>dew on optics</strong>, and{' '}
        <strong>dead batteries</strong>. The cure is mostly workflow, not spending: use
        a tripod or remote release, verify focus at high zoom, keep exposures and ISO
        within what your setup can support, bring spare batteries, and think about dew
        before you lose a session to it.
      </p>
      </div>
    </>
  )
}
