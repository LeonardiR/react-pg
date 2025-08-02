import { useEffect, useState } from "react"
import { formatCardNumber } from "../utils/formatCardNumber";
import { validateCreditCardNumberFakeApi } from "../utils/validateCreditCardNumberFakeApi";

export default function CreditCardInput () {
    const [cardNumber, setCardNumber] = useState('');
    const [validating, setValidating] = useState(false);
    const [isValid, setValid] = useState<boolean | null>(null);

    useEffect(() => {
        const digits = cardNumber.replace(/\s/g, '');

        if (digits.length === 16) {
          setValidating(true)
      
          const validate = async () => {
            try {
              const result = await validateCreditCardNumberFakeApi(cardNumber)
              setValid(result)
            } catch (error) {
              console.error('Validation error:', error)
              setValid(null)
            } finally {
              setValidating(false)
            }
          }
      
          validate()
        } else {
          setValid(null)
        }
    }, [cardNumber])
    
    function handleInput (e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        const formattedValue = formatCardNumber(value);
        
        setCardNumber(formattedValue);
    }

    return (
        <div className="credit-card-input">
            <label htmlFor="credit-card">Credit Card Number</label>
            <input 
                type="text" 
                id="credit-card" 
                name="credit-card" 
                onChange={handleInput} 
                value={cardNumber} 
            />
            <p>
                {validating 
                ? 'validating' 
                : isValid === null
                    ? ''
                    : isValid 
                        ? 'valid credit card' 
                        : 'invalid credit card'}
            </p>
        </div>
    )
}