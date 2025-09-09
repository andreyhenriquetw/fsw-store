import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "../../components/ui/product-list";
import SectionTitle from "../../components/ui/section-title";
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

  // Produtos Exportado: Lista de Kikbar
  const kikbar = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "kikbar",
      },
    },
  });

  // Produtos Exportado: Lista de Ignite
  const ignite = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "ignite",
      },
    },
  });

  // Produtos Exportado: Lista de POD SYSTEM
  const podsystem = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "pod-system",
      },
    },
  });

  // Produtos Exportado: Lista de HALLU LABZ
  const hallulabz = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "hallulabz",
      },
    },
  });

  // Produtos Exportado: Lista de ROVE
  const rove = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "rove",
      },
    },
  });

  // Produtos Exportado: Lista de VAPE
  const vape = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "vape",
      },
    },
  });

  // Banner HOME 1 Image 55% de desconto
  return (
    <div className="flex flex-col gap-8 py-8">
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

      {/* Banner HOME 2 Image 55% de desconto em Hallu */}
      <PromoBanner
        src="/banner-hallu.png"
        alt="Até 55% de desconto em Hallu Labz!"
      />

      {/* Div dos Produtos de HALLU LABZ  */}
      <div>
        <SectionTitle>Hallu Labz</SectionTitle>
        <ProductList products={hallulabz} />
      </div>

      {/* Banner HOME 3 Image 20% de desconto em ignite */}
      <div>
        <PromoBanner
          src="/banner-ignite.png"
          alt="Até 20% de desconto em ignite!"
        />
      </div>

      {/* Div dos Produtos de Ignite  */}

      <div>
        <SectionTitle>Ignite</SectionTitle>
        <ProductList products={ignite} />
      </div>

      {/* TROCAR Banner HOME 3 Image 20% de desconto em kikbar */}
      <div>
        <PromoBanner
          src="/banner-kikbar.png"
          alt="Até 26% de desconto em kikbar!"
        />
      </div>

      {/* Div dos Produtos de kikbar */}

      <div>
        <SectionTitle>Kikbar</SectionTitle>
        <ProductList products={kikbar} />
      </div>

      {/* TROCAR Banner HOME 1 Image 55% de desconto em pod */}

      <PromoBanner src="/banner-pode.png" alt="Até 55% de desconto esse mês!" />

      {/* Div dos Produtos de POD SYSTEM  */}

      <div>
        <SectionTitle>Pod System</SectionTitle>
        <ProductList products={podsystem} />
      </div>

      {/* TROCAR Banner HOME 3 Image 20% de desconto em ROVE */}
      <div>
        <PromoBanner
          src="/banner-rove.png"
          alt="Até 15% de desconto em Rove!"
        />
      </div>

      <div>
        <SectionTitle>ROVE</SectionTitle>
        <ProductList products={rove} />
      </div>

      {/* TROCAR Banner HOME 3 Image 20% de desconto em VAPE */}
      <div>
        <PromoBanner
          src="/banner-vape.png"
          alt="Até 17% de desconto em Vape!"
        />
      </div>

      <div>
        <SectionTitle>VAPE</SectionTitle>
        <ProductList products={vape} />
      </div>
    </div>
  );
}
