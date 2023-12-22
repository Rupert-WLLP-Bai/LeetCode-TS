// LeetCode - 14

/**
 * 最长公共前缀
 * @param {string[]} strs 字符串数组
 */
export function longestCommonPrefix(strs: string[]): string {
    // 1. 如果数组为空，返回空字符串
    if (strs.length === 0) {
        return ''
    }
    // 2. 如果数组长度为1，返回第一个字符串
    if (strs.length === 1) {
        return strs[0]
    }
    // 3. 获取数组中最短字符串的长度
    let minLen = strs[0].length
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < minLen) {
            minLen = strs[i].length
        }
    }
    // 4. 从第一个字符开始，逐个比较
    let result = ''
    for (let i = 0; i < minLen; i++) {
        const char = strs[0][i]
        for (let j = 1; j < strs.length; j++) {
            if (char !== strs[j][i]) {
                return result
            }
        }
        result += char
    }
    return result
}
