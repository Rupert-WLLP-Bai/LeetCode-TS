#!/bin/bash

echo "Folder    | File              | Lines"
echo "------------------------------------"

# Loop through each file in the src folder and count lines
find src -type f | while read -r file; do
  num_lines=$(wc -l < "$file")
  filename=$(basename "$file")
  printf "%-10s | %-17s | %s\n" "src" "$filename" "$num_lines"
done

# Loop through each file in the tests folder and count lines
find tests -type f | while read -r file; do
  num_lines=$(wc -l < "$file")
  filename=$(basename "$file")
  printf "%-10s | %-17s | %s\n" "tests" "$filename" "$num_lines"
done

# Print total number of files and lines in src and tests
echo "------------------------------------"
echo "Total files in src:   $(find src -type f | wc -l)"
echo "Total lines in src:   $(find src -type f | xargs wc -l | grep total | awk '{print $1}')"
echo "Total files in tests: $(find tests -type f | wc -l)"
echo "Total lines in tests: $(find tests -type f | xargs wc -l | grep total | awk '{print $1}')"
echo "------------------------------------"