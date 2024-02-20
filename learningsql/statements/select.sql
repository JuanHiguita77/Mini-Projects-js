/*Seleccionar campos de una tabla*/
/*Se puede copiar en minusculas o mayusculas, lo mejor es en mayusculas*/


SELECT * FROM nametable or database.nametable 
SELECT * FROM tabla:
Selecciona todas las columnas de una tabla específica.

SELECT column1, column2, ... FROM tabla:
Selecciona columnas específicas de una tabla.

SELECT DISTINCT column FROM tabla:
Selecciona valores únicos de una columna específica.

SELECT * FROM tabla WHERE condición:
Selecciona todas las columnas de una tabla donde se cumpla una condición específica.

SELECT columna FROM tabla ORDER BY columna ASC/DESC:
Selecciona todas las columnas de una tabla ordenadas por una columna específica en orden ascendente (ASC) o descendente (DESC).

SELECT * FROM tabla LIMIT n:
Selecciona las primeras n filas de una tabla.

SELECT * FROM tabla1 INNER JOIN tabla2 ON tabla1.columna = tabla2.columna:
Selecciona datos de dos tablas relacionadas basadas en una condición de unión.

SELECT * FROM tabla WHERE columna LIKE 'patrón':
Selecciona todas las columnas de una tabla donde una columna específica coincide con un patrón especificado.

SELECT COUNT(columna) FROM tabla:
Cuenta el número de filas en una tabla que cumplen con ciertos criterios.

SELECT SUM(columna) FROM tabla:
Calcula la suma de los valores en una columna.

SELECT AVG(columna) FROM tabla:
Calcula el promedio de los valores en una columna.

SELECT MAX(columna) FROM tabla:
Encuentra el valor máximo en una columna.

SELECT MIN(columna) FROM tabla:
Encuentra el valor mínimo en una columna.
