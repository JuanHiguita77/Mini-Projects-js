/*La instrucción DELETE en SQL se utiliza para eliminar una o varias filas de una tabla en una base de datos. 
Esta instrucción te permite eliminar registros específicos que cumplan ciertas condiciones, o eliminar todas 
las filas de una tabla si no se especifica una condición.*/

-- La sintaxis básica de la instrucción DELETE es la siguiente:

DELETE FROM nombre_de_tabla WHERE condicion;

DELETE FROM empleados WHERE id = 1;

DELETE FROM empleados;