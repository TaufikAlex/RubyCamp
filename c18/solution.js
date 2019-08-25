//----Connection Database-----\\

var Table = require('cli-table');
const fs = require('fs');
const readline = require('readline');
const sqlite3 = require('sqlite3').verbose();


let db = new sqlite3.Database('university.db', err => {
    if (err) {
        return console.error(err.message);
    }
    // console.log("Koneksi ke database berhasil!");
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
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
                            console.log(`Welcome, ${rows.username} your acces level is: ADMIN `);
                            console.log('==================================================================');
                            menuutama();

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
//--LOGOUT--\\
function logout() {
    console.log("Anda telah keluar.");
    login();
}

//--Menu Utama--\\

function menuutama() {
    console.log(pilihanUtama);
    rl.question("Masukan salah satu no.  dari opsi di atas:", (Number) => {
        switch (Number) {
            case "1":
                menu_mahasiswa();
                break;
            case "2":
                menu_jurusan();
                break;
            case "3":
                menu_dosen();
                break;
            case "4":
                menu_matakuliah();
                break;
            case "5":
                menu_kontrak();
                break;
            case "6":
                logout();
                break;
            default:
                console.log('tidak ada pilihan');
                menuutama();
                break;
        }
    })
}
//--END Menu Utama--\\

//--Menu Mahasiswa--\\

function menu_mahasiswa() {
    console.log(pilihanMahasiswa);
    rl.question("Masukan salah satu no. opsi di atas:", (Number) => {
        switch (Number) {
            case "1":
                listMahasiswa();
                break;
            case "2":
                SeacrhMahasiswa();
                break;
            case "3":
                addMahasiswa();
                break;
            case "4":
                DeleteMahasiswa();
                break;
            case "5":
                menuutama();
                break;
            default:
                console.log("Tidak ada pilihan");
                menuMahasiswa();
                break;
        }
    })
}
//---END MENU Mahasiswa---\\

//----------MENU JURUSAN------------\\
function menu_jurusan() {
    console.log(pilihanJurusan);
    rl.question("Masukan salah satu no. opsi di atas:", (Number) => {
        switch (Number) {
            case "1":
                listJurusan();
                break;
            case "2":
                SeacrhJurusan();
                break;
            case "3":
                addJurusan();
                break;
            case "4":
                DeleteJurusan();
                break;
            case "5":
                menuutama();
                break;
            default:
                console.log("Tidak ada pilihan");
                menuJurusan();
                break;
        }
    })
}
//---END MENU Jurusan---\\

//----------MENU DOSEN------------\\
function menu_dosen() {
    console.log(pilihanDosen);
    rl.question("Masukan salah satu no. opsi di atas:", (Number) => {
        switch (Number) {
            case "1":
                listDosen();
                break;
            case "2":
                SeacrhDosen();
                break;
            case "3":
                addDosen();
                break;
            case "4":
                DeleteDosen();
                break;
            case "5":
                menuutama();
                break;
            default:
                console.log("Tidak ada pilihan");
                menuDosen();
                break;
        }
    })
}
//---END MENU DOSEN---\\

//----------MENU MATAKULIAH------------\\
function menu_matakuliah() {
    console.log(pilihanMatakuliah);
    rl.question("Masukan salah satu no. opsi di atas:", (Number) => {
        switch (Number) {
            case "1":
                listmatkul();
                break;
            case "2":
                Seacrhmatkul();
                break;
            case "3":
                addmatkul();
                break;
            case "4":
                Deletematkul();
                break;
            case "5":
                menuutama();
                break;
            default:
                console.log("Tidak ada pilihan");
                menu_matakuliah();
                break;
        }
    })
}
//---END MENU MATAKULIAH--\\

//----------MENU kontrak------------\\
function menu_kontrak() {
    console.log(pilihanKontrak);
    rl.question("Masukan salah satu no. opsi di atas:", (Number) => {
        switch (Number) {
            case "1":
                listkontrak();
                break;
            case "2":
                Seacrhkontrak();
                break;
            case "3":
                addkontrak();
                break;
            case "4":
                Deletekontrak();
                break;
            case "5":
                menuutama();
                break;
            default:
                console.log("Tidak ada pilihan");
                menu_kontrak();
                break;
        }
    })
}
//---END MENU KONTRAK---\\

//--------------------------------MENU DISPLAY PILIHAN---------------------------\\

// menu utama
const pilihanUtama = `===============================================================================
silahkan pilih opsi dibawah ini MENU UTAMA
[1] Mahasiswa
[2] Jurusan
[3] Dosen
[4] Matakuliah
[5] Kontrak
[6] Keluar
===================================================================================================
`;

// menu mahasiswa
const pilihanMahasiswa = `==========================================================================
silahkan pilih opsi dibawah ini MENU MAHASISWA
[1] daftar murid
[2] cari murid
[3] tambah murid
[4] hapus murid
[5] kembali
===================================================================================================
`;

// menu jurusan
const pilihanJurusan = `==========================================================================
silahkan pilih opsi dibawah ini MENU JURUSAN
[1] daftar jurusan
[2] cari jurusan
[3] tambah jurusan
[4] hapus jurusan
[5] kembali
===================================================================================================
`;

// menu dosen
const pilihanDosen = `=============================================================================
silahkan pilih opsi dibawah ini MENU DOSEN
[1] daftar dosen
[2] cari dosen
[3] tambah dosen
[4] hapus dosen
[5] kembali
====================================================================================================
`;
//Menu Matakuliah
const pilihanMatakuliah = `==========================================================================
silahkan pilih opsi dibawah ini MENU MATA KULIAH
[1] daftar mata kuliah
[2] cari mata kuliah
[3] tambah mata kuliah
[4] hapus mata kuliah
[5] kembali
===================================================================================================
`;
//Menu kontrak
const pilihanKontrak = `===========================================================================
silahkan pilih opsi dibawah ini MENU KONTRAK
[1] daftar kontrak
[2] cari kontrak
[3] tambah kontrak
[4] hapus kontrak
[5] kembali
===================================================================================================
`;
//-------------------------------------------END MENU DISPLAY PILIHAN----------------------------------\\

//-----------------------------------LIST  FUNCTION ---------------------------\\
//---------List Mahasiswa----------\\
function listMahasiswa() {
    const sql = `SELECT mahasiswa.*,
    jurusan.nama_jurusan
    FROM mahasiswa
    INNER JOIN jurusan
    ON jurusan.jurusan_id = mahasiswa.jurusan_id`
    db.all(sql, (err, row) => {
        if (err) throw err;
        if (row) {
            const table = new Table({

                head: ['NIM', 'NAMA', 'ALAMAT', 'Nama Jurusan'],
                colWidths: [10, 20, 20, 25]
            });
            row.forEach( (mahasiswa,jurusan) =>{
                table.push(
                    [`${mahasiswa.nim}`,`${mahasiswa.nama_mhs}`,`${mahasiswa.alamat}`,`${mahasiswa.nama_jurusan}`]
                );
            });
            console.log(table.toString());
            menu_mahasiswa();
        }else{
            Console.log("tidak ditemukan mahasiswa");
            menu_mahasiswa();
        }
    })
}

//---------List Jurusan----------\\
function listJurusan() {
    const sql = `SELECT * FROM jurusan`
    db.all(sql, (err, row) => {
        if (err) throw err;
        if (row) {
            const table = new Table({

                head: ['Jurusan ID', 'NAMA JURUSAN'],
                colWidths: [10, 25]
            });
            row.forEach( (jurusan) =>{
                table.push(
                    [`${jurusan.jurusan_id}`,`${jurusan.nama_jurusan}`]
                );
            });
            console.log(table.toString());
            menu_jurusan();
        }else{
            Console.log("tidak ditemukan jurusan");
            menu_jurusan();
        }
    })
}

//---------List DOSEN----------\\
function listDosen() {
    const sql = `SELECT * FROM DOSEN`
    db.all(sql, (err, row) => {
        if (err) throw err;
        if (row) {
            const table = new Table({

                head: ['NIP DOSEN', 'NAMA DOSEN'],
                colWidths: [10, 25]
            });
            row.forEach( (DOSEN) =>{
                table.push(
                    [`${DOSEN.NIP}`,`${DOSEN.nama_dosen}`]
                );
            });
            console.log(table.toString());
            menu_dosen();
        }else{
            Console.log("tidak ditemukan DOSEN");
            menu_dosen();
        }
    })
}

// 4
//---------List Matakuliah----------\\
function listmatkul() {
    const sql = `SELECT * FROM Matakuliah`
    db.all(sql, (err, row) => {
        if (err) throw err;
        if (row) {
            const table = new Table({

                head: ['MATAKULIAH ID', 'NAMA MATKUL','SKS'],
                colWidths: [10, 25,10]
            });
            row.forEach( (Matakuliah) =>{
                table.push(
                    [`${Matakuliah.makul_id}`,`${Matakuliah.nama_matkul}`,`${Matakuliah.SKS}`]
                );
            });
            console.log(table.toString());
            menu_matakuliah();
        }else{
            Console.log("tidak ditemukan jurusan");
            menu_matakuliah();
        }
    })
}

//---------List Kontrak----------\\
function listkontrak() {
    const sql = `SELECT * FROM kontrak`
    db.all(sql, (err, row) => {
        if (err) throw err;
        if (row) {
            const table = new Table({

                head: ['KONTRAK ID', 'NIM','NIP', 'MAKUL_ID', 'NILAI'],
                colWidths: [10, 25,10,15,10,10]
            });
            row.forEach( (kontrak) =>{
                table.push(
                    [`${kontrak.kontrak_id}`,`${kontrak.nim}`,`${kontrak.NIP}`,`${kontrak.makul_id}`,`${kontrak.nilai}`]
                );
 });
            console.log(table.toString());
            menu_kontrak();
        }else{
            Console.log("tidak ditemukan jurusan");
            menu_kontrak();
        }
    })
}

//-----------------------END LIST FUNCTION---------------\\

//-----------------------CARI FUNCTION---------------------\\

//----------------------------DELETE FUNCTION-----------------\\
//---DELETE MAHASISWA--\\
function DeleteMahasiswa() {

    const sql = `DELETE FROM mahasiswa WHERE nim=?`;
    rl.question("Masukan NIM mahasiswa yang akan dihapus:", nim => {
        identitasmhs = nim;
        db.run(sql, [identitasmhs], (err, row) => {
            if (err) throw err;
            console.log('susccess deleted')
            menu_mahasiswa();
        })
    })
}

//---DELETE JURUSAN--\\
function DeleteJurusan() {

    const sql = `DELETE FROM jurusan WHERE jurusan_id=?`;
    rl.question("Masukan ID Jurusan mahasiswa yang akan dihapus:", jurusan_id => {
        id_jurusan = jurusan_id;
        db.run(sql, [id_jurusan], (err, row) => {
            if (err) throw err;
            console.log('susccess deleted')
            menu_jurusan();
        })
    })
}

//---DELETE Matakuliah--\\
function Deletematkul() {

    const sql = `DELETE FROM Matakuliah WHERE makul_id=?`;
    rl.question("Masukan ID Matakuliah yang akan dihapus:", makul_id => {
        id_makul = makul_id;
        db.run(sql, [id_jurusan], (err, row) => {
            if (err) throw err;
            console.log('susccess deleted')
            menu_matakuliah();
        })
    })
}

//---DELETE Dosen--\\
function DeleteDosen() {

    const sql = `DELETE FROM DOSEN WHERE NIP=?`;
    rl.question("Masukan NIP yang akan dihapus:", NIP => {
        id_Dosen = NIP;
        db.run(sql, [id_Dosen], (err, row) => {
            if (err) throw err;
            console.log('susccess deleted')
            menu_dosen();
        })
    })
}

//---DELETE kontrak--\\
function Deletekontrak() {

    const sql = `DELETE FROM kontrak WHERE kontrak_id=?`;
    rl.question("Masukan ID Matakuliah yang akan dihapus:", kontrak_id => {
        id_kontrak = kontrak_id;
        db.run(sql, [id_kontrak], (err, row) => {
            if (err) throw err;
            console.log('susccess deleted')
            menu_kontrak();
        })
    })
}

//-------------------------------END DELETED--------------------------\\




login();