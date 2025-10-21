import React from 'react';
import { Produto } from '../types/Product'; 
import '../styles/Produtos.scss'; 

interface CartaoProdutoProps {
  produto: Produto;
  onClick: (produto: Produto) => void;
}

const CartaoProduto: React.FC<CartaoProdutoProps> = ({ produto, onClick }) => {

  const precoOriginalSimulado = 30.90; 
  const precoOfertaSimulado = 28.90;
  const parcelasCount = 2;
  const valorParcela = 48.95; 

  const partesPreco = precoOfertaSimulado.toFixed(2).split('.');

  return (
    <div className="productCard" onClick={() => onClick(produto)}>
      <div className="productImage">
        <img 
          src={produto.photo} 
          alt={produto.productName} 
        />
      </div>
      <p className="productName">
        {produto.descriptionShort}
      </p>
      <div className="priceInfo">
        <span className="originalPrice">
          R$ {precoOriginalSimulado.toFixed(2).replace('.', ',')}
        </span>
        <div className="offerPrice">
          R$ {partesPreco[0]}
          <span>,{partesPreco[1]}</span>
        </div>
        <p className="installments">
          ou {parcelasCount}x de R$ {valorParcela.toFixed(2).replace('.', ',')} sem juros
        </p>
        <span className="shipping">frete grátis</span>
      </div>
      <button className="buyButton" onClick={(e) => {
        e.stopPropagation(); 
        alert(`Adicionando ${produto.productName} ao carrinho!`);
      }}>
        COMPRAR
      </button>
    </div>
  );
};

export default CartaoProduto;