"use client";

import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowLeftIcon, ArrowRightIcon, Star, TruckIcon } from "lucide-react";
import { useState } from "react";

// Tipagem das props que o componente recebe
interface ProductInfoProps {
  product: Pick<
    ProductWithTotalPrice,
    "basePrice" | "description" | "discountPercentage" | "totalPrice" | "name"
  >;
}

// Componente principal
const ProductInfo = ({
  product: { name, basePrice, totalPrice, description, discountPercentage },
}: ProductInfoProps) => {
  // Estado para controlar a quantidade escolhida pelo usuário
  const [quantity, setQuantity] = useState(1);

  // Função para diminuir a quantidade (mínimo = 1)
  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  // Função para aumentar a quantidade
  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col px-5">
      {/* Nome do produto */}
      <h2 className="text-lg">{name}</h2>

      {/* Disponil em estoque */}
      <div>
        <h1 className="mt-1 text-[#5c3dd9]">Disponível em estoque</h1>
      </div>

      {/* Avaliação - 4 estrelas cheias e 1 vazia */}
      <div className="flex items-center gap-[3px]">
        {[1, 2, 3, 4].map((star) => (
          <Star
            key={star}
            size={14}
            strokeWidth={2}
            className="fill-[#5c3dd9] text-[#5c3dd9]" // Estrela preenchida (cheia)
          />
        ))}
        <Star
          size={14}
          strokeWidth={2}
          className="text-[#5c3dd9]" // Estrela vazia
        />
        <p className="px-2 font-extralight opacity-60"> (avaliações)</p>
      </div>

      {/* Preço e desconto */}
      <div className="item-center mt-2 flex gap-2">
        <h1 className="text-xl font-bold">R$ {totalPrice.toFixed(2)}</h1>
        {discountPercentage > 0 && (
          <DiscountBadge>{discountPercentage}</DiscountBadge>
        )}
      </div>

      {/* Preço original riscado (se houver desconto) */}
      {discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          R$ {Number(basePrice).toFixed(2)}
        </p>
      )}

      {/* Seção de quantidade com botões de + e - */}
      <div className="mt-4 flex items-center gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={handleDecreaseQuantityClick}
        >
          <ArrowLeftIcon size={16} />
        </Button>
        <span>{quantity}</span> {/* Quantidade atual */}
        <Button
          size="icon"
          variant="outline"
          onClick={handleIncreaseQuantityClick}
        >
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      {/* Botão de adicionar ao carrinho */}
      <Button className="mt-8 font-bold uppercase">
        Adicionar ao carrinho
      </Button>

      {/* Informações de entrega */}
      <div className="mt-5 flex items-center justify-between rounded-lg bg-accent px-5 py-2">
        <div className="flex items-center gap-2">
          <TruckIcon />

          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via <span className="font-bold">Correios</span>
            </p>
            <p className="text-xs text-[#8162FF]">
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>

        <p className="text-xs font-bold">Frete grátis</p>
      </div>

      {/* Descrição do produto */}
      <div className="mt-5 flex flex-col gap-3"></div>
      <h3 className="font-bold">Descrição</h3>
      <p className="mt-2 text-justify text-sm opacity-60">{description}</p>
    </div>
  );
};

export default ProductInfo;
