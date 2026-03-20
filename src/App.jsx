import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import ScrollToTop from './components/ScrollToTop'

// Import pages
import Home from './pages/Home'

// Research pages
import FCEC from './pages/research/FCEC'
import Nanocatalyst from './pages/research/Nanocatalyst'
import Battery from './pages/research/Battery'

// Members pages
import Professor from './pages/members/Professor'
import CurrentMembers from './pages/members/CurrentMembers'
import Alumni from './pages/members/Alumni'

// Other pages
import Publications from './pages/publications/Publications'
import News from './pages/news/News'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Facility from './pages/Facility'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        
        {/* Research Routes */}
        <Route path="/research/fc-ec" element={<MainLayout><FCEC /></MainLayout>} />
        <Route path="/research/nanocatalyst" element={<MainLayout><Nanocatalyst /></MainLayout>} />
        <Route path="/research/battery" element={<MainLayout><Battery /></MainLayout>} />
        
        {/* Members Routes */}
        <Route path="/members/professor" element={<MainLayout><Professor /></MainLayout>} />
        <Route path="/members/current" element={<MainLayout><CurrentMembers /></MainLayout>} />
        <Route path="/members/alumni" element={<MainLayout><Alumni /></MainLayout>} />
        
        {/* Other Routes */}
        <Route path="/publications" element={<MainLayout><Publications /></MainLayout>} />
        <Route path="/news" element={<MainLayout><News /></MainLayout>} />
        <Route path="/gallery" element={<MainLayout><Gallery /></MainLayout>} />
        <Route path="/facility" element={<MainLayout><Facility /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
      </Routes>
    </Router>
  )
}

export default App
