let arr: number[] = [1, 5, 7, 9, 5, 3, 5, 7, 9];
function insertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
        let isFind = arr[i]
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > isFind) {
                arr[j + 1] = arr[j];
                arr[j] = isFind;
            }
        }
    }
    return arr
}
console.log('mang chua dc sap xep');
console.log(arr);

console.log('mang da dc sap xep');
insertionSort(arr)
console.log(arr);
