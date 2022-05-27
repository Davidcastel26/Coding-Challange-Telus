// Obtener los dos valores menores del array
const array1 = [32,54,76,4,78,9]
//necesitamos tener un valor para comparar con los elementos del arreglo
let minimoUno = 100

//creo  un array donde guardare los valores lo comienzo en 0
let newArray = [];
let controlador = 0;
// recorrer todo el array
for(let i = 0; i < array1.length ; i++ ){
  for(let j = i; j < array1.length; j++){
    /* ya recorrido puedo ir viendo cuales son los valores menores */
    if(array1[j] < array1[i] ){
    	//si el numero localizado en el array es del menor a mi variable minimo uno 
      /* el minimoUno sera el valor del array que se esta recorriendo*/
    	minimoUno = array1[j]
      /* la posicion del array[j] sera nuestro primer valor del recorrido de i*/
    	array1[j] = array1[i]
      array1[i] = minimoUno
    	
    }
  }
  // console.log(array1)
  // console.log(minimoUno) /* 4 9 32 54 76 76 */  
  // console.log( typeof minimoUno )
  /*  'number'  
  El array ya se encuentra ordenado
  */
  controlador++;
  if(controlador < 3) {
    newArray.push(minimoUno)
  }
}
console.log(newArray) //[ 4, 9 ]

//----------------------------------------------------------
/*
Esta es la primera forma que logre hacerlo
 
realizacion de un destructuring para que solo me de como resultado los valores requeridos

const [primera_posicion, segunda_posicion] = array1
console.log(primera_posicion, segunda_posicion) // 4 9

*/ 



//esta seccion del codigo queria sacar el resto del array con un po pero siempre tuve como resultado
/*[4,9,32]*/

//------------------------------------------- 
//for(let x = 0 ; x < array1.length; x++){
//   if(array1[x] > array1.length[1]) {
//     array1.pop()
//   }
// }

// console.log(array1)