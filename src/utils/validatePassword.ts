export const ValidationMeter = {
    Weak: 'Weak',
    Medium: 'Medium',
    Strong: 'Strong',
  } as const;
  
  export type ValidationMeter = typeof ValidationMeter[keyof typeof ValidationMeter];
  
  export type PasswordValidationResult = {
    isValid: boolean;
    meter: ValidationMeter;
  };
  
  export function validatePassword(password: string): PasswordValidationResult {
    if (password.length < 8) {
      return { isValid: false, meter: ValidationMeter.Weak };
    }
  
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[@.#$!%^&*.?]/.test(password);
  
    const allPassed = hasUppercase && hasNumber && hasSpecial;
  
    if (allPassed) return { isValid: true, meter: ValidationMeter.Strong };
  
    if (hasUppercase || hasNumber || hasSpecial)
      return { isValid: false, meter: ValidationMeter.Medium };
  
    return { isValid: false, meter: ValidationMeter.Weak };
  }