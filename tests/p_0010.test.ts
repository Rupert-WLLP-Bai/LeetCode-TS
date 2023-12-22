import { isMatch } from "../src/p_0010";

const testCases = [
  { input: { s: "aa", p: "a" }, answer: false },
  { input: { s: "aa", p: "a*" }, answer: true },
  { input: { s: "ab", p: ".*" }, answer: true },
  { input: { s: "aab", p: "c*a*b" }, answer: true },
  { input: { s: "mississippi", p: "mis*is*p*." }, answer: false },
  { input: { s: "ab", p: ".*c" }, answer: false },
  { input: { s: "aaa", p: "a*a" }, answer: true },
  { input: { s: "aaa", p: "ab*a*c*a" }, answer: true },
];

describe("LeetCode: 10 正则表达式匹配", () => {
  testCases.map((t) => {
    it(`测试用例 ${JSON.stringify(t.input)}`, () => {
      expect(isMatch(t.input.s, t.input.p)).toEqual(t.answer);
    });
  });
});
