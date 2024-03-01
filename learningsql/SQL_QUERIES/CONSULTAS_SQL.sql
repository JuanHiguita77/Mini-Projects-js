CREATE DATABASE veterinaria_lovelace;

USE veterinaria_lovelace;

-- Seleccionar todos los datos de los clientes

SELECT * FROM cliente;

-- Seleccionar todos los médicos con la profesión 'Veterinario'

SELECT * FROM medico WHERE med_profesion = 'Veterinario';

-- Obtener los medicamentos que tienen una m en su nombre

SELECT * FROM medicamentos WHERE medicamentos.med_nombre LIKE '%m%';

-- Obtener los medicamentos que tienen su valor entre 40 y 1000

SELECT * FROM medicamentos WHERE med_valor BETWEEN 40 AND 1000;

-- Obtener solamente el nombre de los medicamentos cuya longitud este entre 1 y 10

SELECT * FROM medicamentos WHERE LENGTH(med_nombre) >= 1 AND LENGTH(med_nombre) <= 8;
SELECT * FROM medicamentos WHERE CHAR_LENGTH(med_nombre) BETWEEN 1 AND 10;

-- Contar el número total de mascotas registradas

SELECT COUNT(*) AS mascots_count FROM mascotas;

-- Seleccionar los nombres únicos de las especializaciones:

SELECT DISTINCT * FROM especializacion;

-- Listar los medicamentos ordenados por valor de forma descendente:

SELECT * FROM medicamentos ORDER BY med_valor DESC;

-- Seleccionar las citas programadas entre dos fechas

SELECT * FROM citas WHERE cit_fecha BETWEEN '2024-04-01' AND '2024-04-03';

-- Obtener el nombre de la mascota y el nombre del cliente

SELECT mas_nombre, cli_nombre FROM mascotas 
JOIN cliente ON cliente.cli_id = mascotas.cliente_cli_id;

-- Listar todas las mascotas y sus historias clínicas, incluyendo las mascotas sin historias clínicas
-- Trae nulos tambien

SELECT mascotas.mas_nombre, historias_clinicas.his_descripcion FROM mascotas 
LEFT JOIN historias_clinicas ON historias_clinicas.his_id = mascotas.historias_clinicas_his_id;

-- Calcular el costo total por cada tipo de servicio

SELECT especializacion.esp_nombre, SUM(servicio.ser_costo) FROM servicio
JOIN especializacion ON especializacion.esp_id = servicio.especializacion_esp_id 
GROUP BY servicio.especializacion_esp_id;

-- Obtener una lista de citas con un estado 'Pendiente' o 'Realizado' basado en el valor de cit_estado:

SELECT 
	citas.cit_fecha,
	CASE 
		WHEN citas.cit_estado = 0 THEN 'Pendiente'
        WHEN citas.cit_estado = 1 THEN 'Realizado'
	END AS 'Estado Cita'
FROM citas;


-- Obtener los nombres de las mascotas, el procedimiento del servicio que recibieron, y el nombre de su médico:

SELECT citas.cit_fecha, servicio.ser_procedimiento, medico.med_nombre, mascotas.mas_nombre FROM citas 
JOIN medico ON citas.medico_med_id  = medico_med_id
JOIN mascotas ON mascotas.mas_id = citas.mascotas_mas_id
JOIN servicio ON servicio.ser_id = citas.servicio_ser_id;

-- Obtener el promedio del costo de servicios por especialización que superen un costo promedio de 100:

SELECT especializacion.esp_nombre, AVG(servicio.ser_costo) AS Promedio_costo, servicio.ser_procedimiento FROM servicio 
JOIN especializacion ON  especializacion.esp_id = servicio.especializacion_esp_id
GROUP BY especializacion.esp_nombre
HAVING(Promedio_costo > 100);


-- Listar información de contacto de clientes, combinando nombre, correo, y teléfono en un solo campo:


-- Obtener la última visita (fecha más reciente de cita) para cada mascota:


-- Seleccionar los medicamentos que han sido prescritos en alguna historia clínica


-- Listar todas las citas, incluyendo información de la mascota, el servicio, y la sede, ordenadas por fecha: