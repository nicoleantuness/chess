import styled from "styled-components";


export const MainBoard = styled.div`
width: 800px;
height: 800px;
display: grid;
grid-template-columns: repeat(8, 100px);
grid-template-rows: repeat(8, 100px);
flex-wrap: wrap;

.white-square {
  background-color: #ffffff; /* Cor da casa branca */
}

.black-square {
  background-color: #000000; /* Cor da casa preta */
}
`