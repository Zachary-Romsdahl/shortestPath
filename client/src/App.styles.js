import styled from 'styled-components';

export const App = styled.div`
  height: 100%;
  width: 100%
`

export const MenuBar = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 25px;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #8a8e96
`;

export const Button = styled.button`
  background-color: #0e2397;
  border: 1px solid green;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`

export const Title = styled.h2`
  color: white
`