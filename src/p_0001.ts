/**
 * 计算数组中两个数之和等于目标值的索引。
 * @param nums 数组
 * @param target 目标值
 * @returns 包含两个数索引的数组
 * @throws 如果没有两个数之和等于目标值，则抛出错误
 */
export function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    // 遍历数组
    for (let i = 0; i < nums.length; i++) {
        // 计算补数
        const complement = target - nums[i];
        // 如果补数存在于哈希表中，则返回结果
        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }
        // 将当前数及其索引存入哈希表
        map.set(nums[i], i);
    }

    // 如果没有找到符合条件的结果，则抛出错误
    throw new Error('No two sum solution');
}