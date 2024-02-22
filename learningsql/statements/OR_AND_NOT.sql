/*NOT es un operador lógico que se utiliza para negar una condición.

Cuando se coloca delante de una condición, invierte el resultado de esa condición. Por ejemplo, 
NOT condición devuelve true si la condición es false y viceversa.
*/

SELECT * FROM tabla WHERE NOT columna = valor;

/*
AND es un operador lógico que se utiliza para combinar múltiples condiciones y requerir que todas ellas sean verdaderas 
para que la fila sea seleccionada. Se utiliza para filtrar los resultados según múltiples condiciones simultáneamente.

Esta consulta seleccionará todas las filas de la tabla donde ambas condición1 y condición2 sean verdaderas.
*/

SELECT * FROM tabla WHERE condición1 AND condición2;

/*
OR es un operador lógico que se utiliza para combinar múltiples condiciones y requerir que al menos una de ellas sea verdadera 
para que la fila sea seleccionada.

Se utiliza para filtrar los resultados según múltiples condiciones alternativas.

Esta consulta seleccionará todas las filas de la tabla donde al menos una de las condiciones
(condición1 o condición2) sea verdadera.
*/

SELECT * FROM tabla WHERE condición1 OR condición2;

/*EJEMPLO*/

/**Tienen más de
30 años (edad > 30).

Trabajan en el departamento de "Ventas" o "Marketing" (departamento = 'Ventas' OR departamento = 'Marketing').

Su salario es inferior a 50000 (salario < 50000).

No tienen el nombre "John" (NOT nombre = 'John').

Aquí está la consulta SQL que combina estas condiciones utilizando AND, OR, y NOT:
*/

SELECT * FROM empleados WHERE edad > 30
                          AND (departamento = 'Ventas' OR departamento = 'Marketing')
                          AND salario < 50000
                          AND NOT nombre = 'John';