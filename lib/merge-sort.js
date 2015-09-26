//Given array of unsorted numbers
var array = [2, 7, 4, 1, 9, 5];

function mergeSort(array) {
  // Set our Base Case
  if (array.length < 2)
      return array;
  // Divide and Conquer, split the array in half
  var middle = Math.floor(array.length / 2);
  //Since we split the array we need somewhere to put it
  var left   = array.slice(0, middle);
  var right  = array.slice(middle, array.length);
  // returning 2 seperate sections, left and right
  return merge(mergeSort(left), mergeSort(right));
}

//Merging the 2 array together to create the sorted array
function merge(left, right) {
  //Creating a new array to push our 2 arrays to
  var result = [];
//Loop, while there are still values in either left or right array
  while (left.length && right.length) {
    //Comparing the first index of both arrays
    if (left[0] <= right[0]) {
      //If left index value is less, we will push it to our new array
      result.push(left.shift());
    } else {
      //Else, push the right value to the new array
      result.push(right.shift());
    }
  }
  //If there is still values in our left side but not right, push the rest of left into the new array
  // The values in left will already be sorted ( we sorted it earlier )
  while (left.length)
      result.push(left.shift());
  while (right.length)
      result.push(right.shift());
  return result;
}
//console log our sorted array
console.log('Merge Sort:', mergeSort(array));