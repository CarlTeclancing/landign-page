//variables in javascript



var name = "carlson"

let isEven = false

const pi = 22/7



name = "aboki"


//global 

//local
var y = 0
var x =40


var x = 5
var y = 6

function add(a,b){
    return (a+b)
}
console.log(add(6,7))






function changeText(){
    var h1 = document.getElementById("h1")
    if(h1.innerHTML == "Ui/Ux Designer And Web Developer"){
        h1.innerHTML = "Skilled in Design and Web Developement"
    }else{
        h1.innerHTML = "Ui/Ux Designer And Web Developer"
    }
}




concatString =(a,b)=>{
    return(a+b)
}
console.log()

concatString("hell ", "world")





var btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    alert("hello world")
})






let changeImg = ()=>{
    var img = document.getElementById("img")

    if(img.src.match("./assets/crestlancing.com.png")){
        img.src = "./assets/elias62c19f5d5417f9.26929814.jpg"
    }else{
        img.src = "./assets/crestlancing.com.png"
    }
}






var open = document.getElementById("open")

open.addEventListener("click", function(){
    var overlay = document.getElementById("overlay")
    if(overlay.style.width == "80%"){
        overlay.style.width = "0%"
    }else{
        overlay.style.width = "80%"
    }
})