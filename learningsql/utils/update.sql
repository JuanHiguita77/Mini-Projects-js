/*
La instrucción UPDATE en SQL se utiliza para modificar los datos existentes en una o varias filas de una tabla en una base de datos. 
Esta instrucción te permite cambiar los valores de una o varias columnas en una tabla según una condición específica.
*/


-- La sintaxis básica de la instrucción UPDATE es la siguiente:

UPDATE nombre_de_tabla SET columna1 = valor1, columna2 = valor2, ...  WHERE condicion;

-- Example

UPDATE empleados SET apellido = 'López' WHERE id = 1;