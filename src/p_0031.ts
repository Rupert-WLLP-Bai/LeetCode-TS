// LeetCode - 31

/**
 * LeetCode 31 下一个排列
 * @param nums 传入的数组
 */
export function nextPermutation(nums: number[]): void {
    // 思路: 从后往前找到第一个非递增的数，然后从后往前找到第一个比它大的数，交换这两个数，然后把后面的数排序
    let i = nums.length - 1
    while (i > 0 && nums[i] <= nums[i - 1]) {
        i--
    }
    if (i > 0) {
        let j = nums.length - 1
        while (j >= i && nums[j] <= nums[i - 1]) {
            j--
        }
        swap(nums, i - 1, j) // 交换
    }
    // 排序, 时间复杂度 O(n)
    // 为什么这里可以直接交换, 因为这里数组必然是递减的
    let left = i
    let right = nums.length - 1
    while (left < right) {
        swap(nums, left, right)
        left++
        right--
    }
}

function swap(nums: number[], i: number, j: number) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}
