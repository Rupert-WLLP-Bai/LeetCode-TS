// LeetCode - 8

export function myAtoi(s: string): number {
    // 忽略前导空格
    // 读取一个可选的正负号
    // 读取尽可能多的数字, 并将其解析成数值
    // 数值的大小需要在[-2^31, 2^31 - 1]的范围内
    // 如果数值超出了这个范围, 那么就返回 INT_MAX(2^31 - 1) 或 INT_MIN(-2^31)
    // 如果没有读取到有效的数字, 那么就返回0
    const INT_MAX = 0x7fffffff // 2^31 - 1
    const INT_MIN = -0x80000000 // -2^31

    let result_str = ''
    let isNegative = false
    let i = 0

    // 1. 忽略前导空格
    while (s[i] === ' ') {
        i++
    }

    // 2. 读取一个可选的正负号
    if (s[i] === '-') {
        isNegative = true
        i++
    } else if (s[i] === '+') {
        i++
    }

    // 3. 读取尽可能多的数字
    while (i < s.length) {
        const c = s[i]
        if (c >= '0' && c <= '9') {
            if (result_str.length === 0 && c === '0') {
                // 忽略前导零
                i++
                continue
            }
            result_str += c
        } else {
            break
        }
        i++
    }

    // 4. 将其解析成数值
    let result = 0
    if (result_str.length > 0) {
        result = parseInt(result_str)
    }

    // 5. 数值的大小需要在[-2^31, 2^31 - 1]的范围内
    if (isNegative) {
        result = -result
    }

    if (result > INT_MAX) {
        result = INT_MAX
    } else if (result < INT_MIN) {
        result = INT_MIN
    }

    return result
}
