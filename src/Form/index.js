import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies/index";

const Form = ({ calculateResult, setResult, body }) => {
  const [ammonutExchange, setAmmountExchange] = useState("");
  const [currency, setCurrency] = useState(currencies[0].short);

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(ammonutExchange, currency);
    setAmmountExchange("");
    setCurrency("USD");
    setResult("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      Wpisz kwotę *:
      <label className="form__input">
        <input
          className="form__ammount"
          placeholder="jaką chcesz policzyć"
          type="number"
          autofocus
          name="ammount"
          step="0.01"
          value={ammonutExchange}
          onChange={({ target }) => setAmmountExchange(target.value)}
          required
        />
      </label>
      Wybierz walutę:
      <label>
        <select
          className="form__select"
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
        </select>
      </label>
      {body}
      <button className="form__button">Przelicz!</button>
    </form>
  );
};
export default Form;
