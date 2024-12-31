/**
 * 20. Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses
 *
 * Problem: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid. A string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 *
 * Example:
 * Input: s = "()[]{}"
 * Output: true
 *
 * Approach:
 * Use a stack to keep track of opening brackets. When we encounter a closing bracket,
 * it should match the most recent opening bracket (top of stack). If at any point
 * we find a mismatch or have leftover brackets, the string is invalid.
 *
 * Time Complexity: O(n) where n is the length of the string
 * Space Complexity: O(n) for storing brackets in the stack
 */

function isValid(s: string): boolean {
  // Stack to store opening brackets
  const stack: string[] = [];

  // Process each character in the string
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // If it's an opening bracket, push to stack
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    }
    // For closing brackets, check if they match the last opening bracket
    else if (char === ')' && stack.pop() !== '(') {
      return false;
    } else if (char === ']' && stack.pop() !== '[') {
      return false;
    } else if (char === '}' && stack.pop() !== '{') {
      return false;
    }
  }

  // Check if there are any unclosed brackets
  return stack.length === 0;
}

export default isValid;
