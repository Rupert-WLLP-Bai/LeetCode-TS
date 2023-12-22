// LeetCode - 6

/**
 * N字形变换
 * @param {string} s 输入字符串
 * @param {number} numRows 行数
 * @returns {string} 变换后的字符串
 */
export function convert(s: string, numRows: number): string {
  // 1. 如果行数为1，直接返回原字符串
  if (numRows === 1) {
    return s;
  }

  // 2. 初始化结果数组
  const result: string[] = [];
  for (let i = 0; i < numRows; i++) {
    result.push("");
  }

  // 3. 遍历字符串
  let row = 0;
  let down = true;
  for (let i = 0; i < s.length; i++) {
    result[row] += s[i];

    if (down) {
      row++;
    } else {
      row--;
    }

    if (row === 0) {
      down = true;
    } else if (row === numRows - 1) {
      down = false;
    }
  }

  // 4. 拼接结果
  return result.join("");
}

// 优化: 不使用额外空间, 按照其下标的规律直接计算出结果
// 时间复杂度: O(n)
// 空间复杂度: O(1)
/**
 * N字形变换(优化)
 * @param {string} s 输入字符串
 * @param {number} numRows 行数
 * @returns {string} 变换后的字符串
 */
export function convert_without_extra_space(
  s: string,
  numRows: number,
): string {
  // 1. 如果行数为1，直接返回原字符串
  if (numRows === 1) {
    return s;
  }

  // 2. 初始化结果数组
  let result = "";

  // 3. 遍历字符串
  for (let i = 0; i < numRows; i++) {
    let j = i;
    let down = true;
    while (j < s.length) {
      result += s[j];

      if (i === 0 || i === numRows - 1) {
        j += 2 * (numRows - 1);
      } else if (down) {
        j += 2 * (numRows - 1 - i);
        down = false;
      } else {
        j += 2 * i;
        down = true;
      }
    }
  }

  // 4. 返回结果
  return result;
}
