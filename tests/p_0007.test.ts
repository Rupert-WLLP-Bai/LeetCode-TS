import { reverse } from '../src/p_0007'

const testCases = [
    {
        input: 123,
        answer: 321
    },
    {
        input: -123,
        answer: -321
    },
    {
        input: 120,
        answer: 21
    },
    {
        input: 0,
        answer: 0
    },
    {
        input: 1534236469,
        answer: 0
    },
    {
        input: -2147483648,
        answer: 0
    }
]

describe('LeetCode: 7. 整数反转', () => {
    testCases.map(t => {
        it(`测试用例 [${t.input}]`, () => {
            expect(reverse(t.input)).toEqual(t.answer)
        })
    })
})
