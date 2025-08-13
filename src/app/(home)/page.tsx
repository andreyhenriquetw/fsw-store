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

  // Produtos Exportado: Lista de Mouses
  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  // Banner HOME 1 Image 55% de desconto
  return (
    <div className="flex flex-col gap-8">
      <PromoBanner
        src="/banner-home-1.png"
        alt="Até 55% de desconto esse mês!"
      />

      {/* Div das categorias de Texto  com Icones */}
      <div className="px-5">
        <Categories />
      </div>

      {/* Div dos Produtos de OFERTAS  */}
      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      {/* Banner HOME 2 Image 55% de desconto em mouses */}
      <PromoBanner
        src="/banner-home-2.png"
        alt="Até 55% de desconto em mouses!"
      />

      {/* Div dos Produtos de Keyboards  */}
      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      {/* Banner HOME 3 Image 20% de desconto em fones */}
      <div>
        <PromoBanner
          src="/banner-home-3.png"
          alt="Até 20% de desconto em fones!"
        />
      </div>

      <div>
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  );
}
