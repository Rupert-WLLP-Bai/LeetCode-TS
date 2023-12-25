import { LRUCache } from '../src/p_0146'

const testCases = [
    {
        input1: [
            'LRUCache',
            'put',
            'put',
            'get',
            'put',
            'get',
            'put',
            'get',
            'get',
            'get'
        ],
        input2: [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]],
        output: [null, null, null, 1, null, -1, null, -1, 3, 4]
    },
    {
        input1: ['LRUCache', 'put', 'get', 'put', 'get', 'get'],
        input2: [[1], [2, 1], [2], [3, 2], [2], [3]],
        output: [null, null, 1, null, -1, 2]
    }
]

describe('p_0146', () => {
    testCases.forEach((testCase, index) => {
        it(`测试用例${index + 1}`, () => {
            const cache = new LRUCache(testCase.input2[0][0])
            testCase.input1.slice(1).forEach((funcName, index) => {
                const key = testCase.input2[index + 1][0]
                const value = testCase.input2[index + 1][1]
                if (funcName === 'put') {
                    cache.put(key, value)
                } else if (funcName === 'get') {
                    expect(cache.get(key)).toEqual(testCase.output[index + 1])
                }
            })
        })
    })
})
