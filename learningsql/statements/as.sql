-- Para asignar un alias a una columna:

SELECT columna AS alias FROM tabla;

-- Para asignar un alias a una tabla:

/*Donde tabla es el nombre de la tabla original y t es el alias que le asignas. El alias se utiliza para hacer 
referencia a esa tabla en la consulta, especialmente útil cuando se unen múltiples tablas y es necesario calificar los nombres de las columnas.*/

SELECT t.columna FROM tabla AS t;

-- Aquí tienes un ejemplo de cómo se utiliza AS para asignar alias a una columna y a una tabla:

SELECT nombre AS nombre_cliente, edad AS edad_cliente FROM clientes;


/*En esta consulta, productos y categorias son los nombres originales de las tablas, y p y c son los alias asignados a esas tablas. 
Los alias se utilizan para calificar los nombres de las columnas y especificar de qué tabla provienen en la cláusula JOIN.*/

SELECT p.nombre AS nombre_producto, c.nombre AS nombre_categoria 
FROM productos AS p 
JOIN categorias AS c 
ON p.id_categoria = c.id;

