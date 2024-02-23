-- La sintaxis básica de CASE en SQL es la siguiente:
CASE
    WHEN condición1 THEN resultado1
    WHEN condición2 THEN resultado2
    ...
    ELSE resultado_por_defecto
END AS alias

/*Supongamos que tenemos una tabla llamada empleados con las columnas nombre, apellido y salario, y queremos agregar una columna adicional 
que indique si el salario de un empleado es alto, medio o bajo:*/

SELECT nombre, apellido, salario,
    CASE
        WHEN salario > 50000 THEN 'Alto'
        WHEN salario > 30000 THEN 'Medio'
        ELSE 'Bajo'
    END AS nivel_salario
FROM empleados;