function mascota(edad_humana){
    var calcular = edad_humano * 7;	
  
  var mensaje_resul = "Su mascota tiene " + calcular + " años en edad canina";
  
  return mensaje_resul;
  
  }
  
  var edad_humano = prompt("Introdusca la edad de la mascota: ", "");
  
  var resultado = mascota(edad_humano);
  
  alert(resultado);  