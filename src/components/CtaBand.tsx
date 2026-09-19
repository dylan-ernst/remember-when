import type { ReactNode } from 'react'
import styles from './CtaBand.module.css'

type CtaBandProps = {
  heading: string
  body: string
  children: ReactNode
}

/** Closing call to action shared by the inner pages. */
export function CtaBand({ heading, body, children }: CtaBandProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading} data-reveal="0">
        {heading}
      </h2>
      <p className={styles.body} data-reveal="80">
        {body}
      </p>
      <div className={styles.actions} data-reveal="160">
        {children}
      </div>
    </section>
  )
}
