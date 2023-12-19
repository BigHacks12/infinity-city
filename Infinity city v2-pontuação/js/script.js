const player = document.querySelector(".player");
const box = document.querySelector("#box");
const score = document.querySelector("#score")
let isRunning = true;
const jump = () => {
  player.classList.add("jump");
  setTimeout(() => {
    player.classList.remove("jump");
   
  }, 500);
  
};//adicionar a função de pulo
const loop = setInterval(() => {
  const boxPosition = box.offsetLeft;
   const playerPosition = +window.getComputedStyle(player).bottom.replace("px"," ");

  if (boxPosition < 45 && boxPosition>0 && playerPosition<50 ) {
    box.style.animation = "none";
    box.style.left = `${boxPosition}px`;
    console.table(playerPosition, boxPosition);
    
    player.style.animation = "none";
    player.style.bottom = `${playerPosition}px`;

    player.src= "imagens/gameover.png";

    clearInterval(loop);
    isRunning = false;
  }
},10);
pts = setInterval(()=>{
  if (isRunning){
    pts ++;
  }
  
  score.textContent=pts
},100)

document.addEventListener("keydown", jump);

 