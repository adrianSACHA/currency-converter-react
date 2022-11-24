import "./style.css";

const Result = ({ result }) => (
  <div className="result">
    Otrzymasz: &nbsp; <strong>{result}</strong>
  </div>
);

export default Result;
