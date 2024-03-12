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
import { ROUTES } from './constants/routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={ROUTES.HOME} element={<Homepage />} />
            <Route path={ROUTES.ABOUTUS} element={<AboutUs />} />
            <Route path={ROUTES.BLOG} element={<Blog />}/>
              <Route path={ROUTES.BLOGPAGE} element={<BlogPage/>}/>
            <Route path={ROUTES.OURSOLUTIONS} element={<OurSolutions />} />
            <Route path={ROUTES.CONTACTUS} element={<ContactUs />} />
            <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
