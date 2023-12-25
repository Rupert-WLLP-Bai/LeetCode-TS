// LeetCode - 1276

/**
 * LeetCode - 1276 不浪费原料的汉堡制作方案
 * @param tomatoSlices 番茄片数
 * @param cheeseSlices 奶酪片数
 */
export function numOfBurgers(
    tomatoSlices: number,
    cheeseSlices: number
): number[] {
    // 即求解方程组的非负整数解:
    // 4x + 2y = tomatoSlices
    // x + y = cheeseSlices
    const x = (tomatoSlices - 2 * cheeseSlices) / 2
    const y = cheeseSlices - x
    if (x < 0 || y < 0 || x % 1 !== 0 || y % 1 !== 0) {
        return []
    }
    return [x, y]
}
