import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies";

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
    <form className="form" onSubmit={onFormSubmit}>
      <label className="form__input">
        <span>Wpisz kwotę *:</span>
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
      <label className="form__selection">
        <span>Wybierz walutę:</span>
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
      <label className="form__footer">
        {body}
        <button className="form__button">Przelicz!</button>
      </label>
    </form>
  );
};

export default Form;
