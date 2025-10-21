import "../styles/Footer.scss";
import logo from "../images/Logo.svg"; // troque pelo caminho da sua logo
import iconInstagram from "../images/instagram.svg";
import iconFacebook from "../images/facebook.svg";
import iconLinkedin from "../images/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Newsletter */}
      <div className="newsletter">
        <div className="newsletter-content">
          <div>
            <h3>Inscreva-se na nossa newsletter</h3>
            <p>
              Assine a nossa newsletter e receba as novidades e conteúdos
              exclusivos da Econverse.
            </p>
          </div>

          <form className="newsletter-form">
            <div className="inputs">
              <input type="text" placeholder="Digite seu nome" />
              <input type="email" placeholder="Digite seu e-mail" />
              <button type="submit">INSCREVER</button>
            </div>

            <label className="terms">
              <input type="checkbox" /> Aceito os termos e condições
            </label>
          </form>
        </div>
      </div>

      {/* Rodapé principal */}
      <div className="footer-main">
        <div className="footer-logo">
          <img src={logo} alt="Econverse" className="logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div className="footer-icons">
            <img src={iconInstagram} alt="Instagram" />
            <img src={iconFacebook} alt="Facebook" />
            <img src={iconLinkedin} alt="LinkedIn" />
          </div>
        </div>

        <div className="footer-columns">
          <div>
            <h4>Institucional</h4>
            <ul>
              <li>Sobre Nós</li>
              <li>Movimento</li>
              <li>Trabalhe conosco</li>
            </ul>
          </div>

          <div>
            <h4>Ajuda</h4>
            <ul>
              <li>Suporte</li>
              <li>Fale Conosco</li>
              <li>Perguntas Frequentes</li>
            </ul>
          </div>

          <div>
            <h4>Termos</h4>
            <ul>
              <li>Termos e Condições</li>
              <li>Política de Privacidade</li>
              <li>Troca e Devolução</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="footer-bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
};

export default Footer;
