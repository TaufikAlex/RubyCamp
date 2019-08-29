const fs = require("fs");
const readline = require('readline');

fs.readFile('definition.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("file read failed :", err)
    }
    var obj = JSON.parse(jsonString);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Tebakan >'
    });

    let count = 0;
    console.log(obj[count].definition)
    rl.prompt();

    rl.on('line', (answer) => {
        if (answer.toLocaleLowerCase() == obj[count].term.toLocaleLowerCase()) {
            console.log('\nSelamat anda Benar..')
            count++;
            if (count == obj.length) {
                console.log("\nHore anda menang")
                rl.close();
            }
            console.log(obj[count].definition)
        }
        else {
            console.log(`\nSalah ! Try Again `)
        }
        rl.prompt();

    }).on('close', () => {
        console.log('\nGood Bye!');
        process.exit(0);
    });
});
