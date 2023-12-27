// LeetCode - 120

/**
 * LeetCode 120 三角形最小路径和
 * @param triangle 三角形数组
 */
export function minimumTotal(triangle: number[][]): number {
    // 动态规划
    const len0 = triangle.length
    const len1 = triangle[len0 - 1].length
    const dp: number[][] = new Array(len0)
    for (let i = 0; i < len0; i++) {
        dp[i] = new Array(len1)
    }

    // 第一个位置
    dp[0][0] = triangle[0][0]

    // 递推
    for (let i = 1; i < len0; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (j === 0) {
                dp[i][j] = dp[i - 1][j] + triangle[i][j]
            } else if (j === triangle[i].length - 1) {
                dp[i][j] = dp[i - 1][j - 1] + triangle[i][j]
            } else {
                dp[i][j] =
                    Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j]
            }
        }
    }

    return Math.min(...dp[len0 - 1]) // 展开最后一层的数组，取最小值
}

// 优化: 由于每次只需要上一层的数据，所以可以只用一个数组来存储
// 即dp[i][j] 其中i这个维度都是从dp[i-1][j]或者dp[i-1][j-1]转移过来的, 所以可以压缩成dp[j]这个一维数组

/**
 * LeetCode 120 三角形最小路径和 一维数组
 * @param triangle 三角形数组
 */
export function minimumTotal1D(triangle: number[][]): number {
    // 动态规划
    const len0 = triangle.length
    const len1 = triangle[len0 - 1].length
    const dp: number[] = new Array(len1)

    // 第一个位置
    dp[0] = triangle[0][0]

    // 递推
    for (let i = 1; i < len0; i++) {
        for (let j = triangle[i].length - 1; j >= 0; j--) {
            if (j === 0) {
                dp[j] = dp[j] + triangle[i][j]
            } else if (j === triangle[i].length - 1) {
                dp[j] = dp[j - 1] + triangle[i][j]
            } else {
                dp[j] = Math.min(dp[j - 1], dp[j]) + triangle[i][j]
            }
        }
    }

    return Math.min(...dp) // 展开最后一层的数组，取最小值
}
