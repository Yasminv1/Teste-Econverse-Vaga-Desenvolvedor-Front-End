import "../styles/Marcas.scss";
import Logo from "../images/Logo.svg"; 

const marcas = [
  { id: 1, nome: "Econverse", img: Logo },
  { id: 2, nome: "Econverse", img: Logo },
  { id: 3, nome: "Econverse", img: Logo },
  { id: 4, nome: "Econverse", img: Logo },
  { id: 5, nome: "Econverse", img: Logo },
];

export default function Marcas() {
  return (
    <div className="marcas-container">
      <h2>Navegue por marcas</h2>
      <div className="marcas-list">
        {marcas.map((marca) => (
          <div key={marca.id} className="marca-card">
            <img src={marca.img} alt={marca.nome} />
          </div>
        ))}
      </div>
    </div>
  );
}
