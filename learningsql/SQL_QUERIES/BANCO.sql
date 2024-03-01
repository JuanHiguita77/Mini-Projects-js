CREATE DATABASE BANCO;

use BANCO;

-- PRIMER PUNTO INICIO
CREATE TABLE cliente(
	nro_cuenta varchar(10) PRIMARY KEY,
    nombre varchar(35) NOT NULL,
    telefono varchar(25),
    direccion varchar(25),
    genero varchar(10) CHECK(genero IN("MASCULINO","FEMENINO")),
    saldo INT NOT NULL CHECK(saldo >= 0)
);

CREATE TABLE cajer_autom(
	numero varchar(10) PRIMARY KEY,
    ubicacion varchar(35) NOT NULL,
    deposito DECIMAL NOT NULL CHECK(deposito BETWEEN 0 and 30000),
    fk_sucursal varchar(10),
    CONSTRAINT fk_surcursal_cajer_autom
	FOREIGN KEY (fk_sucursal) REFERENCES sucursal(codigo)
);

CREATE TABLE vigilante(
	nombre varchar(35) NOT NULL,
    nro_cedula varchar(11) PRIMARY KEY,
    telefono varchar(25),
    genero varchar(10) CHECK(genero IN("MASCULINO","FEMENINO")),
    salario DECIMAL(8, 2) NOT NULL CHECK(salario BETWEEN 500 and 2000)
);

CREATE TABLE banco(
	codigo NUMERIC(10, 0),
    nombre varchar(30),
    PRIMARY KEY(codigo, nombre),
    fecha_fund DATE NOT NULL
);

CREATE TABLE cargo(
	codigo varchar(10) PRIMARY KEY,
    nombre varchar(35) NOT NULL UNIQUE,
    descripcion varchar(200)
);

CREATE TABLE empleado(
	codigo VARCHAR(10) PRIMARY KEY,
	nombre varchar(35) NOT NULL,
    fecha_nac DATE NOT NULL,
    genero varchar(10) CHECK(genero IN("MASCULINO","FEMENINO")),
    telefono varchar(25),
    salario DECIMAL(8, 2) NOT NULL CHECK(salario BETWEEN 500 and 2000),
    nro_hijos INT NOT NULL CHECK(nro_hijos < 4),
    fk_cargo varchar(10),
    fk_sucursal varchar(10),
    CONSTRAINT fk_cargo
    FOREIGN KEY (fk_cargo) REFERENCES cargo(codigo),
	CONSTRAINT fk_sucursal_empleado
    FOREIGN KEY (fk_sucursal) REFERENCES sucursal(codigo)
);

CREATE TABLE sucursal(
	codigo varchar(10) PRIMARY KEY,
    ubicacion varchar(35) NOT NULL,
    ciudad varchar(35) NOT NULL,
    telefono varchar(25)
);

ALTER TABLE sucursal ADD COLUMN  fk_banco_codigo NUMERIC(10, 0);
ALTER TABLE sucursal ADD COLUMN  fk_banco_nombre varchar(30);

ALTER TABLE sucursal ADD CONSTRAINT fk_banco_codigo_nombre FOREIGN KEY (fk_banco_codigo, fk_banco_nombre) REFERENCES banco(codigo, nombre);

CREATE TABLE atiende(
	id_atiende BIGINT PRIMARY KEY AUTO_INCREMENT,
	fecha DATE NOT NULL,
    duracion INT NOT NULL CHECK(duracion >= 5 AND duracion <= 20),
    fk_cliente varchar(10),
    fk_sucursal varchar(10),
    CONSTRAINT fk_cliente
    FOREIGN KEY (fk_cliente) REFERENCES cliente(nro_cuenta),
    CONSTRAINT fk_atiende_sucursal
    FOREIGN KEY (fk_sucursal) REFERENCES sucursal(codigo)
);

CREATE TABLE vigila(
	fecha DATE NOT NULL,
    novedades varchar(200),
    fk_sucursal varchar(10) NOT NULL,
    fk_vigilante varchar(11) NOT NULL,
	CONSTRAINT fk_vigilante
    FOREIGN KEY (fk_vigilante) REFERENCES vigilante(nro_cedula),
    CONSTRAINT fk_sucursal
    FOREIGN KEY (fk_sucursal) REFERENCES sucursal(codigo),
    PRIMARY KEY (fk_sucursal,fk_vigilante, fecha, novedades)
);

CREATE TABLE asigna(
	fecha_asignacion DATE NOT NULL
);

-- PRIMER PUNTO FINAL

-- ALTERACIONES DE TABLAS

ALTER TABLE cajer_autom ADD COLUMN tipo varchar(2);

ALTER TABLE banco CHANGE fecha_fund fundacion DATE NOT NULL;

ALTER TABLE vigilante ADD COLUMN categoria INT CHECK(categoria IN(1,4,7)); 

ALTER TABLE banco ADD COLUMN Nombre_Director varchar(25);

ALTER TABLE atiende ADD COLUMN transaccion varchar(18) CHECK(transaccion IN('retiro','consulta de saldo','consignación'));

ALTER TABLE cajer_autom ADD CONSTRAINT type_check CHECK(tipo IN('A', 'B', 'C'));

ALTER TABLE cargo RENAME empleo;

