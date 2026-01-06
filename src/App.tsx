import { Routes, Route } from 'react-router-dom'
import Layout from './app/components/Layout'
import Home from './app/pages/Home'
import Services from './app/pages/Services'
import Team from './app/pages/Team'
import About from './app/pages/About'
import Contact from './app/pages/Contact'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App

