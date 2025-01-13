/**
 * 153. Find Minimum in Rotated Sorted Array
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array
 *
 * Finds the minimum element in a rotated sorted array.
 * A rotated sorted array is an array that was originally sorted in ascending order
 * but has been rotated at some pivot point. Example: [4,5,6,7,0,1,2] -> minimum is 0
 *
 * The algorithm uses a modified binary search approach:
 * 1. If the middle element is greater than the rightmost element,
 *    the minimum must be in the right half
 * 2. If the middle element is less than the rightmost element,
 *    the minimum could be the middle element or in the left half
 *
 * Key insight: In a rotated sorted array, the minimum element is the only element
 * that is smaller than its previous element.
 *
 * Time Complexity: O(log n) - Binary search approach
 * Space Complexity: O(1) - Only uses constant extra space
 *
 * @param nums - The rotated sorted array to search in
 * @returns The minimum element in the array
 */
function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    // Calculate middle point using overflow-safe formula
    // Use overflow-safe formula to calculate middle point
    // Avoid overflow when left + right is larger than the max of number
    // The normal formula: mid = (left + right) / 2 will cause overflow
    // The overflow-safe formula: mid = left + (right - left) / 2
    let mid = Math.floor(left + (right - left) / 2);

    // If middle element is less than rightmost element,
    // minimum is either mid or in left half
    if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      // If middle element is greater than rightmost element,
      // minimum must be in right half
      left = mid + 1;
    }
  }
  // At this point, left pointer will be at the minimum element
  return nums[left];
}

export default findMin;
