import { StyledResult } from "./styled";

const Result = ({ result, title }) => (
  <StyledResult >
    {title} <strong>{result}</strong>
  </StyledResult>
);

export default Result;
