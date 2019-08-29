const fs = require("fs");
const readline = require('readline');

fs.readFile('definition.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("not Found!", err)
    }
    var obj = JSON.parse(jsonString);
    const rl = readline.createInterface ({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Jawaban>'
    });
    
    let count = 0;
    console.log(obj[count].definition)
    rl.prompt();
    
    rl.on('line', (answer) => {
        console.log(answer)
        if (answer.toLocaleLowerCase() == obj[count].term.toLocaleLowerCase()) {
            console.log(`Lanjut Sesi Berikutnya...`)
            count++
            if (count == obj.length) {
                console.log("Selamat kamu menang kuis")
                rl.close()
            }
            console.log(obj[count].definition)
        } else {
            console.log(`Salaaah!! COba lagi`)
        }
    
        rl.prompt();
    
    }).on('close', () => {
        console.log('good bye!');
        process.exit(0);
    });
// console.log(abj)
});
console.log("SELAMAT DATANG DI PERMAINAN TEBAK KATA, SILAHKAN ISI DENGAN JAWABAN YANG BENAR YA")