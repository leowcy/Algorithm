// Put All the existing sort algorithm here

let array = [2,4,55,5,6,2,123,5,23541,-1,0,555,6,88,-3];

//1. Bubble Sort
// Swap the neighbor element only - slowest. Put the largest element to the end of the array
// O(n) = n^2
function bubbleSort(arr) {
    const len = arr.length-1;
    for (let i = 0; i<len; i++) {
        for(let j = 0; j < len - i; j++) {
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log("sorted array: ", arr);
    return arr;
}

//bubbleSort(array);

//2. Select sort
// Select the smallest/largest number and put it to the first/end of the array
function selectSort(arr) {
    const len = arr.length - 1;
    let min;
    for (let i = 0; i<len; i++) {
        min = arr[i];
        for(let j = i+1; j < len; j++) {
            if (arr[j] < min) {
                min = arr[j];
                arr[j] = arr[i];
                arr[i] = min;
            }
        }
    }
    console.log("sorted array: ", arr);
    return arr;
}

selectSort(array);