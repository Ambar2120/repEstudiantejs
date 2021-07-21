var diametro,grosor;
  diametro=prompt('Ingrese el primer número:','');
  grosor=prompt('Ingrese el segundo número:','');
  diametro=parseInt(diametro);
  grosor=parseInt(grosor);

  document.write('Diagnostico de Neumatico: ');

  if (diametro > 1.4) //1era Condicion 
  {
    document.write('La rueda es para un vehículo grande');
  }
  else if (diametro <= 1.4 || diametro > 0.8) //2da Condicion
  {
    document.write('La rueda es para un vehículo mediano');
  }
  else
  {
    document.write('La rueda es para un vehículo pequeño');
  }

  if((diametro > 1.4 && grosor < 0.4) || (diametro <= 1.4 || (diametro > 0.8 && grosor < 0.25))) {
    document.write('<br> El grosor para esta rueda es inferior al recomendado');
  }