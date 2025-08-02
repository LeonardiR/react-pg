import { useState } from "react"
import { formatPhoneNumber } from "../utils/formatPhoneNumber";
import PhoneInputField from "./PhoneInputField";
import ValidationMessage from "./ValidationMessage";

export default function PhoneInputNumber () {
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [isValid, setValidation] = useState<boolean>(false)

    function handleInput (e: React.ChangeEvent<HTMLInputElement>) {
        const cleaned = e.target.value.replace(/\D/g, '').slice(0, 10);

        const formattedValue = formatPhoneNumber(cleaned);

        setPhoneNumber(formattedValue); 
        setValidation(cleaned.length === 10); 
    }
    return (
        <div className="phone-input-number">
            <PhoneInputField value={phoneNumber} onChange={handleInput} />
            <ValidationMessage isValid={isValid} show={phoneNumber !== ''} />
        </div>
    )
}