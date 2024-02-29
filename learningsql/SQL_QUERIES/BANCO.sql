CREATE DATABASE BANCO;

use BANCO;

-- Punto a y b: Inicio
CREATE TABLE cliente(
	nro_cuenta varchar(10) PRIMARY KEY,
    nombre varchar(40) NOT NULL,
    telefono INT,
    direccion varchar(40),
    genero varchar(40) NOT NULL,
    saldo  DECIMAL NOT NULL 
);

ALTER TABLE cliente MODIFY COLUMN nombre varchar(35) NOT NULL;

CREATE TABLE cajer_autom(
	numero varchar(10) PRIMARY KEY,
    ubicacion varchar(30) NOT NULL,
    deposito DECIMAL NOT NULL
);

ALTER TABLE cajer_autom MODIFY COLUMN ubicacion varchar(35) NOT NULL;

CREATE TABLE vigilante(
	nombre varchar(40) NOT NULL,
    nro_cedula varchar(11),
    telefono INT,
    genero varchar(4) CHECK(genero IN("M","F","Otro")),
    salario DECIMAL NOT NULL
);

ALTER TABLE vigilante MODIFY COLUMN nombre varchar(35) NOT NULL;

CREATE TABLE banco(
	codigo NUMERIC(10, 0),
    nombre varchar(30),
    PRIMARY KEY(codigo, nombre),
    fecha_fund DATE NOT NULL
);

CREATE TABLE cargo(
	codigo varchar(10) PRIMARY KEY,
    nombre varchar(35) NOT NULL,
    descripcion varchar(200)
);

CREATE TABLE empleado(
	nombre varchar(35) NOT NULL,
    fecha_nac DATE NOT NULL,
    genero varchar(4) CHECK(genero IN("M","F","Otro")),
    codigo VARCHAR(10) PRIMARY KEY,
    telefono varchar(15),
    salario DECIMAL NOT NULL,
    nro_hijos INT NOT NULL
);

CREATE TABLE sucursal(
	codigo varchar(10) PRIMARY KEY,
    ubicacion varchar(30),
    ciudad varchar(20),
    telefono varchar(15)
);

ALTER TABLE sucursal MODIFY COLUMN ubicacion varchar(35) NOT NULL,
	MODIFY COLUMN ciudad varchar(35) NOT NULL;

-- Punto a y b: Final

-- Punto c: Inicio

ALTER TABLE cliente MODIFY COLUMN direccion varchar(25);
ALTER TABLE cliente MODIFY COLUMN telefono varchar(25);
ALTER TABLE vigilante MODIFY COLUMN telefono varchar(25);
ALTER TABLE empleado MODIFY COLUMN telefono varchar(25);
ALTER TABLE sucursal MODIFY COLUMN telefono varchar(25);

-- Numericos

ALTER TABLE empleado MODIFY COLUMN salario DECIMAL(8, 2) NOT NULL;
ALTER TABLE vigilante MODIFY COLUMN salario DECIMAL(8, 2) NOT NULL;
ALTER TABLE cliente MODIFY COLUMN saldo INT NOT NULL;

-- Nuevas tablas relacionales entre entidades

CREATE TABLE atiende(
	fecha DATE NOT NULL,
    duracion TIME NOT NULL
);

CREATE TABLE vigila(
	fecha DATE NOT NULL,
    novedades varchar(200)
);

CREATE TABLE asigna(
	fecha_asignacion DATE NOT NULL
);

-- Modificar generos
ALTER TABLE cliente MODIFY COLUMN genero varchar(10);
ALTER TABLE empleado MODIFY COLUMN genero varchar(10);
ALTER TABLE vigilante MODIFY COLUMN genero varchar(10);

-- Punto c: Final

-- Punto d: Inicio


-- Restriccion cargos
ALTER TABLE cargo ADD CONSTRAINT unique_cargo UNIQUE (nombre);

-- Restringir salarios
ALTER TABLE empleado ADD CONSTRAINT salario_promedio CHECK(salario BETWEEN 500 and 2000);
ALTER TABLE vigilante ADD CONSTRAINT salario_promedio CHECK(salario BETWEEN 500 and 2000);

-- Generos preestablecidos
ALTER TABLE cliente ADD CONSTRAINT genero_condicion CHECK(genero IN("MASCULINO","FEMENINO"));
ALTER TABLE empleado ADD CONSTRAINT genero_condicion CHECK(genero IN("MASCULINO","FEMENINO"));
ALTER TABLE vigilante ADD CONSTRAINT genero_condicion CHECK(genero IN("MASCULINO","FEMENINO"));

-- Maximo de deposito en cajeros automaticos
ALTER TABLE cajer_autom ADD CONSTRAINT max_deposito CHECK(deposito BETWEEN 0 and 30000);

-- Saldo positivo
ALTER TABLE cliente ADD CONSTRAINT saldo_positivo CHECK(saldo >= 0);

-- Hijos maximos
ALTER TABLE empleado ADD CONSTRAINT max_hijos CHECK(nro_hijos < 4);

-- Crear las llaves foraneas
ALTER TABLE atiende ADD COLUMN fk_id_cliente varchar(10);
ALTER TABLE atiende ADD COLUMN fk_id_sucursal varchar(10);


-- Rango duracion permitida y llaves foraneas
ALTER TABLE atiende ADD CONSTRAINT atiende_constraint 
	CHECK(duracion >= 5 AND duracion <= 20), FOREIGN KEY (id_atiende) REFERENCES atiende(id_atiende)
    

-- Nuevo campo id en atiende
ALTER TABLE atiende ADD COLUMN id_atiende BIGINT PRIMARY KEY AUTO_INCREMENT;

-- Añadir las llaves foraneas para hacer la relacion

ALTER TABLE atiende ADD CONSTRAINT nombre_de_constraint FOREIGN KEY (columna) REFERENCES tabla_padre(columna);
ALTER TABLE vigila ADD CONSTRAINT nombre_de_constraint FOREIGN KEY (columna) REFERENCES tabla_padre(columna);
ALTER TABLE asigna ADD CONSTRAINT nombre_de_constraint FOREIGN KEY (columna) REFERENCES tabla_padre(columna);


-- Punto d: Final




