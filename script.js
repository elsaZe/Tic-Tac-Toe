const start = document.getElementById('startGame')

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
        console.log(gameBoardArray[0])
       if (gameBoardArray[0] != undefined && gameBoardArray[0] === gameBoardArray[1] && gameBoardArray[1] === gameBoardArray[2]) {
           console.log('win')
       } else if (gameBoardArray[3] != undefined && gameBoardArray[3] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[5]){
           console.log('win')
       } else if (gameBoardArray[6] != undefined && gameBoardArray[6] === gameBoardArray[7] && gameBoardArray[7] === gameBoardArray[8]){
        console.log('win')
        } else if (gameBoardArray[0] != undefined && gameBoardArray[0] === gameBoardArray[3] && gameBoardArray[3] === gameBoardArray[6]){
        console.log('win')
        } else if (gameBoardArray[1] != undefined && gameBoardArray[1] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[7]){
        console.log('win')
        } else if (gameBoardArray[2] != undefined && gameBoardArray[2] === gameBoardArray[5] && gameBoardArray[5] === gameBoardArray[8]){
        console.log('win')
        } else if (gameBoardArray[0] != undefined && gameBoardArray[0] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[8]){
        console.log('win')
        } else if (gameBoardArray[2] != undefined && gameBoardArray[2] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[6]){
        console.log('win')
        }
    }
   
    const changeContent = () => {
        for (let i=0; i<9; i++) {
            let thisBox = doc.getElementById(`box${i}`);
            thisBox.textContent = gameBoardArray[i]
        }
        checkForWin()
    }
    for (let i=0; i<9; i++) {
        
        let currentBox = doc.getElementById(`box${i}`);
        currentBox.addEventListener('click', () => {
            if (gameBoardArray[i] == undefined){
                counter++
                console.log(counter)
                if (counter%2 == 0){
                    gameBoardArray[i] = 'x';
                } else {
                    gameBoardArray[i] = 'o'
                }
            } 
            changeContent();
            return counter;
        });
    }
    
})(document)

const Player = (name, marker) => {
    const playerName = name;
    const playerMarker = marker;
} 


