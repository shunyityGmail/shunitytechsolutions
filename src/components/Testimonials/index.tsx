import BlinkButton from '../BlinkButton'
import { FaArrowCircleRight } from 'react-icons/fa'
import { FaArrowCircleLeft } from 'react-icons/fa'
import styles from './testimonials.module.scss'
import { useState } from 'react'

const Testimonials = () => {
    const [number, setNumber] = useState(0)
    
  const data = [
    {
      msg: 'Nice work on your aipt. We’ve used aipt for the last five years. I didn’t even need training. Thanks for the great service. I like aipt more and more each day because it makes my life a lot easier.',
      name: 'Will - CEO Envato',
    },
    {
        msg: 'Nice work on your aipt. We’ve used aipt for the last five years. I didn’t even need training. Thanks for the great service. I like aipt more and more each day because it makes my life a lot easier.',
        name: 'Smith - CEO Rocks',
      },
  ]

  const handleClick = ()=>{
    if(number<data.length-1){
   setNumber(number+1)}
   else {
    setNumber(0)
   }
}
  return (
    <section className={styles.testimonials__container}>
      <div className={styles.testimonials__box}>
        <BlinkButton text="OUR TESTIMONIALS" />
        <h1 className={styles.title}>We care about your opinion</h1>
        <div className={styles.testimonials__card}>

            <div className={styles.icon} onClick={handleClick}>

        <FaArrowCircleLeft size={30}  />
            </div>

        <div className={styles.content}>
          <p className={styles.message}>{data[number].msg}</p>
          <p className={styles.name}>{data[number].name}</p>
        </div>
         <div className={styles.icon}  onClick={handleClick}>

        <FaArrowCircleRight size={30} />
         </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
