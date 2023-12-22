// LeetCode - 15

/**
 * 三数之和
 * @param {number[]} nums 整数数组
 * @returns {number[][]} 和为0的三元组
 */
export function threeSum(nums: number[]): number[][] {
    if (nums.length < 3) {
        return []
    }
    // 1. 排序
    nums.sort((a, b) => a - b)
    const result: number[][] = []
    // 2. 遍历
    for (let i = 0; i < nums.length - 2; i++) {
        // 2.1 如果当前数字大于0，后面的数字都大于0，不可能和为0
        if (nums[i] > 0) {
            break
        }
        // 2.2 如果当前数字和前一个数字相同，跳过
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        // 2.3 双指针遍历
        const target = -nums[i] // 确定一个数字后，另外两个数字的和
        const twoSumResult = twoSum(nums.slice(i + 1), target) // 从 i + 1 开始遍历
        for (const item of twoSumResult) {
            result.push([nums[i], ...item]) // ...item 表示将数组展开, 相当于 item[0], item[1]
        }
    }
    // 对result进行去重
    const map = new Map()
    for (const item of result) {
        map.set(item.toString(), item)
    }
    return [...map.values()]
}

/**
 * 双指针遍历辅助函数
 * @param {number[]} nums 整数数组
 * @param {number} target 目标值
 * @returns {number[][]} 和为 target 的两个数
 */
function twoSum(nums: number[], target: number): number[][] {
    const result: number[][] = []
    let left = 0 // 左指针
    let right = nums.length - 1 // 右指针
    while (left < right) {
        const sum = nums[left] + nums[right]
        if (sum === target) {
            result.push([nums[left], nums[right]])
            left++ // 找到一个结果后，左指针右移，右指针左移
            right-- // 这里两个指针都需要移动的原因是什么?
        } else if (sum < target) {
            left++ // 说明两数之和小于 target，左指针右移
        } else {
            right-- // 说明两数之和大于 target，右指针左移
        }
    }
    return result
}
