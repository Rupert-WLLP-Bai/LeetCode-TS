import { longestCommonSubsequence } from '../src/p_1143'

const testCases = [
    {
        input: ['abcde', 'ace'],
        answer: 3
    },
    {
        input: ['abc', 'abc'],
        answer: 3
    },
    {
        input: ['abc', 'def'],
        answer: 0
    },
    {
        input: ['abc', ''],
        answer: 0
    },
    {
        input: ['', ''],
        answer: 0
    },
    {
        input: ['psnw', 'vozsh'],
        answer: 1
    }
]

describe('LeetCode: 1143 最长公共子序列', () => {
    testCases.map((t) => {
        it(`测试用例: ${t.input}`, () => {
            expect(longestCommonSubsequence(t.input[0], t.input[1])).toEqual(
                t.answer
            )
        })
    })
})
