import "./styles/Produtos.scss"; 

import Navbar from "./components/Navbar"; // ajuste o caminho conforme sua estrutura
import { Banner } from "./components/Banner";
import { Categories } from "./components/Categories";
import Produtos from "./components/Produtos";
import { Parceiros } from "./components/Parceiros";
import Marcas from "./components/Marcas";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Categories />
      <Produtos />
      <Parceiros />
      <Produtos />
      <Parceiros />
      <Marcas />
      <Produtos />
      <Footer />
    </>
  );
}

export default App;