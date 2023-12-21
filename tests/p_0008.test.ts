import { myAtoi } from '../src/p_0008'

const testCases = [
    { input: "42", answer: 42 },
    { input: "   -42", answer: -42 },
    { input: "4193 with words", answer: 4193 },
    { input: "words and 987", answer: 0 },
    { input: "-91283472332", answer: -2147483648 },
    { input: "91283472332", answer: 2147483647 },
    { input: "2147483648", answer: 2147483647 },
]

describe("LeetCode: 8. 字符串转换整数 (atoi)", () => {
    testCases.map(t => {
        it(`测试用例 ${t.input}`, () => {
            expect(myAtoi(t.input)).toEqual(t.answer)
        })
    })
})

