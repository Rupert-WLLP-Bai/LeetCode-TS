import { maxSubArray } from '../src/p_0053'

const testCases = [
    {
        input: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
        answer: 6
    },
    {
        input: [1],
        answer: 1
    },
    {
        input: [0],
        answer: 0
    },
    {
        input: [-1],
        answer: -1
    },
    {
        input: [-100000],
        answer: -100000
    }
]

describe('LeetCode 53. 最大子序和', () => {
    testCases.map((t) => {
        it(`测试用例 [${t.input}]`, () => {
            expect(maxSubArray(t.input)).toEqual(t.answer)
        })
    })
})
