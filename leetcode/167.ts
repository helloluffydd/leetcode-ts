/**
 * 167. Two Sum II - Input Array Is Sorted
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted
 * 
 * Problem: Given a 1-indexed sorted array of integers numbers and a target integer,
 * find two numbers that add up to target. Return the indices of these numbers (1-indexed).
 * The solution must use constant extra space.
 * 
 * Example:
 * Input: numbers = [2,7,11,15], target = 9
 * Output: [1,2]
 * Explanation: 2 + 7 = 9, so indices are [1,2]
 * 
 * Two possible approaches:
 * 1. Two Pointers (Optimal, O(1) space):
 *    - Use left and right pointers since array is sorted
 *    - Move pointers based on sum comparison with target
 * 
 * 2. Hash Map (O(n) space):
 *    - Store complement (target - num) in map
 *    - Check if current number exists as complement
 */

/**
 * Two Pointers approach - O(n) time, O(1) space
 * Since array is sorted, we can use two pointers to find the pair
 */
function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        
        if (sum === target) {
            // Found the pair, return 1-indexed positions
            return [left + 1, right + 1];
        } else if (sum < target) {
            // Sum too small, increase left pointer
            left++;
        } else {
            // Sum too large, decrease right pointer
            right--;
        }
    }

    // No solution found (problem guarantees a solution exists)
    return [];
}

/**
 * Hash Map approach - O(n) time, O(n) space
 * While this works, it uses extra space and doesn't take advantage of the sorted property
 */
function twoSumMap(numbers: number[], target: number): number[] {
    // Map to store complement -> index
    const map = new Map<number, number>();

    for (let i = 0; i < numbers.length; i++) {
        // Check if current number completes a pair
        if (map.has(numbers[i])) {
            // Return 1-indexed positions
            return [map.get(numbers[i])! + 1, i + 1];
        }
        // Store complement (target - current number) and its index
        map.set(target - numbers[i], i);
    }

    // No solution found (problem guarantees a solution exists)
    return [];
}

export default twoSum;
