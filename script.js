
var inputName = document.getElementById('customname')


var historia = document.querySelector('.story')
var botaoGerar = document.querySelector('.randomize')
var actualCountry = ""
botaoGerar.addEventListener('click',verHistoria)


function gerarHistoriaAleatoria(){

    var caracterName = inputName.value

    if(caracterName.length === 0){
        alert("Digite o nome do personagem")
    } else {
    var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"]
    var insertY = ["the soup kitchen", "Disneyland","the White House"]
    var insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk","turned into a slug and crawled away"]
 

    var textX = Math.floor(Math.random()* insertX.length)
    var textY = Math.floor(Math.random()* insertY.length) 
    var textZ = Math.floor(Math.random()* insertZ.length) 
    
    var textoCompleto =  "In "+ actualCountry +" it was 94 fahrenheit outside,so "+ insertX[textX] + " went for a walk. When they got to "+ insertY[textY]+ ", they stared in horror for a few moments, then " + insertZ[textZ] + ", " + caracterName +" saw the whole thing, but was not surprised — " + insertX[textX] + " weighs 300 pounds, and it was a hot day."

    historia.style.visibility = "visible"
    historia.innerHTML = textoCompleto
    }

}

function verHistoria(){
    
    let getCountry = document.getElementsByName('ukus')
    let country = Array.from(getCountry)
    
    for(i = 0; i < country.length; i++){
        if(country[i].checked == 0){
            actualCountry = "UK"            
        } else {
            actualCountry = "US"
        }
        break
    }
    
    gerarHistoriaAleatoria()
    

}
