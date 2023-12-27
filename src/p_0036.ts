/**
 * 有效的数独
 * @param board 数独
 */
export function isValidSudoku(board: string[][]): boolean {
    // 检查行/列/宫格
    const resRow = checkRow(board)
    const resCol = checkColumn(board)
    const resBox = checkBox(board)
    const res = resBox && resCol && resRow
    return res
}

/**
 * 检查行
 * @param board
 */
function checkRow(board: string[][]): boolean {
    for (let i = 0; i < board.length; i++) {
        if (!checkDuplicated(board[i])) {
            return false
        }
    }
    return true
}

/**
 * 检查列
 * @param board
 */
function checkColumn(board: string[][]): boolean {
    for (let i = 0; i < board.length; i++) {
        const col = board.map((line) => line[i]) // 按列遍历
        if (!checkDuplicated(col)) {
            return false
        }
    }
    return true
}

/**
 * 检查宫格
 * @param board
 */
function checkBox(board: string[][]): boolean {
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            const box = []
            for (let m = i; m < i + 3; m++) {
                for (let n = j; n < j + 3; n++) {
                    box.push(board[m][n])
                }
            }
            if (!checkDuplicated(box)) {
                return false
            }
        }
    }
    return true
}

/**
 * 检查九个数据中是否有重复的内容, 除去'.'
 * @param line
 * @returns 没有重复返回true
 */
function checkDuplicated(line: string[]): boolean {
    const set = new Set<string>()
    for (let i = 0; i < line.length; i++) {
        if (line[i] != '.') {
            if (set.has(line[i])) {
                return false
            }
            set.add(line[i])
        }
    }
    return true
}
