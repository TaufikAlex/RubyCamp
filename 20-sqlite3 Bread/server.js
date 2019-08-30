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

    
    const { ck1, ck2, ck3, ck4, ck5, ck6, nmid, nmstring, nminteger, nmfloat, nmdatestart, nmdateend,
         nmboolean } = req.query;
    
    // data untuk menampung filter
    let temp = []
    
    let stat = false
    
    // ---------------------------- function filter ----------------------------
    if (ck1 && nmid) {
        temp.push(`id = ${nmid}`)
        stat = true
    }
    
    if (ck2 && nmstring) {
        temp.push(`dataString = '${nmstring}'`)
        stat = true
    }
    
    if (ck3 && nminteger) {
        temp.push(`dataInteger = ${nminteger}`)
        stat = true
    }
    
    if (ck4 && nmfloat) {
        temp.push(`dataFloat = ${nmfloat}`)
        stat = true
    }
    
    if (ck5 && nmdatestart && nmdateend) {
        temp.push(`dataDate BETWEEN '${nmdatestart}' and '${nmdateend}'`)
        stat = true
    }
    
    if (ck6 && nmboolean) {
        temp.push(`dataBoolean = '${nmboolean}'`)
        stat = true
    }
    //------------------------------------------------------------------------------------ 
     // conversi dari array ke string
     let joindata = temp.join(' and ');
     
     console.log(joindata);
     
     let sql = "SELECT count(*) as total FROM inputan";
    //  kondisi ketika filter
     if (stat == true) {
         sql += ` where ${joindata} `
        }
        
        db.all(sql, [], (err, count) => {
            let rows = count[0].total //jumlah data dalam table
            let page = req.query.page || 1; // nilai awal page
            let limit = 3; // batas data yang di tampilkan 
            let totalPage = Math.ceil(rows / limit) // mencari jumlah data
            let pages = (page - 1) * limit
            let queries = req.url === '/' ? '/?page=1' : req.url;
            let Query = req.query;
            
            sql = `select * from inputan`;
            if (stat == true) {
                sql += ` where ${joindata} `
            }
            
            sql += ` LIMIT ${limit} OFFSET ${pages}`
            
            // menampilkan semua data yang ada di table data
            db.all(sql, [], (err, row) => {
                console.log(sql);
                
            res.render('list', { data: row,pages: totalPage, current: page, query:queries, Query:Query})
        })
    })
});





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


    db.all(sqlgetedit, edit, (err, row) => {
        if (err) throw err;
        // console.log(row[0])
        console.log('suksess edit');

        res.render('edit', { data: { ...row[0] } })//... membuat memori baru
    })
})
app.post('/edit/:id', (req, res) => {
    let edit = req.params.id;
    let sqlpostedit = `UPDATE inputan 
    SET dataString =?, dataInteger=?, dataFloat =?, dataDate=?, dataBoolean=? WHERE id=? `

    db.run(sqlpostedit, [req.body.dataString, req.body.dataInteger, req.body.dataFloat, req.body.dataDate, req.body.dataBoolean, edit], (err, row) => {
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