import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";
import SectionTitle from "./components/section-title";
import PromoBanner from "./components/promo-banner";

// Produtos Exportado: Lista de OFERTAS e Desconto %
export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  // Produtos Exportado: Lista de Teclados Keyboards
  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  // Banner HOME 1 Image 55% de desconto
  return (
    <div>
      <PromoBanner
        src="/banner-home-1.png"
        alt="Até 55% de desconto esse mês!"
      />

      {/* Div das categorias de Texto  com Icones */}
      <div className="mt-8 px-5">
        <Categories />
      </div>

      {/* Div dos Produtos de OFERTAS  */}
      <div className="mt-8">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      {/* Banner HOME 2 Image 55% de desconto em mouses */}
      <PromoBanner
        src="/banner-home-2.png"
        alt="Até 55% de desconto em mouses!"
      />

      {/* Div dos Produtos de Keyboards  */}
      <div className="mt-8">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>
    </div>
  );
}
