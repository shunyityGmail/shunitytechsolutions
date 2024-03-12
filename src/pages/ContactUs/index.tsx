import styles from './contactUs.module.scss'
import { TITLE, HEADING, CONTACT__INFORMATION } from '../../constants/contactUs'
import ContactForm from './ContactForm'
import BlinkButton from '../../components/BlinkButton'

const ContactUs = () => {
  return (
    <section className={styles.contactUs__container}>
      <BlinkButton text={TITLE}/>

      <h1 className={styles.contactUs__heading}>{HEADING}</h1>

      <div className={styles.contactUs__cards}>
        {CONTACT__INFORMATION.map((item, index)=>(
          <div className={styles.contactUs__card} key={index}>
              <div className={styles.card__image}>
                 <img src={item.icon} alt="img" />
              </div>

              <p className={styles.card__title}>{item.title}</p>
              <p className={styles.card__info}>{item.info_1}</p>
              <p className={styles.card__info}>{item.info_2}</p>
          </div>
        ))}
      </div>

      <ContactForm/>
    </section>
  )
}

export default ContactUs