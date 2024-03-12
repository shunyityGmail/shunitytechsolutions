import styles from './ourSolutions.module.scss'
import { TITLE, HEADING, SOLUTIONS, CONTENT } from '../../constants/ourSolutions'
import BlinkButton from '../../components/BlinkButton'
import { Helmet } from 'react-helmet';
import { contacts } from '../../constants/shunyityContacts';

const OurSolutions = () => {
  return (
    <>
    <Helmet>
        <title>{contacts.companyName}</title>
        <meta name="description" content={CONTENT} />
      </Helmet>
    <section className={styles.ourSolutions__container}>
      <div className={styles.ourSolutions__header}>
        <BlinkButton text={TITLE}/>
        <h1 className={styles.ourSolutions__heading}>{HEADING}</h1>
      </div>

      {SOLUTIONS.map((item, index) => (
        <div className={styles.solutions__card} key={index}>
          <div className={styles.card__image}>
            <img src={item.icon} alt="img" />
          </div>

          <p className={styles.card__title}>{item.title}</p>
          <p className={styles.card__info}>{item.description}</p>
        </div>
      ))}
    </section>
    </>
  )
}

export default OurSolutions
