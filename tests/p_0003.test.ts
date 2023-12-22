import { lengthOfLongestSubstring } from "../src/p_0003";

const testCases = [
  {
    input: {
      s: "abcabcbb",
    },
    answer: 3,
  },
  {
    input: {
      s: "bbbbb",
    },
    answer: 1,
  },
  {
    input: {
      s: "pwwkew",
    },
    answer: 3,
  },
  {
    input: {
      s: "",
    },
    answer: 0,
  },
  {
    input: {
      s: "dvdf",
    },
    answer: 3,
  },
];

describe("LeetCode: 3. 无重复字符的最长子串", () => {
  testCases.forEach(({ input, answer }) => {
    test(`测试用例 ${JSON.stringify(input)}`, () => {
      expect(lengthOfLongestSubstring(input.s)).toEqual(answer);
    });
  });
});
