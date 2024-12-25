export const validateEmail = (email: string): string => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
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