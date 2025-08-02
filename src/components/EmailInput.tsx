import { useState } from "react"

type EmailInputProps = {
    email?: string;
    onChange?: (value: string) => void;
}

export default function EmailInput({email, onChange}: EmailInputProps) {
    const  [value, setValue] = useState<string>(email || '');
    const [isValid, setValid] = useState<boolean | null>(null);


   const  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!value) {
        setValid(null);
        return;
    }

    setValue(e.target.value);
    
    const cleanedValue  = value.trim().toLowerCase();
   

    if(isValidEmail(cleanedValue)){
        setValid(true);
        onChange?.(cleanedValue);

    } else {
        setValid(false);
    }

    }

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        return emailRegex.test(email);
    };
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="email" className="text-sm">Email</label>
      <input aria-invalid={isValid === false} aria-describedby="email-validation-msg" value={value} onChange={handleInputChange} type="text" id="email" className="border border-gray-300 rounded-md p-2" />
      {isValid === null ? null : isValid ? <p id="email-validation-msg" className="text-green-500 text-sm">Email is valid</p> : <p className="text-red-500 text-sm">Email is not valid</p>}
    </div>
  )
}
