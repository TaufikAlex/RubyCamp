function pola(str) {
    let angka =  (str)
    let splited = angka.split(" ")
    let result = [];
    console.log(splited[0])
    console.log(splited[4])

   for (i = 0; i <= 9; i++ ){
       for (a = 0; a <= 9; a++ ){
        let exo = splited[0]
        change1 = exo.replace("#", i)
        move1 = Number(change1)
        console.log(splited[0])
        // <-------^^^^^^^---batas index [0] ----------->\\

        let cio = splited[4]
        change2 = cio.replace("#",a)
        move2 = Number(change2)

        // ----^^^^^^----batas index [4]-----------\\

        let aco = splited[2]
        move3 = Number(aco)

        // ----^^^^^^----batas index [2]-----------\\

        if (move1 * move3 == move2)
        
        result.push(i,a)


       }
   }
    
    return result;

}
console.log(pola("42#3 * 188 = 80#204"));
console.log(pola("8#61 * 895 = 78410#5"));