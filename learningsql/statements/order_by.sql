/*Ordenar resultados por una columna específica:*/
/*Puedes usar ORDER BY columna para ordenar los resultados de la consulta en función de los valores de una columna específica en orden ascendente (predeterminado).*/

SELECT * FROM tabla ORDER BY columna;

/*Ordenar resultados en orden:*/
/*Puedes agregar la palabra clave ASC/DESC después de la columna para ordenar los resultados en orden descendente.*/

SELECT * FROM tabla ORDER BY columna DESC;

/*Ordenar por múltiples columnas:*/
/*Puedes especificar múltiples columnas separadas por comas para ordenar los resultados primero por una columna y luego por otra en caso de empate.*/

SELECT * FROM tabla ORDER BY columna1, columna2;

/*Ordenar por expresiones o funciones:*/
/*También puedes ordenar los resultados por expresiones o funciones. Por ejemplo, puedes ordenar por la longitud de una cadena utilizando ORDER BY LENGTH (columna).*/

SELECT * FROM tabla ORDER BY LENGTH(columna);

/*Ordenar por posiciones específicas de caracteres:*/
/*Puedes ordenar los resultados por caracteres específicos en una columna utilizando la función SUBSTRING o LEFT.
SUBSTRING(cadena, inicio, longitud)*/

SELECT * FROM tabla ORDER BY SUBSTRING(columna, 2, 1);

/*Ordenar por valores calculados o alias de columnas:*/
/*También puedes ordenar por valores calculados o alias de columnas en la consulta.*/

SELECT columna1 + columna2 AS suma FROM tabla ORDER BY suma;

/*EJEMPLO VALORES CALCULADOS*/
SELECT CONCAT(nombre, ' ', apellido) AS nombre_completo FROM usuarios;

SELECT fecha_nacimiento, YEAR(año_actual) - YEAR(fecha_nacimiento) AS edad FROM usuarios;

SELECT precio_unitario * cantidad AS total FROM productos;

