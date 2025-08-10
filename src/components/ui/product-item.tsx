import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon, Star } from "lucide-react";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

// Exibe a imagem e o nome do produto
const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex max-w-[156px] flex-col gap-4">
      <div className="relative flex h-[170px] w-[156px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
          alt={product.name}
        />

        {/* Div do Desconto % dentro da image */}
        {product.discountPercentage > 0 && (
          <Badge className="absolute left-3 top-3 px-2 py-[2px]">
            <ArrowDownIcon size={14} /> {product.discountPercentage}%
          </Badge>
        )}
      </div>

      {/* Nome dos Produtos */}
      <div className="flex flex-col gap-1">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>

        {/* Nome dos Preços */}
        <div className="flex items-center gap-2">
          {product.discountPercentage > 0 ? (
            <>
              <p className="font-semibold">
                R$ {product.totalPrice.toFixed(2)}
              </p>

              <p className="text-xs line-through opacity-75">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            </>
          ) : (
            <p className="text-sm font-semibold">
              R$ {product.basePrice.toFixed(2)}
            </p>
          )}
        </div>

        {/* Avaliação - 4 cheias e 1 vazia */}
        <div className="flex items-center gap-[3px]">
          {[1, 2, 3, 4].map((star) => (
            <Star
              key={star}
              size={14}
              strokeWidth={2}
              className="fill-[#5c3dd9] text-[#5c3dd9]"
            />
          ))}
          <Star
            size={14}
            strokeWidth={2}
            className="text-[#5c3dd9]" // vazia
          />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
