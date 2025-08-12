import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  // Banner HOME Image 55% de desconto
  return (
    <div>
      <Image
        src="/banner-home-1.png"
        height={0}
        width={0}
        className="h-auto w-full px-5"
        sizes="100vw"
        alt="Até 55% de desconto esse mês!"
      />

      {/* Div das categorias de Texto  com Icones */}
      <div className="mt-8 px-5">
        <Categories />
      </div>

      {/* Div dos Produtos de Imagem  */}
      <div className="mt-8">
        <p className="mb-3 pl-5 font-bold uppercase">Ofertas</p>
        <ProductList products={deals} />
      </div>

      <Image
        src="/banner-home-2.png"
        height={0}
        width={0}
        className="h-auto w-full px-5"
        sizes="100vw"
        alt="Até 55% de desconto em mouses!"
      />
    </div>
  );
}
