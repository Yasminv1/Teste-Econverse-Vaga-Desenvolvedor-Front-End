import React, { useState, useEffect } from 'react';
import CartaoProduto from './CartaoProduto';
import Modal from './Modal';
import ConteudoModal from './ConteudoModal';
import { Produto, RespostaApi } from '../types/Product';
import '../styles/Produtos.scss';

const API_URL = '/produtos.json'; 

const Produtos: React.FC = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const buscarProdutos = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Falha ao carregar os dados locais. Status: ${response.status}`);
        }
        const data: RespostaApi = await response.json();
        
        if (data.success && Array.isArray(data.products)) {
            // Limita a 4 produtos para replicar o layout de 4 colunas da imagem
            const produtosParaMostrar = data.products.slice(0, 4); 
            setProdutos(produtosParaMostrar);
        } else {
            setErro('Dados inválidos recebidos do arquivo JSON.');
        }
      } catch (err) {
        console.error("Erro no Fetch:", err); 
        setErro('Erro ao conectar ou processar o arquivo JSON. Verifique o console.');
      } finally {
        setCarregando(false);
      }
    };

    buscarProdutos();
  }, []);

  const abrirModalProduto = (produto: Produto) => {
    setProdutoSelecionado(produto);
  };

  const fecharModalProduto = () => {
    setProdutoSelecionado(null);
  };

  if (carregando) return <div className="productShowcase" style={{ textAlign: 'center', padding: '50px' }}>Carregando produtos...</div>;
  if (erro) return <div className="productShowcase" style={{ textAlign: 'center', color: 'red', padding: '50px' }}>Erro: {erro}</div>;

  return (
    <div className="productShowcase">
      <h2>Produtos relacionados</h2>
      <a href="#" className="viewAll">Ver todos</a>

      <div className="carouselContainer">
        {/* Setas (Visuais) */}
        <div className="arrow left">
          {'<'}
        </div>

        <div className="productsGrid">
          {produtos.map((produto, index) => (
            <CartaoProduto
              key={index} 
              produto={produto}
              onClick={abrirModalProduto}
            />
          ))}
        </div>
        
        <div className="arrow right">
          {'>'}
        </div>
      </div>

      <Modal isOpen={!!produtoSelecionado} onClose={fecharModalProduto}>
        {produtoSelecionado && <ConteudoModal produto={produtoSelecionado} />}
      </Modal>
    </div>
  );
};

export default Produtos;