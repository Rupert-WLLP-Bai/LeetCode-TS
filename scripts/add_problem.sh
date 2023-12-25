#!/bin/bash

# Get the directory where the script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Read problem number from user input
problem_number=$1

# Generate file paths relative to the script location
src_file="$SCRIPT_DIR/../src/p_$(printf "%04d" $problem_number).ts"
test_file="$SCRIPT_DIR/../tests/p_$(printf "%04d" $problem_number).test.ts"

# Check if files already exist
# if exists, ask if user wants to overwrite
if [ -f $src_file ] || [ -f $test_file ]; then
    read -p "Files already exist. Do you want to overwrite? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Aborting..."
        exit 1
    fi
fi

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

const testCases = [
    {
        input: {},
        answer: {}
    }
]

EOF

echo "Files generated successfully!"
