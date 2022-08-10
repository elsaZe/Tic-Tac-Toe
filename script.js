const start = document.getElementById('startGame')
const play = document.getElementById('gameboard')
let gameOver = 0;

const Player = (name, marker) => {
    let playerName = name;
    let playerMarker = marker;
    return {playerName, playerMarker}
} 





const gameBoard = ((doc) => {
    let gameBoardArray= [];
    let counter = 0

    let startGame = doc.getElementById('startGame')
    startGame.addEventListener('click', () => {
        for(let i=0; i<9; i++){
            gameBoardArray[i] = undefined;
        }
        counter = 0;
        changeContent();
    })

    
    
   
    const checkForWin = () => {
        let progress = doc.getElementById('progress')
        let result = doc.getElementById('result')
       if (gameBoardArray[0] != undefined && gameBoardArray[0] === gameBoardArray[1] && gameBoardArray[1] === gameBoardArray[2]) {
            doc.getElementById('box0').className = "win"
            doc.getElementById('box1').className = "win"
            doc.getElementById('box2').className = "win"
            result.className = "full"
            result.textContent = `The ${gameBoardArray[0]}'s Win!`
            progress.className = "empty"
       } else if (gameBoardArray[3] != undefined && gameBoardArray[3] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[5]){
            doc.getElementById('box3').className = "win"
            doc.getElementById('box4').className = "win"
            doc.getElementById('box5').className = "win"
            result.className = "full"
            result.textContent = `The ${gameBoardArray[3]}'s Win!`
            progress.className = "empty"
       } else if (gameBoardArray[6] != undefined && gameBoardArray[6] === gameBoardArray[7] && gameBoardArray[7] === gameBoardArray[8]){
            doc.getElementById('box6').className = "win"
            doc.getElementById('box7').className = "win"
            doc.getElementById('box8').className = "win"
            result.className = "full"
            result.textContent = `The ${gameBoardArray[6]}'s Win!`
            progress.className = "empty"
        } else if (gameBoardArray[0] != undefined && gameBoardArray[0] === gameBoardArray[3] && gameBoardArray[3] === gameBoardArray[6]){
            doc.getElementById('box0').className = "win"
            doc.getElementById('box3').className = "win"
            doc.getElementById('box6').className = "win"
            result.className = "full"
            result.textContent = `The ${gameBoardArray[0]}'s Win!`
            progress.className = "empty"
        } else if (gameBoardArray[1] != undefined && gameBoardArray[1] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[7]){
            doc.getElementById('box1').className = "win"
            doc.getElementById('box4').className = "win"
            doc.getElementById('box7').className = "win"
            result.className = "full"
            result.textContent = `The ${gameBoardArray[1]}'s Win!`
            progress.className = "empty"
        } else if (gameBoardArray[2] != undefined && gameBoardArray[2] === gameBoardArray[5] && gameBoardArray[5] === gameBoardArray[8]){
            doc.getElementById('box2').className = "win"
            doc.getElementById('box5').className = "win"
            doc.getElementById('box8').className = "win"
            result.className = "full"
            result.textContent = `The ${gameBoardArray[2]}'s Win!`
            progress.className = "empty"
        } else if (gameBoardArray[0] != undefined && gameBoardArray[0] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[8]){
            doc.getElementById('box0').className = "win"
            doc.getElementById('box4').className = "win"
            doc.getElementById('box8').className = "win"
            result.className = "full"
            result.textContent = `The ${gameBoardArray[0]}'s Win!`
            progress.className = "empty"
        } else if (gameBoardArray[2] != undefined && gameBoardArray[2] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[6]){
            doc.getElementById('box2').className = "win"
            doc.getElementById('box4').className = "win"
            doc.getElementById('box6').className = "win"
            result.className = "full"
            result.textContent = `The ${gameBoardArray[2]}'s Win!`
            progress.className = "empty"
        } 
    }

    const checkForTie = () => {
        let tieCount = 0;
        for(let i = 0; i<gameBoardArray.length; i++){
            if(gameBoardArray[i] != undefined){
                tieCount++
            }
        }
        if(tieCount == 9){
            let progres = doc.getElementById('progress')
            progress.className = "empty"
            let result = doc.getElementById('result')
            result.className = "full"
            result.textContent = "It's a Tie"
        }
    }
   
    const changeContent = () => {
        for (let i=0; i<9; i++) {
            let thisBox = doc.getElementById(`box${i}`);
            thisBox.textContent = gameBoardArray[i]
        }
        checkForWin();
        checkForTie();
    }

    for (let i=0; i<9; i++) {
        let currentBox = doc.getElementById(`box${i}`);
        currentBox.addEventListener('click', () => {
            let marker = doc.getElementById('playerOneMarker').innerText
            if (marker == 'X') {
                if (gameBoardArray[i] == undefined){
                    counter++
                    if (counter%2 == 0){
                        gameBoardArray[i] = 'O';
                    } else {
                        gameBoardArray[i] = 'X'
                    }
                } 
            } else if (marker == 'O') {
                if (gameBoardArray[i] == undefined){
                    counter++
                    if (counter%2 == 0){
                        gameBoardArray[i] = 'X';
                    } else {
                        gameBoardArray[i] = 'O'
                    }
                } 
            } 
            changeContent();
            return counter;
        });
    }

})(document)


const toggleMarker = ((doc) => {
    let clicks = 0;
    let playerOneButton = doc.getElementById('playerOneMarker')
    let playerTwoButton = doc.getElementById('playerTwoMarker')
    playerOneButton.addEventListener('click', () => {
        if(clicks%2 != 0) {
            playerOneButton.innerText = 'X'
            playerTwoButton.innerText = 'O'
        } else {
            playerOneButton.innerText = 'O'
            playerTwoButton.innerText = 'X'
        }
        clicks++
    })
    playerTwoButton.addEventListener('click', () => {
        if(clicks%2 != 0) {
            playerOneButton.innerText = 'X'
            playerTwoButton.innerText = 'O'
        } else {
            playerOneButton.innerText = 'O'
            playerTwoButton.innerText = 'X'
        }
        clicks++
    })
})(document)

start.addEventListener('click', () => {
    for(let i=0; i<9; i++){
        let box = document.getElementById(`box${i}`)
        box.classList.remove('win')
        box.className = 'box'
    }
    let gameBoard = document.getElementById('gameboard')
    gameBoard.className = 'show'
    let progress = document.getElementById('progress')
    progress.className = "full"
    let result = document.getElementById('result')
    result.className = "empty"
    const playerOneName = document.getElementById('playerOneName').value
    const playerOneMarker = document.getElementById('playerOneMarker').innerText
    const playerOne = Player(playerOneName, playerOneMarker)


    const playerTwoName = document.getElementById('playerTwoName').value
    const playerTwoMarker = document.getElementById('playerTwoMarker').innerText
    const playerTwo = Player(playerTwoName, playerTwoMarker)

    gamePlay(playerOne, playerTwo)
})


function gamePlay(first, second) {
    let counter = 0
    let gameBoardClicks = document.getElementById('gameboard')
    let progress = document.getElementById('progress')
    progress.textContent = `${first.playerName}'s Turn`
    gameBoardClicks.addEventListener('click', () => {
        counter++
        if(counter%2 == 0){
            progress.textContent = `${first.playerName}'s Turn`
        } else if (counter%2 !=0) {
            progress.textContent = `${second.playerName}'s Turn`
        } 
    })
}

