import { combine } from '../src/p_0077'

const testCases = [
    {
        input: { n: 4, k: 2 },
        answer: [
            [1, 2],
            [1, 3],
            [1, 4],
            [2, 3],
            [2, 4],
            [3, 4]
        ]
    },
    {
        input: { n: 5, k: 3 },
        answer: [
            [1, 2, 3],
            [1, 2, 4],
            [1, 2, 5],
            [1, 3, 4],
            [1, 3, 5],
            [1, 4, 5],
            [2, 3, 4],
            [2, 3, 5],
            [2, 4, 5],
            [3, 4, 5]
        ]
    }
]

describe('LeetCode 77: 组合', () => {
    testCases.map((t) => {
        it(`测试用例: ${JSON.stringify(t.input)}`, () => {
            // 以任意顺序返回
            const result = combine(t.input.n, t.input.k)
            expect(result.length).toEqual(t.answer.length)
            result.map((r) => {
                expect(t.answer).toContainEqual(r)
            })
        })
    })
})
