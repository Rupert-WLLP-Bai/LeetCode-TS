// LeetCode - 13

/**
 * 罗马数字转整数
 * @param {string} s 罗马数字
 * @returns {number} 对应的整数
 */
export function romanToInt(s: string): number {
  // 罗马数字与整数的映射对照表
  const romanToValue: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0; // 最终转换成的整数结果
  let prevValue = 0; // 上一个罗马数字代表的值, 初始值为 0

  // 从后向前遍历罗马数字字符串
  for (let i = s.length - 1; i >= 0; i--) {
    // 获取当前罗马字符表示的值
    const currentValue = romanToValue[s[i]];

    // 若当前值小于之前的值，则说明此处应该进行减法操作
    if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      // 否则进行加法操作
      result += currentValue;
    }

    // 更新上一个罗马数字代表的值
    prevValue = currentValue;
  }

  // 返回最终的整数结果
  return result;
}
