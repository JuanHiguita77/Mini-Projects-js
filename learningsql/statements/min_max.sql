-- Ejemplo con MIN:
-- Esta consulta devolverá el salario mínimo de todos los empleados en la tabla empleados, y el alias salario_minimo se utilizará para el resultado.

SELECT MIN(salario) AS salario_minimo FROM empleados;

-- Ejemplo con MAX:
-- Esta consulta devolverá la edad máxima de todos los clientes en la tabla clientes, y el alias edad_maxima se utilizará para el resultado.

SELECT MAX(edad) AS edad_maxima FROM clientes;