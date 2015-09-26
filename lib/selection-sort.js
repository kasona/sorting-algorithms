/*
* Selection Sort:
* Selection sort searches for the smallest number in the array and pushes
* it to the front of the array. We create the loop that lets us move our
* index around and set it to min since we are just starting our sort our
* first index will automatically become our min. Creating a new variable
* nextNum which will be the next index of [i] + 1, very similar to the loop
* we made earlier. We use this to test if the min is greater or less than our
* nextNum. If it is less than our nextNum we need to create a temporary variable
* which will hold our [i] value, min will become the new [i] and our temp will
* be our min, basically swapping the min and [i] positions.
*/
// Given Array of unsorted numbers.
var array = [2, 7, 4, 1, 9, 5];

function selectionSort(array) {
  //Creating a loop for the index
  for (i = 0; i < array.length; i++) {
    //Using index 0 as our min since that is our first number
    var min = i;
    //Creating a loop for the index of the next number
    for (var nextNum = i + 1; nextNum < array.length; nextNum++) {
      //Checking if the value of the nextNum is less than the current min
      if (array[nextNum] < array[min]) {
        //Assign nextNum to the new min
        min = nextNum;
      }
    }
    //Creating a temporary value to store [i]
    var temp = array[i];
    //Assigning the min to [i]
    array[i] = array[min];
    //Assigning tmp to our min
    array[min] = temp;
  }
  return array;
}
//Console log sorted array
console.log('Selection Sort:', selectionSort(array));

