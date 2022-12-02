import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  justify-items: center;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.label`
  padding: 5px;
  margin: 5px;

  ${({ footer }) =>
    footer &&
    css`
      width: stretch;
      margin: 10px;
    `}
`;

export const Input = styled.input`
  padding: 5px;
  margin: 10px;
  width: 200px;

  &:required {
    border-color: red;
  }
`;

export const StyledSelect = styled.select`
  padding: 5px;
  margin: 10px;
  width: 200px;
`;

export const Button = styled.button`
  border: none;
  background-color: hsl(180, 100%, 25%);
  color: white;
  padding: 10px;
  border-radius: 5px;
  width: 100%;

  &:hover {
    background-color: hsl(180, 100%, 30%);
  }

  &:active {
    background-color: hsl(180, 100%, 35%);
  }
`;
