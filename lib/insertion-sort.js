/*
#Insertion Sort:
There are 2 imaginary sections in insertion sort. The sorted and unsorted section.
* Since we haven't touched our array at this point, we can consider all of them in
* our unsorted section. We need to create a loop to go through all of the indexes of
* our array, in this loop we create another loop to move our index to the beginning
* of the array, to do this we need to compare our currentSelected value to the previous
* index. During this process the left side of our array will be our sorted while we
* insert our unsorted value in their correct place. Once our index hits the end of our
* array and goes through the process our array will be completely sorted.
*/


//Given array of unsorted numbers
var array = [2, 7, 4, 1, 9, 5];

function insertionSort (array) {
//Creating a for loop to keep the sort going till it reaches array.length (end of array)
  for (var i = 0; i < array.length; i++) {
    // assign the current array to our selected (we will be using this to compare)
    var currentSelected = array[i];
    //Our loop to keep comparing the currentSelected to the previous index, if the currentSelected
    // is less than the previous index, they will swap places. If currentSelected is higher, it will stay in place.
    for (var comparingIndex = i; comparingIndex > 0 && currentSelected < array[comparingIndex - 1]; comparingIndex--)
    //moving down the line
    array[comparingIndex] = array[comparingIndex - 1];
    // comparingIndex becomes our current selected
    array[comparingIndex] = currentSelected;
  }
  //exit the loop
  return array;
}
insertionSort(array);
console.log('Insertion Sort: ', array);