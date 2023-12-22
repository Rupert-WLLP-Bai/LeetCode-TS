import { convert, convert_without_extra_space } from "../src/p_0006";

const testCases = [
  { s: "LEETCODEISHIRING", numRows: 3, expected: "LCIRETOESIIGEDHN" },
  { s: "LEETCODEISHIRING", numRows: 4, expected: "LDREOEIIECIHNTSG" },
  { s: "A", numRows: 1, expected: "A" },
];

describe("LeetCode: 6. N字形变换", () => {
  testCases.forEach(({ s, numRows, expected }) => {
    test(`输入: s="${s}", numRows=${numRows}`, () => {
      expect(convert(s, numRows)).toBe(expected);
    });
  });
});

describe("LeetCode: 6. N字形变换(优化)", () => {
  testCases.forEach(({ s, numRows, expected }) => {
    test(`测试用例 输入: s="${s}", numRows=${numRows}`, () => {
      expect(convert_without_extra_space(s, numRows)).toBe(expected);
    });
  });
});
