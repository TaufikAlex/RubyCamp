function spiral(n) {


    var matrix = new Array(n);
    for (var i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(n);
    }

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            matrix[i][j] = 0;
            //console.log(matrix[i],[j])
        }
    }

    var startNum = 0;
    var rowNum = 0;

    function spin(rowNum) {

        // right
        for (let j = rowNum; j < (n - rowNum); j++) {
            startNum++;
            matrix[rowNum][j] = startNum;
        }
        
       

        // down
        for (let i = (rowNum + 1); i < (n - (rowNum + 1)); i++) {
            startNum++;
            matrix[i][n - (rowNum + 1)] = startNum;
        }
        //left
        for (let j = (n - (1 + rowNum)); j >= rowNum; j--) {
            startNum++;
            matrix[(n - (1 + rowNum))][j] = startNum;
        }
        //top
        for (let i = (n - (2 + rowNum)); i > rowNum; i--) {
            startNum++;
            matrix[i][rowNum] = startNum;
        }




        if (startNum === (n * n)) {
            return startNum; // exit if number matches to the size of the matrix. ( 16 = 4*4 )
        }

        spin(rowNum + 1);


    }

    spin(rowNum);

    console.log(matrix)
    return matrix;
}

spiral(6);
    // spiral(5);









    // var array = [ 
//     [1,  2,  3,   4],
//     [5,  6,  7,   8],
//     [9,  10, 11,  12],
//     [13, 14, 15,  16]  
// ];

// var n = array.length;


// //create empty 2d array

// var startRow = 0;
// var endRow = n - 1;
// var startColumn = 0;
// var endColumn = n - 1
// var newArray = [];

// // While loop is used to spiral into the 2d array.
// while(startRow <= endRow && startColumn <= endColumn){

//     // Reading top row, from left to right
//     for(var i = startColumn; i <= endColumn; i++){
//         newArray.push(array[startColumn][i]);
//     }
//     startRow++; // Top row read.

//     // Reading right column from top right to bottom right
//     for(var i = startRow; i <= endRow; i++){
//         newArray.push(array[i][endColumn]);
//     }
//     endColumn--; // Right column read

//     // Reading bottom row, from bottom right to bottom left
//     for(var i = endColumn; i >= startColumn; i--){
//         newArray.push(array[endRow][i]);
//     }
//     endRow--; // Bottom row read

//     // Reading left column, from bottom left to top left
//     for(var i = endRow; i >= startRow; i--){
//         newArray.push(array[i][startColumn]);
//     }
//     startColumn++; // left column now read.

// } // While loop will now spiral in the matrix.

// console.log(newArray);