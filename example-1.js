var counter = 0;
var array = [1,2,3]
var n = 1;
// Finds the nth element in an array
//this is an O(1)
var findNthElement = function(array, n) {
    counter++
    if (array.length == 1) {
        return array[n];
    }

    var middle = Math.floor(array.length / 2);
    if (n < middle) {
        return findNthElement(array.slice(0, middle), n);
    }
    else {
        return findNthElement(array.slice(middle, array.length), n - middle);
    }
}

document.write(findNthElement(array, n));
