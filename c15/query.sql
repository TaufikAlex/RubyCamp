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
(142018, '001','1', 'A',1),
(152019, '002','2', 'B',1),
(162020, '003','3', 'C',1),
(172021, '001','4', 'D',1);

-- ===============================================================================================
-- //Soal No 1
-- tampilkan seluruh data mahasiswa beserta nama jurusannya
SELECT mahasiswa.*,
jurusan.nama_jurusan
FROM mahasiswa
INNER JOIN jurusan
ON jurusan.jurusan_id = mahasiswa.jurusan_id


-- // Soal no 2
-- tampilkan mahasiswa yang memiliki umur dibawah 20 tahun.
SELECT nim, nama_mhs, umur
FROM mahasiswa
WHERE umur <= 20;

-- //Soal No 3
-- tampilkan mahasiswa yang memiliki nilai 'B' ke atas.
SELECT kontrak. nim, nilai,
mahasiswa. nama_mhs
FROM kontrak
INNER JOIN mahasiswa
ON kontrak.nim = mahasiswa.nim
WHERE nilai BETWEEN 'A' AND 'B';

-- //Soal No 4
-- tampilkan mahasiswa yang memiliki jumlah SKS lebih dari 10.
SELECT nama_mhs, nama_matkul, sks
FROM kontrak, mahasiswa, Matakuliah
WHERE kontrak.nim = mahasiswa.nim
AND kontrak.makul_id = Matakuliah.makul_id
GROUP BY nama_mhs HAVING SUM(sks) > 10;


-- //Soal no 5
-- tampilkan mahasiswa yang mengontrak mata kuliah 'data mining'.


SELECT nama_mhs, nama_matkul 
FROM kontrak, mahasiswa,Matakuliah 
WHERE kontrak.nim = mahasiswa.nim 
AND kontrak.makul_id = Matakuliah.makul_id 
AND nama_matkul='data mining';


SELECT nama_mhs, nama_matkul,
FROM kontrak,mahasiswa, Matakuliah
WHERE kontrak.nim = mahasiswa.nim
ON kontrak.makul_id = Matakuliah.makul_id
WHERE nama_matkul LIKE 'data mining';

SELECT kontrak. nim,
mahasiswa. nama_mhs,
Matakuliah. nama_matkul
FROM kontrak
JOIN mahasiswa ON kontrak.nim = mahasiswa.nim
JOIN Matakuliah ON kontrak.makul_id = Matakuliah.makul_id
WHERE nama_matkul LIKE 'data mining%';


-- //Soal no 6
-- tampilkan jumlah mahasiswa untuk setiap dosen



-- //Soal No 7
-- urutkan mahasiswa berdasarkan umurnya
SELECT * FROM mahasiswa
ORDER BY umur DESC;