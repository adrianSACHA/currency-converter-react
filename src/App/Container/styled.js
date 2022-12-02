import styled from "styled-components";

export const StyledMain = styled.main`
  max-width: 650px;
  margin: 15px;
  color: ${({ theme }) => theme.color.black};
  border: 2px solid black;
  padding: 5px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.white};
  display: grid;
  grid-template-rows: auto;
  justify-content: center;
  box-shadow: 10px 10px 10px;
  align-content: center;
`;
