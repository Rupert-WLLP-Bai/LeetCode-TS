import { twoSum } from '../src/p_0001';

const testCases = [
    { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { nums: [3, 2, 4], target: 6, expected: [1, 2] },
    { nums: [3, 3], target: 6, expected: [0, 1] },
];

describe('Problem 0001', () => {
    testCases.forEach(({ nums, target, expected }) => {
        test(`Case ${nums} ${target}`, () => {
            expect(twoSum(nums, target)).toEqual(expected);
        });
    });
});