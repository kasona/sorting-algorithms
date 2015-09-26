//WRITE MORE STUFF ABOUT QUICK SORT

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
