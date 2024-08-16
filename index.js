//  var number = document.querySelectorAll(".drum").length; 
for (var i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("keypress", function () {
        var bhavin = this.innerHTML;
        makesound(bhavin);
        anime(bhavin);
    

    });
}
    document.addEventListener('keypress', function (event) {
        makesound(event.key);
        anime(event.key);
    });
    function makesound(key) {

        switch (key) {
            case "w":

                var audio = new Audio('sounds/crash.mp3')
                audio.play()
                break;

            case "a":

                var audio = new Audio('sounds/kick-bass.mp3')
                audio.play()
                break;
            case "s":

                var audio = new Audio('sounds/snare.mp3')
                audio.play()
                break;
            case "d":

                var audio = new Audio('sounds/tom-1.mp3')
                audio.play()
                break;
            case "j":

                var audio = new Audio('sounds/tom-2.mp3')
                audio.play()
                break;
            case "k":

                var audio = new Audio('sounds/tom-3.mp3')
                audio.play()
                break;

            default:
            case "l":

                var audio = new Audio('sounds/tom-4.mp3')
                audio.play()
                break;

        }

    }
    function anime(animation) {
        var element = document.querySelector("." + animation);
        element.classList.add("pressed");
        setTimeout(function(){
            element.classList.remove("pressed"); 
        },100);
    }





//  var audio = new Audio('sounds/tom-1.mp3')
//    audio.play();// console.log(this.style.color = "white")