var randomNumber1= Math.floor(Math.random()* 6) + 1;

var randomImage1= "images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImage1);

var randomNumber2= Math.floor(Math.random()* 6) + 1;

var randomImage2= "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if(randomImage1>randomImage2){
  document.querySelector("h1").innerHTML="Jogador 1 Ganhou! Atualize a página."
}else if (randomImage1<randomImage2){
  document.querySelector("h1").innerHTML="Jogador 1 Ganhou! Atualize a página."
}else{
  document.querySelector("h1").innerHTML="EMPATE! Atualize a página."
};