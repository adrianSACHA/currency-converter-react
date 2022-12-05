import { useState } from "react";
import { currencies } from "../currencies";
import { Button, Label, Input, StyledForm, StyledSelect } from "./styled";

const Form = ({ calculateResult, setResult, body }) => {
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
      <Label>
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
      </Label>
      <Label>
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
      </Label>
      <Label footer>
        {body}
        <Button>
          Przelicz!
        </Button>
      </Label>
    </StyledForm>
  );
};

export default Form;
