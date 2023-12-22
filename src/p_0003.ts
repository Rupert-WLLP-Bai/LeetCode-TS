// LeetCode - 3

/**
 * 计算给定字符串中最长无重复字符子串的长度。
 * @param s 给定的字符串
 * @returns 最长无重复字符子串的长度
 */
export function lengthOfLongestSubstring(s: string): number {
  const map = new Map<string, number>();
  let max = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (map.has(char)) {
      left = Math.max(map.get(char)!, left); // !表示map.get(char)一定不为undefined
    }
    max = Math.max(max, right - left + 1);
    map.set(char, right + 1);
  }
  return max;
}
