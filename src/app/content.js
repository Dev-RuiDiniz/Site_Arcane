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
      title: 'Arcane Digital',
      subtitle: 'Landing Pages, Campanhas, Conteúdo e Redes Sociais',
      text: 'Criamos a presença digital que transforma atenção em oportunidade. Landing pages de alta conversão, campanhas, identidade para lançamentos, materiais comerciais, media kits e conteúdo para redes sociais — tudo conectado à estratégia de posicionamento e aquisição da marca.',
      cta: 'Quero fortalecer minha presença digital',
      href: buildWhatsAppUrl('Olá! Quero fortalecer minha presença digital com a Arcane.'),
    },
    {
      number: '02',
      title: 'Arcane Labs',
      subtitle: 'Sistemas, Aplicativos e Produtos Digitais',
      text: 'Transformamos ideias e operações em produtos digitais próprios. Desenvolvemos sistemas web, plataformas SaaS, aplicativos e soluções sob medida com arquitetura escalável, experiência bem desenhada e tecnologia preparada para acompanhar o crescimento do negócio.',
      cta: 'Quero desenvolver um produto',
      href: buildWhatsAppUrl('Olá! Quero desenvolver um produto digital com a Arcane.'),
    },
    {
      number: '03',
      title: 'Arcane Growth',
      subtitle: 'IA, Automações e Integrações',
      text: 'Conectamos ferramentas, dados e inteligência para eliminar trabalho manual e acelerar a operação. Automatizamos processos, integramos CRM, WhatsApp, APIs e sistemas internos e aplicamos IA onde ela realmente gera ganho de produtividade, velocidade e conversão.',
      cta: 'Quero automatizar minha operação',
      href: buildWhatsAppUrl('Olá! Quero automatizar minha operação com a Arcane.'),
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
      paragraphs: ['Esta página apresenta a estrutura inicial da política de privacidade da Arcane Tecnologia.', 'Na versão final, detalharemos dados coletados, finalidades, bases legais, retenção e canais de solicitação do titular.'],
    },
    terms: {
      title: 'Termos de Uso',
      paragraphs: ['Esta página apresenta a estrutura inicial dos termos de uso da Arcane Tecnologia.', 'Na versão final, detalharemos responsabilidades, propriedade intelectual, disponibilidade e condições de uso do site.'],
    },
    cookies: {
      title: 'Política de Cookies',
      paragraphs: ['Esta página apresenta a estrutura inicial da política de cookies da Arcane Tecnologia.', 'Na versão final, detalharemos categorias, finalidades, duração e formas de gerenciamento das preferências.'],
    },
  },
};
