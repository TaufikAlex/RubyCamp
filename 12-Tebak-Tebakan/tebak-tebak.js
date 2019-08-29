const fs = require("fs");
const readline = require('readline');

// console.log(process.argv);
let read = process.argv[2];

if(!read){
    console.log("\nTolong sertakan nama file dengan inputan soalnya");
    console.log("Misalnya 'node solution.js definition.json'");
    process.exit(0);
}
fs.readFile(read, 'utf8', (err, jsonString) => {
    if (err) {
        console.log("file read failed :", err)
    }
    var obj = JSON.parse(jsonString);
    let i = 0;
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Tebakan >'
    });
    console.log("\nSelamat datang di permainan Tebak-tebakan. kamu akan diberikan pertanyaan dari file ini 'definition.json'.");
    console.log("Untuk bermain, jawablah dengan jawaban yang sesuai");
    console.log("Gunakan 'skip' untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan ditanyakan lagi.\n");

    let count = 0;
    // let salah=0;
    console.log(obj[count].definition)
    rl.prompt();

    rl.on('line', (answer) => {
        if (answer.trim().toLocaleLowerCase() == 'skip') {
            obj.push(obj[i]);
            i++;
            console.log("\nPertanyaan: " + obj[i].definition);
        } else {
            if (answer.toLocaleLowerCase() == obj[i].term.toLocaleLowerCase()) {
                console.log('\nSelamat anda Benar..\n')
                count = 0;
                i++;
                if (i == obj.length) {
                    console.log("\nHore anda menang")
                    rl.close();
                } else {
                    console.log(obj[i].definition)
                }
            } else {
                count++;
                console.log("\nSalah ! Try Again! anda telah salah " + count + " kali, silakan coba lagi ")
            }
        }
        rl.prompt();
    }).on('close', () => {
        console.log('\nAnda Berhasil');
        process.exit(0);
    });
});
