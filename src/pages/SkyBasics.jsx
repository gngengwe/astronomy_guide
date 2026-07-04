import PageHeader from '../components/PageHeader'

export default function SkyBasics() {
  return (
    <div className="content">
      <PageHeader
        eyebrow="Part one"
        title="Navigating the Night Sky"
        subtitle="Coordinates, the Moon and planets, constellations, and the tools that help you plan an observing session."
      />

      <h2>Sky basics that make everything else easier</h2>
      <p>
        The simplest mental model is the <strong>celestial sphere</strong>: imagine
        Earth at the center of a huge sphere with stars projected onto it. The stars
        are so far away that they seem fixed relative to one another, while Earth's
        rotation makes the whole sky appear to turn around us. In practical observing,
        this is why stars seem to rise in the east and set in the west, while
        circumpolar stars near the pole can circle without ever setting. The Open
        University and OpenStax both use this model because it's the easiest bridge
        from familiar Earth geography to astronomy.
      </p>

      <p>
        A beginner should learn two coordinate systems. The first is{' '}
        <strong>altitude and azimuth</strong>, because it matches how you physically
        point your head or telescope: altitude is how high above the horizon something
        is, and azimuth is the direction measured around the horizon, typically
        clockwise from north. The second is{' '}
        <strong>right ascension and declination</strong>, a sky-based map system
        analogous to longitude and latitude on Earth. Altitude/azimuth is best for
        "where do I point now?" and right ascension/declination is best for catalogs,
        charts, and GoTo systems.
      </p>

      <pre>{`                 Zenith
                   *
                  /|
                 / |   altitude
                /  |
Horizon  ------*---+----------------
             you    \\
                     \\ azimuth measured
                      \\ around the horizon`}</pre>

      <p>
        If you're in the <strong>Northern Hemisphere</strong>, Polaris is the fastest
        reliable guide to north. NASA notes that Polaris sits near the north celestial
        pole, so the rest of the sky appears to rotate around it. The Big Dipper's
        outer bowl stars point toward Polaris, and Cassiopeia sits on the opposite side
        of Polaris from the Dipper at many times of year, which makes these patterns
        excellent orientation anchors. In the <strong>Southern Hemisphere</strong>,
        there is no equally bright "south star," so observers often use the Southern
        Cross to point toward the south celestial pole and then drop that direction to
        the horizon to estimate due south.
      </p>

      <h2>The Moon, the Solar System, and what you can identify naked-eye</h2>
      <p>
        The Moon changes phase because we see different portions of its sunlit half as
        it orbits Earth; the phases are not caused by Earth's shadow, except during a
        lunar eclipse. NASA and OpenStax both emphasize this because it's one of the
        most common beginner misconceptions. The eight standard phase labels are new,
        waxing crescent, first quarter, waxing gibbous, full, waning gibbous, third
        quarter, and waning crescent.
      </p>
      <p>
        For Solar System basics, a beginner only needs a clean hierarchy: the{' '}
        <strong>Sun</strong> is the star at the center; eight major planets orbit it;
        and the International Astronomical Union currently recognizes five official{' '}
        <strong>dwarf planets</strong> in our solar system — Ceres, Pluto, Haumea,
        Makemake, and Eris. NASA's public solar-system pages present this structure
        clearly and without unnecessary detail.
      </p>
      <p>
        For naked-eye planet identification, focus first on the five easy ones:{' '}
        <strong>Mercury, Venus, Mars, Jupiter, and Saturn</strong>. They look star-like,
        but unlike stars they usually shine with a steadier light and stay close to the
        ecliptic, the apparent path of the Sun across the sky. The exact visible
        planets change month by month, so the best maintenance habit is to check
        NASA's monthly <strong>What's Up</strong> skywatching guide or a live sky app
        rather than trying to memorize the whole year's changing geometry.
      </p>

      <h2>Constellations, asterisms, bright stars, and beginner deep-sky objects</h2>
      <p>
        A <strong>constellation</strong> is an officially defined region of the sky; an{' '}
        <strong>asterism</strong> is an informal, recognizable pattern that may be part
        of one constellation or span several. That distinction matters because
        beginners often learn asterisms first. The Big Dipper is an asterism inside
        Ursa Major, the Summer Triangle is an asterism made from Vega, Deneb, and
        Altair, and the Winter Hexagon is a large seasonal pattern rather than a formal
        constellation. The Royal Observatory Greenwich and NOIRLab beginner materials
        are especially good at this distinction.
      </p>
      <p>
        A practical "must know" list for beginners in the Northern Hemisphere is:{' '}
        <strong>
          Big Dipper/Ursa Major, Cassiopeia, Orion, Taurus, Gemini, Leo, Scorpius,
          Cygnus, Lyra, and Sagittarius
        </strong>
        . In the Southern Hemisphere, add <strong>Crux</strong> and the Milky Way
        regions around it early. The reason for this specific set isn't that they're
        the only important constellations, but that they repeatedly function as
        signposts to brighter stars, the pole region, and major deep-sky targets.
      </p>
      <p>
        The bright stars most worth learning early are <strong>Polaris</strong>,{' '}
        <strong>Sirius</strong>, <strong>Betelgeuse</strong>, <strong>Rigel</strong>,{' '}
        <strong>Aldebaran</strong>, <strong>Capella</strong>, <strong>Procyon</strong>,{' '}
        <strong>Arcturus</strong>, <strong>Vega</strong>, <strong>Deneb</strong>,{' '}
        <strong>Altair</strong>, and <strong>Antares</strong>. Learning them is valuable
        because bright stars are easier to identify than whole constellations under
        suburban skies, and they often act as waypoints for star-hopping.
      </p>
      <p>
        A beginner deep-sky starter set should stay small and high-reward. The best
        early targets are the <strong>Pleiades</strong> (bright open cluster), the{' '}
        <strong>Orion Nebula</strong> (bright nebula), the{' '}
        <strong>Andromeda Galaxy</strong> (large nearby galaxy), the{' '}
        <strong>Double Cluster</strong> in Perseus, the <strong>Beehive Cluster</strong>
        , and <strong>Albireo</strong> as an easy double star. These objects appear
        repeatedly in beginner observing advice because they're bright, visually
        rewarding, and often visible with the naked eye, binoculars, or a small scope
        depending on sky quality.
      </p>

      <h2>Star charts, observing plans, and light pollution</h2>
      <p>
        A sky chart becomes easy once you know what problem it solves: it tells you{' '}
        <strong>what is up at your location at a specific date and time</strong>. Sky
        &amp; Telescope's chart tutorials explain that you should match direction,
        time, and orientation before trying to match star patterns. A{' '}
        <strong>planisphere</strong> is the quickest low-tech version of that idea; an
        interactive planetarium app does the same thing dynamically.
      </p>
      <p>
        A good observing plan uses five checks: <strong>location</strong>,{' '}
        <strong>forecast</strong>, <strong>Moon phase</strong>,{' '}
        <strong>darkness window</strong>, and <strong>target list</strong>. Clear
        Outside and Astrospheric are designed specifically for astronomy forecasting;
        Sky &amp; Telescope's interactive chart and Stellarium show what's up; and
        printable maps from SkyMaps are useful if you want something that won't
        destroy your dark adaptation.
      </p>
      <p>
        Light pollution is a real limiting factor. DarkSky International, Globe at
        Night, NOIRLab, and the U.S. National Park Service all emphasize that excessive
        or misdirected artificial light reduces contrast, hides faint stars, and makes
        galaxies and nebulae much harder to see. Globe at Night is especially useful
        because it turns the abstract idea of "sky quality" into a practical observing
        habit. DarkSky's International Dark Sky Places directory is one of the best
        ways to find a better observing site.
      </p>
      <p>
        For visual learning and upkeep, the strongest beginner toolset is:{' '}
        <strong>Stellarium Web or Desktop</strong>, <strong>
          Sky &amp; Telescope's interactive chart
        </strong>, <strong>SkyMaps monthly charts</strong>,{' '}
        <strong>NASA's monthly What's Up</strong>, and one mobile sky app such as{' '}
        <strong>Stellarium Mobile</strong> or <strong>SkySafari</strong>. If you want a
        more data-rich interactive environment, add{' '}
        <strong>WorldWide Telescope</strong>, <strong>ESASky</strong>, and{' '}
        <strong>NASA's Eyes on the Solar System</strong>.
      </p>
    </div>
  )
}
