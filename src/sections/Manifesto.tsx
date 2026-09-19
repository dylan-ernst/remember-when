import { ParallaxBand } from '../components/ParallaxBand'
import { manifesto } from '../content/home'
import styles from './Manifesto.module.css'

export function Manifesto() {
  return (
    <ParallaxBand image={manifesto.image} alt={manifesto.imageAlt} className={styles.band}>
      <p className={styles.line}>
        {manifesto.lead}
        <span className={styles.accent}>{manifesto.accent}</span>
        {manifesto.trail}
      </p>
    </ParallaxBand>
  )
}
