
let NnumberOfDramButton = document.querySelectorAll(".drum").length;



for(let i = 0 ; i<NnumberOfDramButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        let buttonInnerHTML = this.innerHTML; 
        console.log(buttonInnerHTML); 


        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

        
}); 
}


document.addEventListener("keypress" ,function(far){
    makeSound(far.key);
    buttonAnimation(far.key);
})


function makeSound(key){

    switch (key) {
        case "w":
            let audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        
        case "a":
            let audio1 = new Audio("sounds/tom-2.mp3");
            audio1.play(); 
            break;

        case "s":
            let audio2 = new Audio("sounds/tom-3.mp3");
            audio2.play(); 
            break;
    
        case "d":
            let audio3 = new Audio("sounds/tom-4.mp3");
            audio3.play(); 
            break;

        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play(); 
            break;
            
        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play(); 
            break;
        
        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play(); 
            break;


        default:
            console.log(innerHTML);
            break;
    }
}

function buttonAnimation(curectkey){
    let activeButton = document.querySelector("."+curectkey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    } , 100);
}