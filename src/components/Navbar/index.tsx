import styles from './navbar.module.scss'
import { SiGooglecontaineroptimizedos } from 'react-icons/si'
import { FaPhoneAlt } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useLocation, useNavigate } from 'react-router-dom'
import { contacts } from '../../constants/shunyityContacts'
import { NAV__LINKS, TIME, WEEKDAYS } from '../../constants/navbar'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const handleClick = (path: string) => {
    toggleMenu()
    navigate(path)
  }

  return (
    <nav>
      <div className={styles.nav__top}>
        <div className={styles.nav__logo}>
          <img src="/ShunityLogo3.png" alt="img" />
        </div>

        <div className={styles.nav__top__details}>
          <div className={styles.nav__contacts}>
            <SiGooglecontaineroptimizedos color="#230FBF" size={30} />

            <div className={styles.details__}>
              <h4>{TIME}</h4>
              <h5>{WEEKDAYS}</h5>
            </div>
          </div>

          <div className={styles.nav__contacts}>
            <FaPhoneAlt color="#230FBF" size={30} />

            <div className={styles.details__}>
              <h4>{contacts.phone}</h4>
              <h5>{contacts.email}</h5>
            </div>
          </div>
        <button> <h1> Get Free Consultation</h1></button>
        </div>

        <div className={styles.responsive__icon__box} onClick={toggleMenu}>
          <RxHamburgerMenu size={35} />
        </div>
      </div>

      <div className={styles.nav__links}>
        <ul>
          {NAV__LINKS?.map((item, index) => (
            <li
              key={index}
              onClick={() => navigate(item.path)}
              style={{
                color:
                  location.pathname === item.path
                    ? 'var(--primaryColor)'
                    : '#000',
              }}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      {showMenu && (
        <motion.ul
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3, ease: 'linear' }}
          className={styles.responsive__nav}
        >
          {NAV__LINKS?.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                handleClick(item.path)
              }}
              style={{
                color:
                  location.pathname === item.path
                    ? 'var(--primaryColor)'
                    : '#000',
              }}
            >
              {item.title}
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  )
}

export default Navbar
