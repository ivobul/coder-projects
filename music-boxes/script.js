const cNote = document.getElementById('cAudio');
const cBox = document.querySelectorAll('.c');

const dNote = document.getElementById('dAudio');
const dBox = document.querySelector('.d');

const eNote = document.getElementById('eAudio');
const eBox = document.querySelector('.e');

const fNote = document.getElementById('fAudio');
const fBox = document.querySelector('.f');

/*
const gNote = document.getElementById('gAudio');
const gBox = document.querySelector('.g');

const aNote = document.getElementById('aAudio');
const aBox = document.querySelector('.a');

const bNote = document.getElementById('bAudio');
const bBox = document.querySelector('.b');
*/

cBox.forEach((box) => {
  box.addEventListener("mouseover", () => {
    playSound(cNote);
  });

 // box.addEventListener("mouseout", () => {
   // stopSound(cNote);
 // });
});

dBox.addEventListener("mouseover", () => {
  playSound(dNote);
});

//dBox.addEventListener("mouseout", () => {
//  stopSound(dNote);
//});

eBox.addEventListener("mouseover", () => {
  playSound(eNote);
});

//eBox.addEventListener("mouseout", () => {
//  stopSound(eNote);
//});

fBox.addEventListener("mouseover", () => {
  playSound(fNote);
});

//fBox.addEventListener("mouseout", () => {
//  stopSound(fNote);
//});

/*
aBox.addEventListener("mouseover", () => {
  playSound(aNote);
});

aBox.addEventListener("mouseout", () => {
  stopSound(aNote);
});

bBox.addEventListener("mouseover", () => {
  playSound(bNote);
});

bBox.addEventListener("mouseout", () => {
  stopSound(bNote);
});

gBox.addEventListener("mouseover", () => {
  playSound(gNote);
});

gBox.addEventListener("mouseout", () => {
  stopSound(gNote);
});

*/

function playSound(obj) {
  obj.play();
  obj.currentTime = 0;
}

//function stopSound(obj) {
 /// obj.pause();
  //obj.currentTime = 0;
//}
