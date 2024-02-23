-- La sintaxis básica de la función CONCAT es la siguiente:
CONCAT(valor1, valor2, ...);

-- Concatenar dos columnas:
SELECT CONCAT(nombre, ' ', apellido) AS nombre_completo FROM empleados;

-- Concatenar un valor constante con una columna:
SELECT CONCAT('ID:', id) AS id_etiquetado FROM productos;

-- Concatenar múltiples valores:
SELECT CONCAT('Cliente: ', nombre, ', Teléfono: ', telefono) AS informacion_cliente FROM clientes;