export type InquiryFields = {
  first: string
  last: string
  email: string
  date: string
  message: string
}

/**
 * Builds the mailto link the contact form hands to the visitor's mail app.
 * Every value is URL-encoded, so text the visitor typed cannot alter the link.
 */
export function buildInquiryMailto(to: string, fields: InquiryFields): string {
  const name = [fields.first, fields.last].filter(Boolean).join(' ')
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
