import styles from './homepage.module.scss'
import { Typewriter } from 'react-simple-typewriter'
import { BUTTON, texts } from '../../constants/homepage'
import HomeDetails from './HomeDetails'
import { HOME__TEXTS } from '../../constants/homepage'
import BlinkButton from '../../components/BlinkButton'

const Homepage = () => {
  return (
    <>
      <section className={styles.homepage__container}>
        <div className={styles.homepage__details}>

          <BlinkButton text={HOME__TEXTS.title}/>

          <h1 className={styles.home__main__heading}>{HOME__TEXTS.heading}</h1>
          <p className={styles.home__main__heading_x}>
            <Typewriter
              words={texts}
              loop={0}
              cursor
              cursorStyle=""
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={2000}
            />{' '}
            AI
          </p>

          <p className={styles.home__description}>
            {HOME__TEXTS.description1} <br />
            {HOME__TEXTS.description2}
          </p>

          <button>{BUTTON}</button>
        </div>

        <div className={styles.homepage__images}>
          <img src="/glaxy.png" alt="img" />
        </div>
      </section>
      <HomeDetails />
    </>
  )
}

export default Homepage
