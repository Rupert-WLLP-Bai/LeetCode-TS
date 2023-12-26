// LeetCode - 27

/**
 * LeetCode 27 移除元素
 * @param nums 数组
 * @param val 移除的元素
 */
export function removeElement(nums: number[], val: number): number {
    // 双指针
    // 1. 右侧指针首先找到第一个不为val的位置
    // 2. 左侧指针遇到val就和右侧交换位置
    // 3. 左侧指针遇到右侧指针就结束
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        if (nums[right] === val) {
            right-- // 右侧指针遇到val就向左移动
        } else if (nums[left] === val) {
            ;[nums[left], nums[right]] = [nums[right], nums[left]] // 交换位置
            left++
            right--
        } else {
            left++ // 左侧指针遇到不为val的元素就向右移动
        }
    }
    return left
}
