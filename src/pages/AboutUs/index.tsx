import styles from './aboutUs.module.scss'
import { texts, ABOUTUS__POINTS, TITLE } from '../../constants/aboutUs'
import BlinkButton from '../../components/BlinkButton'

const AboutUs = () => {
  return (
    <section className={styles.aboutUs__container}>
      <div className={styles.aboutUs__image__box}>
        <img src="/ShunityLogo1.png" alt="img" />
      </div>

      <div className={styles.aboutUs__content__box}>
        <BlinkButton text={TITLE}/>

        <h1 className={styles.aboutUs__heading}>{texts.ABOUTUS__HEADING}</h1>

        <p className={styles.aboutUs__description}>
          {texts.ABOUTUS__DESCRIPTION__1}
        </p>

        <p className={styles.aboutUs__description}>
          {texts.ABOUTUS__DESCRIPTION__2}
        </p>
        <ul>
          {ABOUTUS__POINTS.map((item, index) => (
            <li key={index}>{item.ABOUTUS__POINT}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AboutUs
