#!/bin/bash

# Get the directory where the script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Read problem number from user input
problem_number=$1

# Generate file paths relative to the script location
src_file="$SCRIPT_DIR/../src/p_$(printf "%04d" $problem_number).ts" 
test_file="$SCRIPT_DIR/../tests/p_$(printf "%04d" $problem_number).test.ts"

# Remove src file
rm -f $src_file

# Remove test file
rm -f $test_file

echo "Files removed successfully!"