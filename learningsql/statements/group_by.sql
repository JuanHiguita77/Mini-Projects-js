-- La sintaxis básica de la cláusula GROUP BY es la siguiente:

/*
La cláusula GROUP BY en SQL se utiliza para agrupar filas que tienen el mismo valor en una o 
más columnas y aplicar funciones de agregación, como SUM, COUNT, AVG, MIN, MAX, entre otras, a las filas agrupadas.
*/
SELECT columna1, columna2, función_de_agregación(columna) AS alias FROM tabla GROUP BY columna1, columna2;

-- Supongamos que tenemos una tabla llamada ventas con las columnas producto, cantidad, y total, y queremos obtener el total de ventas por producto:
SELECT producto, SUM(total) AS total_ventas FROM ventas GROUP BY producto;

