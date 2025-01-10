/**
 * 238. Product of Array Except Self
 * https://leetcode.com/problems/product-of-array-except-self
 *
 * Problem: Given an array nums, return an array answer such that answer[i] is equal to
 * the product of all elements of nums except nums[i]. Must solve in O(n) time without
 * using division operation.
 *
 * Example:
 * Input:  [1,    2,    3,    4]
 * Output: [24,   12,    8,    6]
 *
 * Visual representation of the process:
 *
 * Input:     [1,    2,    3,    4]
 *
 * Prefix:    [1,    1,    2,    6]    ← Products of all elements to the left
 *             ↑     ↑     ↑     ↑
 *             1   1*1   1*2   2*3
 *
 * Suffix:    [24,   12,   4,    1]    ← Products of all elements to the right
 *             ↑     ↑     ↑     ↑
 *          2*3*4  3*4    4     1
 *
 * Result:    [24,   12,    8,    6]   ← Multiply prefix[i] * suffix[i]
 *          (1*24) (1*12) (2*4) (6*1)
 *
 * Detailed Steps:
 * 1. Create prefix array:
 *    - pref[0] = 1 (no elements to the left)
 *    - pref[i] = nums[i-1] * pref[i-1]
 *
 * 2. Create suffix array:
 *    - suff[n-1] = 1 (no elements to the right)
 *    - suff[i] = nums[i+1] * suff[i+1]
 *
 * 3. Combine arrays:
 *    - result[i] = pref[i] * suff[i]
 *
 * Time Complexity: O(n) where n is the length of nums
 * Space Complexity: O(n) for storing prefix and suffix arrays
 */

function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const res = new Array(n);
  const pref = new Array(n);  // Store products of elements to the left
  const suff = new Array(n);  // Store products of elements to the right

  // Initialize edge cases (no elements to left/right)
  pref[0] = 1;
  suff[n - 1] = 1;

  // Build prefix products from left to right
  for (let i = 1; i < n; i++) {
    pref[i] = nums[i - 1] * pref[i - 1];
  }

  // Build suffix products from right to left
  for (let i = n - 2; i >= 0; i--) {
    suff[i] = nums[i + 1] * suff[i + 1];
  }

  // Combine prefix and suffix products
  for (let i = 0; i < n; i++) {
    res[i] = pref[i] * suff[i];
  }
  return res;
}

export default productExceptSelf;
