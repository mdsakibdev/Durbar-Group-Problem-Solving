// ** Sum the Main and Secondary Diagonals


function diagonalSums(matrix) {
    let main = 0;
    let secondary = 0;

    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        main = main + matrix[i][i];

        secondary = secondary + matrix[i][n - 1 - i];
    }

    return {
        main: main,
        secondary: secondary
    };
}

console.log(diagonalSums([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));

// Output: { main: 15, secondary: 15 }
