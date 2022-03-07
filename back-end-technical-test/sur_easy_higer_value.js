/**
 * Direction:
 * Find the higher value from the array bellow
 *
 * Expected Result:
 * 8
 */
let numbers = [3, 1, 2, 3, 7, 5, 6, 8, 2, 1];

function result(numbers) {
    let highest = 0;
    numbers.forEach((element) => {
        if (highest < element) {
            highest = element;
        }
    });

    return highest;
}

console.log(result(numbers));