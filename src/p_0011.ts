// LeetCode - 11

/**
 * 盛最多水的容器
 * @param height 高度数组
 * @returns 最大容量
 */
export function maxArea(height: number[]): number {
  // 双指针法
  let left = 0;
  let right = height.length - 1;

  // 记录最大容量
  let max = 0;

  while (left < right) {
    // 计算当前容量
    const current = (right - left) * Math.min(height[left], height[right]);
    // 更新最大容量
    max = Math.max(max, current);

    // 移动指针, 如果左边的高度小于右边的高度，则左指针右移，否则右指针左移
    // 因为如果左边的高度小于右边的高度，那么无论右指针怎么移动，容量都不会超过当前容量
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}
