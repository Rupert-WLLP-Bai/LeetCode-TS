// LeetCode - 77

/**
 * LeetCode 77 组合
 * @param n [1,n]
 * @param k 求k个数的组合
 */
export function combine(n: number, k: number): number[][] {
    // 总数为C(n,k) = n! / (k! * (n-k)!)
    // 递归求解
    const result: number[][] = []
    const temp: number[] = []
    const dfs = (index: number) => {
        if (temp.length + (n - index + 1) < k) {
            return
        }
        if (temp.length === k) {
            result.push(temp.slice())
            return
        }
        temp.push(index)
        dfs(index + 1)
        temp.pop()
        dfs(index + 1)
    }
    dfs(1)
    return result
}
