import { findMedianSortedArrays } from "../src/p_0004";

const testCases = [
  {
    input: {
      nums1: [1, 3],
      nums2: [2],
    },
    answer: 2,
  },
  {
    input: {
      nums1: [1, 2],
      nums2: [3, 4],
    },
    answer: 2.5,
  },
  {
    input: {
      nums1: [0, 0],
      nums2: [0, 0],
    },
    answer: 0,
  },
  {
    input: {
      nums1: [],
      nums2: [1],
    },
    answer: 1,
  },
  {
    input: {
      nums1: [2],
      nums2: [],
    },
    answer: 2,
  },
];

describe("LeetCode: 4. 寻找两个正序数组的中位数", () => {
  testCases.forEach(({ input, answer }) => {
    test(`测试用例 ${JSON.stringify(input)}`, () => {
      expect(findMedianSortedArrays(input.nums1, input.nums2)).toEqual(answer);
    });
  });
});
