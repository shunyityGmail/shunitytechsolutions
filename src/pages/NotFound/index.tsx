import { Link } from "react-router-dom"
import styles from './notFound.module.scss'


const NotFound = () => {
  return (
    <div className={styles.not_found}>
    <h1>Page Not Found</h1>
    <p>Oops! The page you are looking for does not exist.</p>
    <Link to="/">
      <button className={styles.home_button}>Go to Home</button>
    </Link>
  </div>
  )
}

export default NotFound