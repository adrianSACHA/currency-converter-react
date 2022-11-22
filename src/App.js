import './index.css';
import Header from "./Header"
// import Form from "./Form";

function App() {
  return (
    <>
         <main className="form" >
        <fieldset className="form__fieldset">
            <Header 
            className="form__legend" />
                Kalkulator Walutowy - aktualny na 12.10.2022
            
            <form className="form" />
                <label>
                    Wpisz kwotę jaką chcesz policzyć*:
                    <input className="form__field" type="number" name="ammount" step="0.01" required />
                            </label>
            
                <label>
                    Wybierz walutę:
                    <select className="form__field" name="currency">
                        <option value="GBP">Funt</option>
                        <option value="USD">Dolar</option>
                    </select>
                </label>
                <label>
                    Otrzymasz: <strong>N/A
                    </strong>
                </label>
                    </fieldset>
        <button className="form__button">Przelicz!</button>
   
    
    <div>
        *pole obowiązkowe
        </div>
        </main>
        </>
      );
  }

export default App;
