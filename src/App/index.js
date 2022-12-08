import Clock from "./Clock";
import Header from "./Header";
import { Container } from "./Container/styled";
import Form from "./Form";
import Result from "./Result";
import Footer from "./Footer";
import { useState } from "react";
import { useCurrencies } from "./useCurrencies";

function App() {
  const [result, setResult] = useState({});
  const ratesData = useCurrencies();

  const calculateResult = (amountExchange, currency) => {
    const rateExchange = ratesData.rates[currency];

    setResult({
      resultFinal: (+amountExchange * rateExchange).toFixed(2),
      currency,
    });
  };

  return (
    <Container>
      <Clock />
      <Header title="Kalkulator Walutowy" />
      <Form
        calculateResult={calculateResult}
        ratesData={ratesData}
        setResult={setResult}
        body={
          <Result result={result} ratesData={ratesData} title="Otrzymasz:" />
        }
      />
      <Footer title="* pole obowiązkowe" />
    </Container>
  );
}

export default App;
