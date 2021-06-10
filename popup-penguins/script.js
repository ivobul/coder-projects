const popupItems = ["penguin1", "penguin2", "penguin3", "penguin4", "penguin5", "penguin6", "penguin7", "penguin8", "yeti"];
 
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {

  let spliced = popupItems.splice([Math.floor(Math.random() * popupItems.length)], 1);
   
  box.classList.add(spliced);

  if (box.classList.contains("yeti")) { 

    box.addEventListener("mousedown", () => {

      box.style.backgroundImage = 'url("penguin_pngs/yeti.png")';

      alert("Yaaaarrrr!");

    });
  }
});
