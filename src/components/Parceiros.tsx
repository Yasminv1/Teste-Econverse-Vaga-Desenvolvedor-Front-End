import "../styles/Parceiros.scss";
import apple from "../images/apple.svg";

const parceirosData = [
  {
    id: 1,
    title: "Parceiros",
    description: "Lorem ipsum dolor sit amet, consectetur",
    image: apple,
    buttonText: "CONFIRA",
  },
  {
    id: 2,
    title: "Parceiros",
    description: "Lorem ipsum dolor sit amet, consectetur",
    image: apple,
    buttonText: "CONFIRA",
  },
];

export function Parceiros() {
  return (
    <div className="parceiros-container">
      {parceirosData.map((item) => (
        <div key={item.id} className="parceiro-card">
          <div
            className="parceiro-image"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="overlay">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button>{item.buttonText}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
