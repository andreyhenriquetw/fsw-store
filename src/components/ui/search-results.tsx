"use client";
import React, { useRef } from "react";
import { computeProductTotalPrice } from "@/helpers/product";
import SearchCardResult from "./search-card-result";
import { Product } from "@prisma/client";
import useSearch from "@/hooks/use-search";

interface SearchResultsProps {
  products: Product[];
}

const SearchResults = ({ products }: SearchResultsProps) => {
  // Obtém o termo de busca atrasado e a função para atualizar a busca do contexto
  const { deferredSearch, setSearch } = useSearch();

  // Estado local para armazenar os produtos filtrados com base na busca
  const [filteredProducts, setFilteredProducts] = React.useState<Product[]>([]);

  // Referência para o elemento que contém a lista de resultados,
  // usada para detectar clique fora da lista (para fechar resultados)
  const resultsRef = useRef<HTMLUListElement>(null);

  // Função que filtra os produtos conforme a busca atrasada (deferredSearch)
  // Atualiza o estado 'filteredProducts' toda vez que 'deferredSearch' ou 'products' mudam
  React.useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(deferredSearch.toLowerCase()),
    );
    setFilteredProducts(filtered);
  }, [deferredSearch, products]);

  // Hook que adiciona um listener para detectar clique fora da lista de resultados
  // Se clicou fora, limpa o termo de busca e fecha os resultados
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        resultsRef.current &&
        !resultsRef.current.contains(event.target as Node)
      ) {
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup que remove o listener quando componente desmonta
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSearch]);

  // Se não houver termo de busca, não renderiza nada
  if (!deferredSearch) return null;

  // Renderiza a lista de resultados filtrados dentro da ul
  // Usa a referência 'resultsRef' para detectar cliques fora
  return (
    <ul
      ref={resultsRef}
      className="absolute left-5 top-16 z-10 box-border flex max-h-80 w-[calc(100%-2.5rem)] flex-col gap-5 overflow-scroll rounded-md bg-[#1d1f1e] p-5"
    >
      {deferredSearch && filteredProducts.length !== 0 ? (
        filteredProducts.map((product) => (
          <li key={product.id}>
            {/* Renderiza cada card individual com o produto processado */}
            <SearchCardResult product={computeProductTotalPrice(product)} />
          </li>
        ))
      ) : (
        <li>
          {/* Mensagem quando não há produtos encontrados */}
          <p className="text-sm font-semibold text-accent text-white">
            {`Não encontramos nenhuma sugestão :(`}
          </p>
        </li>
      )}
    </ul>
  );
};

export default SearchResults;
