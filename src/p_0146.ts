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
    private capacity: number
    private cache: Map<number, number>
    constructor(capacity: number) {
        this.capacity = capacity
        this.cache = new Map()
    }
    get(key: number): number {
        if (this.cache.has(key)) {
            const value = this.cache.get(key)
            if (value === undefined) {
                return -1
            }
            this.cache.delete(key)
            this.cache.set(key, value)
            return value
        }
        return -1
    }
    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            this.cache.delete(key)
        } else if (this.cache.size >= this.capacity) {
            this.cache.delete(this.cache.keys().next().value)
        }
        this.cache.set(key, value)
    }
}
