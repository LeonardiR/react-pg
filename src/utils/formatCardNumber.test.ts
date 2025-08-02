import { formatCardNumber } from "./formatCardNumber"

describe('formatCardNumber', () => {
    test('format card number correclty', () => {
        expect(formatCardNumber('1234567890123456')).toBe('1234 5678 9012 3456')
    })

    test('removes non-digit characters', () => {
        expect(formatCardNumber('1234-5678-9012-3456')).toBe('1234 5678 9012 3456')
        expect(formatCardNumber('1234abcd5678efgh9012ijkl3456')).toBe('1234 5678 9012 3456')
      })
      
      test('handles short numbers gracefully', () => {
        expect(formatCardNumber('123')).toBe('123')
        expect(formatCardNumber('1234567')).toBe('1234 567')
      })
      
      test('returns empty string if input is empty', () => {
        expect(formatCardNumber('')).toBe('')
      })
});