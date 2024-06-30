let choices = document.querySelectorAll(".choice");
let body = document.querySelector("body");
let reset_button = document.querySelector("#reset") ;


let color = "" ;

reset_button.addEventListener("click" , () =>{
    body.style.backgroundColor = "antiquewhite" ;
})

choices.forEach(function(choice){
    choice.addEventListener("click",() =>{
        color.concat(choice);
        body.style.backgroundColor = choice.id ;
    })
})

