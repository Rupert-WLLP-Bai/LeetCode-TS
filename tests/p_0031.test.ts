import { nextPermutation } from '../src/p_0031'

const testCases = [
    {
        input: [1, 2, 3],
        answer: [1, 3, 2]
    },
    {
        input: [3, 2, 1],
        answer: [1, 2, 3]
    },
    {
        input: [1, 1, 5],
        answer: [1, 5, 1]
    },
    {
        input: [1],
        answer: [1]
    }
]

describe('LeetCode 31: 下一个排列', () => {
    testCases.map((t) => {
        it(`测试用例: ${t.input}`, () => {
            nextPermutation(t.input)
            expect(t.input).toEqual(t.answer)
        })
    })
})
