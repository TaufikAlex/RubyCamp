function tebakTebakan(){
  let soal = process.argv [2];
  if(soal){
    const fs = require('fs'),
    myData = fs.readFileSync(soal),
    definition = JSON.parse(myData);
    let i = 0;
    let fault = 0;
    let readline = require('readline');
    let rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt:'Tebakan : ',
    });
    console.log ("\nSelamat datang di permainan Tebak-tebakan. kamu akan diberikan pertanyaan dari file ini 'data.json'.");
    console.log ("Untuk bermain, jawablah dengan jawaban yang sesuai");
    console.log ("Gunakan 'skip' untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan ditanyakan lagi.");
    console.log("\npertanyaan " +dataFinish[i].definition);
    rl.prompt ();
    rl.on('line', (input) => {
      if (input.trim().toLowerCase () == 'skip'){
        dataFinish.push(dataFinish[i]);
        i++;
        console.log("\npertanyaan: " +dataFinish[i].definition);
      }else {
        if (input.trim().toLowerCase() == dataFinish[i].term){
          console.log("\nAnda beruntung!");
          i++;
          if (i < dataFinish.length) {
            console.log("\npertanyaan: " +dataFinish[i].definition);
          }else {
            console.log("\nAnda Menang!\n");
            rl.close();
          }
        } else {
          fault++;
          console.log("\nAnda Kurang Beruntung! anda telah salah "+fault+" kali, Silahkan coba lagi");
        }
      }
    });
  }else{
    console.log("\nTolong sertakan nama file dengan inputan soalnya");
    console.log("Misalnya 'node solution.js data.json'");
    process.exit(0);
  }
}
tebakTebakan ();