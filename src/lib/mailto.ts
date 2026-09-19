import type { InquiryFields } from './inquiry'
import { fullName } from './inquiry'

/**
 * Builds the mailto link offered when the inquiry cannot be posted.
 * Every value is URL-encoded, so text the visitor typed cannot alter the link.
 */
export function buildInquiryMailto(to: string, fields: InquiryFields): string {
  const name = fullName(fields)
  const subject = `Photo booth inquiry: ${name}`
  const body = [
    `Name: ${name}`,
    `Email: ${fields.email}`,
    `Event: ${fields.date}`,
    '',
    fields.message,
  ].join('\n')

  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
