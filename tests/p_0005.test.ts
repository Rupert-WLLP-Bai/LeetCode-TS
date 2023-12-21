import { longestPalindrome } from '../src/p_0005';

const testCases = [
    {
        input: 'babad',
        answer: ['bab', 'aba']
    },
    {
        input: 'cbbd',
        answer: ['bb'],
    },
    {
        input: 'a',
        answer: ['a'],
    },
    {
        input: 'acaaca',
        answer: ['acaaca'],
    },
    {
        input: 'ac',
        answer: ['a', 'c'],

    },
    {
        input: 'abb',
        answer: ['bb'],
    }
]

describe('p_0005', () => {
    testCases.map(t => {
        it(`test case: ${t.input}`, () => {
            const result = longestPalindrome(t.input);
            expect(t.answer).toContain(result);
        });
    });
})
