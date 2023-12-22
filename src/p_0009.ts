// LeetCode - 9

/**
 * 回文数
 * @param x 输入的数字
 * @returns 是否为回文数
 */
export function isPalindrome(x: number): boolean {
  const x_string = x.toString();
  const x_reverse = x_string.split("").reverse().join("");
  return x_string === x_reverse;
}
