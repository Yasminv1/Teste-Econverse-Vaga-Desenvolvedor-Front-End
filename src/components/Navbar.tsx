import "../styles/Navbar.scss";
import Logo from "../images/Logo.svg"; 
import icon_caixa from "../images/icon_caixa.svg"; 
import icon_coracao from "../images/icon_coracao.svg"; 
import icon_perfil from "../images/icon_perfil.svg";
import icon_carrinho from "../images/icon_carrinho.svg"; 
import icon_lupa from "../images/icon_lupa.svg";
import icon_seguranca from "../images/icon_seguranca.svg";
import icon_truck from "../images/icon_truck.svg";
import icon_card from "../images/icon_card.svg"; 
import icon_coroa from "../images/icon_coroa.svg";

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="navbar-top">
        <span>
          <img src={icon_seguranca} alt="Seguro" />
          Compra <strong>100% segura</strong>
        </span>
        <span>
          <img src={icon_truck} alt="Caminhão" />
          <strong>Frete grátis</strong> acima de R$200
        </span>
        <span>
          <img src={icon_card} alt="Cartão" />
          <strong>Parcele</strong> suas compras
        </span>
      </div>

      <div className="navbar-main">
        <div className="logo">
          <img src={Logo} alt="Econverse" />
        </div>

        <div className="search">
          <input type="text" placeholder="O que você está buscando?" />
          <button>
            <img src={icon_lupa} alt="Lupa" />
          </button>
        </div>

        <div className="icons">
          <span>
            <img src={icon_caixa} alt="Caixa" />
          </span>
          <span>
            <img src={icon_coracao} alt="Coração" />
          </span>
          <span>
            <img src={icon_perfil} alt="Perfil" />
          </span>
          <span>
            <img src={icon_carrinho} alt="Carrinho" />
          </span>
        </div>
      </div>

      <nav className="navbar-bottom">
        <ul>
          <li>TODAS CATEGORIAS</li>
          <li>SUPERMERCADO</li>
          <li>LIVROS</li>
          <li>MODA</li>
          <li>LANÇAMENTOS</li>
          <li>OFERTAS DO DIA</li>
          <li>
            <img src={icon_coroa} alt="" />
            ASSINATURA
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
