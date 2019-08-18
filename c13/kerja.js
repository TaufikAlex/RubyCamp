const fs =require("fs");

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
let data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

if (!read){
    console.log(todo);
    process.exit();
}
switch(read[2]) {
    case "help":
        console.log(todo);
        break;
    case "list":
        console.log("Daftar Pekerjaan");
        for(let i =0; i<data.length; i++){
            console.log(`${i + i}.[${data[i].status ? 'X' : ''}] ${data[i].task} `)
        }
        break;
    case "add":
        let output='';
        for(let i=3; i< read.length;i++){
            output +=read[i] + ' ';

        }
        data.push({
            'task':output,
            'status':false,
            'tags':[]
        })
        fs.writeFileSync('data.json',JSON.stringify(data, null, 3));
        console.log(`${output}"telah ditambahkan!`);
        break;
    case "delete":
        let deleteitem = parseInt(read[3] -1 );
        let item = data[deleteitem]
        data.splice(deleteitem, 1);
        console.log(`${item.task}" telah dihapus dari daftar!" `);
        fs.writeFileSync('data.json',JSON.stringify(data, null ,3 ));
        break;

    case "uncomplete":
        let uncompleteitem= parseInt(read[3] - 1)
        data[uncompleteitem].status = false;
        console.log(data[uncompleteitem].status);
        console.log(`${data[uncompleteitem].task}"status Uncomplete ! "`);
        fs.writeFileSync('data.json', JSON.stringify(data,null, 3));
        break;
}