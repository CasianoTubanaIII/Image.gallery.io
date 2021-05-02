const displayedImage = document.querySelector('.displayed-img');
//letmage = document.createElement('img');

    //displayedImage.appendChild(newImage);

const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 1; i<6; i++) {
    
   if (i===1) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'https://cdn.glitch.com/64a2f56d-34ab-44be-adac-a0c9e74ba226%2Fpic1.jpg?v=1616291008452');
    thumbBar.appendChild(newImage);

     newImage.onclick = function() {
            displayedImage = displayedImage.setAttribute('src', 'https://cdn.glitch.com/64a2f56d-34ab-44be-adac-a0c9e74ba226%2Fpic1.jpg?v=1616291008452');
    } 
   }
   else if (i===2) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'https://cdn.glitch.com/64a2f56d-34ab-44be-adac-a0c9e74ba226%2Fpic2.jpg?v=1616291004835');
    thumbBar.appendChild(newImage);

    newImage.onclick = function() {
        displayedImage = displayedImage.setAttribute('src', 'https://cdn.glitch.com/64a2f56d-34ab-44be-adac-a0c9e74ba226%2Fpic2.jpg?v=1616291004835');
} 
   }
   else if (i===3) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'https://cdn.glitch.com/64a2f56d-34ab-44be-adac-a0c9e74ba226%2Fpic3.jpg?v=1616291014562');
    thumbBar.appendChild(newImage);

    newImage.onclick = function() {
        displayedImage = displayedImage.setAttribute('src', 'https://cdn.glitch.com/64a2f56d-34ab-44be-adac-a0c9e74ba226%2Fpic3.jpg?v=1616291014562');
} 
   }
   else if (i===4) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'https://cdn.glitch.com/64a2f56d-34ab-44be-adac-a0c9e74ba226%2Fpic4.jpg?v=1616291020138');
    thumbBar.appendChild(newImage);

    newImage.onclick = function() {
        displayedImage = displayedImage.setAttribute('src', 'https://cdn.glitch.com/64a2f56d-34ab-44be-adac-a0c9e74ba226%2Fpic4.jpg?v=1616291020138');
} 
   }
   else if (i===5) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'https://cdn.glitch.com/64a2f56d-34ab-44be-adac-a0c9e74ba226%2Fpic5.jpg?v=1616291024192');
    thumbBar.appendChild(newImage);

    newImage.onclick = function() {
        displayedImage = displayedImage.setAttribute('src', 'https://cdn.glitch.com/64a2f56d-34ab-44be-adac-a0c9e74ba226%2Fpic5.jpg?v=1616291024192');
} 
   }
}


/* Wiring up the Darken/Lighten button */
//The Commented region below is the working method
/* btn.onclick = function() {
    let buttonClass = btn.getAttribute('class');
    if (buttonClass==='dark'){
      btn.setAttribute('class', 'light');
      
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
      btn.textContent = 'Lighten';
    } else if(btn.textContent === 'Lighten') {
        btn.setAttribute('class', 'dark');
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        btn.textContent = 'Darken';
    } 
  } */


btn.onclick = function() {
  for(let i=0; i<2; i++) {
    if (i){
      btn.textContent = "Lighten"
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else{
      btn.textContent = 'darken'
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  }
}
