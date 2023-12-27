// LeetCode - 53

/**
 * LeetCode 53 最大子数组和
 * @param nums 数组
 */
export function maxSubArray(nums: number[]): number {
    // 动态规划
    // 对于一个位置nums[i]来说, 只有两种情况:
    // 1. 将nums[i]加入之前的数组, 此时和变大
    // 2. nums[i]使得和变小, 则从nums[i]重新开始一个序列
    // dp[i] = Math.max(dp[i-1]+nums[i], nums[i])
    const len = nums.length
    const dp = Array(len).fill(0)

    // 初始值
    dp[0] = nums[0]

    // 递推
    for (let i = 1; i < len; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    }

    // 取dp中的最大值
    return Math.max(...dp)
}
