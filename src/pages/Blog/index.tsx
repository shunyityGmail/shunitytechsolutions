import styles from './blog.module.scss'
import {
  BLOG__HEADING,
  TITLE,
  BLOGS,
  BUTTON__CONTENT,
} from '../../constants/blog'
import BlinkButton from '../../components/BlinkButton'
import { useNavigate } from 'react-router-dom'

const Blog = () => {
  const navigate = useNavigate()
  return (
    <section className={styles.blog__container}>
      <BlinkButton text={TITLE}/>
      <h1 className={styles.blog__heading}>{BLOG__HEADING}</h1>

      <div className={styles.blog__card__box}>
        {BLOGS?.map((item, index) => (
          <div className={styles.blog__card} key={index}>
            <img src={item.img} alt="img" />
            <p className={styles.blog__card__date}>{item.date}</p>
            <p className={styles.blog__card__title}>{item.title}</p>
            <p className={styles.blog__card__description}>{item.description.slice(0,70)}...</p>
            <button onClick={()=>navigate(`/blog/${item.title}`, {state:{item}})}>{BUTTON__CONTENT}</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blog
