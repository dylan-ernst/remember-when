/** Builds the tap-to-call link from the number as it is written in Studio. */
export function telHref(phone: string): string {
  const digits = phone.replace(/\D/g, '')
  /* US numbers are stored without the country code, e.g. (949) 345-0434. */
  return `tel:${digits.length === 10 ? `+1${digits}` : `+${digits}`}`
}
