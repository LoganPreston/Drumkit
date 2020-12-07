
//ex as non-anon func
/*
document.querySelector("button").addEventListener("click",handleClick)

function handleClick(){
    alert("I got clicked");
}
*/

function playSound(buttonPress){
    var audio;
    switch(buttonPress){
        case "w":
            audio=new Audio("sounds/tom-1.mp3")
            break;
        case "a":
            audio=new Audio("sounds/tom-2.mp3")
            break;
        case "s":
            audio=new Audio("sounds/tom-3.mp3")
            break;
        case "d":
            audio=new Audio("sounds/tom-4.mp3")
            break;
        case "j":
            audio=new Audio("sounds/snare.mp3")
            break;
        case "k":
            audio=new Audio("sounds/crash.mp3")
            break;
        case "l":
            audio=new Audio("sounds/kick-bass.wav")
            break;
        default:
            audio=null;
            break;
    }
    if(audio!=null){
        audio.play();
    }   
}

function buttonAnimation(keyPressed){
    var activeKey=document.querySelector("."+keyPressed);
    if(activeKey===null){
        return;
    }
    activeKey.classList.add("pressed");
    setTimeout(function(){activeKey.classList.remove("pressed")},50)
    
}

listOfButtons=document.querySelectorAll(".drum");
for(var i=0;i<listOfButtons.length;i++){
    listOfButtons[i].addEventListener("click",function (){
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown",function(event){
    playSound(event.key);
    buttonAnimation(event.key);
});
