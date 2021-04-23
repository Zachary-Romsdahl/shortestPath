import React from 'react';
import * as S from './Node.styles';

const Node = ({ handleNodeClick, coords, val, handleMouseEvent }) => {
  return (
    <S.Aspect >
      {val === 0 &&
        <S.Node id={coords}
          onClick={(event) => handleNodeClick(event)}
          onMouseDown={(event) => handleMouseEvent(event)}
          onMouseUp={(event) => handleMouseEvent(event)}
          onMouseEnter={(event) => handleMouseEvent(event)}
        ></S.Node> ||
        val === 1 &&
        <S.NodeFirst id={coords}
          onClick={(event) => handleNodeClick(event)}
          onMouseDown={(event) => handleMouseEvent(event)}
          onMouseUp={(event) => handleMouseEvent(event)}
          onMouseEnter={(event) => handleMouseEvent(event)}
        ></S.NodeFirst> ||
        val === 2 &&
        <S.NodeSecond id={coords}
          onClick={(event) => handleNodeClick(event)}
          onMouseDown={(event) => handleMouseEvent(event)}
          onMouseUp={(event) => handleMouseEvent(event)}
          onMouseEnter={(event) => handleMouseEvent(event)}
        ></S.NodeSecond> ||
        val === 3 &&
        <S.NodeVisited id={coords}
          onClick={(event) => handleNodeClick(event)}
          onMouseDown={(event) => handleMouseEvent(event)}
          onMouseUp={(event) => handleMouseEvent(event)}
          onMouseEnter={(event) => handleMouseEvent(event)}
        ></S.NodeVisited> ||
        val === 4 &&
        <S.NodePath id={coords}
          onClick={(event) => handleNodeClick(event)}
          onMouseDown={(event) => handleMouseEvent(event)}
          onMouseUp={(event) => handleMouseEvent(event)}
          onMouseEnter={(event) => handleMouseEvent(event)}
        ></S.NodePath> ||
        val === 'x' &&
        <S.Wall id={coords}
          onClick={(event) => handleNodeClick(event)}
          onMouseDown={(event) => handleMouseEvent(event)}
          onMouseUp={(event) => handleMouseEvent(event)}
          onMouseEnter={(event) => handleMouseEvent(event)}
        ></S.Wall>
      }
    </S.Aspect>
  )
}

export default Node;