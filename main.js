/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/

boton.addEventListener("click", () => {
  // COMPLETAR
});
let registro= registrada.value
let distance= distancia.value
let precio=0
if (distance<=3){if (registro===si){
  precio=715.24
}
else if(distance<=6) if(registro===si)
precio=794.74
else if(distance<=12) if(registro===si)
  precio=855.97
else if(distance<=27) if(registro===si)
  precio=917.24
}
else {(registro===no)
  console.log("no estas registrado!");
}

tarifa.innerText="El valor de tu viaje es" +precio
