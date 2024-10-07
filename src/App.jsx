import "./styles.css";
import Header from "./componentes/Header";
import Hero from "./componentes/Hero";
import Biografia from "./componentes/Biografia";
import Propostas from "./componentes/Propostas";
import Agenda from "./componentes/Agenda";
import Footer from "./componentes/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Biografia />
      <Propostas />
      <Agenda />
      <Footer />
    </div>
  );
}
