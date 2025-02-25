/**
 * 33. Search in Rotated Sorted Array
 * https://leetcode.com/problems/search-in-rotated-sorted-array
 *
 * Searches for a target value in a rotated sorted array.
 * A rotated sorted array is an array that was originally sorted in ascending order
 * but has been rotated at some pivot point. Example: [4,5,6,7,0,1,2]
 *
 * The algorithm uses a modified binary search approach to handle the rotation:
 * 1. First, it determines which half of the array is sorted
 * 2. Then, checks if the target lies in the sorted portion
 * 3. If yes, search in that half; if no, search in the other half
 *
 * Time Complexity: O(log n) - Binary search approach
 * Space Complexity: O(1) - Only uses a constant amount of extra space
 *
 * @param nums - The rotated sorted array to search in
 * @param target - The value to search for
 * @returns The index of target if found, -1 otherwise
 */
function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // Calculate middle point
    let mid = Math.floor((left + right) / 2);

    // If target found at mid, return its index
    if (nums[mid] === target) {
      return mid;
    }
    // Check if the left half is sorted
    else if (nums[mid] >= nums[left]) {
      // If target is in the sorted left half
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1; // Search in left half
      } else {
        left = mid + 1; // Search in right half
      }
    }
    // Right half must be sorted
    else {
      // If target is in the sorted right half
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1; // Search in right half
      } else {
        right = mid - 1; // Search in left half
      }
    }
  }

  // Target not found
  return -1;
}

export default search;
