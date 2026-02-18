import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Services from './pages/Services'
import Admission from './pages/Admission'
import About from './pages/About'
import Success from './pages/Success'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="services" element={<Services />} />
        <Route path="admission" element={<Admission />} />
        <Route path="about" element={<About />} />
        <Route path="success-stories" element={<Success />} />
      </Route>
    </Routes>
  )
}
