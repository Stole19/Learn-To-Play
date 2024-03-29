
function playSound(e){
    
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        
    
        if (!audio) return; // Stop the function from running
        
        audio.currentTime = 0; // Rewind to start
        
        audio.play();
    
        key.classList.add('playing');
    
}

function removeTransition(e){

    if(e.propertyName != 'transform') return; // Skip it if it is not transform
    
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
document.addEventListener('keydown', playSound);
