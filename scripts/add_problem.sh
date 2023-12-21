#!/bin/bash

# Read problem number from user input
problem_number=$1

# Generate file paths
src_file="../src/p_$(printf "%04d" $problem_number).ts"
test_file="../tests/p_$(printf "%04d" $problem_number).test.ts"

# Create src file with basic content
cat << EOF > $src_file
// LeetCode - $problem_number

// Function to solve the problem
export function solveProblem() {
    // TODO: Implement your solution here
}
EOF

# Create test file with basic content
cat << EOF > $test_file
import solveProblem from '../src/p_$(printf "%04d" $problem_number)';

// Test function
function testProblem() {
    // TODO: Write your test cases here
}

testProblem();
EOF

echo "Files generated successfully!"
