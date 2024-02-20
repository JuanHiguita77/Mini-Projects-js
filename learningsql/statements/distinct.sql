
/*Seleccionar valores únicos de una columna:
para seleccionar valores únicos de una columna específica de una tabla, eliminando los duplicados.*/

SELECT DISTINCT columna FROM tabla 

/*Seleccionar combinaciones únicas de valores de múltiples columnas:*/
/*para seleccionar combinaciones únicas de valores de múltiples columnas, eliminando las filas duplicadas basadas en esas columnas.*/

SELECT DISTINCT columna1, columna2 FROM tabla 

/*Contar valores únicos:*/
/*para contar el número de valores únicos en una columna específica.*/

SELECT COUNT(DISTINCT columna) FROM tabla;

/*Ordenar valores únicos:*/
/*para ordenar los valores únicos en el resultado de la consulta.*/

SELECT DISTINCT columna FROM tabla ORDER BY fila;

/*Filtrar resultados únicos:*/
/*para filtrar los resultados únicos basados en ciertos criterios.*/

SELECT DISTINCT columna FROM tabla WHERE fila > 18;
