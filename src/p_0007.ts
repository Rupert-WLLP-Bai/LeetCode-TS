// LeetCode - 7

/**
 * 整数反转
 * @param {number} x 输入整数
 * @returns {number} 反转后的整数
 */
export function reverse(x: number): number {
    const INT_MAX = 0x7fffffff // 2^31 - 1
    const INT_MIN = -0x80000000 // -2^31
    const isNegative = x < 0
    const INT_MAX_STR = INT_MAX.toString() // '2147483647'
    const INT_MIN_STR = Math.abs(INT_MIN).toString() // '2147483648'

    // 1. 将整数转换为字符串
    const s = Math.abs(x).toString()
    // 2. 将字符串反转
    const reversed = s.split('').reverse().join('')
    // 3. 按照符号的不同, 和不同的字符串进行比较
    let result = 0
    if (isNegative) {
        if (reversed.length === INT_MIN_STR.length && reversed > INT_MIN_STR) {
            result = 0
        } else {
            result = -parseInt(reversed)
        }
    } else {
        if (reversed.length === INT_MAX_STR.length && reversed > INT_MAX_STR) {
            result = 0
        } else {
            result = parseInt(reversed)
        }
    }
    return result
}
