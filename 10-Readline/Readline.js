var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: " Tulis kalimat mu disini >",
});
rl.prompt();
rl.on("line", (answer) => {
    console.log("hasil konversi: " + sentenceManipulation(answer));
    rl.prompt();

}).on('close', () => {
    console.log('Good Bye!');
    process.exit(0);
});

function sentenceManipulation(sentence) {
    var temp = (sentence);
    var code = temp.split(" ");
    var hasil = []


    for (let i = 0; i < code.length; i++) {
        if (code[i].charAt(0) == "a" || code[i].charAt(0) == "e"
            || code[i].charAt(0) == "i" || code[i].charAt(0) == "o"
            || code[i].charAt(0) == "u") {
            hasil.push(code[i])


        } else {
            let issentence = (code[i] + code[i].charAt(0) + 'nyo').slice(1);
            hasil.push(issentence)
        }

    }
return hasil.join(" ");

    

}
// sentenceManipulation(" ");
// sentenceManipulation("ibu pergi ke pasar bersama aku");
// sentenceManipulation("bebek");