import Square from "./Square.jsx"


function WinnerModal ({winner, resetGame})  {
    if (winner == null) return null
// terminar de exportar winner modal para sacarlo como componente de la app

    const winnerText = winner === false ? 'Tie' : 'Winner' 

    return (
        <section className='winner'>
            <div className='text' >
                <h2> {winnerText} </h2>

                <header className='win'>
                    {winner && <Square>{winner}</Square> }
                </header>

                <footer>
                    <button onClick={resetGame}>New Start</button>
                </footer>
            </div>
        </section>
    )
}

export default WinnerModal

