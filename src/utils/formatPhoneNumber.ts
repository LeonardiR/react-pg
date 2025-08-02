export function formatPhoneNumber(value: string): string {
  const cleaned = value.replace(/\D/g, '').slice(0, 10) // limit to 10 digits

  const area = cleaned.slice(0, 3)
  const middle = cleaned.slice(3, 6)
  const last = cleaned.slice(6, 10)
  
  if (cleaned.length === 0) return ``
  if (cleaned.length <= 3) return `(${area}`
  if (cleaned.length <= 6) return `(${area}) ${middle}`
  return `(${area}) ${middle}-${last}`
}