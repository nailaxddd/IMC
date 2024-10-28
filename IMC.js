"use strict";
function calcular(){

    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;

    if (altura == "" || peso == ""){
        alert("Por favor, rellene todos los campos");
        return;
    }

    else if (altura <= 0 || peso <= 0){
        alert("Por favor, ingrese valores positivos");
        return;
    }

    var alturaM = altura/100;
    var IMC = peso/(alturaM**2);

    document.getElementById("IMC").innerHTML = IMC.toFixed(2);
    console.log("Su IMC es: " + IMC.toFixed(2));
   
    var categoria;

    if (IMC < 18.5){
        categoria = "Peso bajo";
    }
    else if (IMC >= 18.5 && IMC < 25){
        categoria = "Peso normal";
    }
    else if (IMC >= 25 && IMC < 30){
        categoria = "Peso alto";
    }
    else if (IMC >=30){
        categoria = "Peso muy alto";
    }
    

    document.getElementById("categoria").innerHTML = categoria;
    console.log("Usted tiene un: " + categoria);

    

}

