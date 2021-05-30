let button = document.querySelectorAll("button");

for (let i = 0; i < button.length; i++) {

    button[i].addEventListener("click", function() {

        makeSound(this.innerHTML);
        animateButton(this.innerHTML);
    })


}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    animateButton(event.key);
})


function makeSound(key) {

    switch (key) {
        case "w":
            this.style = "color : black";
            let audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            this.style = "color : red";
            let audio1 = new Audio("sounds/kick-bass.mp3");
            audio1.play();
            break;
        case "s":
            this.style = "color : yellow";
            let audio2 = new Audio("sounds/snare.mp3");
            audio2.play();
            break;
        case "d":
            this.style = "color : blue";
            let audio3 = new Audio("sounds/tom-1.mp3");
            audio3.play();
            break;
        case "j":
            this.style = "color : orange";
            let audio4 = new Audio("sounds/tom-2.mp3");
            audio4.play();
            break;
        case "k":
            this.style = "color : green";
            let audio5 = new Audio("sounds/tom-3.mp3");
            audio5.play();
            break;
        case "l":
            this.style = "color : purple";
            let audio6 = new Audio("sounds/tom-4.mp3");
            audio6.play();
            break;
        default:
            break;
    }

}

function animateButton(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed")
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);;
}