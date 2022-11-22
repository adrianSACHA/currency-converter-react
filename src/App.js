import "./index.css";
import Header from "./Header";
import Container from "./Container";
import Form from "./Form";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  return (
    <>
      <Container>
        <Header title="Kalkulator Walutowy - aktualny na 12.10.2022" />
        <Form />
        
        <Footer title="* pole obowiązkowe" />
      </Container>
    </>
  );
}

export default App;
