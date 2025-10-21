import React, { useState } from 'react';
import { Produto } from '../types/Product';
import '../styles/Produtos.scss'; 

interface ConteudoModalProps {
  produto: Produto;
}

const formatarPreco = (priceInCents: number) => {
  return (priceInCents / 100).toFixed(2).replace('.', ',');
};

const ConteudoModal: React.FC<ConteudoModalProps> = ({ produto }) => {
  const [quantidade, setQuantidade] = useState(1); 

  const handleDecrease = () => {
    setQuantidade(prev => Math.max(1, prev - 1)); // Garante que a quantidade mínima é 1
  };

  const handleIncrease = () => {
    setQuantidade(prev => prev + 1);
  };

  return (
    <div className="modalDetalhesProduto"> {/* Nova classe para o layout horizontal do modal */}
      <div className="modalImagemProduto">
        <img src={produto.photo} alt={produto.productName} />
      </div>

      <div className="modalInfoProduto">
        <h3>{produto.productName.toUpperCase()}</h3> {/* Título em maiúsculas */}
        
        <p className="modalPrecoAtual">R$ {formatarPreco(produto.price)}</p> {/* Preço do JSON */}
        
        <p className="modalDescricao">
          {/* O texto "Many desktop publishing..." na imagem */}
          Many desktop publishing packages and web page editors now morning publishing.
          {/* produto.descriptionShort */}
        </p>
        <a href="#" className="modalMaisDetalhes">Veja mais detalhes do produto </a>

        <div className="modalAcoes">
          <div className="modalContador">
            <button onClick={handleDecrease}>-</button>
            <span>{quantidade < 10 ? '0' + quantidade : quantidade}</span> {/* Formato 01, 02... */}
            <button onClick={handleIncrease}>+</button>
          </div>
          <button className="modalBotaoComprar">COMPRAR</button>
        </div>
      </div>
    </div>
  );
};

export default ConteudoModal;