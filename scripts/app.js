let snake, posX, posY, dir, addBody, tail, diamond, diamondPosX, diamondPosY, diamondPenality

init();

function init(){
  // generer une position sur x
  posX = Math.floor(Math.random()*window.innerWidth/10)*10
  // générer une position sur y
  posY = Math.floor(Math.random()*window.innerHeight/10)*10
  // créer la div du snake et lui attribuer sa position sur X et Y et son id.
  snake = document.createElement("div")
  snake.setAttribute("id", "snake")
  // Pour insérer la balise à l'intérieur de la page
  document.querySelector("body").appendChild(snake)
  posSnake()


  // créer un diamond
  createDiamond()

  // lancer la partie

}
function posSnake () {
  snake.style.top = posY + "px"
  snake.style.left = posX + "px"

}
function createDiamond()
{
  // generer une position sur x
  diamondPosX = Math.floor(Math.random()*window.innerWidth/10)*10
  // générer une position sur y
  diamondPosY = Math.floor(Math.random()*window.innerHeight/10)*10
  // créer la div du snake et lui attribuer sa position sur X et Y et son id.
  diamond = document.createElement("div")
  diamond.setAttribute("id", "diamond")
  // Pour insérer la balise à l'intérieur de la page
  document.querySelector("body").appendChild(diamond)
  posDiamond()
}

function posDiamond() {
  diamond.style.top = diamondPosY + "px"
  diamond.style.left = diamondPosX + "px"
}
