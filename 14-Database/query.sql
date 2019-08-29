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
    alamat text NOT NULL,
    PRIMARY KEY (nim),
    FOREIGN KEY (jurusan_id) REFERENCES jurusan(jurusan_id)
    ON DELETE CASCADE ON UPDATE NO ACTION

);
INSERT INTO mahasiswa (nim,jurusan_id, nama_mhs, alamat)
VALUES
    (0001, 111,'Taufik Alex', 'JAKARTA SELATAN'),
    (0002, 212,'Nurdin ', 'Bandung City'),
    (0003, 313,'sigit', 'Jakarta pusat'),
    (0004, 111,'shafi', 'Bandung Timur');


CREATE TABLE Matakuliah
(
    makul_id CHAR(8) NOT NULL,
    nama_matkul CHAR (20) NOT NULL,
    SKS char (10) NOT NULL,
    PRIMARY KEY (makul_id)
);
INSERT INTO Matakuliah (makul_id, nama_matkul, SKS)
VALUES
    (01, 'Belajar Javascript', 2),
    (02, 'Biologis', 4),
    (03, 'FISIKA', 2);

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
    FOREIGN KEY (nim) REFERENCES mahasiswa(nim)
    ON DELETE CASCADE ON UPDATE NO ACTION,
    FOREIGN KEY (NIP) REFERENCES DOSEN(NIP)
    ON DELETE CASCADE ON UPDATE NO ACTION,
    FOREIGN KEY (makul_id) REFERENCES Matakuliah(makul_id)
    ON DELETE CASCADE ON UPDATE NO ACTION
);
INSERT INTO kontrak (nim, NIP, makul_id, nilai)
VALUES
(0001, '001','03', 'C');