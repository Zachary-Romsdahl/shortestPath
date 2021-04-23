import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer
`;

export const Grid = styled.div`
  display: grid;
  width: 90%;
  grid-template-rows: repeat(20, auto);
  grid-template-columns: repeat(30, auto);
  gap: 2px 2px
`;

