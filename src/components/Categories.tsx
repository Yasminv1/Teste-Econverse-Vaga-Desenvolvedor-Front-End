import React, { useState } from "react";
import "../styles/Categories.scss";

import tech from "../images/tech.svg";
import supermarket from "../images/supermarket.svg";
import drinks from "../images/drinks.svg";
import tools from "../images/tools.svg";
import health from "../images/health.svg";
import sports from "../images/sports.svg";
import fashion from "../images/fashion.svg";

const categoriesData = [
  { id: 1, name: "Tecnologia", images: tech },
  { id: 2, name: "Supermercado", images: supermarket },
  { id: 3, name: "Bebidas", images: drinks },
  { id: 4, name: "Ferramentas", images: tools },
  { id: 5, name: "Saúde", images: health },
  { id: 6, name: "Esportes e Fitness", images: sports },
  { id: 7, name: "Moda", images: fashion },
];

export function Categories() {
  const [activeId, setActiveId] = useState(1);

  return (
    <div className="categories">
      {categoriesData.map((cat) => (
        <div
          key={cat.id}
          className={`category-item ${activeId === cat.id ? "active" : ""}`}
          onClick={() => setActiveId(cat.id)}
        >
          <div className="icon-wrapper">
            <img src={cat.images} alt={cat.name} />
          </div>
          <span>{cat.name}</span>
        </div>
      ))}
    </div>
  );
}
