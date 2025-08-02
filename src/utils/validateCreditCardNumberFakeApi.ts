export async function validateCreditCardNumberFakeApi(cardNumber: string): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 1000))
  
  
    const digitsOnly = cardNumber.replace(/\D/g, '')
    return !digitsOnly.endsWith('0')
  }