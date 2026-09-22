import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { ContentStatus } from '../components/ContentStatus'
import { PageHero } from '../components/PageHero'
import type { SiteSettings } from '../content/types'
import { useContent } from '../content/useContent'
import { focalStyle, sizedUrl } from '../lib/images'
import { telHref } from '../lib/phone'
import type { InquiryFields } from '../lib/inquiry'
import { sendInquiry } from '../lib/inquiry'
import { buildInquiryMailto } from '../lib/mailto'
import { useRevealGroup } from '../hooks/useRevealGroup'
import { usePageTitle } from '../hooks/usePageTitle'
import styles from './Contact.module.css'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function Contact({ settings }: { settings: SiteSettings }) {
  const pageRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [fallback, setFallback] = useState('')
  const content = useContent('contact')
  useRevealGroup(pageRef)
  usePageTitle('Contact | Remember When Photo Booth')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'sending') return

    const form = event.currentTarget
    const data = new FormData(form)
    const read = (field: string) => String(data.get(field) ?? '').trim()
    const fields: InquiryFields = {
      first: read('first'),
      last: read('last'),
      email: read('email'),
      date: read('date'),
      message: read('message'),
    }

    setStatus('sending')
    try {
      await sendInquiry(fields)
      /* Nothing left to resend, so don't leave the visitor's words sitting there. */
      form.reset()
      setStatus('sent')
    } catch {
      /* Never swallow it: hand the visitor a way to reach the inbox anyway. */
      setFallback(buildInquiryMailto(settings.email, fields))
      setStatus('error')
    }
  }

  if (content.status !== 'ready') return <ContentStatus {...content} />
  const { hero, featureImage, form } = content.data

  return (
    <div ref={pageRef}>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        lead={hero.lead}
        image={hero.image}
        className={styles.hero}
      />

      <section className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.panel} data-reveal="0">
            <img
              className={styles.panelImage}
              src={sizedUrl(featureImage.url, 1400)}
              alt={featureImage.alt}
              style={focalStyle(featureImage)}
              loading="lazy"
            />
            <div className={styles.panelScrim} />
            <div className={styles.channels}>
              <a href={telHref(settings.phone)} className={styles.channel}>
                <span>
                  <span className={styles.channelLabel}>PHONE · CALL OR TEXT</span>
                  <span className={styles.channelValue}>{settings.phone}</span>
                </span>
                <span className={styles.channelArrow} aria-hidden="true">
                  →
                </span>
              </a>

              <a href={`mailto:${settings.email}`} className={styles.channel}>
                <span className={styles.channelText}>
                  <span className={styles.channelLabel}>EMAIL</span>
                  <span className={styles.channelEmail}>{settings.email}</span>
                </span>
                <span className={styles.channelArrow} aria-hidden="true">
                  →
                </span>
              </a>

              {settings.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener"
                  className={styles.channel}
                >
                  <span>
                    <span className={styles.channelLabel}>{social.label}</span>
                    <span className={styles.channelValue}>{settings.socialHandle}</span>
                  </span>
                  <span className={styles.channelArrow} aria-hidden="true">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          <form className={styles.form} data-reveal="120" onSubmit={handleSubmit}>
            <h2 className={styles.formHeading}>{form.heading}</h2>

            <div className={styles.nameRow}>
              <input
                className={styles.input}
                name="first"
                required
                aria-label="First name"
                placeholder="First name"
              />
              <input
                className={styles.input}
                name="last"
                aria-label="Last name"
                placeholder="Last name"
              />
            </div>

            <input
              className={styles.input}
              name="email"
              type="email"
              required
              aria-label="Email"
              placeholder="Email"
            />
            <input
              className={styles.input}
              name="date"
              aria-label="Event date and type"
              placeholder="Event date & type (e.g. 6/14, wedding)"
            />
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              name="message"
              required
              rows={5}
              aria-label="Tell us about your event"
              placeholder="Tell us about your event..."
            />

            <button type="submit" className={styles.submit} disabled={status === 'sending'}>
              {status === 'sending' ? form.sendingLabel : form.submitLabel}
            </button>

            {status === 'sent' && (
              <p className={styles.sent} role="status">
                {form.sentMessageLead}
                <br />
                {form.sentMessageBody}
              </p>
            )}

            {status === 'error' && (
              <p className={styles.error} role="status">
                {form.errorMessage}{' '}
                <a href={fallback}>{form.errorLinkLabel}</a>
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}
