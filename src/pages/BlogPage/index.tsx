
import { useLocation } from 'react-router-dom';
import styles from './blogPage.module.scss'

const BlogPage = () => {
  const state = useLocation()
  const BLOG = state?.state?.item
  
  return (
    <section className={styles.blogPage__container}>
      <img src={BLOG.img} alt="img" />
      <h6>{BLOG.date}</h6>
      <h1>{BLOG.title}</h1>

      <p>{BLOG.description}</p>

    </section>
  )
}

export default BlogPage