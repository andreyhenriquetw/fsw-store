"use client";

import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Separator } from "./separator";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";

const Cart = () => {
  const { products, subtotal, total, totalDiscount } = useContext(CartContext);

  // Função para montar a mensagem do WhatsApp
  const formatWhatsAppMessage = () => {
    let message = "Olá, gostaria de fazer o pedido:\n\n";

    products.forEach((product, index) => {
      message += `${index + 1}. ${product.name} - Quantidade: ${product.quantity} - Preço unitário: R$ ${product.totalPrice.toFixed(2)}\n`;
    });

    message += `\nSubtotal: R$ ${subtotal.toFixed(2)}`;
    message += `\nDescontos: R$ ${Math.abs(totalDiscount).toFixed(2)}`;
    message += `\nTotal: R$ ${total.toFixed(2)}`;

    return encodeURIComponent(message);
  };

  // Função para abrir o WhatsApp com a mensagem
  const handleCheckoutClick = () => {
    const phoneNumber = "5593999034526"; // Coloque o número do WhatsApp da sua loja aqui (com código do país e DDD)
    const url = `https://wa.me/${phoneNumber}?text=${formatWhatsAppMessage()}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex h-full flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      {/* RENDERIZAR OS PRODUTOS */}
      <div className="flex h-full max-h-full flex-col gap-5 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="flex h-full flex-col gap-8">
            {products.length > 0 ? (
              products.map((product) => (
                <CartItem
                  key={product.id}
                  product={computeProductTotalPrice(product as any) as any}
                />
              ))
            ) : (
              <p className="text-center font-semibold">Carrinho vazio!</p>
            )}
          </div>
        </ScrollArea>
      </div>

      {products.length > 0 && (
        <div className="flex flex-col gap-3">
          <Separator />

          <div className="flex items-center justify-between text-xs">
            <p>Subtotal</p>
            <p>R$ {subtotal.toFixed(2)}</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-xs">
            <p>Entrega</p>
            <p>GRÁTIS</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-xs">
            <p>Descontos</p>
            <p>- R$ {Math.abs(totalDiscount).toFixed(2)}</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-sm font-bold">
            <p>Total</p>
            <p>R$ {total.toFixed(2)}</p>
          </div>

          <Button
            className="mt-7 font-bold uppercase"
            onClick={handleCheckoutClick}
            disabled={products.length === 0}
          >
            Finalizar compra
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
