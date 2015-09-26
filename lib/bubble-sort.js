//WRITE MORE STUFF ABOUT BUBBLE SORT

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
