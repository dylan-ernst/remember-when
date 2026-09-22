import { ParallaxBand } from '../components/ParallaxBand'
import type { HomeContent } from '../content/types'
import styles from './Manifesto.module.css'

export function Manifesto({ manifesto }: Pick<HomeContent, 'manifesto'>) {
  return (
    <ParallaxBand image={manifesto.image} className={styles.band}>
      <p className={styles.line}>
        {manifesto.lead}
        <span className={styles.accent}>{manifesto.accent}</span>
        {manifesto.trail}
      </p>
    </ParallaxBand>
  )
}
