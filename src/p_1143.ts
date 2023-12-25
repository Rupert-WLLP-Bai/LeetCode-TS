// LeetCode - 1143

/**
 * 最长公共子序列
 * @param text1 字符串1
 * @param text2 字符串2
 */
export function longestCommonSubsequence(text1: string, text2: string): number {
    // 二维dp
    // dp[i][j]表示text1[0...i]和text2[0...j]的最长公共子序列
    const dp: number[][] = []

    // 初始化
    for (let i = 0; i <= text1.length; i++) {
        dp[i] = []
        for (let j = 0; j <= text2.length; j++) {
            dp[i][j] = 0
        }
    }

    // 递推
    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                // 相等
                dp[i][j] = dp[i - 1][j - 1] + 1 // 说明text1[i - 1]和text2[j - 1]是公共子序列的一部分, 长度+1
            } else {
                // 不相等
                // 这里为什么要取max, 因为text1[i - 1]和text2[j - 1]不相等, 说明它们不可能同时出现在最长公共子序列中
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    // 返回
    return dp[text1.length][text2.length]
}
