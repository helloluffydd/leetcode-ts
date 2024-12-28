/**
 * 11. Container With Most Water
 * https://leetcode.com/problems/container-with-most-water
 * 
 * Problem: Given n non-negative integers height[i] representing the height of lines,
 * find two lines that together with the x-axis forms a container that contains the most water.
 * Return the maximum amount of water the container can store.
 * 
 * Example:
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Visual:
 *     
 * 8     |         |
 * 7     |         |   |
 * 6     | |       |   |
 * 5     | |   |   |   | 
 * 4     | |   | | |   |  
 * 3     | |   | | | | |   
 * 2     | | | | | | | |
 * 1   | | | | | | | | |      
 *     1 8 6 2 5 4 8 3 7
 * 
 * Area = min(8,7) * 7 = 7 * 7 = 49
 * 
 * Approach (Two Pointers):
 * 1. Start with widest container (two pointers at ends)
 * 2. Area = min(height[left], height[right]) * (right - left)
 * 3. Move the pointer with smaller height inward
 *    - Moving the taller line can only decrease area
 *    - Moving shorter line might find a taller line
 * 
 * Time Complexity: O(n) - single pass through array
 * Space Complexity: O(1) - only using two pointers
 */

function maxArea(height: number[]): number {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        // Calculate current container dimensions
        const width = right - left;
        const containerHeight = Math.min(height[left], height[right]);
        const area = width * containerHeight;

        // Update maximum water if current area is larger
        maxWater = Math.max(maxWater, area);

        // Move pointer with smaller height inward
        // If heights are equal, moving either pointer is fine
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}

export default maxArea;
