// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  nuevaMatriz = []
  for (x in objeto) {
    nuevaMatriz.push([x, objeto[x]])
    }
    return nuevaMatriz
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  splited = string.split('')
  counter = {}
  splited.forEach(function (element) {
    if (counter[element]) {
      counter[element] += 1
    } else {
    counter[element] = 1
    }
  })
  return counter
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  nuevaS = ''
  sMin = ''
  for (i=0; i<s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      nuevaS += s[i]
    } else {
      sMin += s[i]
    }
  }
  return nuevaS + sMin
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var nuevaStr = ''
  for (i=0; i<str.split(' ').length; i++) {
    for (j=str.split(' ')[i].length-1; j>=0; j--) {
      nuevaStr += str.split(' ')[i][j]
    }
    if (i == str.split(' ').length -1) {
      break
    }
    nuevaStr += ' '
  }
  return nuevaStr
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  numStr = numero.toString() ;
  numSplited = numStr.split('') ;
  numReversed = numSplited.reverse() ;
  numReverJoined = numReversed.join('') ;

  if (numReverJoined === numStr) {
    return "Es capicua"
  }
  return "No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  nuevaCadena= '' ;
  for (i = 0; i < cadena.length; i++) {
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") {
      nuevaCadena += cadena[i]
    }
  }
  return nuevaCadena
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arraySorted = []
  longestWord = arr[0].length
  for (i = 1; i < arr.length; i++) {
    if (longestWord < arr[i].length) {
      longestWord = arr[i].length
    }
  };
  for (i = 0; i <= longestWord; i++) {
    arr.forEach(function (element) {
      if (element.length === i) {
        arraySorted.push(element)
      }
    })
  }
  return arraySorted
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var union =[]
  arreglo1.forEach(function (element){
    arreglo2.forEach(function(elemento){
      if (element === elemento) {
        union.push(elemento)
      }
    })
  })
  return union
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

