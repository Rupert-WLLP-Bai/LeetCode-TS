// LeetCode - 146

/**
 * @class LRUCache
 * @classdesc Least Recently Used Cache
 * @example
 * const cache = new LRUCache(2);
 * cache.put(1, 1);
 * cache.put(2, 2);
 * cache.get(1); // returns 1
 * cache.put(3, 3); // evicts key 2
 * cache.get(2); // returns -1 (not found)
 * cache.put(4, 4); // evicts key 1
 * cache.get(1); // returns -1 (not found)
 * cache.get(3); // returns 3
 * cache.get(4); // returns 4
 * @see {@link https://leetcode.cn/problems/lru-cache}
 */
export class LRUCache {
    // get和put的时间复杂度都是O(1)
    // 使用Map和双向链表实现
    private capacity: number
    private map: Map<number, DoubleLinkedListNode>
    private head: DoubleLinkedListNode // 初始化保证一定存在头结点
    private tail: DoubleLinkedListNode // 初始化保证一定存在尾结点

    constructor(capacity: number) {
        this.capacity = capacity
        this.map = new Map()
        this.head = new DoubleLinkedListNode(0, 0)
        this.tail = new DoubleLinkedListNode(0, 0)
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    get(key: number): number {
        if (this.map.has(key)) {
            // 取出这个节点
            const node = this.map.get(key)!
            // 将节点移至链表头部（表示最近使用）
            this.removeNode(node)
            this.addToHead(node)
            return node.value // 返回节点值
        }
        return -1
    }

    put(key: number, value: number) {
        if (this.map.has(key)) {
            // 如果存在，则替换并更新位置
            const node = this.map.get(key)!
            node.value = value // 更新节点的值
            this.removeNode(node) // 先从链表中移除节点
            this.addToHead(node) // 再将更新后的节点添加至头部
        } else {
            // 如果不存在则判断是否超过capacity
            if (this.map.size >= this.capacity) {
                // 超过capacity，移除最后一个节点（最久未使用的节点）
                this.map.delete(this.tail.prev!.key) // 在map中删除
                this.removeNode(this.tail.prev!) // 从链表中移除
            }
            // 创建新节点并放到最前面
            const newNode = new DoubleLinkedListNode(key, value)
            this.map.set(key, newNode) // 添加到map中
            this.addToHead(newNode) // 添加到链表头部
        }
    }

    // 辅助函数：从链表中移除节点
    private removeNode(node: DoubleLinkedListNode) {
        node.prev!.next = node.next
        node.next!.prev = node.prev
    }

    // 辅助函数：将节点添加至链表头部
    private addToHead(node: DoubleLinkedListNode) {
        node.next = this.head.next
        this.head.next!.prev = node
        this.head.next = node
        node.prev = this.head
    }
}

class DoubleLinkedListNode {
    key: number
    value: number
    prev: DoubleLinkedListNode | null
    next: DoubleLinkedListNode | null
    constructor(key: number, value: number) {
        this.key = key
        this.value = value
        this.prev = null
        this.next = null
    }
}
