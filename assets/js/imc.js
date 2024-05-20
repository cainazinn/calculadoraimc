function calcular(){
    let peso = document.getElementById("peso").value

    let altura = document.getElementById("altura").value
    document.getElementById
    
    let calculo_imc = peso / (altura ** 2)

    if((calculo_imc >= 18.5 ) && (calculo_imc <= 24.9)){
    document.getElementById("resultado").innerHTML = `Seu IMC é de ${calculo_imc.toFixed(2)} e você está normal`
}   else if(calculo_imc > 25.0){
    document.getElementById("resultado").innerHTML = `Seu IMC é de ${calculo_imc.toFixed(2)} e você está acima do peso`
}   else if (calculo_imc < 18.5){
    document.getElementById("resultado").innerHTML = `Seu IMC é de ${calculo_imc.toFixed(2)} e você está abaixo do peso`
}
    
}