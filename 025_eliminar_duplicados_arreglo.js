/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]  */

// Primera solución

const quitarDuplicados = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de números");

  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo esta vacio");

  if (arr.length === 1)
    return console.warn("El arreglo debe tener al menos 2 elementos");

  return console.info({
    original: arr,
    sinDuplicados: arr.filter(
      (value, index, self) => self.indexOf(value) === index
    ),
  });
};

quitarDuplicados();
quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

/*
Este código define una función llamada `quitarDuplicados` que toma un arreglo de elementos como parámetro y devuelve un objeto con dos arreglos: uno que contiene los elementos originales y otro que contiene los elementos sin duplicados.

Aquí está el análisis del código paso a paso:

1. Se define una función llamada `quitarDuplicados` que acepta un parámetro `arr` que por defecto es `undefined`.

2. Se inicia una serie de comprobaciones utilizando condicionales `if` para verificar si el parámetro `arr` es válido.

3. Si el parámetro `arr` es `undefined`, la función muestra un mensaje de advertencia "No ingresaste un arreglo de elementos".

4. Si el parámetro `arr` no es un arreglo, la función muestra un mensaje de error "El valor que ingresaste no es un arreglo".

5. Si el arreglo está vacío, la función muestra un mensaje de error "El arreglo está vacío".

6. Si el arreglo tiene solo un elemento, la función muestra un mensaje de advertencia "El arreglo debe tener al menos 2 elementos".

7. Luego, la función retorna un objeto que contiene el arreglo original (`original`) y el arreglo filtrado que elimina los elementos duplicados (`sinDuplicados`). Para lograr esto, se utiliza el método `filter` para iterar a través del arreglo y se verifica si el índice del valor actual es igual al índice de su primera aparición en el arreglo utilizando `indexOf`. Esto asegura que solo los elementos únicos se mantengan en el arreglo resultante.

8. Se invoca la función `quitarDuplicados` dos veces: una vez sin argumentos y otra vez con un arreglo que contiene elementos duplicados para demostrar cómo maneja diferentes situaciones de entrada.

En resumen, esta función toma un arreglo de elementos como entrada y devuelve un objeto con dos arreglos: uno que contiene los elementos originales y otro que contiene los elementos únicos al eliminar duplicados. Se realizan validaciones para asegurarse de que los datos sean válidos antes de realizar cualquier acción.
*/
