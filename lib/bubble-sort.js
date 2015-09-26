/*
* Bubble Sort:
* Bubble sort compares adjacent numbers and swaps places from least to greatest.
* To create a bubble sort we will need to create a loop till the numbers are sorted.
* You will need a temporary variable to hold on to the index value that will be swapped.
* If there is no temporary value holder and we push index[i] to index[i + 1] (its neighbor),
* index[i + 1] will disappear and we wont be able to swap their places. We place either
* index into the temp value for safe keeping till we assign [i] to [i + 1] (or vise versa)
* and we assign the temp value to its correct sorted place. If a number is swapped that means
* there could be a possibility that more numbers need to be sorted. That is why we have a boolean
* to tell us if we still need to go on and sort. We declare the boolean false in our do statement,
* if we use a do/while statement it will reset our boolean to false every time. If a swap is made
* it will turn true and look for more values to sort, if no swap is made our boolean will remain
* false and exit our loop.
*/

// Given Array of unsorted numbers.
var array = [2, 7, 4, 1, 9, 5];

//Creating a function, passing in array as the parameter
function bubbleSort(array) {
  //Count will keep track of how many times we swap positions (optional)
  var count = 0;
  //If swap is true, it will keep going till all postions have been swapped (this will tell us when the soring is done)
  var swap = null;
  do {
    //If [i] is the last number this will take us out of the loop to end the function
    swap = false;
    //Creating a for loop to keep the sort going till it reaches array.length ( end of the array )
    for (var i = 0; i <= array.length; i++) {
      //Comparing values of position[i] and the next (position[i + 2])
      if (array[i] > array[i + 1]) {
        //Creating a temporary value to store [i], if we push [i] to [i + 1] it will delete the value of [i + 1]
        var temp = array[i];
        //Swaping [i] with [i + 1]
        array[i] = array[i + 1];
        //Setting the value of temp(aka [i]) to [i +1]
        array [i + 1] = temp;
        //Yes, we did swap. Keep going through the loop. There might be more swapping to do.
        swap = true;
        //+1 to our counter (optional)
        count++;
      }
    }
  }
  //Go back to the for loop again to check if we need to swap more
while (swap);
//console log our sorted array and the number of swaps that it took (count is optional)
  console.log('Bubble Sort:', array);
  // console.log('Total Swaps: ', count);
}
