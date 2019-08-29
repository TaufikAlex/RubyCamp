const fs = require("fs");
const readline = require("readline");

const daftar = `>>> JS TODO <<<
$ node todo.js <command>
$ node todo.js list
$ node todo.js task <task_id>
$ node todo.js add <task_content>
$ node todo.js delete <task_id>
$ node todo.js complete <task_id>
$ node todo.js uncomplete <task_id>
$ node todo.js list:outstanding asc|desc
$ node todo.js list:completed asc|desc
$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>
$ node todo.js filter:<tag_name>
`;

let task = process.argv;
let data = fs.readFileSync("data.json", "utf8");
let arr = JSON.parse(data);
// arr[1].complete = true;
fs.writeFileSync("data.json", JSON.stringify(arr, null, 3))

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

});

if (!process.argv[2]) {

    // console.log("silahkan dicoba");

    console.log(daftar);
    process.exit()

} else {

    switch (process.argv[2]) {
        case "help":
            console.log(daftar);
            process.exit(1);
            break;

        case "list":
            console.log(">>>list work<<<");

            let a1 = arr.length

            for (let i = 0; i <= a1 - 1; i++) {
                console.log(`${i + 1}.  ${arr[i].complete ? '[x]' : '[ ]'} ${arr[i].task}`) //template literal
            }

            process.exit(1);

            break;

        case "task":
            console.log("list task");

            break;

        case "add":

            if (!process.argv[3]) {

                // console.log(arr.length)

                console.log("add 'your activity' ");
                process.exit(1);

            } else {
                let output = " "
                console.log(task.length);

                for (let i = 3; i < task.length; i++) {
                    output += task[i] + " ";
                }
                arr.push({
                    "task": output,
                    "complete": false,
                    "tags": []

                })

                fs.writeFileSync("data.json", JSON.stringify(arr, null, 3));

                console.log("Add data success")

                process.exit(1);


            }

            break;

        case "delete":

            console.log("delete your activity");

            if (!process.argv[3]) {

                console.log("delete 'where number'")
                process.exit(1);

            } else {

                arr.splice(process.argv[3] - 1, 1);

                fs.writeFileSync("data.json", JSON.stringify(arr, null, 3), "utf8");

                // console.log(list)
                for (let i = 0; i < arr.length; i++) {
                    console.log(`${i + 1}. ${arr[i].complete ? '[x]' : '[ ]'} ${arr[i].task}`) //template literal
                }


                process.exit(1);
            }
            break;

        case "complete":
            console.log(">>>complete work<<<");
            console.log("");
            if (!process.argv[3]) {
                console.log("complete 'where number'")
                process.exit(1);
            }

            let number5 = process.argv[3];
            number5--

            if (arr[number5]["complete"] == false) {
                arr[number5]["complete"] = true
                // number == i+1

                fs.writeFileSync("data.json", JSON.stringify(arr, null, 3), "utf8")
                for (let i = 0; i < arr.length; i++) {
                    console.log(`${i + 1}. ${arr[i].complete ? '[x]' : '[ ]'} ${arr[i].task}`) //template literal
                }

                process.exit(1)
            } else {

                console.log("number has been complete")
                process.exit(1)
            }


            process.exit(1);

            break;

        case "uncomplete":


            console.log(">>>uncomplete work<<<");
            console.log("");
            if (!process.argv[3]) {
                console.log("complete 'where number'")
                process.exit(1);
            }

            let number6 = process.argv[3];
            number6--

            if (arr[number6]["complete"] == true) {
                arr[number6]["complete"] = false

                fs.writeFileSync("data.json", JSON.stringify(arr, null, 3), "utf8")
                for (let i = 0; i < arr.length; i++) {
                    console.log(`${i + 1}. ${arr[i].complete ? '[x]' : '[ ]'} ${arr[i].task}`) //template literal
                }
                process.exit(1)


            } else {

                console.log("number has been uncomplete")
                process.exit(1)
            }
            break;

        case "list:outstanding":

            console.log(">>>list:outstanding 'where asc/desc'<<<");

            if (process.argv[3] === "asc") {
                console.log(">>>outstanding work asc<<<");
                console.log("");
                for (i = 0; i < arr.length; i++) {
                    arr[i]["complete"] == true ?
                        console.log(`${i + 1} ${arr[i].complete, '[ ]'} ${arr[i].task} `) :
                        ""
                }
            }
            if (process.argv[3] === "desc") {
                console.log(">>>outstanding work desc<<<");
                console.log("");

                let a = arr.length


                for (i = a - 1; i >= 0; i--) {
                    arr[i]["complete"] == true ?
                        console.log(`${i + 1} ${arr[i].complete, '[ ]'} ${arr[i].task} `) :
                        ""
                }
            }

            process.exit(1)
            break;

        case "list:completed":

            if (process.argv[3] === "asc") {
                console.log(">>>complete work asc<<<");
                console.log("");
                for (i = 0; i < arr.length; i++) {
                    arr[i]["complete"] == true ?
                        console.log(`${i + 1} ${arr[i].complete, '[x]'} ${arr[i].task} `) :
                        ""
                }
            }
            if (process.argv[3] === "desc") {
                console.log(">>>complete work desc<<<");
                console.log("");

                let a = arr.length


                for (i = a - 1; i >= 0; i--) {
                    arr[i]["complete"] == true ?
                        console.log(`${i + 1} ${arr[i].complete, '[x]'} ${arr[i].task} `) :
                        ""
                }
            }

            process.exit(1)

            break;

        case "tag":
            console.log("tag in your activity");
            const id = process.argv[3] - 1
            for (let i = 4; i < process.argv.length; i++) {
                arr[id].tags.push(process.argv[i])
            }
            fs.writeFileSync('data.json', JSON.stringify(arr, null, 3))
            process.exit(1);

            break;

        case `filter:`:
            // let number7 = process.argv[3]/
            //     let key = number7.split(":")
            //     // console.log(key);
            //     for (let i = 0; i < arr.length; i++) {
            //         if (arr[i].tags.includes(key[0])) {
            //             console.log(`${i + 1}.${arr[i].status ? '[x]' : '[ ]'}  ${arr[i].task}`)
            //         }
            //     }

                
                // process.exit(1);
            break;
        default:
                let number7 = process.argv
                let key = number7[2].split(':');
                if (key[0] == 'filter') {
                    console.log(`Daftar Pekerjaan yang terfilter berdasarkan ${key[1]}`)
                    for (let i = 0; i < arr.length; i++) {
                        if (arr[i].tags.includes(key[1])) {
                            console.log(`${i + 1}.${arr[i].complete ? '[x]' : '[ ]'} ${arr[i].task}`)
                        }
                    }
                }
                
                process.exit(1);
                break;

    }

};
