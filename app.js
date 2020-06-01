 window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = ["rgb(230, 210, 173)", "rgb(173, 230, 206)", "rgb(173, 188, 230)", "rgb(202, 173, 230)", "rgb(230, 173, 200)", "rgb(205, 230, 173)"];

    // lets get going with the sounds
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();    

            createBubbles(index);
        });
    });



    // function to make the bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationend', function() {
        visual.removeChild(this);
    });
    };

 });
 
