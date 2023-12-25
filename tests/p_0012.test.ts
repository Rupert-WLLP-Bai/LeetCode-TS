import { intToRoman } from '../src/p_0012'

const testCases = [
    {
        input: 3,
        answer: 'III'
    },
    {
        input: 4,
        answer: 'IV'
    },
    {
        input: 9,
        answer: 'IX'
    },
    {
        input: 58,
        answer: 'LVIII'
    },
    {
        input: 400,
        answer: 'CD'
    },
    {
        input: 1994,
        answer: 'MCMXCIV'
    },
    {
        input: 3999,
        answer: 'MMMCMXCIX'
    }
]

describe('LeetCode 12: 整数转罗马数字', () => {
    testCases.forEach((testCase) => {
        it(`测试用例 [${testCase.input}]`, () => {
            expect(intToRoman(testCase.input)).toEqual(testCase.answer)
        })
    })
})
