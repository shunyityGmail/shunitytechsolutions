import styles from './blinkButton.module.scss'

interface BlinkButtonProps{
    text:string
}

const BlinkButton = ({text}:BlinkButtonProps) => {
  return (
    <div className={styles.blinkButton__container}>
       <h1>
        {text}
       </h1>
    </div>
  )
}

export default BlinkButton