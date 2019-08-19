CREATE TABLE jurusan
(
    jurusan_id CHAR(8) NOT NULL,
    nama_jurusan VARCHAR(255) NOT NULL,
    PRIMARY KEY (jurusan_id)
);

INSERT INTO jurusan (jurusan_id, nama_jurusan)
VALUES
    (111, 'TEKNIK INFORMATIKA'),
    (212, 'SISTEM INFORMATIKA'),
    (313, 'MANAGEMENT INFORMATIKA'),
    (414, 'MOBILE AND WEBS');



CREATE TABLE mahasiswa
(
    nim CHAR(8) NOT NULL,
    jurusan_id CHAR(4) NOT NULL,
    nama_mhs VARCHAR(255) NOT NULL,
    umur INT(2) NOT NULL,
    alamat text NOT NULL,
    PRIMARY KEY (nim),
    FOREIGN KEY (jurusan_id) REFERENCES jurusan(jurusan_id)
    ON DELETE CASCADE ON UPDATE NO ACTION

);
INSERT INTO mahasiswa (nim,jurusan_id, nama_mhs,umur, alamat)
VALUES
    (142018, 111,'Taufik Alex',23,'JAKARTA SELATAN'),
    (152019, 212,'Nurdin ', 19,'Bandung City'),
    (162020, 313,'sigit',17 ,'Jakarta pusat'),
    (172021, 111,'shafi', 20,'Bandung Timur');

CREATE TABLE Matakuliah
(
    makul_id CHAR(8) NOT NULL,
    nama_matkul CHAR (20) NOT NULL,
    SKS char (10) NOT NULL,
    PRIMARY KEY (makul_id)
);
INSERT INTO Matakuliah (makul_id, nama_matkul, SKS)
VALUES
    (01, 'Belajar Javascript', 22),
    (02, 'data mining', 12),
    (03, 'FISIKA', 8),
    (04, 'Data Trader', 10);

CREATE TABLE DOSEN
(
    NIP CHAR(8) NOT NULL,
    nama_dosen char(255) NOT NULL,
    PRIMARY KEY (NIP)
);
INSERT INTO DOSEN (NIP, nama_dosen)
VALUES
    (001, 'RONSEN PURBA'),
    (002, 'KRISTIAN TELEMBANUA'),
    (003, 'SUNARIO');
    

CREATE TABLE kontrak
(
    kontrak_id INTEGER PRIMARY KEY AUTOINCREMENT,
    nim VARCHAR(10),
    NIP VARCHAR(10) NOT NULL,
    makul_id VARCHAR(10) NOT NULL,
    nilai VARCHAR(2) NOT NULL,
    jumlah Varchar(1) NOT NULL,
    FOREIGN KEY (nim) REFERENCES mahasiswa(nim)
    ON DELETE CASCADE ON UPDATE NO ACTION,
    FOREIGN KEY (NIP) REFERENCES DOSEN(NIP)
    ON DELETE CASCADE ON UPDATE NO ACTION,
    FOREIGN KEY (makul_id) REFERENCES Matakuliah(makul_id)
    ON DELETE CASCADE ON UPDATE NO ACTION
);
INSERT INTO kontrak (nim, NIP, makul_id, nilai,jumlah)
VALUES
(142018, '001','01', 'A',1),
(152019, '002','02', 'B',1),
(162020, '003','03', 'C',1),
(172021, '001','04', 'D',1);

-- ===============================================================================================
-- //Soal No 1
SELECT mahasiswa.*,
jurusan.nama_jurusan
FROM mahasiswa
INNER JOIN jurusan
ON jurusan.jurusan_id = mahasiswa.jurusan_id


-- // Soal no 2
SELECT nim, nama_mhs, umur
FROM mahasiswa
WHERE umur <= 20;

-- //Soal No 3
SELECT kontrak. nim, nilai,
mahasiswa. nama_mhs
FROM kontrak
INNER JOIN mahasiswa
ON kontrak.nim = mahasiswa.nim
WHERE nilai BETWEEN 'A' AND 'B';

-- //Soal No 4 Belum Siap
SELECT kontrak. makul_id,
mahasiswa. nama_mhs
FROM kontrak
INNER JOIN Matakuliah
ON kontrak.makul_id = mahasiswa.nim
WHERE sks > 10;

-- //Soal no 6


-- //Soal No 7
SELECT * FROM mahasiswa
ORDER BY umur DESC;