import React, { useState } from 'react';
import Board from './components/Board.jsx';

const App = () => {
  // contains choices with navBar
  const [node, setNode] = useState(false);
  const [findPath, setFindPath] = useState(false);

  const handleButtonNodeClick = (e) => {
    console.log(e.target.id);
    const { id } = e.target;
    if (id === 'first-button') {
      setNode(1);
    } else if (id === 'second-button') {
      setNode(2);
    }
  }

  const handleFindPathClick = () => {
    setFindPath(true);
  }

  return (
    <>
    <button id="first-button" onClick={(event)=> handleButtonNodeClick(event)}>Set First Node</button>
    <button id="second-button" onClick={(event) =>handleButtonNodeClick(event)}>Set Second Node</button>
    <button onClick={handleFindPathClick}>Find Shortest Path</button>
    <Board node={node} findPath={findPath}/>
    </>
  )
}
export default App;