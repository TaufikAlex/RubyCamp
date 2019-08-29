const path = require('path');
const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const fs = require("fs")
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('bread.db', err => {
    if (err) {
        return console.error(err.message);
    }
    console.log("koneksi ke database berhasil!");
})

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

//------BODY PARSER-----------\\
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
//----------END BP----------\\


app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

//-------------LIST----------\\

app.get('/', (req, res) => {
    db.all(`SELECT * FROM inputan`, (err, row) => {
        console.log(row);

        res.render('list', { data: row })
    })
})

app.get('/', (req, res) => {
    
})


//---------ADD-----------\\
app.get('/add', (req, res) => res.render('add'))
app.post('/add', (req, res) => {
    const sqladd = `INSERT INTO inputan (dataString, dataInteger, dataFloat, dataDate, dataBoolean) VALUES(?,?,?,?,?)`
    db.run(sqladd, [req.body.dataString, req.body.dataInteger, req.body.dataFloat, req.body.dataDate, req.body.dataBoolean], (err) => {
        if (err) throw err;
        console.log('Susccess add inputan');
    })

    res.redirect('/');
});




//------------------EDIT------------\\
app.get('/edit/:id', (req, res) => {
    let edit = req.params.id;
    let sqlgetedit = `SELECT * FROM inputan WHERE id=?`;
    // let edit = req.params;
    console.log(edit);
    

    db.all(sqlgetedit, edit,(err,row) =>{
        if(err) throw err;
        // console.log(row[0])
        console.log('suksess edit');
        
        
        
        res.render('edit',{data:{...row[0]}})//... membuat memori baru
    })
})
app.post('/edit/:id', (req, res) => {
    let edit = req.params.id;
    let sqlpostedit = `UPDATE inputan 
    SET dataString =?, dataInteger=?, dataFloat =?, dataDate=?, dataBoolean=? WHERE id=? `

    db.run(sqlpostedit,[req.body.dataString, req.body.dataInteger, req.body.dataFloat, req.body.dataDate, req.body.dataBoolean,edit],(err,row) =>{
        if (err) throw err;

        res.redirect('/');
    })
    
    
    
})


//--------DELETED--------\\
// app.get('/deleted/:id', (req, res) => res.render('deleted'))
app.get('/deleted/:id', (req, res) => {
    let sqldeleted = `DELETE FROM inputan WHERE id=?`;
    let deleted = req.params.id;

    db.run(sqldeleted, deleted, (err) => {
        if (err) throw err;
        console.log('susccess deleted!')
    })

    res.redirect('/');

})


app.listen(3000, () => {
    console.log('web ini berjalan di port 3000!')
})