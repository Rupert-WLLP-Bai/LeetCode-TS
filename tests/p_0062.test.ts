import { uniquePaths } from '../src/p_0062'

const testCases = [
    {
        input: [3, 2],
        output: 3
    },
    {
        input: [7, 3],
        output: 28
    },
    {
        input: [3, 3],
        output: 6
    }
]

describe('LeetCode 62: 不同路径', () => {
    testCases.map((t) => {
        it(`测试用例 [${t.input}]`, () => {
            expect(uniquePaths(t.input![0], t.input![1])).toEqual(t.output)
        })
    })
})
