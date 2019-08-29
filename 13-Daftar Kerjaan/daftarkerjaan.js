const fs = require("fs");


const todo = `>>> JS TODO<<<
$ node todo.js <command>
$ node todo.js list
$ node todo.js task <task_id>
$ node todo.js add <task_content>
$ node todo.js delete <task_id>
$ node todo.js complete <task_id)
$ node todo.js uncomplete (ctask_id)
$ node todo.js list:outstanding asc|desc
$ node todo.js list:completed asc|desc
$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>
$ node todo.js filter:<tag_name>
`;

let read = process.argv;
let data = JSON.parse(fs.readFileSync('definition.json', 'utf8'));
if (!read) {
    console.log(todo);
    process.exit();
}

switch (read[2]) {

    case "help":
        console.log(todo);
        break;

    case "list":
        console.log("Daftar Pekerjaan");
        for (let i = 0; i < data.length; i++) {
            console.log(`${i + 1} . [${data[i].status ? 'X' : ' '}] ${data[i].task}`)
        }
        break;
    case "add":
        let output = '';
        for (let i = 3; i < read.length; i++) {
            output += read[i] + ' ';
        }
        data.push({
            'task': output,
            'status': false,
            'tags': []
        })
        fs.writeFileSync('definition.json', JSON.stringify(data, null, 3));
        console.log(`"${output}" telah ditambahkan!`);
        break;
    case "delete":
        let deletitem = parseInt(read[3] - 1)
        let item = data[deletitem]
        data.splice(deletitem, 1);
        console.log(`"${item.task}" telah dihapus dari daftar! `);
        fs.writeFileSync('definition.json', JSON.stringify(data, null, 3));
        break;
    case "complete":
        let completeitem = parseInt(read[3] - 1)
        data[completeitem].status = true;
        console.log(`${data[completeitem].task}"Status Complete! "`);
        fs.writeFileSync('definition.json', JSON.stringify(data, null, 3));
        break;
    case "uncomplete":
        let uncompleteitem = parseInt(read[3] - 1)
        data[uncompleteitem].status = false;
        console.log(data[uncompleteitem].status);
        console.log(`${data[uncompleteitem].task}"Status Uncomplete! "`);
        fs.writeFileSync('definition.json', JSON.stringify(data, null, 3));
        break;
    case "tags":
        let tagsitem = parseInt(read[3] - 1)
        for (let i = 4; i < read.length; i++) {
            if (!data[tagsitem].tags.includes(read[i])) {
                data[tagsitem].tags.push(read[i]);
            }
        }
        fs.writeFileSync('definition.json', JSON.stringify(data, null, 3));
        console.log(`"${data[tagsitem].tags} telah ditambahkan ke dalam daftar ${data[tagsitem].task}"`);
        break;
    case 'list:outstanding':
        if (read[3] == 'desc') {
            for (let i = data.length - 1; i >= 0; i--) {
                console.log(`${i + 1}.${data[i].status ? '[X]' : '[ ]'}${data[i].task}`);
            }
        }
        else if (read[3] == 'asc') {
            for (let j = 0; j < data.length; j++) {
                if (!data[j].status) {
                    console.log(`${j + 1}.${data[j].status ? '[X]' : '[ ]'} ${data[j].task}`);
                }
            }
        }
        break;

    default:
        let filteritem = read[2].split(':');
        if (filteritem[0] == 'filter') {
            console.log(`Daftar Pekerjaan berdasarkan filter: ${filteritem[1]}`);
            for (let i = 0; i < data.length; i++) {
                if (data[i].tags.includes(filteritem[1])) {
                    console.log(`${i + 1}.[${data[i].status ? 'X' : ' '}]${data[i].task}`)
                }
            }
        }
        break;
}
