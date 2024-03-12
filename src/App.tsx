import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
import Blog from './pages/Blog'
import OurSolutions from './pages/OurSolutions'
import ContactUs from './pages/ContactUs'
import NotFound from './pages/NotFound'
import BlogPage from './pages/BlogPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />}/>
              <Route path="/blog/:id" element={<BlogPage/>}/>
            <Route path="/our-solutions" element={<OurSolutions />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
