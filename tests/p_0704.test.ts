import { search } from '../src/p_0704'

const testCases = [
    {
        input: {
            nums: [-1, 0, 3, 5, 9, 12],
            target: 9
        },
        answer: 4
    },
    {
        input: {
            nums: [-1, 0, 3, 5, 9, 12],
            target: 2
        },
        answer: -1
    }
]

describe('LeetCode 704: 二分查找', () => {
    testCases.map((t) => {
        it(`测试用例: ${t.input}`, () => {
            expect(search(t.input.nums, t.input.target)).toEqual(t.answer)
        })
    })
})
