import { emailPattern } from "../../constants/regex";

export const validateEmail = (email: string): string => {  
    if (!email.trim()) {
      return 'Email is required';
    } else if (!emailPattern.test(email)) {
      return 'Invalid email format';
    }
  
    return '';
  };
  
  export const validatePassword = (password: string): string => {
    if (password.trim().length < 6) {
      return 'Password must be at least 6 characters long';
    }
  
    return '';
  };
  
  export const validateConfirmPassword = (confirmPassword?: any, password?: any) =>{
    if (!confirmPassword.trim()) {
      return 'Please confirm your password';
    } else if (confirmPassword !== password) {
      return 'Passwords do not match';
    } else {
      return '';
    }
  }

  export const validateOTP = (otp:any)=>{
    if (otp.trim().length !== 6) {
      return 'Please enter a 6-digit OTP.';
    }
    return '';
  };