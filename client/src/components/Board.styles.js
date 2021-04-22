import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Grid = styled.div`
  display: grid;
  width: 80%;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(15, 1fr);
  gap: 5px 5px
`;

