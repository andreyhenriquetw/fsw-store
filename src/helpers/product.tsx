import { Product } from "@prisma/client";

export interface ProductWithTotalPrice extends Product {
  totalPrice: number;
}

export const computeProductTotalPrice = (
  product: Product,
): ProductWithTotalPrice => {
  if (product.discountPercentage === 0) {
    return {
      ...product,
      totalPrice: Number(product.basePrice),
    };
  }

  const totalDiscount =
    Number(product.basePrice) * (product.discountPercentage / 100);

  let finalPrice = Number(product.basePrice) - totalDiscount;

  // Arredonda sempre para baixo para evitar valores quebrados
  finalPrice = Math.floor(finalPrice);

  return {
    ...product,
    totalPrice: finalPrice,
  };
};
