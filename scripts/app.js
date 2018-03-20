let snake, posX, posY, dir, addBody, tail, diamond, diamondPosX, diamondPosY, diamondPenality, tailElement

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

  // pour augmenter la queue du snake au démarrage
  addBody = 4
  // pour initialiser la direction du snake au démarrage
  dir=1

  //ajout de la div tail qui retiendra les éléments de la queue
  tailElement = document.createElement("div")
  tailElement.setAttribute("id", "tail")
  document.querySelector("body").appendChild(tailElement)



  // créer un diamond
  createDiamond()

  // lancer la partie
  startGame()

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

function startGame(){

  //deplacer le snake.
  let move = setInterval(
    function(){
      let oldposX = posX
      let oldposY = posY
      switch(dir)
      {
          case 0:
              posY -= 10
              break;
          case 1:
              posX += 10
              break;
          case 2:
              posY += 10
              break;
          case 3:
              posX -= 10
              break;
      }
      posSnake()
      manageTail(oldposX, oldposY)
    },
    40
  )

}

window.addEventListener("keypress",function(e){
  switch(e.keyCode){
    case 122:
      dir = 0
      break;
    case 100:
      dir = 1
      break;
    case 115:
      dir = 2
      break;
    case 113:
      dir = 3
      break;

  }
})

function manageTail(oldposX, oldposY){
  // créer la nouvelle et la positionner.
  let newTailElement = document.createElement("div")
  newTailElement.style.top = oldposY + "px"
  newTailElement.style.left = oldposX + "px"
  newTailElement.setAttribute("id", `t${oldposX}_${oldposY}`)
  tailElement.appendChild(newTailElement)
  // ajouter la nouvelle div au tableau.
  // Si addBody est = 0
    // retirer le dernier élément de la queue.
  // Sinon retirer 1 à addBody

}
