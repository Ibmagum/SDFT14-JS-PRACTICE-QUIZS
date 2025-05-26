function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Reverse the cleaned string
  const reversed = cleaned.split('').reverse().join('');
  
  // Check if the string equals its reverse
  return cleaned === reversed;
}

// Example usage:
console.log(isPalindrome("racecar"));        // true
console.log(isPalindrome("Madam"));          // true
console.log(isPalindrome("hello"));          // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
