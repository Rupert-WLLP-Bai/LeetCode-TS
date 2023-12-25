import { longestCommonPrefix } from '../src/p_0014'

const testCases = [
    {
        input: ['flower', 'flow', 'flight'],
        answer: 'fl'
    },
    {
        input: ['dog', 'racecar', 'car'],
        answer: ''
    },
    {
        input: ['apple', 'app', 'application'],
        answer: 'app'
    },
    {
        input: ['hello', 'hello', 'hello'],
        answer: 'hello'
    },
    {
        input: ['abcd', 'ab', 'abc'],
        answer: 'ab'
    }
]

describe('LeetCode 14: 最长公共前缀', () => {
    testCases.map((t) => {
        it(`测试用例 [${t.input}]`, () => {
            expect(longestCommonPrefix(t.input)).toEqual(t.answer)
        })
    })
})
