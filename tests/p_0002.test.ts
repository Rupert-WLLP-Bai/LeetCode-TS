import { addTwoNumbers, ListNode } from '../src/p_0002'

function ArrayToNodeList(arr: number[]): ListNode {
    const head = new ListNode(arr[0])
    let cur = head
    for (let i = 1; i < arr.length; i++) {
        cur.next = new ListNode(arr[i])
        cur = cur.next
    }
    return head
}

const testCases = [
    {
        input: {
            l1: ArrayToNodeList([2, 4, 3]),
            l2: ArrayToNodeList([5, 6, 4])
        },
        answer: ArrayToNodeList([7, 0, 8])
    },
    {
        input: {
            l1: ArrayToNodeList([0]),
            l2: ArrayToNodeList([0])
        },
        answer: ArrayToNodeList([0])
    },
    {
        input: {
            l1: ArrayToNodeList([9, 9, 9, 9, 9, 9, 9]),
            l2: ArrayToNodeList([9, 9, 9, 9])
        },
        answer: ArrayToNodeList([8, 9, 9, 9, 0, 0, 0, 1])
    }
]

describe('LeetCode 2: 两数相加', () => {
    testCases.forEach(({ input, answer }) => {
        test(`测试用例 ${JSON.stringify(input)}`, () => {
            expect(addTwoNumbers(input.l1, input.l2)).toEqual(answer)
        })
    })
})
