import { longestPalindrome } from "../src/p_0005";

const testCases = [
  {
    input: "babad",
    answer: ["bab", "aba"],
  },
  {
    input: "cbbd",
    answer: ["bb"],
  },
  {
    input: "a",
    answer: ["a"],
  },
  {
    input: "acaaca",
    answer: ["acaaca"],
  },
  {
    input: "ac",
    answer: ["a", "c"],
  },
  {
    input: "abb",
    answer: ["bb"],
  },
];

describe("LeetCode: 5. 最长回文子串", () => {
  testCases.map((t) => {
    it(`测试用例 ${t.input}`, () => {
      const result = longestPalindrome(t.input);
      expect(t.answer).toContain(result);
    });
  });
});
