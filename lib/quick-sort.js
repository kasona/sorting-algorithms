/*
* In our quick sort function we first check to see if there is more than one value
* in our array. If there is only one number or no number, we can print our array or
* exit the function. The first main point in quick sorting is the pivot, quick sorting
* is a divide and conquer type of sorting. We first divide the array in half, the middle
* point becomes our pivot. This will be the number that we use to compare and decide what
* numbers go into our 'less' or 'more' array. We create a loop checking if each number is
* more or less than the pivot, from there we push them into the appropriate array, sorting
* them as we separate them. At the end of our sorting we have 2 arrays ('less' and 'more')
* and we have our pivot. We concat them together in the correct order
* ('less' + 'pivot' + 'more') to create our quick sorted array.

*/
//Given Array of unsorted numbers.
var array = [2, 7, 4, 1, 9, 5];

var quickSort = function(array) {
  // var lessCounter = 0;
  // var moreCounter = 0;
  //If there is only one number in the array then don't need to sort
  if (array.length <= 1) {
    return array;
  }

  //Finding the pivot position, dividing it in half, -1 from the array length because Math.floor will return the larger interger
  var pivot = Math.floor((array.length - 1) / 2);
  //Need to decalre 3 values, the pivotValue, 'less' and 'more' side of the array.
  var pivotValue = array[pivot];
  var less = [];
  var more = [];
  array = array.slice(0, pivot).concat(array.slice(pivot + 1));
  //Recursive function
  for (var i = 0; i < array.length; i++) {
    //Use the pivot as our controlled variable.
    if (array[i] < pivotValue) {
      //Numbers less than the pivot will be pushed into the 'less' array
      less.push(array[i]);
      // lessCounter++;
    } else {
      //Else if the number is more than the pivot, it will be pushed into the 'more' array
      more.push(array[i]);
      // moreCounter++;
    }
  }
  // counter (optional)
  // console.log('\n Total swaps: ', (lessCounter + moreCounter));
  // joining the less, pivot, and more array together with concat
  return (quickSort(less)).concat([pivotValue], quickSort(more));
};
//console.log our sorted array to see our sorted result
console.log('Quick Sort', quickSort(array));
