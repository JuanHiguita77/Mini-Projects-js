-- Seleccionar registros con valores dentro de un rango numérico:
-- Esta consulta seleccionará todos los productos cuyo precio esté entre 10 y 50, incluyendo ambos valores.

SELECT * FROM productos WHERE precio BETWEEN 10 AND 50;

-- Seleccionar registros con fechas dentro de un rango:

SELECT * FROM pedidos WHERE fecha BETWEEN '2023-01-01' AND '2023-12-31';

-- Seleccionar registros con valores de texto dentro de un rango alfabético:

SELECT * FROM estudiantes WHERE apellido BETWEEN 'A' AND 'M';