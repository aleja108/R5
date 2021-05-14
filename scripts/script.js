function validar(){
    const palabraIntroducida = document.getElementById('palabraIntroducida').value;
    // Convierte la palabra en minuscula
    const palabraTrans = palabraIntroducida.toLowerCase();
    console.log(palabraTrans);
    let palabraAlreves = "";
    // Recorrido de la palabra
    for (let i= palabraTrans.length-1; i>=0; i--){
        palabraAlreves += palabraTrans[i];
     }
     // Se verifica si es un palíndromo
    
      if (palabraAlreves == palabraTrans) {
        resultado.innerHTML = "La palabra es un palíndromo";
      } else {
        resultado.innerHTML = "La palabra no es un palíndromo";
      }
    }