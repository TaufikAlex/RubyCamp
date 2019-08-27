const path = require('path');
const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const fs = require("fs")

// let data = [{ID: '1',String:'Testing Data', Integer:'12',Float:'1.45',Date:'12 Des 2017',Boolean:'true'}];

//------BODY PARSER-----------\\
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
//----------END BP----------\\


app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')


app.get('/', (req, res) => res.render('list', { data:JSON.parse(fs.readFileSync('data.json', 'utf8')) }))


//---------ADD-----------\\
app.get('/add', (req, res) => res.render('add'))
app.post('/add', (req, res) => {
    let output = req.body;
    console.log(req.body);
    let data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    data.push({
        Id: output.id,
        String: output.string,
        Integer: output.integer,
        Float: output.float,
        Date: output.date,
        Boolean: output.boolean
    })
    fs.writeFile('data.json', JSON.stringify(data, null, 3), 'utf8', (err) => {
        if (err) return res.send(err)
        res.redirect('/');
    });
})

//--------DELETED--------\\
app.get('/deleted', (req, res) => res.render('deleted'))
app.get('/deleted/:id', (req, res) => {
    let deletitem = req.params.id;
    let data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    data.splice(deletitem, 1);
    fs.writeFileSync('data.json', JSON.stringify(data, null, 3));

    res.redirect('/');

})


app.get('/edit/:id', (req, res) => {
    let data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    res.render('edit', { item: { ...data[req.params.id] }, id: req.params.id })
})
app.post('/edit/:id', (req, res) => {
    let data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    const id = req.params.id;
    const edit = { String: req.body.string, Integer: req.body.integer, Float: req.body.float, Date: req.body.date, Boolean: req.body.boolean }
    console.log(edit)
    data[id] = edit
    data = JSON.stringify(data, null, 3);
    console.log(data);
    
    fs.writeFile("data.json", data, "utf8",(err) => {
        if (err) throw err;
        res.redirect('/');
    });
})


app.listen(3000, () => {
    console.log('web ini berjalan di port 3000!')
})