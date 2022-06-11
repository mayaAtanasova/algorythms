const valueSearch = (array, value) => {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) { 
        let mid = Math.floor((left + right) / 2);
        if (array[mid] === value) {
            return mid;
        } else if (array[mid] < value) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

console.log(valueSearch([-1, 2, 8, 9, 17], 17));