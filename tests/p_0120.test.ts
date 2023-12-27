import { minimumTotal } from '../src/p_0120'

const testCases = [
    {
        input: [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]],
        answer: 11
    },
    {
        input: [[-10]],
        answer: -10
    }
]

describe('LeetCode 120. 三角形最小路径和', () => {
    testCases.map((t) => {
        it(`测试用例 [${t.input}]`, () => {
            expect(minimumTotal(t.input)).toEqual(t.answer)
        })
    })
})
