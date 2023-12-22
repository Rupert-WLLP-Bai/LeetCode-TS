// LeetCode - 12

/**
 * 整数转罗马数字
 * @param num 整数 范围:[1, 3999]
 * @returns 罗马数字
 */
export function intToRoman(num: number): string {
    // 罗马数字
    const romanList = [
        'I',
        'IV',
        'V',
        'IX',
        'X',
        'XL',
        'L',
        'XC',
        'C',
        'CD',
        'D',
        'CM',
        'M'
    ]
    // 对应的数字
    const numberList = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]

    // 结果
    let result = ''

    // 从大到小遍历
    for (let i = numberList.length - 1; i >= 0; i--) {
        // 当前数字
        const current = numberList[i]
        // 当前罗马数字
        const roman = romanList[i]

        // 如果当前数字小于等于num
        if (current <= num) {
            // 计算当前数字的个数
            const count = Math.floor(num / current) // 即需要添加多少个当前罗马数字
            // 更新num
            num -= current * count
            // 更新结果
            result += roman.repeat(count) // 添加count个当前罗马数字到结果中
        }
    }

    return result
}
