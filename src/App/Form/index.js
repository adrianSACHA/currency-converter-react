import { useState } from "react";
import { currencies } from "../currencies";
import { Button, Header, Input, StyledForm, StyledSelect } from "./styled";

const Form = ({ calculateResult, setResult, body, title }) => {
  const [ammonutExchange, setAmmountExchange] = useState("");
  const [currency, setCurrency] = useState(currencies[0].short);

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(ammonutExchange, currency);
    setAmmountExchange("");
    setResult("");
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Header>
        Wpisz kwotę *:
        <Input
          placeholder="jaką chcesz policzyć"
          type="number"
          autoFocus
          name="ammount"
          step="0.01"
          value={ammonutExchange}
          onChange={({ target }) => setAmmountExchange(target.value)}
          required
        />
      </Header>
      <Header>
        Wybierz walutę:
        <StyledSelect
          name="currency"
          value={currency}
          onChange={({ target }) => setCurrency(target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency.short} value={currency.short}>
              {currency.name}
            </option>
          ))}
          ;
        </StyledSelect>
      </Header>
      <Header footer>
        {body}
        <Button>
          Przelicz!
        </Button>
      </Header>
    </StyledForm>
  );
};

export default Form;
