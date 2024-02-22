/*Buscar valores que comienzan con una cadena específica:*/

SELECT * FROM tabla WHERE columna LIKE 'Juan%';

/*Buscar valores que terminan con una cadena específica:*/

SELECT * FROM tabla WHERE columna LIKE '%laptop';

/*Buscar valores que contienen una cadena específica en cualquier posición:*/

SELECT * FROM tabla WHERE columna LIKE '%avenida%'; 

/*Buscar valores que tengan un patrón específico con comodines:
EL guion significa que puede ir solamente un caracter y ya luego del on lo que encuentre 
*/

SELECT * FROM tabla WHERE columna LIKE '_on%';

/*Patrón que empieza y termina con caracteres específicos:

Este patrón buscará valores que comiencen con la letra "A" y terminen con la letra "Z", con cualquier cantidad de caracteres entre ellas:
*/

SELECT * FROM tabla WHERE columna LIKE 'A%Z';

/*Patrón con un número específico de caracteres en una posición específica:

Este patrón buscará valores que comiencen con "A", seguido de exactamente tres caracteres, y terminen con "Z":

*/

SELECT * FROM tabla WHERE columna LIKE 'A_ _ _Z';