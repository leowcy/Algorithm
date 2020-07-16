// Put All the existing sort algorithm here

let array = [2,4,55,5,6,2,123,5,23541,-1,0,555,6,88,-3,-5, 100024];

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
    console.log("Bubble sort: ", arr);
    return arr;
}

bubbleSort(array);

//2. Select sort
// Select the smallest/largest number and put it to the first/end of the array
function selectSort(arr) {
    const len = arr.length - 1;
    let min;
    for (let i = 0; i<= len; i++) {
        min = arr[i];
        for(let j = i+1; j <= len; j++) {
            if (arr[j] < min) {
                min = arr[j];
                arr[j] = arr[i];
                arr[i] = min;
            }
        }
    }
    console.log("Select sort: ", arr);
    return arr;
}

selectSort(array);

//3. Insert sort
/**
 * 将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。
从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）
 */

function insertSort(arr) {
    const len = arr.length;
    let arrToSort = [arr[0]];
    for(let i = 1; i < len; i++) {
        arrToSort = insert(arrToSort, arr[i]);
    }
    console.log("Insert Sort: ", arrToSort);
    return arrToSort;
}

const insert = (insertArr, insertValue) => {
    for(let j = 0; j < insertArr.length; j++) {
        if (j == 0 && insertArr[j] >= insertValue) {
            insertArr.unshift(insertValue);
            break;
        } else if (j == insertArr.length - 1 && insertArr[j] <= insertValue) {
            insertArr.push(insertValue);
            break;
        } else if (j != 0 && j != insertArr.length-1 && insertArr[j] < insertValue && insertArr[j+1] > insertValue) {
            insertArr.splice(j, 0, insertValue);
            break;
        }
    }
    return insertArr;
}

insertSort(array);