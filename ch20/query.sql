CREATE TABLE inputan (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    dataString VARCHAR (20) NOT NULL,
    dataInteger INTEGER (8) NOT NULL,
    dataFloat FLOAT (8) NOT NULL,
    dataDate DATE NOT NULL ,
    dataBoolean BOOLEAN NOT NULL

);

INSERT INTO inputan (dataString, dataInteger, dataFloat, dataDate, dataBoolean)
VALUES('Super Sekali', 1, 1.45, '2017-12-12', "true"),
('Dont Give Up', 1, 2.54, '2019-10-10', "false");
