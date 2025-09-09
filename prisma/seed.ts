const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const igniteCategory = await prisma.category.create({
      data: {
        name: "IGNITE",
        slug: "ignite",
        imageUrl:
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-descartavel-ignite-v50-mixed-berries-catalago.png",
      },
    });

    const ignite = [
      {
        name: "Ignite v50 5000puffs Watermelon Bubblegum",
        slug: "ignite-v50-5000puffs-watermelon-bubblegum",
        description:
          "Pod Descartável Ignite V50 5000 Puffs – Todos os Sabores Com uma potente concentração de 5% (50mg/ml) de nicotina, uma bateria de 650mAh e um generoso reservatório de 12 mL de e-líquido pré-preenchido, este dispositivo proporciona até 5000 vaporadas sem a necessidade de ajustes. Equipado com tecnologia de acionamento automático, basta uma inalação para desfrutar de uma experiência de vapor suave. Sua forma compacta, leve e discreta fez do pod Ignite V50 de 5000 puffs o favorito dos brasileiros e um dos mais solicitados em todo o mundo. Ideal para quem busca praticidade e um sabor autêntico a qualquer hora do dia. Experimente a liberdade de vaporizar quando quiser!",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/Ignite-v50-5000puffs-Watermelon-Bubblegum.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/Ignite-v50-5000puffs-Watermelon-Bubblegum+(1).png",
        ],
        basePrice: 120,
        categoryId: igniteCategory.id,
        discountPercentage: 20, // 20% discount
      },
      {
        name: "Pod Descartável Ignite V80 - Watermelon Ice",
        slug: "pod-descartavel-ignite-v80-watermelon-ice",
        description:
          "Pod Descartável Ignite V80 – Watermelon Ice Estilo, Potência e Sabor Premium em Cada Puff! Com o Ignite V80, você eleva sua experiência de vape a outro nível. Criado com a assinatura da renomada marca Ignite, o V80 combina um design sofisticado com alto desempenho, entregando até 8000 puffs de vapor suave, encorpado e cheio de sabor. Destaques do Ignite V80: Capacidade para até 8000 puffs Bateria recarregável via USB-C (cabo não incluso) Tanque generoso de e-líquido com sabores premium Tecnologia anti-vazamento Pronto para uso – sem complicações Seja para o dia a dia ou momentos especiais, o Pod Ignite V80 é a escolha certa para quem busca uma vaporização de qualidade, com estilo e praticidade.",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-descartavel-ignite-v80-watermelon-ice.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-descartavel-ignite-v80-watermelon-ice+(1).png",
        ],
        basePrice: 130,
        categoryId: igniteCategory.id,
        discountPercentage: 20, // 20% discount
      },
      {
        name: "Pod Descartável Ignite V50 - Mixed Berries",
        slug: "pod-descartavel-ignite-v50-mixed-berries",
        description:
          "Pod Descartável Ignite V50 – Mixed Berries Compacto, Potente e Cheio de Sabor! O Ignite V50 é a escolha perfeita para quem busca um pod descartável elegante, discreto e de alto desempenho. Com até 5000 puffs, ele entrega vapor consistente, sabores marcantes e uma experiência premium em cada trago – tudo isso com a qualidade reconhecida da marca Ignite. Destaques do Ignite V50: Capacidade para até 5000 puffs Bateria recarregável via USB-C (cabo não incluso) Design compacto e sofisticado Pronto para usar – sem refil, sem manutenção Sabores premium com ótima produção de vapor Ideal para quem quer praticidade no dia a dia sem abrir mão da performance, o Ignite V50 oferece um equilíbrio perfeito entre estilo e funcionalidade.",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-descartavel-ignite-v50-mixed-berries.png",
        ],
        basePrice: 120,
        categoryId: igniteCategory.id,
        discountPercentage: 20, // 20% discount
      },
      {
        name: "Pod Descartável Ignite V120 Pro - Strawberry Kiwi",
        slug: "pod-descartavel-ignite-v120-pro-strawberry-kiwi",
        description:
          "Pod Descartável Ignite V120 Pro – Strawberry Kiwi Máxima Performance com até 12.000 Puffs! O Ignite V120 Pro é a evolução do vape descartável: mais potência, mais sabor e muito mais durabilidade. Com até 12.000 puffs, bateria recarregável e sabores intensos, ele foi feito para quem busca uma experiência premium do início ao fim. Com um visual moderno e acabamento refinado, o V120 Pro entrega vapor denso e suave, ideal para quem valoriza qualidade e estilo em um único dispositivo. Destaques do Ignite V120 Pro: Até 12.000 puffs de duração Bateria recarregável via USB-C (cabo não incluso) Display LED de nível de bateria e e-líquido Sabores premium e tecnologia anti-vazamento Design ergonômico e moderno Zero manutenção – é só carregar e vaporizar Perfeito para quem não abre mão da praticidade com alta performance, o Ignite V120 Pro é a escolha definitiva para vapers exigentes.",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-descartavel-ignite-v120-pro-strawberry-kiwi.png",
        ],
        basePrice: 150,
        categoryId: igniteCategory.id,
        discountPercentage: 20, // 20% discount
      },
      {
        name: "Pod Descartável Ignite V250 Gold - Strawberry Kiwi",
        slug: "pod-descartavel-ignite-v250-gold-strawberry-kiwi",
        description:
          "Ignite acaba de lançar o seu mais recente dispositivo de vaporização, o aclamado V250! Um pod descartável completo que pode entregar até 25000 puffs com muita qualidade e durabilidade! Seu formato é idêntico ao Ignite V150, porém seu tamanho é um pouco maior e seu visor agora se encontra na lateral do aparelho, sendo maior e colorido! Sua bateria conta com 650mAh e o V250 conta com 2 modos de vaporização: o Eco Mode que entrega até 25000 puffs e o Boost Mode capaz de proporcionar até 12000 puffs. Você pode efetuar a troca de potência através de uma pequena chave de seleção localizada na base inferior do aparelho. Além disso, o Ignite V250 conta com 16mL de líquido e uma seleção de deliciosos sabores! Confira na leitura!",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-descartavel-ignite-v250-gold-strawberry-kiwi.png",
        ],
        basePrice: 150,
        categoryId: igniteCategory.id,
        discountPercentage: 20,
      },
      {
        name: "Pod Descartável Ignite V250 Gold - Menthol",
        slug: "pod-descartavel-ignite-v250-gold-menthol",
        description:
          "Desfrute de um sabor refrescante e intenso com o Pod Descartável Ignite V250 Gold - Menthol! Perfeito para quem busca uma experiência de vape suave e satisfatória, com um toque gelado e revigorante de mentol. Características: Sabor: Mentol fresco e envolvente Bateria integrada recarregável (evita desperdício) Resistência de mesh para vapor mais denso e sabor intenso Até 2500 puffs (varia conforme o uso) Design compacto e elegante – leve para onde quiser Ideal para quem deseja praticidade e performance sem complicações. Experimente o frescor do Ignite V250 Gold - Menthol e eleve sua experiência de vape! Pronto para uso – sem recargas ou manutenção!",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/ignite-v250-gold-menthol.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-descartavel-ignite-v250-gold-menthol.png",
        ],
        basePrice: 150,
        categoryId: igniteCategory.id,
        discountPercentage: 20,
      },

      {
        name: "Pod Descartável V-MIX 40K - 40000 Puffs | Ignite - Acai Ice + Watermelon Grape Ice - 50mg/mL",
        slug: "ignite-pod-descartavel-v-mix-40k-40000-puffs",
        description:
          "A Ignite surpreende novamente com o lançamento do pod descartável V-Mix 40K, um dispositivo que marca uma nova fase na trajetória da marca. Diferente de modelos anteriores, ele traz recursos inéditos e a possibilidade de alternar entre dois sabores em um único aparelho. Visualmente lembra o V400, mas com melhorias e mudanças importantes que tornam essa versão única.",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/ignite-pod-descartavel-v-mix-40k-40000-puffs.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-ignite-pod-descartavel-v-mix-40k-40000-puffs.png",
        ],
        basePrice: 200,
        categoryId: igniteCategory.id,
        discountPercentage: 10,
      },

      {
        name: "Juice NicSalt Arctic Grape Subzero | Ignite - 30 - 35mg/mL",
        slug: "ignite-juice-ns-arctic-grape-subzero",
        description:
          "Dan Bilzerian é a mente por trás de uma das marcas mais conceituadas de pod descartável em território nacional, sendo no caso a famosa Ignite. O criador da marca busca cada vez mais novos produtos para colocar no portifólio, para assim cada vez mais atender um maior público do mercado vape. Com isso em mente, viemos te apresentar hoje os novos Juices NicSalt da Ignite, no qual visa trazer os sabores inconfundíveis de seus renomados pods descartáveis, sendo eles adocicados, mentolados, atabacados e até mesmo frutados.",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/ignite-juice-ns-arctic-grape-subzero.png",
        ],
        basePrice: 129,
        categoryId: igniteCategory.id,
        discountPercentage: 15.5,
      },

      {
        name: "Pod Descartável V300 | Ignite - Blueberry Strawberry Coconut - 50mg/mL",
        slug: "pod-descartável-v300-ignite-blueberry-strawberry-coconut-50mg",
        description:
          "O Ignite V300 se destaca entre os dispositivos descartáveis por sua impressionante autonomia de até 30.000 puffs, oferecendo uma experiência consistente, prática e duradoura. Projetado para usuários que valorizam conveniência sem abrir mão de desempenho, esse pod combina grande capacidade com visual moderno e fácil usabilidade.",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-descart%C3%A1vel-v300-ignite-blueberry-strawberry-coconut-50mg.png",
        ],
        basePrice: 145,
        categoryId: igniteCategory.id,
        discountPercentage: 10,
      },

      {
        name: "Pod Descartável V300 | Ignite - Pineapple Kiwi Dragon Fruit - 50mg/mL",
        slug: "ignite-pineapple-kiwi-dragon-fruit-50mg",
        description:
          "O Ignite V300 se destaca entre os dispositivos descartáveis por sua impressionante autonomia de até 30.000 puffs, oferecendo uma experiência consistente, prática e duradoura. Projetado para usuários que valorizam conveniência sem abrir mão de desempenho, esse pod combina grande capacidade com visual moderno e fácil usabilidade.",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/ignite-pineapple-kiwi-dragon-fruit-50mg.png",
        ],
        basePrice: 145,
        categoryId: igniteCategory.id,
        discountPercentage: 10,
      },
    ];

    await prisma.product.createMany({
      data: ignite,
    });

    const kikbarCategory = await prisma.category.create({
      data: {
        name: "KIKBAR",
        slug: "kikbar",
        imageUrl:
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-descartavel-10000-puffs-nikbar-banana-ice-catalago.png",
      },
    });

    const kikbar = [
      {
        name: "Pod Descartável - 10000 puffs | Nikbar - Banana Ice - 50mg/mL",
        slug: "pod-descartavel-10000-puffs-nikbar-banana-ice",
        description:
          "O pod descartável Nikbar N10000 foi desenvolvido para quem valoriza longas sessões de vaporização com praticidade e potência. Com até 10.000 puffs, esse modelo une conforto no uso diário, inovação tecnológica e sabores marcantes que agradam desde os iniciantes até os mais exigentes do universo do vaping.",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-descartavel-10000-puffs-nikbar-banana-ice.png",
        ],
        basePrice: 100,
        categoryId: kikbarCategory.id,
        discountPercentage: 26, // 26% discount
      },
      {
        name: "Pod Descartável - 10000 puffs | Nikbar - Blueberry Ice - 50mg/mL",
        slug: "pod-descartavel-10000-puffs-nikbar-blueberry-ice",
        description:
          "O pod descartável Nikbar N10000 foi desenvolvido para quem valoriza longas sessões de vaporização com praticidade e potência. Com até 10.000 puffs, esse modelo une conforto no uso diário, inovação tecnológica e sabores marcantes que agradam desde os iniciantes até os mais exigentes do universo do vaping.",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-descartavel-10000-puffs-nikbar-blueberry-ice.png",
        ],
        basePrice: 100,
        categoryId: kikbarCategory.id,
        discountPercentage: 26, // 26% discount
      },
      {
        name: "Pod Descartável - 10000 puffs | Nikbar - Cherry Bomb - 50mg/mL",
        slug: "pod-descartavel-10000-puffs-nikbar-cherry-bomb",
        description:
          "O pod descartável Nikbar N10000 foi desenvolvido para quem valoriza longas sessões de vaporização com praticidade e potência. Com até 10.000 puffs, esse modelo une conforto no uso diário, inovação tecnológica e sabores marcantes que agradam desde os iniciantes até os mais exigentes do universo do vaping.",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-descartavel-10000-puffs-nikbar-cherry-bomb.png",
        ],
        basePrice: 100,
        categoryId: kikbarCategory.id,
        discountPercentage: 26, // 26% discount
      },
      {
        name: "Pod Descartável - 10000 puffs | Nikbar - Cherry Watermelon Ice - 50mg/mL",
        slug: "pod-descartavel-10000-puffs-nikbar-cherry-watermelon-ice",
        description:
          "O pod descartável Nikbar N10000 foi desenvolvido para quem valoriza longas sessões de vaporização com praticidade e potência. Com até 10.000 puffs, esse modelo une conforto no uso diário, inovação tecnológica e sabores marcantes que agradam desde os iniciantes até os mais exigentes do universo do vaping.",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-descartavel-10000-puffs-nikbar-cherry-watermelon-ice.png",
        ],
        basePrice: 100,
        categoryId: kikbarCategory.id,
        discountPercentage: 26, // 26% discount
      },
      {
        name: "Pod Descartável - 10000 puffs | Nikbar - Clear - 50mg/mL",
        slug: "pod-descartavel-10000-puffs-nikbar-clear",
        description:
          "O pod descartável Nikbar N10000 foi desenvolvido para quem valoriza longas sessões de vaporização com praticidade e potência. Com até 10.000 puffs, esse modelo une conforto no uso diário, inovação tecnológica e sabores marcantes que agradam desde os iniciantes até os mais exigentes do universo do vaping.",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-descartavel-10000-puffs-nikbar-clear.png",
        ],
        basePrice: 100,
        categoryId: kikbarCategory.id,
        discountPercentage: 26, // 26% discount
      },
      {
        name: "Pod Descartável - 10000 puffs | Nikbar - Green Apple - 50mg/mL",
        slug: "pod-descartavel-10000-puffs-nikbar-green-apple",
        description:
          "O pod descartável Nikbar N10000 foi desenvolvido para quem valoriza longas sessões de vaporização com praticidade e potência. Com até 10.000 puffs, esse modelo une conforto no uso diário, inovação tecnológica e sabores marcantes que agradam desde os iniciantes até os mais exigentes do universo do vaping.",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-descartavel-10000-puffs-nikbar-green-apple.png",
        ],
        basePrice: 100,
        categoryId: kikbarCategory.id,
        discountPercentage: 26, // 26% discount
      },

      {
        name: "Pod Descartável - 10000 puffs | Nikbar - Juicy Peach - 50mg/mL",
        slug: "pod-descartavel-10000-puffs-nikbar-juicy-peach",
        description:
          "O pod descartável Nikbar N10000 foi desenvolvido para quem valoriza longas sessões de vaporização com praticidade e potência. Com até 10.000 puffs, esse modelo une conforto no uso diário, inovação tecnológica e sabores marcantes que agradam desde os iniciantes até os mais exigentes do universo do vaping.",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-descartavel-10000-puffs-nikbar-juicy-peach.png",
        ],
        basePrice: 100,
        categoryId: kikbarCategory.id,
        discountPercentage: 26, // 26% discount
      },

      {
        name: "Pod Descartável - 10000 puffs | Nikbar - Strawberry Ice - 50mg/mL",
        slug: "pod-descartavel-10000-puffs-nikbar-strawberry-ice",
        description:
          "O pod descartável Nikbar N10000 foi desenvolvido para quem valoriza longas sessões de vaporização com praticidade e potência. Com até 10.000 puffs, esse modelo une conforto no uso diário, inovação tecnológica e sabores marcantes que agradam desde os iniciantes até os mais exigentes do universo do vaping.",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-descartavel-10000-puffs-nikbar-strawberry-ice.png",
        ],
        basePrice: 100,
        categoryId: kikbarCategory.id,
        discountPercentage: 26, // 26% discount
      },

      {
        name: "Pod Descartável - 10000 puffs | Nikbar - Watermelon Ice - 50mg/mL",
        slug: "pod-descartavel-10000-puffs-nikbar-watermelon-ice",
        description:
          "O pod descartável Nikbar N10000 foi desenvolvido para quem valoriza longas sessões de vaporização com praticidade e potência. Com até 10.000 puffs, esse modelo une conforto no uso diário, inovação tecnológica e sabores marcantes que agradam desde os iniciantes até os mais exigentes do universo do vaping.",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-descartavel-10000-puffs-nikbar-watermelon-ice.png",
        ],
        basePrice: 100,
        categoryId: kikbarCategory.id,
        discountPercentage: 26, // 26% discount
      },
    ];

    await prisma.product.createMany({
      data: kikbar,
    });

    const podsystemCategory = await prisma.category.create({
      data: {
        name: "POD SYSTEM",
        slug: "pod-system",
        imageUrl:
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/uwell-pod-caliburn-ak3-catalago.png",
      },
    });

    const podsystem = [
      {
        name: "Pod System Eco Nano 2 | Vaporesso",
        slug: "vaporesso-pod-eco-2-nano",
        description:
          "O Pod System Eco Nano 2 da Vaporesso é a escolha ideal para quem deseja combinar praticidade, desempenho e estilo em um único dispositivo de vaping. Com um design moderno e compacto, o Eco Nano 2 é perfeito para ser levado a qualquer lugar, atendendo tanto vapers iniciantes quanto os mais experientes que procuram um aparelho portátil e eficiente. Equipado com uma bateria interna de longa duração e recursos intuitivos, este pod system proporciona uma experiência de vaping suave e satisfatória em qualquer momento e lugar.",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/vaporesso-pod-eco-2-nano.png",
        ],
        basePrice: 180,
        categoryId: podsystemCategory.id,
        discountPercentage: 17, // 17% discount
      },
      {
        name: "Pod System Xros 4 | Vaporesso",
        slug: "pod-xros-4-vaporesso",
        description:
          "Pod System Xros 4 da Vaporesso, uma obra-prima de design e funcionalidade. Este dispositivo inovador é perfeito para o vaper mais exigente que busca uma estética atraente e uma pegada ergonômica, ideal para um uso prolongado e confortável.",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-xros-4-vaporesso-1.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-xros-4-vaporesso-2.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-xros-4-vaporesso-3.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-xros-4-vaporesso-4.png",
        ],
        basePrice: 289,
        categoryId: podsystemCategory.id,
        discountPercentage: 14, // 10% discount
      },
      {
        name: "Pod System Xros 4 Mini | Vaporesso",
        slug: "pod-xros-4-mini-vaporesso",
        description:
          "Apresentando o elegante e eficiente Pod System Xros 4 Mini da Vaporesso, uma escolha excepcional para quem procura um vaping de alto desempenho em um pacote compacto. Este dispositivo foi cuidadosamente projetado para combinar facilidade de uso com eficácia extraordinária.",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-xros-4-mini-vaporesso-1.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-xros-4-mini-vaporesso-2.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-xros-4-mini-vaporesso-3.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-xros-4-mini-vaporesso-4.png",
        ],
        basePrice: 219,
        categoryId: podsystemCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Pod System Xros 3 Nano | Vaporesso - Black",
        slug: "vaporesso-pod-xros-3-nano",
        description:
          "O novo pod system da Vaporesso, Xros 3 Nano, chegou para mostrar muito estilo com seu cartucho MESH 0.6 Ohm, capaz de produzir nuvens intensas de sabor! Além disso, também vale ressaltar que ele é compatível com todos os cartuchos de reposição XROS, estes que são mais do que capazes de cobrir necessidade de sal de nicotina free base.",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/vaporesso-pod-xros-3-nano.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/vaporesso-pod-xros-3-nano-1.png",
        ],
        basePrice: 200,
        categoryId: podsystemCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Hyperx Cloud Stinger 2",
        slug: "vaporesso-pod-luxe-x2",
        description:
          "O Pod System Luxe X2 da Vaporesso representa um avanço significativo no mundo dos sistemas de pod, combinando potência impressionante com um design elegante e funcional. Este dispositivo foi desenvolvido para proporcionar uma experiência de vaping personalizada e de alta qualidade, ideal tanto para iniciantes quanto para vapers mais experientes que buscam desempenho superior em um formato compacto.",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/vaporesso-pod-luxe-x2.png",
        ],
        basePrice: 299,
        categoryId: podsystemCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Pod System Caliburn AK3 | Uwell - Black",
        slug: "uwell-pod-caliburn-ak3",
        description:
          "A Uwell chegou com tudo ao mercado vaping, apresentando de forma rápida e bem descritiva o seu mais novo pod system Caliburn Koko AK3. Sim, esse dispositivo é uma atualização do antigo Koko da marca e conta com diversas novidades que deixam esse pod system com um formato único!",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/uwell-pod-caliburn-ak3-1.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/uwell-pod-caliburn-ak3-2.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/uwell-pod-caliburn-ak3.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/uwell-pod-caliburn-ak3-4.png",
        ],
        basePrice: 160,
        categoryId: podsystemCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: podsystem,
    });

    const vapeCategory = await prisma.category.create({
      data: {
        name: "VAPE",
        slug: "vape",
        imageUrl:
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/vape-mod-aegis-touch-t200-geekvape-catalago.png",
      },
    });

    const vape = [
      {
        name: "Vape Drag 5 | Voopoo - Black",
        slug: "voopoo-vape-mod-drag-5",
        description:
          "O Voopoo Drag 5 redefine os padrões dos dispositivos de vaping com sua impressionante combinação de potência, design refinado e funcionalidades interativas. Como o mais recente lançamento da série Drag, este modelo é equipado com o tanque UFORCE-X (PnP X) e se destaca por ser o primeiro mod de alta potência da Voopoo capaz de alcançar até 177W, oferecendo nuvens densas e saborosas de vapor. Alimentado por duas baterias 18650 removíveis e com carregamento rápido de 5V/3A, o Drag 5 garante sessões intensas e contínuas de vaping sem interrupções.",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/voopoo-vape-mod-drag-5-1.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/voopoo-vape-mod-drag-5-2.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/voopoo-vape-mod-drag-5-3.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/voopoo-vape-mod-drag-5-4.png",
        ],
        basePrice: 590,
        categoryId: vapeCategory.id,
        discountPercentage: 17, // 17% discount
      },
      {
        name: "Vape Gen Max | Vaporesso - Arctic Silver",
        slug: "vaporesso-vape-mod-gen-max",
        description:
          "O Vaporesso Gen Max é um vape potente e versátil, criado para proporcionar uma experiência de vaporização de alto desempenho e longa duração. Com o avançado AXON Chip, o Gen Max oferece uma potência máxima de até 220W, garantindo uma vaporização intensa e satisfatória, seja para estilos de vaping DTL (Direct-to-Lung) ou MTL (Mouth-to-Lung). Alimentado por duas baterias 18650 (não inclusas), o Gen Max proporciona uma excelente autonomia, permitindo sessões de vaping prolongadas sem a necessidade de recarga frequente.",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/vaporesso-vape-mod-gen-max.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/vaporesso-vape-mod-gen-max-2.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/vaporesso-vape-mod-gen-max-3.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/vaporesso-vape-mod-gen-max-4.png",
        ],
        basePrice: 570,
        categoryId: vapeCategory.id,
        discountPercentage: 14, // 14% discount
      },
      {
        name: "Vape T200 - Aegis Touch | Geekvape - Azure Blue",
        slug: "vape-mod-aegis-touch-t200-geekvape",
        description:
          "O Geekvape T200, também reconhecido como Aegis Touch, representa um marco tecnológico entre os dispositivos de vaping, integrando um design estético avançado com funcionalidades de vanguarda para proporcionar uma experiência vaping superior. Este dispositivo destina-se a utilizadores que valorizam não apenas o desempenho, mas também a simplicidade operacional.",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/vape-mod-aegis-touch-t200-geekvape.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/vape-mod-aegis-touch-t200-geekvape-2.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/vape-mod-aegis-touch-t200-geekvape-3.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/vape-mod-aegis-touch-t200-geekvape-4.png",
        ],
        basePrice: 500,
        categoryId: vapeCategory.id,
        discountPercentage: 0, // 0% discount
      },
      {
        name: "Vape Mod Armour Max | Vaporesso - Black",
        slug: "vape-mod-armour-max-vaporesso",
        description:
          "O Vaporesso Armour Max se sobressai no mercado de vaping como um dispositivo excepcionalmente resistente e fiável, desenhado especificamente para atender às necessidades de vapers que valorizam a durabilidade em suas experiências de vapor. Com uma construção predominante em TPU (Poliuretano Termoplástico), este mod se beneficia de uma incrível resiliência contra desgastes físicos, bem como contra a ação de óleos, graxas e uma variedade de solventes, graças à sua natureza flexível e elástica. Embora não seja formalmente classificado como indestrutível, o design do Armour Max foi cuidadosamente pensado para suportar as exigências de um uso frequente e intenso, mantendo-se intacto e operacional.",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/vape-mod-armour-max-vaporesso.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/vape-mod-armour-max-vaporesso-2.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/vape-mod-armour-max-vaporesso-3.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/vape-mod-armour-max-vaporesso-4.png",
        ],
        basePrice: 519,
        categoryId: vapeCategory.id,
        discountPercentage: 0, // 0% discount
      },
      {
        name: "Vape Drag 3 177W c/ Atomizador TPP | Voopoo - Black Umber",
        slug: "vape-drag-3-voopoo",
        description:
          "O monstro de sucesso mais vendido da Voopoo chegou no Aldeia Vape! O Vape Drag 3 é a nova adição a lendária da linha Drag! Com uma potência que chega até 177W gerenciada pelo seu chipset GENE.FAN, o Vape Drag 3 torna toda a sessão mais leve, durável e suficiente. Além disso, ele dispõe de diversos modos diferentes para vaporização. Seu corpo em zinco traz uma vida útil muito mais confiável, evitando quebras, etc.",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/vape-drag-3-voopoo.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/vape-drag-3-voopoo-2.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/vape-drag-3-voopoo-2.png",
        ],
        basePrice: 395,
        categoryId: vapeCategory.id,
        discountPercentage: 0, // 0% discount
      },
      {
        name: "Vape Luxe 2 220W c/ Atomizador NRG-S | Vaporesso - Black",
        slug: "vape-luxe-2-vaporesso",
        description:
          "A tradicional Marca Vaporesso apresenta o Luxe 2 com Atomizador NRG-S! Estamos falando de um Atomizador SUB-OHM (8ml) inovador que utiliza as Bobinas GT Mesh para produzir aquele sabor marcante e incomparável. Além disso, ele conta com um Layout de Bateria Dupla 18650 (Não Inclusas - Compre Separadamente Aqui) e diversos modos de operação. Equipado com o Chipset AXON, o Luxe 2, é capaz de atingir 220W. Adquira já o Seu e Desfrute de Todo esse Poder! A Aldeia Vape Garante seu Conforto!",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/vape-luxe-2-vaporesso.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/vape-luxe-2-vaporesso-2.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/vape-luxe-2-vaporesso-3.png",
        ],
        basePrice: 409,
        categoryId: vapeCategory.id,
        discountPercentage: 0, // 0% discount
      },
    ];

    await prisma.product.createMany({
      data: vape,
    });

    const hallulabzCategory = await prisma.category.create({
      data: {
        name: "HALLU LABZ",
        slug: "hallulabz",
        imageUrl:
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/ice-cream-cake-hallu-5ml-kit-limpeza-catalago.png",
      },
    });

    const hallulabz = [
      {
        name: "Pen Pod descartável Hallu 2ML / Kit limpesa",
        slug: "pen-descartavel-hallu-2-ml-kit-limpeza",
        description:
          "Duração média de 2 meses, somente 3 a 4 tragos no Refil Hallu Já é suficiente para sensação maravilhosa acontecer",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pen-descart%C3%A1vel-hallu-2-ml-kit-limpeza.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pen-descart%C3%A1vel-hallu-2-ml-kit-limpeza-2.png",
        ],
        basePrice: 350,
        categoryId: hallulabzCategory.id,
        discountPercentage: 37, // 37% discount
      },
      {
        name: "Pod Hallu 5ML/KIT LIMPEZA",
        slug: "ice-cream-cake-hallu-5ml-kit-limpeza",
        description:
          "O Hallu Brand | King entrega um dispositivo único pra extratos, seu kit entrega o reservatório para extratos, localizado dentro de sua câmara. Seu material de composição é em alumínio anodizado e aço inoxidável, bateria interna de 2200mAh e confortável na mão Sua câmara de aquecimento é de cerâmica com fácil utilização, no qual basta puxar seu bocal. Sua tensão máxima chega em 4,2V com uma faixa de temperatura de 180/220°C com o resfriamento (standby) de 5 minutos. O tempo médio de carregamento varia de 3 a 4 horas no carregador USB micro-B. Se você procura um Vaporizador de Ervas pratico, eficiente e otimizado, Hallu Brand é perfeito para você!",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/ice-cream-cake-hallu-5ml-kit-limpeza.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/ice-cream-cake-hallu-5ml-kit-limpeza-2.png",
        ],
        basePrice: 400,
        categoryId: hallulabzCategory.id,
        discountPercentage: 12, // 12% discount
      },
      {
        name: "Pod Descartável HALLU MONKEY 2 ML",
        slug: "pod-descartavel-hallu-monkey-2-ml",
        description:
          "Puchou Chapou, Duração de 30 dias, usando apenas 3 tragos, já e suficiente pra chapar legal.",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-descart%C3%A1vel-hallu-monkey-2-ml.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-descart%C3%A1vel-hallu-monkey-2-ml-2.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-descart%C3%A1vel-hallu-monkey-2-ml-3.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/pod-descart%C3%A1vel-hallu-monkey-2-ml-4.png",
        ],
        basePrice: 320,
        categoryId: hallulabzCategory.id,
        discountPercentage: 12, // 12% discount
      },
      {
        name: "REFIL HALLU 1 ML DELTA FLY",
        slug: "refil-hallu-1-ml-delta-fly",
        description:
          "Duração média de 15 a 30 dias Somente 6 a 8 tragos por dias, mais já e o suficiente pra chapar muito",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/refil-hallu-1-ml-delta-fly.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/refil-hallu-1-ml-delta-fly-2.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/refil-hallu-1-ml-delta-fly-3.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/refil-hallu-1-ml-delta-fly-4.png",
        ],
        basePrice: 300,
        categoryId: hallulabzCategory.id,
        discountPercentage: 14, // 10% discount
      },
      {
        name: "Pen HALLU / indica e sativa | 3ml mais kit limpeza",
        slug: "refil-hallu-indica-e-sativa-3ml-mais-kit-limpeza",
        description:
          "Duração média de 3 meses, somente 3 a 4 tragos no Refil Hallu Já é suficiente para sensação maravilhosa acontecer",
        imageUrls: [
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/refil-hallu-indica-e-sativa-3ml-mais-kit-limpeza.png",
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/refil-hallu-indica-e-sativa-3ml-mais-kit-limpeza-2.png",
        ],
        basePrice: 350,
        categoryId: hallulabzCategory.id,
        discountPercentage: 16, // 16% discount
      },
    ];

    await prisma.product.createMany({
      data: hallulabz,
    });

    const roveCategory = await prisma.category.create({
      data: {
        name: "ROVE",
        slug: "rove",
        imageUrl:
          "https://vapbrasil.s3.sa-east-1.amazonaws.com/rove-catalago.png",
      },
    });

    const rove = [
      {
        name: "SKITTLEZ DE MELANCIA • INDICA",
        slug: "skittlez-de-melancia-indica",
        description:
          "rove e sinta um arco-íris de efeitos com esta variedade frutada que é deliciosa de dar água na boca. Tons terrosos e herbáceos e frutas cítricas brilhantes encontram-se com um tom azedo que se torna levemente picante nesta variedade deliciosa. Apesar de seu nariz brilhante e complexo, os efeitos do Watermelon Zkittlez são mais adequados para uma noite fria descansando no sofá ou pegando alguns zzz's.",
        imageUrls: [
          "https://static.wixstatic.com/media/fc07fa_ec99875d0b0b4765ba321f7b39910817~mv2.webp",
        ],
        basePrice: 350,
        categoryId: roveCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "MAUI WAUI • SATIVA",
        slug: "maui-waui-sativa",
        description:
          "Faça uma viagem a um paraíso tropical com esta variedade vibrante. Criado originalmente no Havaí, Maui Waui é uma ilha tranquila de felicidade. Notas de abacaxi e banana acrescentam leveza frutada a esse perfil.",
        imageUrls: [
          "https://static.wixstatic.com/media/fc07fa_a5d1105a8b0345c9b507ca88cbee728a~mv2.webp",
        ],
        basePrice: 350,
        categoryId: roveCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "SKYWALKER E • INDICA",
        slug: "skywalker-e-indica",
        description:
          "Vá para uma galáxia muito, muito distante com esta variedade inebriante. Um cruzamento de Skywalker e OG Kush, os poderes de alívio do estresse desta variedade farão você sentir que a força está com você. Os tons terrosos desta variedade são equilibrados com notas tropicais doces e notas de mirtilo.",
        imageUrls: [
          "https://static.wixstatic.com/media/fc07fa_7bd91e2f14dd4e43aa1c3292192c30e9~mv2.webp",
        ],
        basePrice: 350,
        categoryId: roveCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "PONCHE DE FRUTAS • SATIVA",
        slug: "ponche-de-frutas-sativa",
        description:
          "Este é um soco. Fruit Punch é feito através do cruzamento de variedades Skunk, Haze e Northern Lights e é nomeado por seu toque rápido de notas doces, frutadas e tropicais. Um golpe traz uma grande quantidade de energia, despertando a mente enquanto relaxa o corpo. Notas frutadas e doces de frutos silvestres fazem do Fruit Punch uma delícia super saborosa.",
        imageUrls: [
          "https://static.wixstatic.com/media/fc07fa_4671a39acd2548d9a87e0b59e7ad5cd9~mv2.webp",
        ],
        basePrice: 350,
        categoryId: roveCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "EXPRESSO DE ABACAXI • HÍBRIDO",
        slug: "expresso-de-abacaxi-hibrido",
        description:
          "Prepare-se para uma viagem inebriante pelo Pacífico. Pineapple Express fornece uma explosão de energia, promove a consciência concentrada e aumenta aquela sensação de criatividade essencialmente costeira. Tem um melhor amigo (ou talvez traficante) com quem deseja compartilhar? Este híbrido é uma ótima atividade em grupo com a quantidade perfeita de THC para fazer você se sentir tonto, alerta e pronto para uma aventura. Um sabor levemente tropical de abacaxi confere a esta variedade sua doçura beijada pelo sol. ",
        imageUrls: [
          "https://static.wixstatic.com/media/fc07fa_73ea3f55f8c04ba68b5340f6cd6dc892~mv2.webp",
        ],
        basePrice: 350,
        categoryId: roveCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "GELATO DE CEREJA • HÍBRIDO",
        slug: "gelato-de-cereja-hibrido",
        description:
          "Assim como o sorvete, o Cherry Gelato é melhor apreciado em um dia quente de verão ou como sobremesa de final de dia. Este cruzamento de variedades Black Cherry Funk e Açaí irá acalmá-lo em vez de animá-lo.",
        imageUrls: [
          "https://static.wixstatic.com/media/fc07fa_4f222cb47f994fc58bcc575d059169e1~mv2.webp",
        ],
        basePrice: 350,
        categoryId: roveCategory.id,
        discountPercentage: 15, // 10% discount
      },

      {
        name: "SONHO AZUL • HÍBRIDO",
        slug: "sonho-azul-hibrido",
        description:
          "Com um toque tentador de tons de frutas vermelhas, BlueDream é como uma aventura repleta de sabores para o seu paladar. Mas isso não é tudo – é também o seu melhor bilhete para um passeio sem estresse. Diga olá à felicidade e dê adeus ao estresse, enquanto saboreia um passeio selvagem de sabores vibrantes.",
        imageUrls: [
          "https://static.wixstatic.com/media/fc07fa_cab5efec76f94143acadd8ecd54c0617~mv2.webp",
        ],
        basePrice: 350,
        categoryId: roveCategory.id,
        discountPercentage: 15, // 10% discount
      },

      {
        name: "APPLE JACK • SATIVA",
        slug: "apple-jack-sativa",
        description:
          "Apple Jack é uma variedade do tipo pau para toda obra. Proporcionando uma mistura de efeitos de cabeça e corpo, com um efeito físico relaxante equilibrado por uma sensação cerebral eufórica, esta variedade com sabor de maçã azeda é ótima para quem quer ser criativo e aliviar o estresse. ",
        imageUrls: [
          "https://static.wixstatic.com/media/fc07fa_5cb6d091d98843a0846d580d69f53f2b~mv2.webp",
        ],
        basePrice: 350,
        categoryId: roveCategory.id,
        discountPercentage: 15, // 10% discount
      },

      {
        name: "SOUR JACK • SATIVA",
        slug: "sour-jack-sativa",
        description:
          "Criado a partir do cruzamento de Sour Apple com Jack Herer, Sour Jack produz um efeito um tanto energizante, além de relaxamento e felicidade. Com tons subjacentes de maçãs doces, esta sativa dominante fará suas papilas gustativas formigarem e é potente até o âmago.",
        imageUrls: [
          "https://static.wixstatic.com/media/fc07fa_ee10909127b643779c45a85e8f13b745~mv2.webp",
        ],
        basePrice: 310,
        categoryId: roveCategory.id,
        discountPercentage: 15, // 10% discount
      },

      {
        name: "SKYWALKER • INDICA",
        slug: "skywalker-indica",
        description:
          "Skywalker, um cruzamento dominante Indica entre Blueberry e Mazar, é ideal para quem sofre de dores leves, insônia, estresse ou ansiedade. Os usuários desta variedade potente são tratados com uma experiência fora deste mundo, pontuada por sensações profundas de euforia e euforia. Espalhe a terra sob seus pés e deixe as forças guiá-lo.",
        imageUrls: [
          "https://static.wixstatic.com/media/fc07fa_07e9f3de7dd64ce6bd740e20f2ad5aa1~mv2.webp",
        ],
        basePrice: 310,
        categoryId: roveCategory.id,
        discountPercentage: 15, // 10% discount
      },

      {
        name: "WAUI • SATIVA",
        slug: "skywalker-indica",
        description:
          "Clássico e simples, com seus sabores tropicais e qualidades para aliviar o estresse, Waui é férias a cada tragada. Deixe o doce abacaxi e a euforia energética desta variedade nativa havaiana levar seu espírito criativo a lugares lindos.",
        imageUrls: [
          "https://static.wixstatic.com/media/fc07fa_8566520146a94112a77c51b0e9d62c2d~mv2.webp",
        ],
        basePrice: 310,
        categoryId: roveCategory.id,
        discountPercentage: 15, // 10% discount
      },

      {
        name: "PONCO • SATIVA",
        slug: "ponco-sativa",
        description:
          "A euforia se instalará no resto do seu corpo enquanto você saboreia sua doce mistura de frutas. Rove está entusiasmado para oferecer esta sativa agressiva - boa para controlar o estresse, pequenas dores no corpo e náuseas. Deixe o ponche ser a faísca que acende o fogo do seu dia, que leva a festa para as pessoas.",
        imageUrls: [
          "https://static.wixstatic.com/media/fc07fa_fc2997ffe5384c35a8ad2efcae8bc278~mv2.webp",
        ],
        basePrice: 310,
        categoryId: roveCategory.id,
        discountPercentage: 15, // 10% discount
      },

      {
        name: "SHERBET • HÍBRIDO",
        slug: "sherbet-hibrido",
        description:
          "Um híbrido com tendência indica, Sherbet oferece uma vibração poderosa e inebriante. O aroma cremoso é acentuado com notas cítricas de skunk, frutas vermelhas e uma doçura semelhante à de sua variedade original, Girl Scout Cookies. Estresse, tensão e mau humor desaparecem com a mentalidade despreocupada e o relaxamento físico que acompanham este rico concentrado.",
        imageUrls: [
          "https://static.wixstatic.com/media/fc07fa_ab870aa156d644e0afe642c144109a5f~mv2.webp",
        ],
        basePrice: 310,
        categoryId: roveCategory.id,
        discountPercentage: 15, // 10% discount
      },

      {
        name: "KUSH • INDICA",
        slug: "kush-indica",
        description:
          "Uma mistura dominante indica, nosso Kush tem notas de degustação frutadas com um final suave e suave. O efeito geral é calmante e calmante para ajudar a combater o estresse, espasmos musculares, náuseas e dores.",
        imageUrls: [
          "https://static.wixstatic.com/media/fc07fa_4be40420916b4d41ad24cc0190dc10a0~mv2.webp",
        ],
        basePrice: 310,
        categoryId: roveCategory.id,
        discountPercentage: 15, // 10% discount
      },

      {
        name: "KUSH DE MIRTILO • INDICA",
        slug: "kush-de-mirtilo-indica",
        description:
          "Esta poderosa variedade indica proporciona uma sensação calmante quase imediata e um relaxamento profundo com tons doces de frutos silvestres, ajudando você a enfrentar o dia ou a tirar o tão necessário sono.",
        imageUrls: [
          "https://static.wixstatic.com/media/fc07fa_411f11960ea749dca5e89ed00b28fda8~mv2.webp",
        ],
        basePrice: 320,
        categoryId: roveCategory.id,
        discountPercentage: 16, // 10% discount
      },

      {
        name: "CANETA DESCARTÁVEL WAUI",
        slug: "caneta-descartavel-waui",
        description:
          "A mistura dominante da Indica na Caneta Descartável Waui da ROVE é potente, de ação rápida e projetada para proporcionar uma experiência de vaping de cannabis noturna. Este óleo tem uma cor âmbar dourado claro e o sabor é uma deliciosa mistura de sabores clássicos de pinheiro, com toques de flores e um pouco de doçura no final. O nível médio de THC de 82% se inclina totalmente para o seu lado Indica, com uma alta que é leve para a mente e o espírito, muito mais pronunciada à medida que se instala em seu corpo. A elevação suave é feliz e calmante, o que abre o caminho para um corpo inteiro pesado e entorpecente, suave, que o terá trancado em seu sofá e muito tranquilo. Mime-se com alguns lanches antes de inevitavelmente entrar em um sono tranquilo e restaurador. Este vape é ideal para aliviar sintomas de estresse, ansiedade, depressão, dor, falta de apetite, fadiga e náusea.",
        imageUrls: [
          "https://static.wixstatic.com/media/c04a68_b460366a40aa427a98b7c0882e8e8929~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c04a68_b460366a40aa427a98b7c0882e8e8929~mv2.png",
        ],
        basePrice: 310,
        categoryId: roveCategory.id,
        discountPercentage: 17, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: rove,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
