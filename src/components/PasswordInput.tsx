import { useState } from "react";
import { validatePassword, ValidationMeter, type PasswordValidationResult } from "../utils/validatePassword";
type PasswordInputProps = {
    onChange?: (password: string, isValid: boolean) => void;
};



export default function PasswordInput({onChange}: PasswordInputProps) {
    
    const [inputValue, setInputValue] = useState<string>('');
    const [isValid, setIsValid] = useState<null | boolean>(null);
    const [validationMeter, setValidationMeter] = useState<ValidationMeter | null>(null);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setValidationMeter(ValidationMeter.Weak);

        setInputValue(value);

        const cleaned = value.trim();

        const passwordValidation : PasswordValidationResult = validatePassword(cleaned);
        setIsValid(passwordValidation.isValid);
        setValidationMeter(passwordValidation.meter);
        onChange?.(cleaned, passwordValidation.isValid);
    };


  return (
    <div>
      <label htmlFor="password">Password</label>
      <input aria-describedby="password-strength" className="w-full p-2 border border-gray-300 rounded-md" type="password" name="password" id="password" value={inputValue} onChange={handleInputChange} />
      {validationMeter !== null &&
        <p 
            className={`p-y7 ${validationMeter === ValidationMeter.Weak 
                ? 'text-red-500' 
                : validationMeter === ValidationMeter.Medium
                ? 'text-yellow-500'
                : 'text-green-500'}`}
            >{`Password strength: ${validationMeter}`}</p>
        }
      <p style={{color: isValid === false ? 'red' : 'green'}}>{isValid === null ? '' : isValid ? 'Valid' : 'Invalid'}</p>
    </div>
  )

}
