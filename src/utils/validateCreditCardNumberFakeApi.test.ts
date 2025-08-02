import { validateCreditCardNumberFakeApi } from "./validateCreditCardNumberFakeApi"

describe('validateCreditCardNumberFakeApi', () => {
    test('expect response to be valid (true)', async () => {
       await expect(validateCreditCardNumberFakeApi('1234 5678 9012 3456')).resolves.toBe(true);
    })


    test('expect response to be invalid when credit card number ends in 0 (false)', async () => {
        await expect(validateCreditCardNumberFakeApi('1234 5678 9012 3450')).resolves.toBe(false);
     })
})