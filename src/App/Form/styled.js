import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  justify-items: center;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  padding: 5px;
  margin: 5px;
  width: 500px;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}px) {
    max-width: 280px;
  }

  ${({ footer }) =>
    footer &&
    css`
      width: stretch;
      margin: 10px;
    `}
`;

export const Loading = styled(Label)`
  font-size: x-large;
  min-height: 315px;
  justify-items: center;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}px) {
    font-size: large;
  }
`;

export const Message = styled(Loading)`
  font-size: x-large;
  color: ${({ theme }) => theme.color.monza};

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}px) {
    font-size: large;
  }
`;

export const Info = styled(Label)`
  width: 70%;
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
  background-color: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  padding: 10px;
  border-radius: 5px;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.color.persianGreen};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.bondiBlue};
  }
`;
