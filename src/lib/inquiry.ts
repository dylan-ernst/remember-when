/** Everything the contact form collects. */
export type InquiryFields = {
  first: string
  last: string
  email: string
  date: string
  message: string
}

/* Public endpoint, safe to ship in the bundle. Override per build if it moves. */
const DEFAULT_ENDPOINT =
  'https://kjfwxivupfidxshrqvce.supabase.co/functions/v1/receive-inquiry?org=93a4d9bc-9feb-475c-8739-2a1fe7c29849'

export const inquiryEndpoint = import.meta.env.VITE_INQUIRY_WEBHOOK || DEFAULT_ENDPOINT

/** Give up rather than leave the visitor watching a button that never settles. */
const TIMEOUT_MS = 15000

export function fullName(fields: InquiryFields): string {
  return [fields.first, fields.last].filter(Boolean).join(' ')
}

/**
 * Posts the inquiry to the booking inbox. Throws when the request fails or the
 * endpoint refuses it, so the form can offer the email fallback instead.
 */
export async function sendInquiry(fields: InquiryFields): Promise<void> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS)

  try {
    const response = await fetch(inquiryEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: fullName(fields),
        email: fields.email,
        message: fields.message,
        event_date: fields.date,
        source: 'Website contact form',
      }),
      signal: controller.signal,
    })

    if (!response.ok) {
      throw new Error(`Inquiry endpoint returned ${response.status}`)
    }
  } finally {
    clearTimeout(timeout)
  }
}
