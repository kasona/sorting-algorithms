var should = chai.should();
var expect = chai.expect;
mocha.setup('bdd');

// ==================== Bubble Sort ===========================
describe('Bubble Sort', function() {

  it('Should have a function called bubbleSort', function() {
    bubbleSort.should.be.a('function');
  });
  it('Should check length', function() {
    var array = [2, 7, 4, 1, 9, 5];
    array.should.have.length(6);
  });
  it('Should have a Base Case', function() {
    array.should.have.length.above(2);
  });
  it('Should print an array of sorted numbers', function() {
    bubbleSort(array);
    array.should.deep.equal([1, 2, 4, 5, 7, 9]);
    array.should.be.an.array;
  });
}); //end of Bubble Sort

// ====================== Quick Sort ==============================
describe('Quick Sort', function() {

  it('Should have a function called quickSort', function() {
    quickSort.should.be.a('function');
  });
  it('Should have a Base Case', function() {
    array.should.have.length.above(2);
  });
  it('Should have a pivot', function() {
    var array = [1, 3, 5, 2];
    var pivot = Math.floor((array.length - 1) / 2);
    pivot.should.be.a('number');
  });
  it('Should have an empty less array', function () {
    var less = [];
    less.should.be.empty;
  });
  it('Should have an empty more array', function() {
    var more = [];
    more.should.be.empty;
  });
  it('Should print an array of sorted numbers', function() {
    quickSort(array);
    array.should.deep.equal([1, 2, 4, 5, 7, 9]);
    array.should.be.an.array;
  });
}); //end of Quick Sort

//====================== Insertion Sort ============================

describe('Insertion Sort', function() {
  it('Should have a function called insertionSort', function() {
    insertionSort.should.be.a('function');
  });
  it('Should check length', function() {
    var array = [2, 7, 4, 1, 9, 5];
    array.should.have.length(6);
  });
  it('Should have a Base Case', function() {
    array.should.have.length.above(2);
  });
  it('Should print an array of sorted numbers', function() {
    insertionSort(array);
    array.should.deep.equal([1, 2, 4, 5, 7, 9]);
    array.should.be.an.array;
  });
}); // end of Insertion Sort

//======================== Merge Sort ==============================
describe('Merge Sort', function() {
  it('Should have a function called mergeSort', function() {
    mergeSort.should.be.a('function');
  });
  it('Should have a Base Case', function() {
    array.should.have.length.above(2);
  });
  it('Should check length', function() {
    var array = [2, 7, 4, 1, 9, 5];
    array.should.have.length(6);
  });
  it('Should print an array of sorted numbers', function() {
    mergeSort(array);
    array.should.deep.equal([1, 2, 4, 5, 7, 9]);
    array.should.be.an.array;
  });
});//end of Merge Sort

//===================== Selection Sort =============================
describe('Selection Sort', function() {
  it('Should have a function called slectionSort', function() {
    selectionSort.should.be.a('function');
  });
  it('Should have a Base Case', function() {
    array.should.have.length.above(2);
  });
  it('Should print an array of sorted numbers', function() {
    insertionSort(array);
    array.should.deep.equal([1, 2, 4, 5, 7, 9]);
    array.should.be.an.array;
  });
}); //end of Selection Sort

//end
mocha.run();