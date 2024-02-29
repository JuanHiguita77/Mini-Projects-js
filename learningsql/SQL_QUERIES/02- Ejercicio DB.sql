CREATE DATABASE unidades_residenciales;

USE unidades_residenciales;

CREATE TABLE conjuntos (
    nit_conjunto varchar(11) PRIMARY KEY,
    nombre varchar (30) NOT NULL,
    estrato INT NOT NULL
);

CREATE TABLE vigilantes (
    ced_vigilante varchar(10) PRIMARY KEY,
    nombre varchar(30) NOT NULL,
    fecha_nacimiento DATE,
    genero varchar (4) CHECK(genero IN("M","F","Otro"))
);

CREATE TABLE edificios (
    id_edificio INT PRIMARY KEY AUTO_INCREMENT,
    nro_piso INT CHECK(nro_piso BETWEEN 5 AND 8),
    ubicacion varchar(40)
    #id_conjunto varchar(11),
    #CONSTRAINT fk_id_conjunto foreign key(id_conjunto)
    #REFERENCES conjuntos(nit_conjunto)
);

#Crear llave foranea depues de haber creado la tabla
ALTER TABLE edificios
    ADD COLUMN id_conjunto varchar(11);

ALTER TABLE edificios
    ADD CONSTRAINT fk_id_conjunto foreign key(id_conjunto)
    REFERENCES conjuntos(nit_conjunto);

ALTER TABLE conjuntos
    MODIFY COLUMN nombre varchar(30) NOT NULL
    CHECK(nombre NOT IN ("Santana","Altos","Montes"));

CREATE TABLE novedades(
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_edificio INT,
    id_vigilante varchar(10),
    CONSTRAINT fk_id_edificio foreign key (id_edificio)
    REFERENCES edificios(id_edificio),
    CONSTRAINT fk_id_vigilante foreign key(id_vigilante)
    REFERENCES vigilantes(ced_vigilante)
);

CREATE TABLE apartamentos(
	num_apartamento INT PRIMARY KEY AUTO_INCREMENT,
    piso INT NOT NULL,
    valor DOUBLE CHECK(valor BETWEEN 10000 and 100000),
    id_edificio INT,
    CONSTRAINT fk_id_edificio2 foreign key (id_edificio)
    REFERENCES edificios(id_edificio)
);

ALTER TABLE edificios
    ADD COLUMN sector varchar(30)
    CHECK(sector IN ("Piscina", "Alameda", "Cancha"));

#Insertando en conjunto
INSERT INTO conjuntos
    VALUES ("12345","Miraflores",3),("112233","Fontana Real",2);
    SELECT * FROM conjuntos;

INSERT INTO edificios(nro_piso,sector)
    VALUES(6,"Piscina");
    SELECT * FROM edificios;

INSERT INTO vigilantes
    VALUES ("123456","Federico","1984-05-05","M");