import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import SkyBasics from './pages/SkyBasics'
import Telescopes from './pages/Telescopes'
import Astrophotography from './pages/Astrophotography'
import Resources from './pages/Resources'
import Faq from './pages/Faq'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sky-basics" element={<SkyBasics />} />
          <Route path="/telescopes" element={<Telescopes />} />
          <Route path="/astrophotography" element={<Astrophotography />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/faq" element={<Faq />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
