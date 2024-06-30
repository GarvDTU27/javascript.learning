let body = document.body ;
let white = document.querySelector("#white");
let yellow = document.querySelector("#yellow");
let blue = document.querySelector("#blue");
let grey = document.querySelector("#grey");
let reset = document.querySelector("#reset");

white.addEventListener("click",() =>{
    body.style.backgroundColor = "white" ;
})
grey.addEventListener("click",() =>{
    body.style.backgroundColor = "gray" ;
})
yellow.addEventListener("click",() =>{
    body.style.backgroundColor = "yellow" ;
})
blue.addEventListener("click",() =>{
    body.style.backgroundColor = "blue" ;
})
reset.addEventListener("click",() =>{
    body.style.backgroundColor = "antiquewhite" ;
})