##Sorting Algorithms

#Bubble Sort -
Bubble sort compares adjacent numbers and swaps places from least to greatest. To create a bubble sort we will need to create a loop till the numbers are sorted. You will need a temporary variable to hold on to the index value that will be swapped. If there is no temporary value holder and we push index[i] to index[i + 1] (its neighbor), index[i + 1] will disappear and we wont be able to swap their places. We place either index into the temp value for safe keeping till we assign [i] to [i + 1] (or vise versa) and we assign the temp value to its correct sorted place. If a number is swapped that means there could be a possibility that more numbers need to be sorted. That is why we have a boolean to tell us if we still need to go on and sort. We declare the boolean false in our do statement, if we use a do/while statement it will reset our boolean to false every time. If a swap is made it will turn true and look for more values to sort, if no swap is made our boolean will remain false and exit our loop.

#Insertion Sort
There are 2 imaginary sections in insertion sort. The sorted and unsorted section. Since we haven't touched our array at this point, we can consider all of them in our unsorted section. We need to create a loop to go through all of the indexes of our array, in this loop we create another loop to move our index to the beginning of the array, to do this we need to compare our currentSelected value to the previous index. During this process the left side of our array will be our sorted while we insert our unsorted value in their correct place. Once our index hits the end of our array and goes through the process our array will be completely sorted.

#Merge Sort
Merge sort is another divide and conquer type of sorting. In order to divide and conquer we need to create the middle point. To create this we need to divide the the array length by 2, we keep splitting the array till they are in pairs or single. Then we compare the pairs and add the next pair adjacent to them and compare them. This process continues until the entire array is sorted. This system works well for bigger arrays


#Quick Sort
There are 4 main points in Quick Sorting:
- Pivot
- Partitioning
- Recursion
- Concatenation

In our quick sort function we first check to see if there is more than one value in our array. If there is only one number or no number, we can print our array or exit the function.
As stated above the first main point in quick sorting is the pivot, quick sorting is a divide and conquer type of sorting. We first divide the array in half, the middle point becomes our pivot. This will be the number that we use to compare and decide what numbers go into our 'less' or 'more' array. We create a loop checking if each number is more or less than the pivot, from there we push them into the appropriate array, sorting them as we separate them. At the end of our sorting we have 2 arrays ('less' and 'more') and we have our pivot. We concat them together in the correct order ('less' + 'pivot' + 'more') to create our quick sorted array.

#Selection Sort
Selection sort searches for the smallest number in the array and pushes it to the front of the array. We create the loop that lets us move our index around and set it to min since we are just starting our sort our first index will automatically become our min. Creating a new variable nextNum which will be the next index of [i] + 1, very similar to the loop we made earlier. We use this to test if the min is greater or less than our nextNum. If it is less than our nextNum we need to create a temporary variable which will hold our [i] value, min will become the new [i] and our temp will be our min, basically swapping the min and [i] positions.