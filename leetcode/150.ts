/**
 * 150. Evaluate Reverse Polish Notation
 * https://leetcode.com/problems/evaluate-reverse-polish-notation
 *
 * Problem:
 * Evaluate the value of an arithmetic expression in Reverse Polish Notation (RPN).
 * Valid operators are '+', '-', '*', and '/'.
 * Each operand may be an integer or another expression.
 * Division between two integers should truncate toward zero.
 * It is guaranteed that the given RPN expression is always valid.
 *
 * Example:
 * Input: tokens = ["2","1","+","3","*"]
 * Output: 9
 * Explanation: ((2 + 1) * 3) = 9
 *
 * Approach:
 * - Use a stack to store operands.
 * - Iterate through each token in the input array:
 *   - If the token is an operator, pop the top two elements from the stack,
 *     apply the operator, and push the result back onto the stack.
 *   - If the token is an operand, convert it to an integer and push it onto the stack.
 * - After processing all tokens, the stack will contain the result of the expression.
 *
 * Time Complexity: O(n), where n is the number of tokens.
 * Space Complexity: O(n), for storing operands in the stack.
 */

function evalRPN(tokens: string[]): number {
  // Initialize an empty stack to store operands
  const stack: number[] = [];

  // Iterate through each token in the input array
  for (const token of tokens) {
    // Check if the token is an operator
    if (token === '+' || token === '-' || token === '*' || token === '/') {
      // Pop the top two operands from the stack
      const rightOperand = stack.pop()!;
      const leftOperand = stack.pop()!;

      // Apply the operator and push the result back onto the stack
      switch (token) {
        case '+':
          stack.push(leftOperand + rightOperand);
          break;
        case '-':
          stack.push(leftOperand - rightOperand);
          break;
        case '*':
          stack.push(leftOperand * rightOperand);
          break;
        case '/':
          // Perform integer division that truncates toward zero
          stack.push(Math.trunc(leftOperand / rightOperand));
          break;
      }
    } else {
      // The token is an operand; convert it to an integer and push onto the stack
      stack.push(parseInt(token));
    }
  }

  // The final result is the only element left in the stack
  return stack.pop()!;
}

export default evalRPN;
