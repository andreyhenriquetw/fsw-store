"use client";

import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import { ArrowLeftIcon, ArrowRightIcon, Star, TruckIcon } from "lucide-react";
import { useContext, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addProductToCart } = useContext(CartContext);

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCartClick = () => {
    addProductToCart({ ...product, quantity });
  };

  // Função para abrir WhatsApp com informações do produto
  const handleWhatsAppClick = () => {
    const phoneNumber = "5593999034526"; // coloque seu número com DDD +55
    const message = `Olá, tenho interesse no produto: 
*${product.name}*
Quantidade: ${quantity}
Preço: R$ ${product.totalPrice.toFixed(2)} cada
Total: R$ ${(product.totalPrice * quantity).toFixed(2)}

Poderia me passar mais informações?`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{product.name}</h2>

      <div>
        <h1 className="mt-1 text-[#5c3dd9]">Disponível em estoque</h1>
      </div>

      <div className="flex items-center gap-[3px]">
        {[1, 2, 3, 4].map((star) => (
          <Star
            key={star}
            size={14}
            strokeWidth={2}
            className="fill-[#5c3dd9] text-[#5c3dd9]"
          />
        ))}
        <Star size={14} strokeWidth={2} className="text-[#5c3dd9]" />
        <p className="px-2 font-extralight opacity-60"> (avaliações)</p>
      </div>

      <div className="item-center mt-2 flex gap-2">
        <h1 className="text-xl font-bold">
          R$ {product.totalPrice.toFixed(2)}
        </h1>
        {product.discountPercentage > 0 && (
          <DiscountBadge>{product.discountPercentage}</DiscountBadge>
        )}
      </div>

      {product.discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          R$ {Number(product.basePrice).toFixed(2)}
        </p>
      )}

      <div className="mt-4 flex items-center gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={handleDecreaseQuantityClick}
        >
          <ArrowLeftIcon size={16} />
        </Button>
        <span>{quantity}</span>
        <Button
          size="icon"
          variant="outline"
          onClick={handleIncreaseQuantityClick}
        >
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      {/* Botão de adicionar ao carrinho */}
      <Button
        className="mt-8 font-bold uppercase"
        onClick={handleAddToCartClick}
      >
        Adicionar ao carrinho
      </Button>

      {/* Botão de WhatsApp */}
      <Button
        className="mt-3 bg-green-500 font-bold uppercase text-white hover:bg-green-600"
        onClick={handleWhatsAppClick}
      >
        <FaWhatsapp className="absolute left-12" size={20} />
        Comprar pelo WhatsApp
      </Button>

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

      <div className="mt-5 flex flex-col gap-3"></div>
      <h3 className="font-bold">Descrição</h3>
      <p className="mt-2 text-justify text-sm opacity-60">
        {product.description}
      </p>
    </div>
  );
};

export default ProductInfo;
