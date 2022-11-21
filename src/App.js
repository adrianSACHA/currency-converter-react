import './App.css';

function App() {
  return (
    <div>
       <form class="form js-form">
        <fieldset class="form__fieldset">
            <legend class="form__legend">
                Kalkulator Walutowy - aktualny na 12.10.2022
            </legend>
            <p>
                <label>
                    Wpisz kwotę jaką chcesz policzyć*:
                    <input class="form__field js-ammount" type="number" name="ammount" step="0.01" required />
                </label>
            </p>
            <p>
                <label>
                    Wybierz walutę:
                    <select class="form__field js-currency" name="currency">
                        <option value="GBP">Funt</option>
                        <option value="USD">Dolar</option>
                    </select>
                </label>
            </p>
            <p>
                <label>
                    Otrzymasz: <strong class="js-result">N/A
                    </strong>
                </label>
            </p>
        </fieldset>
        <button class="form__button">Przelicz!</button>
    </form>
    <p>
        *pole obowiązkowe
    </p>
    </div>
  );
}

export default App;
