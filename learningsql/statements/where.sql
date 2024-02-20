/*Filtrar filas basadas en valores específicos:*/
/*Puedes usar WHERE para seleccionar filas donde el valor de una columna específica sea igual a un valor específico.*/

SELECT * FROM tabla WHERE columna = valor;

/*Filtrar filas basadas en comparaciones:*/
/*Puedes usar operadores de comparación como <, >, <=, >=, != o <> para comparar valores y seleccionar filas que cumplan ciertos criterios.*/

SELECT * FROM tabla WHERE columna > valor;

/*Filtrar filas basadas en patrones de texto:*/
/*Puedes usar el operador LIKE para comparar valores de texto con un patrón específico y seleccionar filas que coincidan con ese patrón.*/

SELECT * FROM tabla WHERE columna LIKE 'patrón';

/*Filtrar filas con valores nulos o no nulos:*/
/*Puedes usar IS NULL o IS NOT NULL para seleccionar filas donde el valor de una columna sea nulo o no nulo, respectivamente.*/

SELECT * FROM tabla WHERE columna IS NULL;

/*Filtrar filas con múltiples condiciones:*/
/*Puedes combinar múltiples condiciones utilizando operadores lógicos como AND, OR y NOT para crear condiciones más complejas.*/

SELECT * FROM tabla WHERE columna1 = valor1 AND columna2 = valor2;

/*Filtrar filas con valores en un conjunto específico:*/
/*Puedes usar el operador IN para seleccionar filas donde el valor de una columna esté dentro de un conjunto específico de valores.*/

SELECT * FROM tabla WHERE columna IN (valor1, valor2);