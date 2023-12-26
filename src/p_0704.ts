/**
 * LeetCode: 704. 二分查找
 * @param nums 数组
 * @param target 目标值
 */
export function search(nums: number[], target: number): number {
    let l = 0
    let r = nums.length - 1

    while (l <= r) {
        const m = Math.floor((l + r) / 2)
        if (nums[m] == target) {
            return m
        }
        if (nums[m] > target) {
            r = m - 1
        } else if (nums[m] < target) {
            l = m + 1
        }
    }
    return -1
}
