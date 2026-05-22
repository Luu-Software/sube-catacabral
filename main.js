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

  let registro= registrada.value
let distance= Number(distancia.value)
let precio=0;
let tipoColectivo= tipo.value
if (tipoColectivo==="caba"){
if (distance<=3){
  if (registro==="si") {
  precio=715.24;}
  else if(registro==="social"){
    precio=339.18;
  }
 else{precio=1137.23;}
}
else if(distance<=6){
  if(registro==="si"){
    precio=794.74;
  } else if(registro==="social"){precio=376.88;}
  else {precio=1263.64}
}
else if(distance<=12){
  if(registro==="si"){
    precio=855.97;
  } else if (registro==="social"){precio=405.91;}
  else{precio=1360.90;}
}
else if(distance<=27){
  if(registro==="si"){
    precio=917.24;
  } else if(registro==="social"){precio=434.97;}
  else{precio=1458.41;}
}
else{tarifa.innerText="este colectivo tiene un máximo de distancia de 27km"; return}
}
else if(tipoColectivo==="provincia"){
  if (distance<=3){
  if (registro==="si") {
  precio=968.57;}
  else if(registro==="social"){
    precio=435.85;
  }
 else{precio=1937.14;}
}
else if(distance<=6){
  if(registro==="si"){
    precio=1089.64;
  } else if(registro==="social"){precio=490.33;}
  else {precio=2179.28}
}
else if(distance<=12){
  if(registro==="si"){
    precio= 1210.71;
  } else if (registro==="social"){precio=544.81;}
  else{precio=2421.42;}
}
else if(distance<=27){
  if(registro==="si"){
    precio=1452.85;
  } else if(registro==="social"){precio=653.78;}
  else{precio=2905.70;}
}
else {
  if(registro==="si"){
    precio=1708.07
  }else if(registro==="social"){precio=768.63}
  else{precio=3416.14}
}
}
else if(tipoColectivo==="nacional"){
  if (distance<=3){
  if (registro==="si") {
  precio=714.00;}
  else if(registro==="social"){
    precio=321.30;
  }
 else{precio=1428.00;}
}
else if(distance<=6){
  if(registro==="si"){precio=807.07;}
  else if(registro==="social"){precio=363.18;}
  else{precio=1614.14;}
}
else if(distance<=12){
  if(registro==="si"){precio=894.17;}
  else if(registro==="social"){precio=402.37;}
  else{precio=1788.34}
}
else if(distance<=27){
  if(registro==="si"){precio=983.78;}
  else if(registro==="social"){precio=442.70;}
  else{precio=1967.56}
}
else {
  if(registro==="si"){precio=1085.49;}
  else if(registro==="social"){precio=488.47;}
  else {precio=2170.98;}
}}

tarifa.innerText="El valor de tu viaje es " + precio;


});
