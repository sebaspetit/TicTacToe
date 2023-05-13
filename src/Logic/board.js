import { winnerCombos } from "../constants.js"
export const checkWinner = (boardToCheck) => {
    //check for all winner combos
    for (const combo of winnerCombos) {
      const [a, b , c] = combo
      if (
        boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    //No winner
    return null
  }

  export const checkEndGame = (newBoard) => {
    // revisamos si hay un empate
    // si no hay más espacios vacíos
    // en el tablero
    return newBoard.every((square) => square !== null)
  }