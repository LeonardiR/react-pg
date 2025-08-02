type Props = {
    isValid: boolean;
    show: boolean;
  };
  
  export default function ValidationMessage({ isValid, show }: Props) {
    if (!show) return null;
  
    return (
      <p>
        {isValid ? 'Valid phone number' : 'Invalid phone number'}
      </p>
    );
  }