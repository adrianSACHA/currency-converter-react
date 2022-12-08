import { StyledResult } from "./styled";

const Result = ({ result, title, ratesData }) => (
  <StyledResult>
    {ratesData.status === "success" 
    ? 
      <>
        {title} <strong>{result.resultFinal}</strong>
        
      </>
     : null
     }
  </StyledResult>
);

export default Result;
