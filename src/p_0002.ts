// LeetCode - 2

export class ListNode {
    val: number;
    next: ListNode | null;
    /**
     * 创建一个链表节点
     * @param val 节点值
     * @param next 下一个节点
     */
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val); // 如果 val 为 undefined 则默认为 0
        this.next = (next === undefined ? null : next); // 如果 next 为 undefined 则默认为 null
    }
}

/**
 * 两数相加
 * @param l1 第一个链表
 * @param l2 第二个链表
 * @returns 相加后的链表
 */
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const head = new ListNode(); // 头节点
    let cur = head; // 当前节点
    let carry = 0; // 进位
    while (l1 || l2) {
        let sum = 0;
        if (l1) { // 如果 l1 不为空
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) { // 如果 l2 不为空
            sum += l2.val;
            l2 = l2.next;
        }
        sum += carry;   // 加上进位
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
        carry = Math.floor(sum / 10);
    }
    if (carry) {
        cur.next = new ListNode(carry);
    }
    return head.next;
}