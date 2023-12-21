// LeetCode - 5

/**
 * 寻找最长回文子串
 * @param {string} s 输入字符串
 * @returns {string} 最长回文子串
 */
export function longestPalindrome(s: string): string {
    if (s.length < 2) return s

    let start = 0
    let end = 0

    // 中心扩展函数
    const expandAroundCenter = (left: number, right: number): void => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--
            right++
        }
        // 注意此时left和right指向的字符不同于回文子串的边界
        // 实际回文子串的起始位置应该是left + 1，长度是right - left - 1
        if (end - start < right - left - 1) {
            start = left + 1
            end = right - 1
        }
    }

    // 遍历每个可能的中心点
    for (let i = 0; i < s.length; i++) {
        // 奇数长度的回文子串，以一个字符为中心
        expandAroundCenter(i, i)
        // 偶数长度的回文子串，以两个字符之间的空隙为中心
        expandAroundCenter(i, i + 1)
    }

    // 根据start和end截取最长回文子串
    return s.substring(start, end + 1)
}
