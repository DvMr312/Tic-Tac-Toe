const gameBoard = document.querySelector("#gameboard")
const infoDisplay = document.querySelector("#info")
let restartBtn = document.querySelector("#reset")
const startCells = [
    "", "", "", "", "", "", "", "", ""
]

let go = "cross"
infoDisplay.textContent = "Cross goes first"


function createBoard () {
    startCells.forEach( (_cell, index) => {
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        cellElement.id = index
        cellElement.addEventListener('click', addGo)
        gameBoard.append(cellElement)
    }) 
}
createBoard()


function addGo (e) {
    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === "cross" ? "circle" : "cross"
    infoDisplay.textContent = " it's now " + go + " to go."
    e.target.removeEventListener("click", addGo)
    checkScore()

}

function checkScore() {
    const allSquares = document.querySelectorAll(".square")
    const winningCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6],
    ]

    console.log(allSquares[4])

    winningCombos.forEach(Array => {
        const circleWins = Array.every(cell => 
            allSquares[cell].firstChild?.classList.contains('circle'))

            if (circleWins) {
                infoDisplay.textContent = "Circle Wins!"
                allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
                return
            }
    })

    winningCombos.forEach(Array => {
        const crossWins = Array.every(cell => 
            allSquares[cell].firstChild?.classList.contains('cross'))

            if (crossWins) {
                infoDisplay.textContent = "Cross Wins!"
                allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
                return
            }
    })
}


restartBtn.addEventListener('click',()=>{
    
    infoDisplay.textContent = "Cross goes first"

});






