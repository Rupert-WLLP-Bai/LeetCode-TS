import { numOfBurgers } from '../src/p_1276'

const testCases = [
    {
        input: [16, 7],
        answer: [1, 6]
    },
    {
        input: [17, 4],
        answer: []
    },
    {
        input: [4, 17],
        answer: []
    },
    {
        input: [0, 0],
        answer: [0, 0]
    },
    {
        input: [2, 1],
        answer: [0, 1]
    }
]

describe('LeetCode 1276: 不浪费原料的汉堡制作方案', () => {
    testCases.map((t) => {
        it(`测试用例: ${t.input}`, () => {
            expect(numOfBurgers(t.input[0], t.input[1])).toEqual(t.answer)
        })
    })
})
