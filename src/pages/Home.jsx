import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

export default function Home() {
  return (
    <div className="content">
      <PageHeader
        eyebrow="A beginner's guide"
        title="Starting Out Under the Stars"
        subtitle="A practical, staged path into amateur astronomy and astrophotography — for someone with no telescope, no advanced math, and a simple goal of enjoying the sky."
      />

      <h2>How this guide is organized</h2>
      <p>
        This guide is built for a true beginner. It uses a staged approach: first learn
        how the sky works, then learn how telescopes work, and only then begin imaging.
        That order matters because nearly every frustration in amateur astronomy comes
        from trying to use equipment before learning how to orient yourself, read a sky
        chart, or set realistic expectations for what objects look like visually and
        photographically.
      </p>
      <p>
        The core concepts and resources here are drawn primarily from NASA, ESA, the
        Royal Observatory Greenwich, OpenStax, the Open University, the Astronomical
        League, AAVSO, DarkSky International, NOIRLab, Griffith Observatory, Sky &amp;
        Telescope, and other established educational sources.
      </p>
      <p>
        The whole hobby compresses into one sentence: learn a few sky landmarks,
        observe with your eyes and binoculars first, choose a simple telescope you will
        actually use, and treat astrophotography as a separate skill set rather than
        something every telescope is automatically good at. NASA, the Astronomical
        League, and Sky &amp; Telescope all emphasize versions of that same idea,
        especially the value of binoculars and simple sky familiarity before expensive
        gear.
      </p>

      <h2>Eight-week beginner learning path</h2>
      <p>
        The schedule below is realistic, not aggressive. If you move more slowly, that
        is fine — the best pace is the one that gets you outdoors repeatedly.
      </p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Week</th>
              <th>Focus</th>
              <th>What to do</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Learn the sky as a moving dome</td>
              <td>
                Understand the celestial sphere, why stars appear to rise and set,
                north/south/east/west outdoors, and the idea of altitude and azimuth.
                Spend at least two evenings identifying horizon directions and watching
                how the sky shifts over 30–60 minutes.
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Find reliable sky landmarks</td>
              <td>
                Learn Polaris if you're in the Northern Hemisphere, or the Southern
                Cross method if you're south of the equator. Learn the Big Dipper,
                Cassiopeia, Orion, Scorpius, Cygnus, and Sagittarius.
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Track the Moon and planets</td>
              <td>
                Follow the Moon for a week, noting phase, position, and rise/set time.
                Learn how the visible planets differ from stars: they shine steadily
                and follow the ecliptic.
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Start using charts and planning tools</td>
              <td>
                Learn to read a planisphere or interactive sky chart. Plan one session
                in advance using location, date, time, Moon phase, and cloud forecasts.
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Observe with no telescope, or with binoculars</td>
              <td>
                Use naked-eye and binocular observing to find the Pleiades, the
                Andromeda Galaxy, the Orion Nebula, and one bright double star such as
                Albireo if it's in season.
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Learn telescope basics before buying</td>
              <td>
                Study aperture, focal length, field of view, exit pupil, and mount
                types. Compare refractors, Newtonian reflectors, Dobsonians, and
                catadioptric designs.
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>Make a good first-equipment decision</td>
              <td>
                Decide whether your actual first purchase should be binoculars, a
                tabletop Dobsonian, a small refractor, or no purchase yet. Join a club
                or visit a planetarium/observatory if possible.
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>Try simple astrophotography</td>
              <td>
                Start with a smartphone or an existing DSLR/mirrorless camera on a
                tripod. Photograph the Moon first, then a constellation or star field,
                and only then consider a star tracker.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <blockquote>
        <p>
          A good "minimum viable hobby" at the end of eight weeks looks like this: you
          can orient yourself in the dark, name a handful of bright stars and
          constellations, plan an observing night, understand what telescope
          specifications mean, and capture a decent Moon photo or tripod nightscape.
          That is already a strong beginner foundation.
        </p>
      </blockquote>

      <h2>Where to go from here</h2>
      <ul>
        <li>
          <Link to="/sky-basics">Learn the Sky</Link> — coordinates, the Moon and
          planets, constellations, star charts, and light pollution.
        </li>
        <li>
          <Link to="/telescopes">Telescopes 101</Link> — optics explained, telescope
          types compared, and practical buying advice.
        </li>
        <li>
          <Link to="/astrophotography">Astrophotography</Link> — equipment, camera
          basics, and a beginner workflow that actually works.
        </li>
        <li>
          <Link to="/resources">Resources &amp; Glossary</Link> — curated tools, books,
          channels, and plain-English definitions.
        </li>
        <li>
          <Link to="/faq">FAQ &amp; Next Steps</Link> — common beginner questions and
          how to grow into an intermediate hobbyist.
        </li>
      </ul>
    </div>
  )
}
