import { useState, useRef } from "react";
import { Button, Label, Input, StyledForm, StyledSelect } from "./styled";

const Form = ({ calculateResult, setResult, body, ratesData }) => {
  const [amountExchange, setAmountExchange] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amountExchange, currency);
    setAmountExchange("");
    inputRef.current.focus();
  };

  return (
    <StyledForm 
    onSubmit={onFormSubmit}>
      {ratesData.status === "loading" ? (
        <p>Trwa ładowanie danych... Prosimy o chwileczkę cierpliwości</p>
      ) 
      : (ratesData.status === "error") 
      ? (
          <p>
            Przepraszamy coś poszło nie tak. Sprawdź czy masz połącznie z
            internetem. Jeśli tak to widocznie nasz błąd. Spróbuj później.
          </p>
      ) 
      : (
        <>
          <Label>
            Wpisz kwotę *:
            <Input
              placeholder="jaką chcesz policzyć"
              type="number"
              ref={inputRef}
              min="0.01"
              step="0.01"
              value={amountExchange}
              onChange={({ target }) => setAmountExchange(target.value)}
              required
            />
          </Label>
          <Label>
            Wybierz walutę:
            <StyledSelect
              name="currencyConverted"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {Object.keys(ratesData.rates).map((rates) => (
                <option 
                key={rates} 
                value={rates}
                >
                  {rates}
                </option>
              ))};
            </StyledSelect>
          </Label>
          <Label footer>
            {body}
            <Button>Przelicz!</Button>
          </Label>
          <Label>
          Kursy walut pobierane są z Europejskiego Centralnego Banku z datą: {ratesData.date}.
          </Label>
        </>
      )}
    </StyledForm>
  );
};

export default Form;
