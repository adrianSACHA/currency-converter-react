import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies/index";

const Form = ({ calculateResult, setResult }) => {
  const [ammonutExchange, setAmmountExchange] = useState("");
  const [currency, setCurrency] = useState(currencies[0].short);

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(ammonutExchange, currency);
    setAmmountExchange("");
    setCurrency("GBP");
    setResult("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <label className="form__input">
        <div>Wpisz kwotę jaką chcesz policzyć*:</div>
        <div>
          <input
            className="form__ammount"
            placeholder="Wpisz kwotę..."
            type="number"
            name="ammount"
            step="0.01"
            value={ammonutExchange}
            onChange={({ target }) => setAmmountExchange(target.value)}
            required
          />
        </div>
      </label>
      <label>
        Wybierz walutę:
        <select
          className="form__field"
          name="currency"
          value={currency}
          onChange={({ target }) => setCurrency(target.value)}
        >
          {currencies.map(currency => (
          <option 
          key={currency.short} 
          value={currency.short}>
            {currency.name}
          </option>
          ))};
        </select>
      </label>
      <label>Otrzymasz: N/A</label>
      <button className="form__button">Przelicz!</button>
    </form>
  );
};
export default Form;
