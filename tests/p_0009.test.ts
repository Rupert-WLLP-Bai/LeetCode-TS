import { isPalindrome } from '../src/p_0009'

const testCases = [
    { input: 121, answer: true },
    { input: -121, answer: false },
    { input: 10, answer: false },
    { input: -101, answer: false },
    { input: 0, answer: true },
    { input: 1, answer: true },
    { input: 11, answer: true },
    { input: 111, answer: true }
]

describe('LeetCode: 9 回文数', () => {
    testCases.map((t) => {
        it(`测试用例 ${t.input}`, () => {
            expect(isPalindrome(t.input)).toEqual(t.answer)
        })
    })
})
