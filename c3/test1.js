function romawi(n) {
    //var konversiRomawi = fucntion(nomor)
    //var desimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    //var romawi = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];

    var bil;
    var hasil = "";
    do {


        if (bil >= 1000) {
            hasil += "M";
            bil = bil - 1000;
        }
        else if (bil >= 900) {
            hasil += "CM";
            bil = bil - 900;
        }
        else if (bil >= 500) {
            hasil += "D";
            bil = bil - 500;
        }
        else if (bil >= 400) {
            hasil += "CD";
            bil = bil - 400;
        }
        else if (bil >= 100) {
            hasil += "C";
            bil = bil - 100;
        }
        else if (bil >= 90) {
            hasil += "XC";
            bil = bil - 90;
        }
        else if (bil >= 50) {
            hasil += "L";
            bil = bil - 50;
        }
        else if (bil >= 40) {
            hasil += "XL";
            bil = bil - 40;
        }
        else if (bil >= 10) {
            hasil += "X";
            bil = bil - 10;
        }
        else if (bil >= 9) {
            hasil += "IX";
            bil = bil - 9;
        }
        else if (bil >= 5) {
            hasil += "V"
            bil = bil - 5;
        }
        else if (bil >= 4) {
            hasil += "IV";
            bil = bil - 4;
        }
        else if (bil >= 1) {
            hasil += "I";
            bil = bil - 1;
        }
        while (bil > 0);
        hasil += "";
    }
}
console.log(hasil);
//return hasil;
//console.log(konversiRomawi(2019));
//console.log("Script Testing untuk konversi Romawi\n");
//console.log("------|----------|-------");
//console.log("Input | Expected | Result");
//console.log("4     | IV       | ",romawi(4));