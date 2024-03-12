import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'
import styles from './layout.module.scss'

const Layout = () => {
  return (
    <section className={styles.layout__container}>
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  )
}

export default Layout
