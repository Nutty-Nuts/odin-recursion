var unsortedArray = [4, 8, 6, 2, 1, 7, 5, 3, 10, 25, 21, 47];

function mergeSort(array) {
    // merger sort
    if (array.length === 1) return array;

    const median = Math.floor(array.length / 2);

    const left = array.slice(0, median);
    const right = array.slice(median, array.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArray, rightArray) {
    // merge elements
    let output = [];

    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        const leftElement = leftArray[leftIndex];
        const rightElement = rightArray[rightIndex];

        if (leftElement < rightElement) {
            output.push(leftElement);
            leftIndex++;
        } else {
            output.push(rightElement);
            rightIndex++;
        }
    }

    return [
        ...output,
        ...leftArray.slice(leftIndex),
        ...rightArray.slice(rightIndex),
    ];
}

console.log(mergeSort(unsortedArray));
