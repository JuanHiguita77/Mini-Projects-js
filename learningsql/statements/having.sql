/*Supongamos que tenemos una tabla llamada ventas con las columnas producto, cantidad, y total, y queremos 
obtener el total de ventas por producto solo para aquellos productos que hayan tenido más de 100 unidades vendidas:*/

SELECT producto, SUM(cantidad) AS total_unidades_vendidas FROM ventas GROUP BY producto HAVING SUM(cantidad) > 100;