CREATE TABLE inputan (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    dataString VARCHAR (20) NOT NULL,
    dataInteger INTEGER (8) NOT NULL,
    dataFloat FLOAT (8) NOT NULL,
    dataDate DATE NOT NULL ,
    dataBoolean BOOLEAN NOT NULL

);

INSERT INTO inputan (dataString, dataInteger, dataFloat, dataDate, dataBoolean)
VALUES('Meong', 12, 1.04, '2020-12-12', "true"),
('human error', 1, 2.54, '2019-10-10', "true"),
('anak meong1', 1, 1.01, '2019-10-10', "false"),
('human aum', 1, 2.54, '2019-10-10', "true"),
('anak meong2', 1, 1.02, '2019-10-10', "false"),
('human cim', 1, 1.03, '2019-10-10', "true"),
('anak meong3', 1, 1.04, '2019-10-10', "false"),
('human qori', 1, 2.54, '2019-10-10', "true"),
('anak meong4', 1, 1.05, '2019-10-10', "false"),
('anak meong5', 1, 2.54, '2019-10-10', "true"),
('human auah', 1, 1.06, '2019-10-10', "false");

