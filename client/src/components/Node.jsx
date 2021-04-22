import React from 'react';
import * as S from './Node.styles';

const Node = ({handleNodeClick, coords, val}) => {
  return (
    <S.Aspect >
      {val === 0 &&
      <S.Node id={coords} onClick={(event) => handleNodeClick(event)}></S.Node> ||
      val === 1 &&
      <S.NodeFirst id={coords} onClick={(event) => handleNodeClick(event)}></S.NodeFirst> ||
      val === 2 &&
      <S.NodeSecond id={coords} onClick={(event) => handleNodeClick(event)}></S.NodeSecond> ||
      val === 3 &&
      <S.NodeVisited id={coords} onClick={(event) => handleNodeClick(event)}></S.NodeVisited>
      }
    </S.Aspect>
  )
}

export default Node;