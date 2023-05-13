import { useState } from 'react'
import confetti from 'canvas-confetti'
import './index.css'
import  Square  from './Components/Square'
import { turns } from "./constants"
import { checkWinner } from './Logic/board'
import  WinnerModal  from './Components/WinnerModal'

function App() {

  const [board , setBoard] = useState(
    Array(9).fill(null)
  )
  const [turn, setTurn] = useState(turns.X)
  // null is when no winner, false is for tie 
  const [winner, setWinner] =useState(null)

  
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(turns.X)
    setWinner(null)
  }

  const checkEndGame =(newBoard) => {
    return newBoard.every((square) => square != null)
  }
  const updateBoard = (index) => {
    // spread and rest operator full understanding 
    // if have already wrote
    if (board[index] || winner)  return

    // update board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // change turn
    const newTurn = turn === turns.X ? turns.O : turns.X
    setTurn(newTurn)

    //new Winner
    const newWinner = checkWinner(newBoard) 
    if (newWinner) {
      confetti()
      //State is Async. 
      setWinner(newWinner)
      // check if game is over 
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    } 
    
  }
  
  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Restart</button>
      <section className='game'>
        {
          board.map((__, index) => {
            return (
              <Square 
              key={index}
              index = {index}
              updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected ={turn === turns.X}>
          {turns.X}
        </Square>
        <Square isSelected ={turn === turns.O}>
          {turns.O}
        </Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>  
  )
}
export default App
