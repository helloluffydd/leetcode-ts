/**
 * 1. Two Sum
 * https://leetcode.com/problems/two-sum
 *
 * Finds two numbers in the array that add up to the target sum.
 *
 * Algorithm approach:
 * Uses a hash map to store previously seen numbers and their indices.
 * For each number x, we check if (target - x) exists in the map.
 * If it does, we've found our pair. If not, we add x to the map.
 *
 * Example:
 * nums = [2, 7, 11, 15], target = 9
 * - When we see 2: Look for 7 (9-2), not found, store 2->0
 * - When we see 7: Look for 2 (9-7), found at index 0, return [1,0]
 *
 * Time Complexity: O(n) - Single pass through the array
 * Space Complexity: O(n) - Hash map can store up to n elements
 *
 * @param nums - Array of integers to search through
 * @param target - The target sum we're looking for
 * @returns Array of two indices whose corresponding values sum to target
 * @throws Error if no solution exists
 */
function twoSum(nums: number[], target: number): number[] {
  // Map to store complement numbers and their indices
  // Key: number we've seen, Value: its index
  // map = {2: 0, 7: 1, 11: 2, 15: 3}
  const map = new Map<number, number>();

  // Variable to store index of the complement number if found
  let pairIdx: number | undefined;

  for (let i = 0; i < nums.length; i++) {
    // Check if current number's complement (target - nums[i]) exists in map
    pairIdx = map.get(target - nums[i]);

    // If complement found, we have our pair
    if (pairIdx !== undefined) {
      return [i, pairIdx];
    }

    // Store current number and its index for future lookups
    map.set(nums[i], i);
  }

  // If we get here, no solution was found
  throw new Error('No solution');
}

export default twoSum;
