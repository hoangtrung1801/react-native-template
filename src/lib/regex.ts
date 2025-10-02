// Password must contain at least one uppercase letter, one lowercase letter, and one number
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

export const PHONE_NUMBER_REGEX = /^\+?[\d\s\-\(\)]+$/;
