import { ParallaxBand } from '../components/ParallaxBand'
import boothSetupPhoto from '../assets/photos/booth-setup.jpeg'
import type { HomeContent } from '../content/types'
import styles from './Manifesto.module.css'

export function Manifesto({ manifesto }: Pick<HomeContent, 'manifesto'>) {
  return (
    <ParallaxBand
      image={{ url: boothSetupPhoto, alt: 'Remember When Photo Booth setup with an umbrella light, black backdrop, and props table at an outdoor party' }}
      className={styles.band}
    >
      <p className={styles.line}>
        {manifesto.lead}
        <span className={styles.accent}>{manifesto.accent}</span>
        {manifesto.trail}
      </p>
    </ParallaxBand>
  )
}
