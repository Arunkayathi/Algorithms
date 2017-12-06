// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const result = [];
    let counter = 1;


    for (let i = 1; i <= n; i++)  {    
        for (let j = 1; j <= n; j++) {
            let lastRow = result[result.length - 1];
            if (!lastRow || lastRow.length === n) {
                result.push([counter]);
                counter++

            } else {
                lastRow.push(counter);
                counter++;
            }

        }

    }
    console.log(result);
    return result;

}

module.exports = matrix;