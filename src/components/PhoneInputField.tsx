type Props = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  
  export default function PhoneInputField({ value, onChange }: Props) {
    return (
      <div>
        <label htmlFor="phone-number">Phone Number</label>
        <input
          id="phone-number"
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }