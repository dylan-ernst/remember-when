import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import styles from './CopyButton.module.css'

type CopyState = 'idle' | 'copied' | 'failed'

type CopyButtonProps = {
  /* The text put on the clipboard, and what is shown if copying is blocked. */
  value: string
  label: string
  children: ReactNode
}

const FEEDBACK_MS = 2000

/** Icon button that copies a detail and says so, rather than opening an app. */
export function CopyButton({ value, label, children }: CopyButtonProps) {
  const [state, setState] = useState<CopyState>('idle')
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setState('copied')
    } catch {
      /* Clipboard is unavailable outside a secure context, so show the value
         to copy by hand instead of failing silently. */
      setState('failed')
    }

    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setState('idle'), FEEDBACK_MS)
  }

  const message: Record<CopyState, string> = {
    idle: '',
    copied: 'Copied',
    failed: value,
  }

  return (
    <span className={styles.wrap}>
      <button
        type="button"
        className={styles.button}
        onClick={copy}
        aria-label={label}
        title={value}
        data-state={state}
      >
        {children}
      </button>
      <span className={styles.feedback} role="status" data-state={state}>
        {message[state]}
      </span>
    </span>
  )
}
