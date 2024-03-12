import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa'
import styles from './footer.module.scss'
import { contacts } from '../../constants/shunyityContacts'
import { NAV__LINKS } from '../../constants/navbar'
import { COPYRIGHT, HEADING1, HEADING2, HEADING4, SOCIALS } from '../../constants/footer'
import { FORM__TITLE } from '../../constants/contactUs'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer className={styles.footer__box}>
      <section className={styles.footer__section__1}>
        <div className={styles.footer__nav}>
          <p className={styles.footer__heading}>{HEADING1}</p>
          <a href={SOCIALS.linkedIn.link} target='_blank'>
            <FaLinkedin size={25} />
            <p>{SOCIALS.linkedIn.title}</p>
          </a>
          <a href={SOCIALS.insta.link} target='_blank'>
            <FaInstagram size={25} />
            <p>{SOCIALS.insta.title}</p>
          </a>
          <a href={SOCIALS.twitter.link} target='_blank'>
            <FaTwitter size={25} />
            <p>{SOCIALS.twitter.title}</p>
          </a>
          <a href={SOCIALS.facebook.link} target='_blank'>
            <FaFacebookSquare size={25} />
            <p>{SOCIALS.facebook.title}</p>
          </a>
        </div>
        <div className={styles.footer__nav}>
          <p className={styles.footer__heading}>{HEADING2}</p>
          {NAV__LINKS?.map((item, index)=>(
          
              <li onClick={()=>navigate(item.path)} key={index}>
                {item.title}
                </li>

          ))}
        </div>
        <div className={styles.footer__nav}>
          <p className={styles.footer__heading}> {contacts.companyName}</p>
          <li>Address: {contacts.address1}</li>
          <li>{contacts.address2}</li>
          <li>{contacts.address3}</li>
        </div>
        <div className={styles.footer__nav}>
          <p className={styles.footer__heading}>{HEADING4}</p>
          <li>{FORM__TITLE}</li>
          <li>{contacts.phone}</li>
        </div>
      </section>

      <section className={styles.footer__section__2}>
        <div className={styles.footer__logo}> 
        <img src="/ShunityLogo3.png" alt="img" />
        </div>
        <p className="footer__copyright">
          {COPYRIGHT}
        </p>
      </section>
    </footer>
  )
}

export default Footer