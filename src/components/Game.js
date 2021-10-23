import React from 'react'
import Board from './Board'

export default function Game() {
  const status = 'Next Enter X'
  const moves = (
    <li>
      <button>Start The Game</button>
    </li>
  )

  const squares = Array(9).fill(null)

  return (
    <>
      <div className='game-board'>
        <Board squares={squares}> </Board>
      </div>

      <div className='game-info'>
        <div>{status}</div>
        <ul>{moves}</ul>
      </div>
    </>
  )
}
