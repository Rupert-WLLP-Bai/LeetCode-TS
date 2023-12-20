import { lengthOfLongestSubstring } from '../src/p_0003';


const testCases = [
    {
        input: {
            s: 'abcabcbb',
        },
        answer: 3,
    },
    {
        input: {
            s: 'bbbbb',
        },
        answer: 1,
    },
    {
        input: {
            s: 'pwwkew',
        },
        answer: 3,
    },
    {
        input: {
            s: '',
        },
        answer: 0,
    },
    {
        input: {
            s: 'dvdf',
        },
        answer: 3,
    },
]

describe('p_0003', () => {
    testCases.forEach(({ input, answer }) => {
        test(`case: ${JSON.stringify(input)}`, () => {
            expect(lengthOfLongestSubstring(input.s)).toEqual(answer)
        })
    })
})