function spiral(param1) {
    let index = 0;
    const result = [];
    for (let i = 0; i < param1; i++) {
        const temp = [];
        for (let j = 0; j < param1; j++) {
            temp.push(index);
            index++;
        }
        result.push(temp);
    }
    const spiralNumber = [];
    let startCol = 0;
    let endCol = result[0].length;
    let startRow = 1;
    let endRow = result.length;
    let end = param1 - 1;
    let temp = 0;
    while (spiralNumber.length < param1 * param1) {
        // ke kanan
        for (let i = startCol; i < endCol; i++) {
            spiralNumber.push(result[startCol][i]);
        }
        // ke bawah
        for (let i = startRow; i < endRow; i++) {
            spiralNumber.push(result[i][end]);
        }
        // ke kiri
        for (let i = endCol - 2; i >= temp; i--) {
            spiralNumber.push(result[end][i]);
        }
        // ke atas
        for (let i = endRow - 2; i > temp; i--) {
            spiralNumber.push(result[i][temp]);
        }
        startCol++;
        endCol--;
        startRow++;
        endRow--;
        temp++;
        end--;
    }
    console.log(spiralNumber);
}
spiral(4);//[ 0, 1, 2, 3, 7, 11, 15, 14, 13, 12, 8, 4, 5, 6, 10, 9 ]
spiral(5);

// function spiral(size) {
//     let count = 0;
//     let matriks = [];

//     for (var i = 0; i < size; i++) {
//         matriks[i] = []
//         for (var j = 0; j < size; j++) {
//             matriks[i][j] = count;
//             count++;
//         }
//     }

//     let result = [];
//     let x = 0, y = 0;
//     let limitUp = size;
//     let limitBottom = 0;

//     while (result.length < size * size) {
//         // ke kanan
//         for (; x < limitUp; x++) {
//             result.push(matriks[y][x]);
//         }

//         x--;
//         y++;
//         // ke bawah
//         for (; y < limitUp; y++) {
//             result.push(matriks[y][x]);
//         }

//         y--;
//         x--;
//         // ke kiri
//         for (; x >= limitBottom; x--) {
//             result.push(matriks[y][x]);
//         }

//         y--;
//         x++;
//         // ke atas
//         for (; y > limitBottom; y--) {
//             result.push(matriks[y][x]);
//         }
//         y++;
//         x++;
//         limitUp--;
//         limitBottom++;
//     }

//     console.log(result);
// }

// spiral(7);