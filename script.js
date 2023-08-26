//write code here
let activeplayer=0

let currentScore = 0;
document.querySelector(".btn--roll").addEventListener("click",function(){

})
let dice = Math.floor(Math.random() * 6) + 1. // random dice number from 1 - 6
document.querySelector(".dice").src= `dice-${dice}.png`
console.log( dice)

if(dice===1){
    currentScore=0;
    console.log("switch player")
    if(activeplayer===0){
        activeplayer=1
    }else{
      activeplayer=0;
      document.querySelector(".player--0").classList.toggle("player--active")
      document.querySelector(".player--0").classList.toggle("player--active")
    }
}else{
    currentScore =currentScore + dice
    document.querySelector (`#current--${activeplayer }`).innerText=currentScore
}


document.querySelector(".btn--roll").addEventListener("click",function(){

})
document.querySelector(".btn--hold").addEventListener("click",function(){
    scores[activeplayer]=scores[activeplayer]+currentScore
    document.querySelector(`${activeplayer}`).innerText =scores[activeplayer]
    if (scores[activeplayer]>=100){
        document.querySelector(`#name--${activeplayer}`).innerText="winner!!";
        document.querySelector(`#name--${activeplayer}`).classList.add("player--winner")})
     else{currentScore=0;
        console.log("switch player")
        if(activeplayer===0){
            activeplayer=1
        }}else{
          activeplayer=0;
          document.querySelector(".player--0").classList.toggle("player--active")
          document.querySelector(".player--0").classLis}   
    

document.querySelector(".btn--new").addEventListener("click",function(){
    scores =[0,0]
    activeplayer =0 
    currentScore =0 
    document.querySelector("#score--1").innerText=0
    document.querySelector(".player--0.").classList.remove("player--winner")
    document.querySelector("#name--0").innerText="player 1"
    document.querySelector("#name--1").innerText="player 2" 
 
})
return