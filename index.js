var buttons=document.querySelectorAll("button");
for(var i=0 ; i<buttons.length ; i++){
    buttons[i].addEventListener("click",function(){
        // var audio = new Audio("./sounds/tom-1.mp3");
        // audio.play();
        // this.style.color="white";
        playsound(this.innerHTML);
        buttonanimation(this.innerHTML);
    })
}
document.addEventListener("keypress",function(event){
    playsound(event.key);
    buttonanimation(event.key);
})
function playsound(ave){
    switch (ave) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;            
    
        default:
            break;
    }
}
function buttonanimation(event){
    var buttonss=document.querySelector("."+event);
    console.log(buttonss);
    buttonss.classList.add("pressed");
    setTimeout(function(){
        buttonss.classList.remove("pressed");
    },100);
}