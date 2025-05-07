function validateBrackets(s) {
  let brackets = {
    "]": "[",
    "}": "{",
    ")": "(",
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (Object.values(brackets).includes(s[i])) {
        stack.push(s[i]);
    } else {
      if (stack.pop() !== brackets[s[i]]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(validateBrackets("(){}[]{"));  
