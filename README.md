- [LeetCode-TS](#leetcode-ts)
  - [0001-两数之和](#0001-两数之和)
  - [0002-两数相加](#0002-两数相加)
  - [0003-无重复字符的最长子串](#0003-无重复字符的最长子串)
  - [0004-寻找两个有序数组的中位数](#0004-寻找两个有序数组的中位数)
  - [0005-最长回文子串](#0005-最长回文子串)


# LeetCode-TS

LeetCode implemented by TypeScript

## 0001-两数之和

思路：使用一个 map 存储已经遍历过的数字，key 为数字，value 为下标，遍历数组，如果 map 中存在 target-nums[i]，则返回 map 中对应的下标和当前下标，否则将当前数字存入 map 中。

## 0002-两数相加

思路：遍历两个链表，将对应位置的数字相加，如果有进位，则将进位加到下一位的计算中，如果两个链表长度不一致，则将短的链表后面的数字补 0，直到两个链表都遍历完，如果最后还有进位，则将进位加到链表的最后一位。

## 0003-无重复字符的最长子串

思路：使用一个 map 存储已经遍历过的字符，key 为字符，value 为下标，遍历字符串，如果 map 中存在当前字符，则将当前字符的下标与 map 中对应的下标比较，取较大的那个，作为新的起始下标，否则将当前字符存入 map 中，然后计算当前下标与起始下标的差值，与最大长度比较，取较大的那个。

## 0004-寻找两个有序数组的中位数

**难点: 时间复杂度为 O(log(m+n))**

思路：将两个数组分别分成两部分，左边部分的长度为 k，右边部分的长度为 m+n-k，如果左边部分的最大值小于等于右边部分的最小值，则左边部分的最大值就是中位数，否则 k 需要减小，m+n-k 需要增大，然后继续二分查找。

关键: findKth 函数的实现, 该函数的作用是找到两个数组中第 k 小的数字。

```typescript
function getKth(nums1: number[], start1: number, end1: number, nums2: number[], start2: number, end2: number, k: number): number {
    const len1 = end1 - start1 + 1;
    const len2 = end2 - start2 + 1;
    // 让len1的长度小于len2，这样就能保证如果有数组空了，一定是len1
    if (len1 > len2) {
        // 交换两个数组，保证len1始终小于len2
        return getKth(nums2, start2, end2, nums1, start1, end1, k);
    }
    if (len1 === 0) {
        // 如果len1为空，则直接返回nums2的第k个元素
        return nums2[start2 + k - 1];
    }
    if (k === 1) {
        // 如果k为1，则直接返回两个数组的起始元素中较小的一个
        return Math.min(nums1[start1], nums2[start2]);
    }
    // 防止数组越界
    const i = start1 + Math.min(len1, Math.floor(k / 2)) - 1;
    const j = start2 + Math.min(len2, Math.floor(k / 2)) - 1;
    if (nums1[i] > nums2[j]) {
        return getKth(nums1, start1, end1, nums2, j + 1, end2, k - (j - start2 + 1));
    } else {
        return getKth(nums1, i + 1, end1, nums2, start2, end2, k - (i - start1 + 1));
    }
}
```

## 0005-最长回文子串

**难点: 中心扩展函数的实现**

思路：遍历字符串，以当前字符为中心，向两边扩展，如果两边的字符相等，则继续扩展，否则停止扩展，然后比较当前回文串的长度与最大回文串的长度，取较大的那个，最后返回最大回文串。

## 0006-Z 字形变换

思路: 模拟或者找规律

## 0007-整数反转

思路: 使用字符串进行比较
优化: 取模运算

## 0008-字符串转换整数 (atoi)

思路: 遍历, 使用状态机