import { createRef, useEffect, useState } from "react";

type Props = {
  digitsNumber?: number
  onSubmit?: (digits: string[]) => void;
}

export default function SecurityCodeInput({digitsNumber = 3 ,onSubmit}: Props) {
  const [digits, setDigits] = useState<string[]>(() => Array.from({ length: digitsNumber }, () => ""));

  const [refs] = useState(() => Array.from({ length: digitsNumber }, () => createRef<HTMLInputElement>()));

  const [nextFocusIndex, setNextFocusIndex] = useState<number | null>(null);

  useEffect(() => {
    if (nextFocusIndex !== null && refs[nextFocusIndex]?.current) {
      
      refs[nextFocusIndex].current.focus();
      setNextFocusIndex(null);
    }
  }, [nextFocusIndex, refs]);

  const handleChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (!/^\d$/.test(val)) return;
  
    const newDigits = [...digits];
    newDigits[index] = val;
    setDigits(newDigits);
  
    if (index < refs.length - 1) {
      setNextFocusIndex(index + 1); 
    }

  };

  const handleSubmit = () => {
    if (digits.every((d) => d !== '')) {
      onSubmit?.(digits);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <label>Enter Code</label>
      <div className="flex gap-2 py-5">
        {digits.map((digit, i) => (
          <input
            key={i}
            ref={refs[i]}
            value={digit}
            maxLength={1}
            onChange={handleChange(i)}
            disabled={i > 0 && !digits[i - 1]}
            className="w-10 h-10 border border-gray-300 rounded-md p-2 text-center"
          />
        ))}
      </div>
      <button
        className="border border-gray-300 rounded-md p-2 px-4 py-2 cursor-pointer"
        disabled={digits.some((d) => d === '')}
        onClick={handleSubmit}
      >
        Send
      </button>
    </div>
  );
}
