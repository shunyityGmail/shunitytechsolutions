import styles from './homepage.module.scss'
import { HOME__SOLUTIONS, BUTTON__CONTENT } from '../../constants/homepage'

const HomeDetails = () => {
  return (
    <section className={styles.homeDetails__container}>
      {HOME__SOLUTIONS?.map((item, index)=>(
        <div className={styles.home__solutions__card} key={index}>
          <div className={styles.card__icon}>
              <img src={item.icon} alt="img" />
          </div>
           <p className={styles.card__title}>{item.title}</p>

           <div className={styles.line}/>

           <p className={styles.card__description}>{item.description}</p>

           <button>{BUTTON__CONTENT}</button>
        </div>
      ))}
    </section>
  )
}

export default HomeDetails