import './index.css';
import Header from "./Header"
import Container from "./Container"
// import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Container>
            <Header 
              title="Kalkulator Walutowy - aktualny na 12.10.2022"
            />
            <form className="form">
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
      
        <button className="form__button">Przelicz!</button>
     </form>
    <Footer
    title="pole obowiązkowe"
     />
    </Container>
  </>
      );
  }

export default App;
