function pola(str) {
    //write ur code here
    var strarray = str.split(" ");
    var cari = false;
    var i = 0


    while (i <= 9 && cari == false) {
        var array1 = Number(strarray[0].replace("#", i));
        var array2 = Number(strarray[2]);
        //console.log(array1)
        
        var j = 0;
        while (j <= 9 && cari == false) {
            var array3 = Number(strarray[4].replace("#", j));
            if (array1 * array2 == array3) {
                cari = true;
                //console.log(angka3)
                var faktor = [i, j];
            }
            else
                j++;
        }
        i++;
    }
    return faktor;

}

console.log(pola("42#3 * 188 = 80#204"));// faktor [8, 5]
console.log(pola("8#61 * 895 = 78410#5"));// faktor [7, 9]