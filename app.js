const input = document.querySelector('#texto');
const resultado = document.querySelector('#resultado');
const resultado2 = document.querySelector('#resultadoMayusculas');
const resultado3 = document.querySelector('#resultadoValidar');
const button = document.querySelector('#boton')
const buttonValidar = document.querySelector('#botonvalidar')

  input.addEventListener('input', function() {
    const texto = input.value;
    resultado.textContent = texto;
    
  });

  button.addEventListener('click', function() {
    const textoMayuscula = input.value.toUpperCase();
    resultado2.textContent = textoMayuscula;
  });

  function validar()
  {
      var textoValidar=input.value;
   
      // eliminamos los espacios en blanco
      textoValidar=textoValidar.replace(/ /g, "");
   
      for (var i=0;i<textoValidar.length;i++){
          if(textoValidar[i]!=textoValidar[textoValidar.length-i-1]){
              return false;
          }
      }
      return true;
  }
   
  
  buttonValidar.addEventListener('click', function() {
    if(validar())
    {
        resultado3.textContent = "Esto es palíndromo";
    }else{
        resultado3.textContent = "Esto No es palíndromo";
    }
  
  });