import React, { useState } from 'react';
import Board from './components/Board.jsx';
import * as S from './App.styles.js';

const App = () => {
  // contains choices with navBar
  const [node, setNode] = useState(false);
  const [findPath, setFindPath] = useState(0);
  const [reset, setReset] = useState(false);
  const [wallMode, setWallMode] = useState(false);

  const handleButtonNodeClick = (e) => {
    const { id } = e.target;
    console.log(id);
    if (id === 'first-button') {
      setNode(1);
    } else if (id === 'second-button') {
      setNode(2);
    }
    setWallMode(false);
  }

  const handleFindPathClick = () => {
    setFindPath(findPath+1);
  }

  const handleWallMode = () => {
    setWallMode(true);
    setNode(false);
  };

  const handleReset = () => {
    setReset(!reset);
    setFindPath(0);
  };


  return (
    <S.App>
      <S.MenuBar>
          <S.Title>Pathfinding Visualizer</S.Title>
          <S.Button id="first-button" onClick={(event) => handleButtonNodeClick(event)}>Set First Node</S.Button>
          <S.Button id="second-button" onClick={(event) => handleButtonNodeClick(event)}>Set Second Node</S.Button>
          <S.Button onClick={handleFindPathClick}>Find Shortest Path</S.Button>
          <S.Button onClick={handleWallMode}>Add Walls</S.Button>
          <S.Button onClick={handleReset}>Reset Board</S.Button>
      </S.MenuBar>
      <Board node={node} findPath={findPath} reset={reset} wallMode={wallMode} setFindPath={setFindPath}/>
    </S.App>
  )
}
export default App;