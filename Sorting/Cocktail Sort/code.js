// -----------------------------------------------------------
//
// Cocktail Sort
//
// TIME COMPLEXITY: O(n^2)
// MEMORY COMPLEXITY: O(1)
//
// Mix sort is a modification of the bubble sort. The essence
// of this modification is a possible observation.
//
// 1) The first permutation at the beginning starts at a
//    certain index, and on a subsequent pass it is possible
//    to start at that index instead of from the beginning at
//    the beginning.
//
// 2) And if you alternate passes from the beginning along the
//    border to its end with passes in the opposite direction,
//    then you can observe a faster "growing" of the element
//    to the required edge along the axis.
//
// It is the implementation of these changes during the
// operation of the bubble sort algorithm that was obtained
// The name of the mix sort.
//
// -----------------------------------------------------------

function cocktail_sort(arr) {
    let left = 0;
    let right = arr.length - 1;
    let control = right;

    while (left < right) {
        for (let i = left; i < right; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                control = i;
            }
        }

        right = control;

        for (let i = right; i > left; i--) {
            if (arr[i] < arr[i - 1]) {
                let temp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = temp;
                control = i;
            }
        }

        left = control;
    }
}

const arr = [12, 5, 16, -2, 9, 0];
cocktail_sort(arr);
console.log(arr);