import { ParallaxBand } from '../components/ParallaxBand'
import boothSetupPhoto from '../assets/photos/booth-setup.jpeg'
import type { HomeContent } from '../content/types'
import styles from './Manifesto.module.css'

export function Manifesto({ manifesto }: Pick<HomeContent, 'manifesto'>) {
  const displayManifesto = {
    ...manifesto,
    lead: 'It’s more than a photo booth. It’s a way to ',
    accent: 'freeze a feeling',
    trail: ' and bring you back to a moment worth remembering.',
  }

  return (
    <ParallaxBand
      image={{ url: boothSetupPhoto, alt: 'Remember When Photo Booth setup with an umbrella light, black backdrop, and props table at an outdoor party' }}
      className={styles.band}
    >
      <p className={styles.line}>
        {displayManifesto.lead}
        <span className={styles.accent}>{displayManifesto.accent}</span>
        {displayManifesto.trail}
      </p>
    </ParallaxBand>
  )
}
