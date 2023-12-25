import { romanToInt } from '../src/p_0013'

const testCases = [
    {
        input: 'III',
        answer: 3
    },
    {
        input: 'IV',
        answer: 4
    },
    {
        input: 'IX',
        answer: 9
    },
    {
        input: 'LVIII',
        answer: 58
    },
    {
        input: 'XCVIII',
        answer: 98
    },
    {
        input: 'MCMXCIV',
        answer: 1994
    }
]

describe('LeetCode 13: 罗马数字转整数', () => {
    testCases.map((t) => {
        it(`测试用例: ${t.input}`, () => {
            expect(romanToInt(t.input)).toEqual(t.answer)
        })
    })
})
