import { useRef, useState } from "react";

export default function SecurityCodeInput() {
  const [digits, setDigits] = useState(['', '', '']);
  const refs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  const handleChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (!/^\d$/.test(val)) return;

    const newDigits = [...digits];
    newDigits[index] = val;
    setDigits(newDigits);

    if (index < refs.length - 1) {
      refs[index + 1].current?.focus();
    }
  };

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
            className="w-10 h-10 border rounded text-center"
          />
        ))}
      </div>
      <button
        className="border rounded px-4 py-2"
        disabled={digits.some((d) => d === '')}
      >
        Send
      </button>
    </div>
  );
}
