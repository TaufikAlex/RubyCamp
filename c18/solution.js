//----Connection Database-----\\

var Table = require('cli-table');
const fs = require('fs');
const readline = require('readline');
const sqlite3 = require('sqlite3').verbose();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let db = new sqlite3.Database('university.db', err => {
    if (err) {
        return console.error(err.message);
    }
    // console.log("Koneksi ke database berhasil!");
});

//--Login--\\

const login = () => {
    console.log("WELCOME to Universitas Pendidikan Indonesia ");
    console.log("Jl setiabudi No. 255");

    console.log('=======================================================================');

    const sqlUsername = `SELECT * FROM user WHERE username=?`;
    const sqlPasswords = `SELECT * FROM user WHERE passwords=?`;

    rl.question("username: ", name => {
        username = name;
        db.all(sqlUsername, [username], (err, row) => {
            if (err) throw err;

            if (row.length > 0) {
                rl.question("password: ", passwords => {
                    passw = passwords;
                    db.all(sqlPasswords, [passw], (err, rows) => {
                        if (err) throw err;
                        // console.log(rows)

                        if (rows.length > 0) {
                            console.log('==================================================================');


                        } else {
                            console.log("Password salah !!");
                            console.log('=================================================================');
                            return login();
                        }
                    })
                })
            } else {
                console.log('coba kembali');
                return login();
            }
        })
    });
}
//--LOGIN--\\

//--MAHASISWA\\

const Mahasiswa = () => {
    const sqlListMahasiswa = `SELECT mahasiswa.nim, nama_mhs, alamat,
    jurusan.nama_jurusan  
    FROM mahasiswa
    INNER JOIN jurusan 
    ON mahasiswa.id_jurusan=jurusan.id_jurusan`;

    return db.all(sqlListMahasiswa, [], (err, rows) => {
        if (err) throw err;

        const table = new Table({
            head: ['NIM', 'Nama', 'Alamat', 'Nama Jurusan'],
            colWidths: [10, 25, 25, 35]

        });

        rows.forEach(row => {
            table.push[row.nim, row.nama_mhs, row.alamat, row.nama_jurusan]);
    });
    
});
};




// menu utama
const menu_utama = `===================================================================================================
silahkan pilih opsi dibawah ini
[1] Mahasiswa
[2] Jurusan
[3] Dosen
[4] Matakuliah
[5] Kontrak
[6] Keluar
===================================================================================================
`;

// menu mahasiswa
const menu_mhs = `===================================================================================================
silahkan pilih opsi dibawah ini
[1] daftar murid
[2] cari murid
[3] tambah murid
[4] hapus murid
[5] kembali
===================================================================================================
`;

// manu jurusan
const menu_jurusan = `===================================================================================================
silahkan pilih opsi dibawah ini
[1] daftar jurusan
[2] cari jurusan
[3] tambah jurusan
[4] hapus jurusan
[5] kembali
===================================================================================================
`;


// manu dosen
const menu_dosen = `===================================================================================================
silahkan pilih opsi dibawah ini
[1] daftar dosen
[2] cari dosen
[3] tambah dosen
[4] hapus dosen
[5] kembali
===================================================================================================
`;


class University {

    pageLogin() {

        this.beranda = login();

    }
}
const start = new University();
start.pageLogin();






















// class user {
    //     constructor(login, logout) {
        //         this.login = '';
        //         this.logout = '';
        //     }
        //     login() {


            //     }
            //     logout() {

                //     }
                // }

                // class Mahasiswa {
                    //     constructor() {

                        //     }
                        //     listMahasiswa() {

//     }

//     searchMahasiswa() {

//     }

//     addMahasiswa() {
//         `INSERT INTO mahasiswa(nim, jurusan_id, nama_mhs, umur, alamat)
//         VALUES `

//     }
//     DeleteMurid() {

//     }

// }
// class Jurusan {
//     constructor() {

//     }
//     listJurusan() {

//     }

// }

// class Dosen {
//     constructor() {

//     }
//     ListDosen() {

//     }
//     SearchDosen() {

//     }
//     addDosen() {

//     }
//     DeleteDosen() {

//     }
// }

// class Matakuliah {
//     constructor() {

//     }
//     ListMatakuliah() {

//     }
// }


