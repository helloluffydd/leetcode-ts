/**
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters
 *
 * Problem: Given a string s, find the length of the longest substring without repeating characters.
 *
 * Approach: Sliding Window
 * - Use two pointers (l, r) to maintain a window of unique characters
 * - Use a Set to track characters in the current window
 * - When a duplicate is found, shrink window from left until duplicate is removed
 * - Keep track of maximum window size seen so far
 *
 * Time Complexity: O(n) where n is the length of the string
 * Space Complexity: O(min(m, n)) where m is the size of the character set
 */
function lengthOfLongestSubstring(s: string): number {
  // Set to store characters in current window
  const charSet = new Set();
  // Left pointer of sliding window
  let l = 0;
  // Variable to store the maximum length found
  let res = 0;

  // Right pointer iterates through the string
  for (let r = 0; r < s.length; r++) {
    // If character exists in set, shrink window from left
    // It's a while loop because we might have to shrink the window multiple times
    // (if there are multiple duplicates in the window)
    while (charSet.has(s[r])) {
      charSet.delete(s[l]);
      l++;
    }
    // Add current character to set
    charSet.add(s[r]);
    // Update maximum length (current window size is r - l + 1)
    res = Math.max(res, r - l + 1);
  }
  return res;
}

/**
 * Alternative implementation using Map instead of Set
 * This approach optimizes the window shrinking by directly jumping to the position after the last duplicate
 *
 * Key differences from the first approach:
 * - Uses Map to store character positions instead of Set
 * - Eliminates the need for a while loop by jumping the left pointer
 * - Handles overlapping cases with Math.max(mp.get(s[r]) + 1, l)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(min(m, n)) where m is the size of the character set
 */
function lengthOfLongestSubstring2(s: string): number {
  // Map to store character -> its last position
  let mp = new Map();
  // Left pointer and result variable
  let l = 0,
    res = 0;

  for (let r = 0; r < s.length; r++) {
    // If character exists in map, move left pointer to position after the last occurrence
    // Math.max ensures we don't move left pointer backwards in case of old duplicates
    if (mp.has(s[r])) {
      l = Math.max(mp.get(s[r]) + 1, l);
    }
    // Update character's position in map
    mp.set(s[r], r);
    // Update maximum length
    res = Math.max(res, r - l + 1);
  }
  return res;
}

export default lengthOfLongestSubstring;
