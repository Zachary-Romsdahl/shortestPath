import React, { useState, useEffect } from 'react';
import Node from './Node.jsx';
import * as S from './Board.styles.js';
import { dijsktra } from '../dijsktra.js';

const Board = ({ node, findPath, reset, wallMode, setFindPath }) => {
  const [numRows, setNumRows] = useState(20);
  const [numCols, setNumCols] = useState(30);
  const [firstNode, setFirstNode] = useState(null);
  const [secondNode, setSecondNode] = useState(null);
  const [board, setBoard] = useState(null);
  const [animationInProgress, setAnimationInProgress] = useState(false);
  const [ mouseDown, setMouseDown ] = useState(false);

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
    setFirstNode(null);
    setSecondNode(null);
  }, [reset]);

  // Search for shortest path to second node;
  useEffect(() => {
    const handleAnimateSearch = async () => {
      let [visitOrder, shortestPath] = dijsktra(board, firstNode, secondNode);
      setAnimationInProgress(true);
      for (let i = 0; i < visitOrder.length; i++) {
        await handleAnimateDelay(visitOrder[i], handleAnimateVisitNode);
      }
      for (let i = 0; i < shortestPath.length; i++) {
        await handleAnimateDelay(shortestPath[i], handleAnimateShortestPath);
      }
      setAnimationInProgress(false)
      console.log('animation', animationInProgress)
    }

    if (findPath) {
      // clears all visited and path nodes before animating again
      let oldBoard = board.slice();
      for (let i = 0; i < oldBoard.length; i++) {
        for (let j = 0; j < oldBoard[i].length; j++) {
          if (oldBoard[i][j] === 3 || oldBoard[i][j] === 4) oldBoard[i][j] = 0;
        }
      }
      console.table(oldBoard);
      setBoard(oldBoard);
      handleAnimateSearch();
    }
  }, [findPath])

  const handleAnimateVisitNode = (node) => {
    let newBoard = board.slice();
    newBoard[node[0]][node[1]] = 3;
    setBoard(newBoard);
  }

  const handleAnimateShortestPath = (node) => {
    let newBoard = board.slice();
    newBoard[node[0]][node[1]] = 4;
    setBoard(newBoard);
  }


  const handleAnimateDelay = (node, cb) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(cb(node)), 10)
    })
  }

  const handleMouseEvent = (event) => {
    const { type } = event;
    const { id } = event.target;
    const loc = JSON.parse(id);
    if (type === 'mousedown') setMouseDown(true);
    if (type === 'mouseup') setMouseDown(false);

    if (wallMode && !animationInProgress) {
      if (type === 'mousedown' || mouseDown) {
        let newBoard = board.slice();
        newBoard[loc[0]][loc[1]] = 'x';
        setBoard(newBoard);

      }
    }
  }

  // Clicks Node on Board when addWall is inactive
  const handleNodeClick = (e) => {
    const { id } = e.target;
    const loc = JSON.parse(id);
    console.log('an',animationInProgress)
    if (wallMode || animationInProgress) return;
    if (node === 1) {
      const oldBoard = [];
      for (let i = 0; i < board.length; i++) {
        const row = board[i];
        oldBoard.push([...row]);
      }
      if (firstNode) {
        const [oldR, oldC] = firstNode;
        oldBoard[oldR][oldC] = 0;
      }

      oldBoard[loc[0]][loc[1]] = 1;
      setBoard(oldBoard);
      setFirstNode(loc);
    } else if (node === 2 ) {
      const oldBoard = [];
      for (let i = 0; i < board.length; i++) {
        const row = board[i];
        oldBoard.push([...row]);
      }
      if (secondNode) {
        const [oldR, oldC] = secondNode;
        oldBoard[oldR][oldC] = 0;
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
                handleMouseEvent={handleMouseEvent}
              ></Node>))
          ))}
      </S.Grid>
    </S.Wrapper>
  )
}

export default Board;