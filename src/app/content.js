import { buildWhatsAppUrl } from './contact.js';

const whatsapp = {
  href: 'https://wa.me/5512991332258',
  defaultMessage: 'Olá! Quero agendar uma conversa com a Arcane.',
};

export const siteContent = {
  brand: 'ARCANE',
  brandAssets: {
    logo: '/assets/arcane-logo-horizontal.png',
    heroVideo: '/assets/video-fundo.mp4',
    whatsappLogo: '/assets/whatsapp-logo-green.svg',
  },
  descriptor: 'Estratégia e tecnologia para transformar ideias em negócios digitais que funcionam.',
  whatsapp,
  primaryCta: { label: 'Agendar uma conversa', href: buildWhatsAppUrl(whatsapp.defaultMessage) },
  secondaryCta: { label: 'Conhecer nossos projetos', href: '/projects' },
  navigation: [
    { label: 'Início', href: '/' },
    { label: 'Serviços', href: '/services' },
    { label: 'Cases', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Sobre', href: '/about' },
    { label: 'Contato', href: '/contact' },
  ],
  contact: {
    email: 'comercial@arcanetecnologia.com.br',
    phone: '(12) 99133-2258',
    phoneHref: whatsapp.href,
    location: 'São Paulo, Brasil',
  },
  hero: {
    title: 'Estratégia e tecnologia para transformar ideias em negócios digitais que funcionam.',
    text: 'Criamos experiências digitais, desenvolvemos produtos e conectamos processos para empresas que querem vender mais, operar melhor e construir tecnologia própria.',
    proof: ['Atraia', 'Construa', 'Escale'],
  },
  services: [
    {
      number: '01',
      slug: 'arcane-digital',
      detailHref: '/services/arcane-digital',
      title: 'Arcane Digital',
      subtitle: 'Landing Pages, Campanhas, Conteúdo e Redes Sociais',
      text: 'Criamos a presença digital que transforma atenção em oportunidade. Landing pages de alta conversão, campanhas, identidade para lançamentos, materiais comerciais, media kits e conteúdo para redes sociais — tudo conectado à estratégia de posicionamento e aquisição da marca.',
      cta: 'Quero fortalecer minha presença digital',
      href: buildWhatsAppUrl('Olá! Quero fortalecer minha presença digital com a Arcane.'),
      detail: {
        lead: 'Sua marca não precisa de mais conteúdo solto. Precisa de uma presença que faça a pessoa certa entender, confiar e agir.',
        intro: 'A Arcane Digital transforma posicionamento em experiências digitais que atraem atenção qualificada e conduzem cada visita ao próximo passo comercial.',
        cta: { label: 'Quero fortalecer minha presença digital', href: buildWhatsAppUrl('Olá! Quero fortalecer minha presença digital com a Arcane.') },
        sections: [
          {
            heading: 'Atenção sem direção não vira oportunidade.',
            paragraphs: [
              'Uma empresa pode publicar todos os dias e ainda assim deixar o mercado sem resposta. Quando a mensagem muda a cada canal, a pessoa precisa fazer esforço demais para entender o valor — e a oportunidade se perde antes da conversa.',
              'A Arcane Digital organiza a presença da marca para que campanha, página, conteúdo e material comercial trabalhem na mesma direção: atrair o público certo, explicar a proposta com clareza e facilitar a decisão.',
            ],
          },
          {
            heading: 'O que a Arcane Digital coloca de pé.',
            points: [
              { title: 'Landing pages', text: 'Páginas pensadas para campanhas, lançamentos e ofertas específicas, com mensagem clara e caminho de conversão.' },
              { title: 'Campanhas e lançamentos', text: 'Conceito, narrativa e peças conectadas para transformar uma iniciativa em uma presença que o mercado reconhece.' },
              { title: 'Conteúdo e redes sociais', text: 'Pautas e formatos que constroem repertório, confiança e continuidade — sem publicar por publicar.' },
              { title: 'Materiais comerciais', text: 'Apresentações, media kits e ativos de venda que ajudam o time a explicar, provar e avançar.' },
            ],
          },
          {
            heading: 'Cada peça precisa trabalhar para o mesmo objetivo.',
            paragraphs: [
              'Uma boa página não compensa uma promessa confusa. Uma campanha forte não sustenta uma experiência que não responde às dúvidas do público. Por isso, começamos pelo contexto: quem precisa ser convencido, o que essa pessoa precisa entender e qual ação faz sentido agora.',
              'O resultado é uma presença mais coerente, mais fácil de reconhecer e mais preparada para transformar interesse em oportunidade comercial.',
            ],
            highlight: 'A presença digital certa não faz barulho por você. Ela torna mais fácil para o cliente certo escolher conversar com você.',
          },
          {
            heading: 'O que muda na prática.',
            points: [
              { title: 'Mensagem mais clara', text: 'O valor da empresa aparece antes da lista de serviços e chega ao público com menos ruído.' },
              { title: 'Mais confiança', text: 'Conteúdo, identidade e prova constroem uma percepção consistente em todos os pontos de contato.' },
              { title: 'Mais conversas qualificadas', text: 'O próximo passo fica evidente para quem já tem contexto e intenção de avançar.' },
            ],
          },
        ],
      },
    },
    {
      number: '02',
      slug: 'arcane-labs',
      detailHref: '/services/arcane-labs',
      title: 'Arcane Labs',
      subtitle: 'Sistemas, Aplicativos e Produtos Digitais',
      text: 'Transformamos ideias e operações em produtos digitais próprios. Desenvolvemos sistemas web, plataformas SaaS, aplicativos e soluções sob medida com arquitetura escalável, experiência bem desenhada e tecnologia preparada para acompanhar o crescimento do negócio.',
      cta: 'Quero desenvolver um produto',
      href: buildWhatsAppUrl('Olá! Quero desenvolver um produto digital com a Arcane.'),
      detail: {
        lead: 'Uma ideia ganha valor quando vira uma experiência que alguém usa, entende e escolhe continuar usando.',
        intro: 'A Arcane Labs transforma necessidades de negócio em sistemas, aplicativos e produtos digitais próprios — da primeira hipótese à base tecnológica que sustenta a evolução.',
        cta: { label: 'Quero desenvolver um produto', href: buildWhatsAppUrl('Olá! Quero desenvolver um produto digital com a Arcane.') },
        sections: [
          {
            heading: 'Produto próprio começa pelo problema certo.',
            paragraphs: [
              'Nem toda necessidade pede um novo software. Mas quando uma operação depende de improvisos, uma oportunidade se repete ou uma experiência genérica limita o crescimento, criar um produto próprio pode devolver autonomia e abrir uma nova vantagem competitiva.',
              'Antes de escrever código, entendemos quem usa, qual decisão precisa ser facilitada e que resultado fará o produto valer a pena. Isso reduz o risco de construir uma solução sofisticada para um problema que ainda não foi bem definido.',
            ],
          },
          {
            heading: 'Do contexto à primeira versão útil.',
            points: [
              { title: 'Descoberta', text: 'Mapeamos objetivos, usuários, regras e restrições para transformar uma ideia ampla em uma oportunidade concreta.' },
              { title: 'Experiência', text: 'Desenhamos fluxos e interfaces que tornam a tarefa principal simples, clara e possível de validar.' },
              { title: 'Construção', text: 'Desenvolvemos a primeira versão com foco no aprendizado e na capacidade de entregar valor real.' },
              { title: 'Evolução', text: 'Usamos comportamento, feedback e métricas para decidir o que merece ser aprofundado em seguida.' },
            ],
          },
          {
            heading: 'Tecnologia sob medida, sem complexidade prematura.',
            paragraphs: [
              'Arquitetura escalável não significa começar com excesso de camadas. Significa tomar decisões conscientes para que o produto possa crescer sem transformar cada mudança em um recomeço.',
              'A Arcane combina engenharia, design e contexto de negócio para entregar uma base proporcional ao momento atual, mas preparada para as próximas perguntas que o mercado vai fazer.',
            ],
            highlight: 'O melhor produto inicial não é o que faz tudo. É o que resolve algo importante e ensina qual é a próxima coisa certa a construir.',
          },
          {
            heading: 'O que você ganha ao construir com a Arcane Labs.',
            points: [
              { title: 'Autonomia', text: 'Uma solução desenhada para a realidade do negócio, sem depender das limitações de uma ferramenta genérica.' },
              { title: 'Clareza', text: 'Decisões de produto e tecnologia conectadas a usuários, objetivos e evidências.' },
              { title: 'Base para crescer', text: 'Um produto preparado para evoluir com segurança conforme o uso e a oportunidade aumentam.' },
            ],
          },
        ],
      },
    },
    {
      number: '03',
      slug: 'arcane-growth',
      detailHref: '/services/arcane-growth',
      title: 'Arcane Growth',
      subtitle: 'IA, Automações e Integrações',
      text: 'Conectamos ferramentas, dados e inteligência para eliminar trabalho manual e acelerar a operação. Automatizamos processos, integramos CRM, WhatsApp, APIs e sistemas internos e aplicamos IA onde ela realmente gera ganho de produtividade, velocidade e conversão.',
      cta: 'Quero automatizar minha operação',
      href: buildWhatsAppUrl('Olá! Quero automatizar minha operação com a Arcane.'),
      detail: {
        lead: 'Automação boa devolve tempo para o negócio — não apenas porque faz tarefas mais rápido, mas porque devolve contexto para quem precisa decidir.',
        intro: 'A Arcane Growth conecta ferramentas, dados e inteligência para reduzir retrabalho, acelerar respostas e criar uma operação capaz de crescer com mais consistência.',
        cta: { label: 'Quero automatizar minha operação', href: buildWhatsAppUrl('Olá! Quero automatizar minha operação com a Arcane.') },
        sections: [
          {
            heading: 'Mais ferramentas não significam mais crescimento.',
            paragraphs: [
              'Quando CRM, WhatsApp, planilhas e sistemas internos não conversam, o time vira a integração. As pessoas copiam dados, conferem informações, lembram prazos e corrigem falhas que poderiam ser evitadas no fluxo.',
              'A Arcane Growth olha para a operação inteira: onde uma demanda nasce, quem precisa receber contexto, quais decisões se repetem e qual trabalho manual está consumindo capacidade que deveria estar sendo usada para vender, atender e melhorar o negócio.',
            ],
          },
          {
            heading: 'O que conectamos e automatizamos.',
            points: [
              { title: 'Processos comerciais', text: 'Captura, distribuição e acompanhamento de leads com menos espera e mais visibilidade para o time.' },
              { title: 'CRM e WhatsApp', text: 'Mensagens, registros e atualizações conectados para reduzir perda de contexto entre atendimento e venda.' },
              { title: 'APIs e sistemas internos', text: 'Dados circulando entre ferramentas para eliminar digitação repetida e criar uma fonte de verdade mais confiável.' },
              { title: 'IA aplicada', text: 'Classificação, resumo, recomendação e apoio à decisão onde existe contexto suficiente para gerar ganho real.' },
            ],
          },
          {
            heading: 'Automatizar é redesenhar o caminho.',
            paragraphs: [
              'Uma automação bem feita não esconde o processo: ela torna o processo mais visível. Mapeamos entradas, regras, exceções e responsáveis para que a tecnologia cuide do que é repetitivo e o time saiba exatamente quando precisa intervir.',
              'Assim, a empresa ganha velocidade sem perder controle. O objetivo não é substituir o olhar humano, e sim liberar esse olhar para problemas que exigem julgamento, relacionamento e decisão.',
            ],
            highlight: 'A escala saudável acontece quando o próximo cliente não exige o mesmo esforço manual do anterior.',
          },
          {
            heading: 'O resultado aparece na operação.',
            points: [
              { title: 'Menos retrabalho', text: 'Informações entram uma vez e chegam ao lugar certo sem depender de cópia e conferência manual.' },
              { title: 'Mais previsibilidade', text: 'O time enxerga o andamento, os responsáveis e os pontos de falha antes que eles virem urgência.' },
              { title: 'Mais capacidade', text: 'A operação absorve mais demanda sem crescer na mesma proporção em tarefas administrativas.' },
            ],
          },
        ],
      },
    },
  ],
  contactPage: {
    title: 'Agende uma conversa com a Arcane',
    text: 'Conte brevemente o que você precisa. Nossa equipe analisa o contexto antes da reunião para que a conversa já comece de forma objetiva.',
  },
  projects: [
    {
      code: 'ARC / 01',
      title: 'Operação em escala',
      text: 'Uma camada de automação para transformar rotinas distribuídas em um fluxo operacional rastreável.',
      result: 'Menos fricção · Mais previsibilidade',
      tone: 'blue',
    },
    {
      code: 'ARC / 02',
      title: 'Dados que orientam',
      text: 'Integração entre sistemas críticos para dar contexto às decisões e reduzir dependências manuais.',
      result: 'Clareza operacional · Performance',
      tone: 'paper',
    },
    {
      code: 'ARC / 03',
      title: 'Produto proprietário',
      text: 'Uma base tecnológica desenhada para o negócio, com arquitetura própria e evolução contínua.',
      result: 'Autonomia · Escalabilidade',
      tone: 'dark',
    },
  ],
  articles: [
    {
      number: '01',
      slug: 'a-atencao-certa-comeca-antes-do-clique',
      href: '/blog/a-atencao-certa-comeca-antes-do-clique',
      category: 'Digital',
      title: 'A atenção certa começa antes do clique.',
      text: 'Uma presença digital consistente conecta posicionamento, conteúdo e conversão para transformar interesse em oportunidade.',
      readTime: '6 min de leitura',
      intro: 'Uma presença digital consistente não serve apenas para aparecer. Ela prepara a pessoa certa para entender seu valor, confiar na sua marca e dar o próximo passo.',
      cta: { label: 'Quero fortalecer minha presença digital', href: buildWhatsAppUrl('Olá! Quero fortalecer minha presença digital com a Arcane.') },
      sections: [
        {
          heading: 'O clique não é o começo da decisão.',
          paragraphs: [
            'Quando alguém chega a uma landing page, perfil ou campanha, a decisão já começou antes. A pessoa recebeu uma indicação, viu uma mensagem, reconheceu um problema ou simplesmente percebeu que existe uma possibilidade melhor.',
            'O papel da presença digital é organizar esse momento. Em poucos segundos, ela precisa responder três perguntas: o que esta marca faz, por que isso importa para mim e qual é o próximo passo mais natural?',
          ],
        },
        {
          heading: 'Uma presença forte conecta três camadas.',
          points: [
            { title: 'Posicionamento', text: 'A marca deixa claro para quem existe, qual problema resolve e por que merece atenção.' },
            { title: 'Experiência', text: 'A pessoa encontra uma jornada simples, coerente e adequada ao estágio de decisão em que está.' },
            { title: 'Conversão', text: 'Cada página, mensagem e chamada orienta para uma ação objetiva, sem forçar uma decisão antes da hora.' },
          ],
        },
        {
          heading: 'Conteúdo não é volume. É continuidade.',
          paragraphs: [
            'Publicar mais não corrige uma proposta confusa. Campanhas, redes sociais, materiais comerciais e páginas precisam repetir a mesma ideia central em formatos diferentes — com linguagem adequada a cada canal, mas sem parecer que são marcas diferentes.',
            'É essa continuidade que transforma reconhecimento em confiança. E confiança é o que reduz a distância entre encontrar uma empresa e iniciar uma conversa.',
          ],
          highlight: 'A atenção certa não é a maior audiência possível. É a atenção de quem tem contexto, necessidade e espaço para avançar.',
        },
        {
          heading: 'Como transformar atenção em oportunidade.',
          points: [
            { title: 'Comece pela promessa', text: 'Diga o resultado que a pessoa pode alcançar antes de listar serviços, ferramentas ou formatos.' },
            { title: 'Mostre o caminho', text: 'Use conteúdo, prova e exemplos para tornar a escolha mais segura e reduzir dúvidas.' },
            { title: 'Facilite o próximo passo', text: 'Ofereça uma conversa, diagnóstico ou ação compatível com o nível de interesse — sem criar fricção desnecessária.' },
          ],
        },
      ],
      sources: [
        { label: 'Google Ads — experiência da página de destino', href: 'https://support.google.com/google-ads/answer/14086?hl=pt-BR' },
        { label: 'Google Search Central — conteúdo útil e people-first', href: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
      ],
    },
    {
      number: '02',
      slug: 'quando-uma-ideia-pede-um-produto-proprio',
      href: '/blog/quando-uma-ideia-pede-um-produto-proprio',
      category: 'Labs',
      title: 'Quando uma ideia pede um produto próprio.',
      text: 'O caminho entre uma boa ideia e um produto que funciona passa por contexto, experiência bem desenhada e tecnologia preparada para crescer.',
      readTime: '7 min de leitura',
      intro: 'Um produto digital próprio nasce quando uma necessidade recorrente deixa de caber em improvisos, planilhas ou ferramentas genéricas — e passa a merecer uma experiência desenhada para o negócio.',
      cta: { label: 'Quero desenvolver um produto', href: buildWhatsAppUrl('Olá! Quero desenvolver um produto digital com a Arcane.') },
      sections: [
        {
          heading: 'Produto próprio não começa pela tecnologia.',
          paragraphs: [
            'A primeira pergunta não é qual stack usar, qual tela construir ou quantas funcionalidades entram na primeira versão. É: qual problema importante estamos tentando resolver, para quem e como saberemos que a solução funcionou?',
            'Essa mudança de ponto de partida evita que a empresa transforme uma hipótese em um projeto caro antes de entender se existe valor real para o usuário e para o negócio.',
          ],
        },
        {
          heading: 'A ideia precisa ganhar contorno.',
          points: [
            { title: 'Problema', text: 'Qual situação recorrente gera custo, perda de tempo, fricção ou oportunidade desperdiçada?' },
            { title: 'Público', text: 'Quem vive esse problema com frequência suficiente para mudar de comportamento?' },
            { title: 'Primeira entrega', text: 'Qual é a menor experiência capaz de gerar aprendizado e valor, sem tentar resolver tudo de uma vez?' },
          ],
        },
        {
          heading: 'Validação custa menos que retrabalho.',
          paragraphs: [
            'Protótipos, fluxos navegáveis, entrevistas e testes com pessoas reais ajudam a revelar o que a equipe não consegue descobrir apenas em reuniões internas. Eles tornam a conversa concreta antes que cada decisão vire código.',
            'Validar não significa buscar aprovação para uma solução pronta. Significa testar se o problema é relevante, se a experiência é compreensível e se a proposta tem força suficiente para ser escolhida.',
          ],
          highlight: 'A primeira versão não precisa provar que tudo é possível. Ela precisa provar qual é o próximo passo certo.',
        },
        {
          heading: 'Uma base preparada para aprender.',
          points: [
            { title: 'Experiência clara', text: 'O produto orienta o usuário para realizar uma tarefa importante com o mínimo de esforço.' },
            { title: 'Arquitetura proporcional', text: 'A tecnologia sustenta a primeira fase sem antecipar complexidade que ainda não foi comprovada.' },
            { title: 'Evolução contínua', text: 'Métricas, feedback e comportamento real orientam as próximas entregas com mais segurança.' },
          ],
        },
      ],
      sources: [
        { label: 'Silicon Valley Product Group — How to Write a Good PRD', href: 'https://svpg.com/assets/Files/goodprd.pdf' },
      ],
    },
    {
      number: '03',
      slug: 'automacao-boa-devolve-tempo-para-o-negocio',
      href: '/blog/automacao-boa-devolve-tempo-para-o-negocio',
      category: 'Growth',
      title: 'Automação boa devolve tempo para o negócio.',
      text: 'Conectar ferramentas, dados e inteligência libera o time do trabalho repetitivo e abre espaço para decisões melhores.',
      readTime: '6 min de leitura',
      intro: 'Automação não é colocar uma ferramenta em cada etapa. É redesenhar o fluxo para que pessoas, dados e sistemas trabalhem juntos com menos espera, retrabalho e perda de contexto.',
      cta: { label: 'Quero automatizar minha operação', href: buildWhatsAppUrl('Olá! Quero automatizar minha operação com a Arcane.') },
      sections: [
        {
          heading: 'Automação boa começa no fluxo.',
          paragraphs: [
            'Muitas empresas tentam automatizar o que está mais visível: uma tarefa repetitiva, uma planilha que precisa ser atualizada ou uma mensagem que alguém envia todos os dias. Mas o maior ganho costuma estar na sequência inteira — do pedido inicial até a decisão, entrega ou acompanhamento.',
            'Quando o fluxo não é entendido, a automação apenas acelera um processo confuso. O resultado pode ser mais volume, mas também mais erros, exceções e retrabalho.',
          ],
        },
        {
          heading: 'Antes da ferramenta, quatro decisões.',
          points: [
            { title: 'Mapear', text: 'Identificar entradas, responsáveis, sistemas, decisões e pontos onde o trabalho para.' },
            { title: 'Priorizar', text: 'Escolher processos com frequência, impacto e regras suficientemente claras para gerar retorno.' },
            { title: 'Integrar', text: 'Fazer CRM, WhatsApp, APIs, planilhas e sistemas internos compartilharem contexto útil.' },
            { title: 'Acompanhar', text: 'Criar visibilidade para saber o que foi processado, o que falhou e onde a equipe precisa intervir.' },
          ],
        },
        {
          heading: 'IA entra onde existe contexto.',
          paragraphs: [
            'IA pode classificar solicitações, resumir informações, sugerir respostas, identificar prioridades e apoiar decisões. Mas ela entrega mais quando está conectada a dados confiáveis, regras claras e um fluxo em que o time sabe quando revisar ou assumir o controle.',
            'O objetivo não é substituir o julgamento do negócio. É tirar do caminho o trabalho mecânico para que as pessoas usem seu tempo onde contexto, relacionamento e decisão realmente importam.',
          ],
          highlight: 'O ganho não está em automatizar uma tarefa isolada. Está em reduzir a fricção entre uma necessidade e o resultado que o negócio precisa produzir.',
        },
        {
          heading: 'O resultado é capacidade, não apenas velocidade.',
          points: [
            { title: 'Mais resposta', text: 'Leads, pedidos e solicitações recebem encaminhamento sem depender de uma fila manual.' },
            { title: 'Mais consistência', text: 'Regras e informações importantes deixam de depender da memória de uma única pessoa.' },
            { title: 'Mais escala', text: 'O time consegue atender mais volume sem aumentar a operação na mesma proporção.' },
          ],
        },
      ],
      sources: [
        { label: 'McKinsey — redesenhar workflows para capturar valor da IA', href: 'https://www.mckinsey.com/mgi/our-research/agents-robots-and-us-how-ai-reshapes-work-and-skills-in-europe' },
        { label: 'McKinsey — imperativos para o sucesso da automação', href: 'https://www.mckinsey.com/capabilities/operations/our-insights/the-imperatives-for-automation-success' },
      ],
    },
  ],
  legal: {
    privacy: {
      title: 'Política de Privacidade',
      updatedAt: '19 de agosto de 2026',
      intro: 'Transparência também faz parte de uma operação digital bem construída. Esta política explica como a Arcane Tecnologia trata dados pessoais quando você navega pelo site, entra em contato ou solicita uma conversa comercial.',
      notice: 'Este documento é uma base institucional de transparência e deve ser revisado juridicamente antes da publicação definitiva, especialmente quando novas ferramentas, integrações ou campanhas forem ativadas.',
      sections: [
        {
          heading: '1. Quem somos e qual é o objetivo desta política',
          paragraphs: [
            'A Arcane Tecnologia atua com estratégia digital, desenvolvimento de produtos, automação e integração de sistemas. Nesta política, explicamos quais dados podem ser tratados no contexto deste site, para quais finalidades e como você pode exercer seus direitos.',
            'O tratamento de dados pessoais deve ocorrer de forma transparente, adequada ao contexto e limitada ao necessário para a finalidade informada.',
          ],
        },
        {
          heading: '2. Quais dados podem ser tratados',
          paragraphs: ['Dependendo da forma como você interage com o site, podemos receber os seguintes dados:'],
          items: [
            'Dados de contato, como nome, e-mail, telefone, empresa e informações que você decide compartilhar na mensagem.',
            'Dados de navegação e dispositivo, como endereço IP, navegador, sistema operacional, páginas acessadas e informações técnicas similares.',
            'Dados de comunicação, incluindo o conteúdo de solicitações enviadas por formulário, e-mail ou WhatsApp.',
            'Preferências relacionadas a cookies e tecnologias semelhantes, quando utilizadas e quando você puder gerenciá-las.',
          ],
        },
        {
          heading: '3. Para que usamos essas informações',
          paragraphs: ['Usamos os dados pessoais somente para finalidades compatíveis com a interação realizada, incluindo:'],
          items: [
            'Responder dúvidas, pedidos de contato e solicitações comerciais.',
            'Entender o contexto informado para preparar uma conversa mais objetiva.',
            'Operar, proteger, medir e melhorar o desempenho e a segurança do site.',
            'Cumprir obrigações legais, atender solicitações de autoridades e exercer direitos em processos administrativos ou judiciais.',
            'Enviar comunicações comerciais quando houver uma base legal adequada e respeitando a possibilidade de não receber novas mensagens.',
          ],
        },
        {
          heading: '4. Compartilhamento e operadores',
          paragraphs: [
            'A Arcane não comercializa dados pessoais. Quando necessário para operar o site ou atender uma solicitação, dados podem ser processados por fornecedores de hospedagem, tecnologia, comunicação, analytics ou atendimento, sempre dentro do escopo contratado e conforme instruções aplicáveis.',
            'Também podemos compartilhar informações quando isso for necessário para cumprir uma obrigação legal, responder a uma ordem válida ou proteger direitos, segurança e integridade da Arcane, dos usuários ou de terceiros.',
          ],
        },
        {
          heading: '5. Retenção e segurança',
          paragraphs: [
            'Guardamos dados pessoais pelo tempo necessário para cumprir as finalidades desta política, atender obrigações legais, resolver disputas e manter registros mínimos de segurança. O prazo pode variar conforme o tipo de dado e o contexto da interação.',
            'Adotamos medidas técnicas e administrativas compatíveis com a natureza dos dados e com os riscos do tratamento. Nenhum ambiente conectado à internet é absolutamente livre de riscos, por isso a segurança também depende do cuidado do usuário com seus dispositivos e canais de acesso.',
          ],
        },
        {
          heading: '6. Direitos do titular',
          paragraphs: ['Nos limites da legislação aplicável, você pode solicitar informações sobre o tratamento de seus dados e exercer direitos como:'],
          items: [
            'Confirmação da existência de tratamento e acesso aos dados.',
            'Correção de dados incompletos, inexatos ou desatualizados.',
            'Informações sobre finalidades, compartilhamentos e critérios aplicáveis.',
            'Revogação do consentimento e eliminação de dados tratados com base nele, quando cabível.',
            'Revisão ou explicação sobre decisões automatizadas que afetem seus interesses, quando aplicável.',
          ],
        },
        {
          heading: '7. Como falar conosco',
          paragraphs: [
            'Para dúvidas, solicitações ou pedidos relacionados a dados pessoais, envie uma mensagem para comercial@arcanetecnologia.com.br. Descreva o pedido com o máximo de contexto possível para que a equipe consiga localizar a interação e responder de forma adequada.',
            'Podemos solicitar informações adicionais para confirmar a identidade de quem faz o pedido e evitar o acesso indevido a dados pessoais.',
          ],
        },
        {
          heading: '8. Atualizações desta política',
          paragraphs: ['Podemos atualizar esta política para refletir mudanças no site, nas ferramentas utilizadas, nas finalidades de tratamento ou na legislação aplicável. A versão mais recente estará sempre disponível nesta página, com a respectiva data de atualização.'],
        },
      ],
      contact: { label: 'Canal de privacidade', email: 'comercial@arcanetecnologia.com.br' },
      sources: [
        { label: 'Lei Geral de Proteção de Dados — Planalto', href: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm' },
        { label: 'ANPD — Direitos dos titulares', href: 'https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados-1/direito-dos-titulares' },
      ],
    },
    terms: {
      title: 'Termos de Uso',
      updatedAt: '19 de agosto de 2026',
      intro: 'Estes termos definem as regras para acessar e utilizar o site institucional da Arcane Tecnologia, consultar nossos conteúdos e iniciar uma conversa sobre serviços digitais.',
      notice: 'Ao navegar pelo site, você concorda em utilizar o conteúdo de forma legítima, respeitosa e compatível com estes termos. Se não concordar com alguma condição, interrompa a navegação e fale conosco para esclarecer sua dúvida.',
      sections: [
        {
          heading: '1. Sobre o site',
          paragraphs: [
            'O site apresenta informações institucionais e comerciais sobre as frentes Arcane Digital, Arcane Labs e Arcane Growth, além de artigos, cases, formas de contato e informações legais.',
            'As páginas não constituem, por si só, uma proposta comercial, contrato de prestação de serviços ou garantia de resultado. Cada projeto depende de escopo, contexto, premissas, prazos e condições definidos entre as partes.',
          ],
        },
        {
          heading: '2. Uso permitido',
          paragraphs: ['Você pode acessar e utilizar o site para fins pessoais, informativos e comerciais legítimos. Não é permitido:'],
          items: [
            'Utilizar o site para praticar fraude, violar direitos ou causar danos a pessoas, empresas ou sistemas.',
            'Tentar acessar áreas, dados ou recursos sem autorização.',
            'Copiar, reproduzir, distribuir ou explorar comercialmente conteúdos do site sem autorização prévia.',
            'Inserir código malicioso, realizar engenharia reversa ou interferir na disponibilidade e no funcionamento do site.',
            'Enviar informações falsas, abusivas ou que violem direitos de terceiros pelos canais de contato.',
          ],
        },
        {
          heading: '3. Conteúdo e propriedade intelectual',
          paragraphs: [
            'Textos, identidade visual, marcas, código, layouts, imagens, vídeos, gráficos e demais elementos do site pertencem à Arcane Tecnologia ou são utilizados com autorização. A navegação não transfere qualquer direito de propriedade intelectual ao usuário.',
            'É permitido compartilhar links para as páginas públicas do site, desde que o contexto não deturpe a informação nem sugira uma relação comercial ou institucional inexistente.',
          ],
        },
        {
          heading: '4. Conteúdo informativo e links externos',
          paragraphs: [
            'Buscamos manter as informações claras e atualizadas, mas conteúdos institucionais, editoriais e comerciais podem ser alterados sem aviso prévio. A publicação de uma informação não garante que ela permaneça disponível ou aplicável a todos os contextos.',
            'O site pode apresentar links para plataformas externas, como WhatsApp, referências técnicas ou serviços de terceiros. Esses ambientes possuem seus próprios termos, políticas e responsabilidades.',
          ],
        },
        {
          heading: '5. Contato comercial',
          paragraphs: [
            'Ao iniciar uma conversa pelo WhatsApp, formulário ou e-mail, você se compromete a fornecer informações verdadeiras e suficientes para que a Arcane compreenda a solicitação. O envio de uma mensagem não obriga a Arcane a aceitar um projeto ou a apresentar uma proposta.',
            'As condições de qualquer serviço serão formalizadas em documento próprio, com escopo, responsabilidades, prazos, valores, propriedade intelectual, confidencialidade e demais condições aplicáveis.',
          ],
        },
        {
          heading: '6. Disponibilidade e limitações',
          paragraphs: [
            'Podemos atualizar, suspender ou alterar páginas, recursos e conteúdos do site para manutenção, segurança, evolução ou motivos operacionais. Faremos esforços razoáveis para manter a experiência disponível, mas não garantimos funcionamento ininterrupto ou ausência completa de erros.',
            'Na extensão permitida pela legislação aplicável, a Arcane não se responsabiliza por indisponibilidade de serviços de terceiros, falhas de conexão ou decisões tomadas exclusivamente com base em conteúdo informativo do site.',
          ],
        },
        {
          heading: '7. Alterações e legislação aplicável',
          paragraphs: [
            'Estes termos podem ser atualizados quando houver mudança relevante no site, nos serviços ou nas obrigações aplicáveis. A versão publicada nesta página será considerada a versão vigente para o uso posterior à sua atualização.',
            'A utilização do site é regida pela legislação brasileira. Eventuais questões serão encaminhadas ao foro competente, respeitadas as regras legais aplicáveis.',
          ],
        },
        {
          heading: '8. Fale conosco',
          paragraphs: ['Se você tiver dúvidas sobre estes termos, envie uma mensagem para comercial@arcanetecnologia.com.br ou fale com a Arcane pelo WhatsApp.'],
        },
      ],
      contact: { label: 'Dúvidas sobre os termos', email: 'comercial@arcanetecnologia.com.br' },
      sources: [
        { label: 'Código Civil — Planalto', href: 'https://www.planalto.gov.br/ccivil_03/leis/l10406compilada.htm' },
      ],
    },
    cookies: {
      title: 'Política de Cookies',
      updatedAt: '19 de agosto de 2026',
      intro: 'Cookies são pequenos arquivos ou tecnologias semelhantes que ajudam um site a funcionar, lembrar preferências e entender como a experiência é utilizada. Esta política explica como eles podem ser usados no ambiente digital da Arcane.',
      notice: 'A ativação de cookies não necessários depende da configuração das ferramentas utilizadas no site e das preferências disponibilizadas ao visitante. Cookies estritamente necessários podem ser usados para entregar recursos básicos e segurança.',
      sections: [
        {
          heading: '1. O que são cookies',
          paragraphs: [
            'Cookies são arquivos armazenados no navegador ou no dispositivo quando você visita uma página. Tecnologias semelhantes, como pixels, tags e identificadores locais, podem cumprir funções parecidas.',
            'Eles não são todos iguais: alguns são necessários para o funcionamento técnico; outros ajudam a medir audiência, lembrar escolhas ou apoiar iniciativas de comunicação.',
          ],
        },
        {
          heading: '2. Categorias que podem ser utilizadas',
          paragraphs: ['Quando aplicável à configuração do site, os cookies podem ser organizados nas seguintes categorias:'],
          items: [
            'Necessários: permitem segurança, navegação, carregamento e funcionamento básico do site.',
            'Preferências: lembram escolhas que melhoram a experiência, como idioma ou configurações de visualização.',
            'Analíticos: ajudam a entender páginas acessadas, desempenho e interação de forma agregada.',
            'Marketing: podem medir campanhas ou personalizar comunicações quando houver ferramenta habilitada e base legal adequada.',
          ],
        },
        {
          heading: '3. Cookies necessários e cookies opcionais',
          paragraphs: [
            'Cookies estritamente necessários podem ser tratados porque sem eles determinados recursos, segurança ou funcionamento do site podem ficar comprometidos. Cookies opcionais devem ser apresentados com informação clara e, quando dependerem de consentimento, permanecer desativados até que você faça uma escolha.',
            'A disponibilidade de um banner ou centro de preferências depende das tecnologias ativas no momento do acesso. Quando houver esse mecanismo, você poderá aceitar, recusar ou ajustar categorias não essenciais.',
          ],
        },
        {
          heading: '4. Como gerenciar suas preferências',
          paragraphs: [
            'Você pode apagar ou bloquear cookies nas configurações do navegador. Também pode limitar cookies de terceiros e revisar as permissões concedidas no dispositivo.',
            'Desativar cookies necessários pode afetar o funcionamento do site. A gestão pelo navegador é complementar e não substitui os mecanismos de informação e controle que possam ser oferecidos diretamente pela página.',
          ],
        },
        {
          heading: '5. Terceiros e prazo de retenção',
          paragraphs: [
            'Ferramentas de terceiros eventualmente integradas ao site podem instalar ou consultar seus próprios cookies, de acordo com suas políticas. Recomendamos consultar também as políticas desses fornecedores quando essa tecnologia estiver ativa.',
            'O tempo de permanência varia: cookies de sessão são removidos ao fechar o navegador, enquanto cookies persistentes permanecem até o prazo definido ou até serem apagados por você.',
          ],
        },
        {
          heading: '6. Atualizações e contato',
          paragraphs: [
            'Esta política pode ser atualizada quando novas ferramentas, campanhas, integrações ou exigências regulatórias alterarem o uso de cookies. A data no início da página indica a versão mais recente.',
            'Para dúvidas sobre cookies ou sobre o tratamento de dados pessoais, escreva para comercial@arcanetecnologia.com.br.',
          ],
        },
      ],
      contact: { label: 'Dúvidas sobre cookies', email: 'comercial@arcanetecnologia.com.br' },
      sources: [
        { label: 'ANPD — Guia orientativo sobre cookies', href: 'https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_orientativo_cookies_e_protecao_de_dados_pessoais' },
      ],
    },
  },
};
