import { maxArea } from '../src/p_0011'

const testCases = [
    {
        input: [1, 8, 6, 2, 5, 4, 8, 3, 7],
        answer: 49
    },
    {
        input: [1, 1],
        answer: 1
    },
    {
        input: [4, 3, 2, 1, 4],
        answer: 16
    },
    {
        input: [1, 2, 1],
        answer: 2
    },
    {
        input: [1, 2, 4, 3],
        answer: 4
    }
]

describe('LeetCode: 11 盛最多水的容器', () => {
    testCases.forEach((testCase) => {
        it(`测试用例 [${testCase.input}]`, () => {
            expect(maxArea(testCase.input)).toEqual(testCase.answer)
        })
    })
})
