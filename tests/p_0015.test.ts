import { threeSum } from '../src/p_0015'

const testCases = [
    {
        input: [-1, 0, 1, 2, -1, -4],
        answer: [
            [-1, 0, 1],
            [-1, -1, 2]
        ]
    },
    {
        input: [1, 2, 3, 4, 5],
        answer: []
    },
    {
        input: [0, 0, 0],
        answer: [[0, 0, 0]]
    }
]

describe('LeetCode: 15 三数之和', () => {
    testCases.map((t) => {
        it(`测试用例 [${t.input}]`, () => {
            // 只需要判断数组中的元素是否相同，不需要考虑顺序
            const result = threeSum(t.input)
            expect(result.length).toEqual(t.answer.length)
            for (const item of result) {
                expect(t.answer).toContainEqual(item)
            }
        })
    })
})
