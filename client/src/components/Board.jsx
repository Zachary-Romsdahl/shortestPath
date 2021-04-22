import React, { useState, useEffect } from 'react';
import Node from './Node.jsx';
import * as S from './Board.styles.js';
import { dijsktra } from '../dijsktra.js';

const Board = ({ node, findPath }) => {
  const [numRows, setNumRows] = useState(10);
  const [numCols, setNumCols] = useState(15);
  const [firstNode, setFirstNode] = useState(null);
  const [secondNode, setSecondNode] = useState(null);
  const [board, setBoard] = useState(null);

  // Creates Board
  useEffect(() => {
    let newBoard = [];
    for (let i = 0; i < numRows; i++) {
      let row = [];
      for (let j = 0; j < numCols; j++) {
        row.push(0);
      }
      newBoard.push(row);
    }

    setBoard(newBoard);
  }, []);

  // Search for second node;
  useEffect(() => {
    const handleAnimateSearch = async () => {
      let searchOrder = dijsktra(board, firstNode, secondNode);
      for (let i = 0; i < searchOrder.length; i++) {
        await handleAnimateDelay(searchOrder[i]);
      }
    }

    if (findPath) {
      handleAnimateSearch();
    }
  }, [findPath])

  const handleAnimateNode = (node) => {
    let newBoard = board.slice();
    newBoard[node[0]][node[1]] = 3;
    setBoard(newBoard);
  }


  const handleAnimateDelay = (node) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(handleAnimateNode(node)), 100)
    })
  }

  // Clicks Node on Board
  const handleNodeClick = (e) => {
    console.log('h', e.target.id)
    const { id } = e.target;
    const loc = JSON.parse(id);
    if (node === 1) {
      const oldBoard = [];
      for (let i = 0; i < board.length; i++) {
        const row = board[i];
        oldBoard.push([...row]);
      }
      oldBoard[loc[0]][loc[1]] = 1;
      setBoard(oldBoard);
      setFirstNode(loc);
    } else if (node === 2) {
      const oldBoard = [];
      for (let i = 0; i < board.length; i++) {
        const row = board[i];
        oldBoard.push([...row]);
      }
      oldBoard[loc[0]][loc[1]] = 2;
      setBoard(oldBoard);
      setSecondNode(loc);
    }
  }

  return (
    <S.Wrapper id="board">
      <S.Grid>
        {board &&
          board.map((row, rowNum) => (
            row.map((val, colNum) => (
              <Node
                key={`(${rowNum},${colNum})`}
                coords={`[${rowNum}, ${colNum}]`}
                val={val}
                handleNodeClick={handleNodeClick}
              ></Node>))
          ))}
      </S.Grid>
    </S.Wrapper>
  )
}

export default Board;