// LeetCode - 62

/**
 * LeetCode 62 不同路径
 * @param m
 * @param n
 */
export function uniquePaths(m: number, n: number): number {
    // 动态规划
    // 1. dp[i][j]表示从(0,0)到(i,j)的路径数
    // 2. dp[i][j] = dp[i-1][j] + dp[i][j-1]
    // 原因是只能向下或者向右移动, 所以到达(i,j)的路径数等于到达(i-1,j)的路径数加上到达(i,j-1)的路径数
    const dp: number[][] = []
    for (let i = 0; i < m; i++) {
        dp[i] = []
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 1 // 边界条件
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1] // 状态转移方程
            }
        }
    }
    return dp[m - 1][n - 1]
}
