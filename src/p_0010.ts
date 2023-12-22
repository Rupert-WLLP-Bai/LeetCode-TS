// LeetCode - 10

/**
 * 正则表达式匹配
 * @param s 字符串
 * @param p 正则表达式
 * @returns 是否匹配
 */
export function isMatch(s: string, p: string): boolean {
  // . 表示任意单个字符
  // * 表示前一个字符可以出现任意次数（包含 0 次）

  // 使用dp[i][j]表示s的前i个字符和p的前j个字符是否匹配
  const dp: boolean[][] = [];
  for (let i = 0; i <= s.length; i++) {
    dp[i] = [];
    for (let j = 0; j <= p.length; j++) {
      dp[i][j] = false;
    }
  }
  dp[0][0] = true;

  // 初始化第一行
  for (let j = 1; j <= p.length; j++) {
    if (p[j - 1] === "*") {
      dp[0][j] = dp[0][j - 2]; // 如果p的当前字符为*，则s的前0个字符和p的前j个字符是否匹配取决于s的前0个字符和p的前j-2个字符是否匹配
    }
  }

  // 开始遍历
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      // 如果当前字符相等或者p的当前字符为.，则当前状态与前一个状态相同
      if (s[i - 1] === p[j - 1] || p[j - 1] === ".") {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === "*") {
        // 如果p的当前字符为*，则有两种情况
        // 1. * 前面的字符出现 0 次，即 dp[i][j] = dp[i][j - 2]
        // 2. * 前面的字符出现 1 次或多次，即 dp[i][j] = dp[i - 1][j] && (s[i - 1] === p[j - 2] || p[j - 2] === '.')
        dp[i][j] =
          dp[i][j - 2] ||
          (dp[i - 1][j] && (s[i - 1] === p[j - 2] || p[j - 2] === "."));
      }
    }
  }

  return dp[s.length][p.length];
}
