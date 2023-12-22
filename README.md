-   [LeetCode-TS](#leetcode-ts)
    -   [0001-两数之和](#0001-两数之和)
    -   [0002-两数相加](#0002-两数相加)
    -   [0003-无重复字符的最长子串](#0003-无重复字符的最长子串)
    -   [0004-寻找两个有序数组的中位数](#0004-寻找两个有序数组的中位数)
    -   [0005-最长回文子串](#0005-最长回文子串)
    -   [0006-Z 字形变换](#0006-z-字形变换)
    -   [0007-整数反转](#0007-整数反转)
    -   [0008-字符串转换整数 (atoi)](#0008-字符串转换整数-atoi)
    -   [0009-回文数](#0009-回文数)
    -   [0010-正则表达式匹配](#0010-正则表达式匹配)
    -   [0011-盛最多水的容器](#0011-盛最多水的容器)
    -   [0012-整数转罗马数字](#0012-整数转罗马数字)
    -   [0013-罗马数字转整数](#0013-罗马数字转整数)

# LeetCode-TS

LeetCode implemented by TypeScript

## 0001-两数之和

思路：使用一个 map 存储已经遍历过的数字, key 为数字, value 为下标, 遍历数组, 如果 map 中存在 target-nums[i], 则返回 map 中对应的下标和当前下标, 否则将当前数字存入 map 中,

## 0002-两数相加

思路：遍历两个链表, 将对应位置的数字相加, 如果有进位, 则将进位加到下一位的计算中, 如果两个链表长度不一致, 则将短的链表后面的数字补 0, 直到两个链表都遍历完, 如果最后还有进位, 则将进位加到链表的最后一位,

## 0003-无重复字符的最长子串

思路：使用一个 map 存储已经遍历过的字符, key 为字符, value 为下标, 遍历字符串, 如果 map 中存在当前字符, 则将当前字符的下标与 map 中对应的下标比较, 取较大的那个, 作为新的起始下标, 否则将当前字符存入 map 中, 然后计算当前下标与起始下标的差值, 与最大长度比较, 取较大的那个,

## 0004-寻找两个有序数组的中位数

**难点: 时间复杂度为 O(log(m+n))**

思路：将两个数组分别分成两部分, 左边部分的长度为 k, 右边部分的长度为 m+n-k, 如果左边部分的最大值小于等于右边部分的最小值, 则左边部分的最大值就是中位数, 否则 k 需要减小, m+n-k 需要增大, 然后继续二分查找,

关键: findKth 函数的实现, 该函数的作用是找到两个数组中第 k 小的数字, 参考: [p_0004](./src/p_0004.ts)

## 0005-最长回文子串

**难点: 中心扩展函数的实现**

思路：遍历字符串, 以当前字符为中心, 向两边扩展, 如果两边的字符相等, 则继续扩展, 否则停止扩展, 然后比较当前回文串的长度与最大回文串的长度, 取较大的那个, 最后返回最大回文串,

## 0006-Z 字形变换

思路: 模拟或者找规律

## 0007-整数反转

思路: 使用字符串进行比较
优化: 取模运算

## 0008-字符串转换整数 (atoi)

思路: 遍历, 使用状态机

## 0009-回文数

思路: 转换为字符串, 然后判断是否为回文串

## 0010-正则表达式匹配

**难点: 动态规划**

思路: 动态规划, $dp[i][j]$ 表示 $s$ 的前 $i$ 个字符与 $p$ 的前 $j$ 个字符是否匹配

状态转移方程:
![p_0010](.docs/../docs/image/p_0010_状态转移.png)

## 0011-盛最多水的容器

思路: 双指针, 从两边向中间移动, 每次移动高度较小的那个指针, 因为如果移动高度较大的那个指针, 容器的面积只会变小,

## 0012-整数转罗马数字

思路: 贪心算法, 从大到小依次遍历, 如果当前数字大于等于当前罗马数字, 则先算需要添加多少个当前罗马数字, 然后将当前数字减去当前罗马数字, 直到当前数字为 0,

在这里使用贪心算法的正确性:

> 这个算法的贪心策略是始终选择当前能选择的最大值，这种策略的正确性在于罗马数字的特殊性质。

> 罗马数字的构造方式是基于每个位置可以表示的最大值，例如 1（I），4（IV），5（V），9（IX），10（X），40（XL），50（L），90（XC），100（C），400（CD），500（D），900（CM），1000（M）。这些都是每个位置可以表示的最大值，而且每个更大的值都包含了更小的值。例如，900（CM）包含了 100（C）和 1000（M）。

> 因此，从大到小选择能表示的数，可以保证不会错过更优的解。例如，如果我们有一个数是 4，我们首先会尝试是否可以用 5（V）来表示，但是 5 大于 4，所以我们不能选择 5，然后我们会尝试 4（IV），发现 4 可以被表示，所以我们选择了 4，这样就得到了最优解。

## 0013-罗马数字转整数

思路: 从左到右遍历, 记录当前的罗马数字和前一个罗马数字, 如果当前罗马数字大于等于前一个罗马数字, 则加上当前罗马数字, 否则减去当前罗马数字, 最后返回结果

初始值: preValue = 0, result = 0
