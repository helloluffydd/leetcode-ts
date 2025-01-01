/**
 * 22. Generate Parentheses
 * https://leetcode.com/problems/generate-parentheses
 *
 * Problem:
 * Given n pairs of parentheses, write a function to generate all combinations of
 * well-formed parentheses.
 *
 * Example:
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 * Explanation: A total of 5 valid combinations of 3 pairs of parentheses are possible.
 *
 * Approach:
 * 1. Use backtracking to explore all valid combinations.
 *    - Maintain two counters: `openN` for the number of '(' used, and `closedN` for the number of ')' used.
 *    - Add '(' as long as `openN < n`.
 *    - Add ')' as long as `closedN < openN` (to ensure valid combinations).
 * 2. Base Case:
 *    - If both `openN` and `closedN` equal `n`, a valid combination is formed.
 *    - Add the current combination to the result array.
 * 3. Recursive Case:
 *    - Explore adding '(' or ')' recursively.
 *
 * Time Complexity: O(4^n / √n) - Catalan number growth rate for valid combinations.
 * Space Complexity: O(n) - Depth of the recursion stack.
 */

function backtrack(
  openN: number, // Number of '(' added so far
  closedN: number, // Number of ')' added so far
  n: number, // Total number of pairs of parentheses
  res: string[], // Array to store valid combinations
  stack = '' // Current combination of parentheses being built
) {
  // Base case: If both counters reach n, a valid combination is formed
  if (openN === closedN && openN === n) {
    res.push(stack); // Add the combination to the result
    return;
  }

  // Recursive case: Add '(' if we can still add more
  if (openN < n) {
    backtrack(openN + 1, closedN, n, res, stack + '(');
  }

  // Recursive case: Add ')' if we can still close more parentheses
  if (closedN < openN) {
    backtrack(openN, closedN + 1, n, res, stack + ')');
  }
}

function generateParenthesis(n: number): string[] {
  const res: string[] = []; // Array to store all valid combinations
  backtrack(0, 0, n, res, ''); // Start backtracking with initial state
  return res; // Return the result array
}

export default generateParenthesis;
