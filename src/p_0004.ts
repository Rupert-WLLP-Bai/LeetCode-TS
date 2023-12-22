// LeetCode - 4

/**
 * 在两个已排序的数组中找到中位数。
 * @param nums1 第一个已排序的数组
 * @param nums2 第二个已排序的数组
 * @returns 两个数组的中位数
 */
export function findMedianSortedArrays(
    nums1: number[],
    nums2: number[]
): number {
    // 时间复杂度必须是O(log(m+n))
    const m = nums1.length
    const n = nums2.length
    const left = Math.floor((m + n + 1) / 2)
    const right = Math.floor((m + n + 2) / 2)
    // 将偶数和奇数的情况合并，如果是奇数，会求两次同样的k
    return (
        (getKth(nums1, 0, m - 1, nums2, 0, n - 1, left) +
            getKth(nums1, 0, m - 1, nums2, 0, n - 1, right)) /
        2
    )
}

/**
 * 获取两个已排序数组的第k个元素。
 * @param nums1 第一个已排序的数组
 * @param start1 第一个数组的起始索引
 * @param end1 第一个数组的结束索引
 * @param nums2 第二个已排序的数组
 * @param start2 第二个数组的起始索引
 * @param end2 第二个数组的结束索引
 * @param k 第k个元素
 * @returns 两个数组的第k个元素
 */
function getKth(
    nums1: number[],
    start1: number,
    end1: number,
    nums2: number[],
    start2: number,
    end2: number,
    k: number
): number {
    const len1 = end1 - start1 + 1
    const len2 = end2 - start2 + 1
    // 让len1的长度小于len2，这样就能保证如果有数组空了，一定是len1
    if (len1 > len2) {
        // 交换两个数组，保证len1始终小于len2
        return getKth(nums2, start2, end2, nums1, start1, end1, k)
    }
    if (len1 === 0) {
        // 如果len1为空，则直接返回nums2的第k个元素
        return nums2[start2 + k - 1]
    }
    if (k === 1) {
        // 如果k为1，则直接返回两个数组的起始元素中较小的一个
        return Math.min(nums1[start1], nums2[start2])
    }
    // 防止数组越界
    const i = start1 + Math.min(len1, Math.floor(k / 2)) - 1
    const j = start2 + Math.min(len2, Math.floor(k / 2)) - 1
    if (nums1[i] > nums2[j]) {
        return getKth(
            nums1,
            start1,
            end1,
            nums2,
            j + 1,
            end2,
            k - (j - start2 + 1)
        )
    } else {
        return getKth(
            nums1,
            i + 1,
            end1,
            nums2,
            start2,
            end2,
            k - (i - start1 + 1)
        )
    }
}
