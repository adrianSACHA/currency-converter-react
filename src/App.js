import "./index.css";
import Header from "./Header";
import Container from "./Container";
import Form from "./Form";
import Result from "./Result";
import Footer from "./Footer";
import { useState } from "react";
import { currencies } from "./currencies/index";

function App() {
  const [result, setResult] = useState(null);

  const calculateResult = (ammountExchange, currency) => {
    const { rate, short } = currencies.find(
      ({ short }) => short === currency
    );
    
    setResult((ammountExchange / rate).toFixed(2) + short);
  };

  return (
    <Container>
      <Header title="Kalkulator Walutowy - aktualny na 12.10.2022" />
      <Form
        calculateResult={calculateResult}
        body={<Result result={result} />}
      />
      <Footer title="* pole obowiązkowe" />
    </Container>
  );
}

export default App;
