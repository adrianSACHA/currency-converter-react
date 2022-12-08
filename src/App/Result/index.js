import { StyledResult } from "./styled";

const Result = ({ result, title, ratesData }) => (
  <StyledResult>
    {ratesData.status === "success" 
    ? 
      <>
        {title} <strong>{result.resultFinal}&nbsp;{result.currency} </strong>
        
      </>
     : null
     }
  </StyledResult>
);

export default Result;
