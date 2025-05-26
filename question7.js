function evaluatePassword(password) {
  const hasMinimumLength = password.length >= 8;
  const hasNumber = /[0-9]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);

  if (hasMinimumLength && hasNumber && hasUppercase) {
    return "Strong";
  } else {
    return "Weak";
  }
}

// Example usage:
console.log(evaluatePassword("Mugambi2001")); // Strong
console.log(evaluatePassword("Mugambi"));      // Weak
console.log(evaluatePassword("mugambi")); // Weak
