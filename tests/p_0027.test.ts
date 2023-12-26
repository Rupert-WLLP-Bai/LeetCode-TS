import { removeElement } from '../src/p_0027'

const testCases = [
    {
        input: {
            nums: [3, 2, 2, 3],
            val: 3
        },
        answer: 2
    },
    {
        input: {
            nums: [0, 1, 2, 2, 3, 0, 4, 2],
            val: 2
        },
        answer: 5
    }
]

describe('LeetCode 27: 移除元素', () => {
    testCases.map((t) => {
        it(`测试用例 ${JSON.stringify(t.input)}`, () => {
            expect(removeElement(t.input.nums, t.input.val)).toEqual(t.answer)
        })
    })
})
