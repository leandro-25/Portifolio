"use client";
import { motion, useInView, animate, AnimatePresence } from "framer-motion";
import * as React from "react";
import { Trophy, Brain, ShieldCheck, ArrowLeft, ArrowUpRight, CircleDot, Mail, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import OrbitArsenal from "@/components/landing/orbit-arsenal";
import ProjectGallery from "@/components/landing/project-gallery";
import { TechIcon } from "@/components/landing/tech-icons";
import GlowHorizonFM from "@/components/landing/glow-horizon";
import { useEffect, useState } from "react";

const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Mim", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Arsenal", href: "#arsenal" },
  { label: "Contato", href: "#contato" },
];

const filters = ["IA & LLMs", "Dados & BI", "Engenharia de Dados", "Web", "Todos"];

type Kpi = { value: string; label: string };

type WorkItem = {
  id: string;
  title: string;
  categories: string[];
  image: string;
  short: string;
  tags: string;
  details: string;
  tools: string[];
  link: string;
  repo: string;
  layout: "narrativa" | "jornada" | "raiox";
  what: string;
  does: string[];
  why: string;
  kpis: Kpi[];
  gallery: string[];
  objetivo?: string;
  listFeatures?: boolean;
  imgFit?: "cover" | "contain";
};

const works: (WorkItem & { span: string; height: string })[] = [
  {
    id: "descomplica", title: "Descomplica IA", categories: ["IA & LLMs"],
    image: "/img/descomplica/to-do.PNG",
    short: "IA que tira você do não sei por onde começar.",
    tags: "#TypeScript #IA",
    details: "Descomplica IA é uma suíte de 5 ferramentas com IA que organiza a bagunça de quem sabe o que precisa fazer, mas trava na hora de começar. Ela foi pensada para quem adia tarefa grande, subestima prazo ou congela na hora de escrever um e-mail importante. O problema que resolve é direto: intenção sem plano vira adiamento, e aqui um desabafo em texto livre já sai como lista organizada, com passos pequenos e tempo estimado de cada etapa. Tem ainda análise de dilemas com prós e contras, cálculo de prazo e um reescritor que ajusta qualquer texto em 9 tons profissionais. Tudo roda no navegador, numa interface calma e sem ruído, feita para não sobrecarregar quem já está sobrecarregado.",
    tools: ["React 19", "TypeScript", "Vite 6", "Tailwind CSS", "Framer Motion", "Groq SDK"], link: "https://github.com/leandro-25/Descomplica_IA",
    repo: "https://github.com/leandro-25/Descomplica_IA",
    layout: "jornada",
    what: "Um kit de 5 ferramentas com IA para quem trava na hora de começar: transforma tarefa grande em passo pequeno, desabafo em lista organizada e dúvida em decisão tomada.",
    does: ["Magic To-Do — quebra qualquer tarefa grande em subtarefas, com nível de detalhe de 1 a 5 e tempo estimado por etapa", "Compiler — extrai uma lista organizada de um desabafo em texto livre e manda direto para o Magic To-Do", "Estimator — calcula prazos realistas somando as subtarefas mais um imposto de transição de 15 a 20%", "Consultant — analisa qualquer dilema entregando prós, contras e uma conclusão prática", "Formalizer — reescreve o texto em 9 tons profissionais, sem markdown nem emoji, pronto para enviar", "Fluxo integrado — as 5 ferramentas conversam entre si, do desabafo ao plano final sem retrabalho"],
    why: "Porque antes de qualquer código existe uma pessoa tentando sair do lugar. Organizar a própria cabeça é o primeiro gargalo de qualquer projeto, inclusive dos meus. Se a IA pode destravar gente, ela já valeu cada linha.",
    kpis: [{ value: "5", label: "ferramentas integradas" }, { value: "9", label: "tons de reescrita" }, { value: "6", label: "modelos de IA com fallback" }],
    gallery: ["/img/descomplica/compiler.PNG", "/img/descomplica/estimator.PNG", "/img/descomplica/consltant.PNG", "/img/descomplica/formalizer.PNG"],
    imgFit: "contain",
    listFeatures: true,
    objetivo: "Transformar intenção em ação com plano claro, tempo honesto e comunicação sem atrito. Cada ferramenta ataca um travamento real: não saber por onde começar, subestimar prazo, decidir sozinho e travar na hora de escrever. O ponto é tirar a tarefa da cabeça e devolver um caminho que cabe na rotina de quem está usando.",
    span: "col-span-4", height: "h-[200px]",
  },
  {
    id: "growguru", title: "GrowGuru", categories: ["Dados & BI"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=60",
    short: "Análise de dados do mercado financeiro.",
    tags: "#Finanças #DataScience",
    details: "Aplicativo que organiza investimentos em carteira, registra compras e vendas e testa estratégias com 5 anos de dados reais da B3. O coração do projeto é um pipeline que consome dados reais do mercado, trata tudo com Python e carrega num banco relacional. Com essa base, 14 estratégias foram testadas contra a história: a melhor rendeu 197% em 5 anos, contra 50% do IBOV no mesmo período. O resultado foi tão forte que o projeto foi selecionado pelo SEBRAE para a Jornada Startup, com apresentações e mentorias rumo a virar empresa de verdade.",
    tools: ["Ionic", "Vue.js", "Node.js", "Supabase", "Python"], link: "https://growguru.netlify.app/",
    repo: "https://github.com/leandro-25/GROWGURU",
    objetivo: "Provar que decisão de investimento pode nascer de dados, não de palpite: traduzir o mercado em estratégia que qualquer pessoa entende e levar essa inteligência para o bolso de quem investe.",
    layout: "narrativa",
    what: "Um guia de investimentos no bolso: você registra compras e vendas, organiza ativos por estratégia e acompanha a rentabilidade da carteira sem planilha complicada.",
    does: ["Carteira completa separada por estratégias de investimento", "Registro de compras e vendas com histórico", "Rentabilidade acompanhada ativo por ativo", "Backtest: 14 estratégias testadas com 5 anos de dados reais da B3", "Simulação com 412 ativos reais do mercado brasileiro"],
    why: "Porque investir sem dados é aposta. O GrowGuru prova com números que estratégia testada supera intuição, e traduz o mercado para uma linguagem que qualquer pessoa entende.",
    kpis: [{ value: "412", label: "ativos da B3 analisados" }, { value: "+197%", label: "melhor estratégia em 5 anos" }, { value: "14", label: "estratégias testadas" }],
    gallery: ["https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=60", "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=60"],
    span: "col-span-4", height: "h-[200px]",
  },
  {
    id: "atlas", title: "Atlas Municipal", categories: ["Dados & BI"],
    image: "/img/atlas/home.PNG",
    short: "Dados municipais em um atlas digital.",
    tags: "#TypeScript #Web",
    details: "Painel web que mostra a saúde fiscal, econômica e social de qualquer um dos 5.570 municípios brasileiros. Você digita o nome da cidade ou o código IBGE e navega por 6 abas de análise profunda: finanças com receita própria versus transferências, despesa, resultado e qualidade fiscal; economia com admissões, desligamentos, saldo de 12 meses e salário médio via CAGED; sociedade com saneamento do Censo 2022; saúde com a rede pública do CNES; mais risco e projeções de empregos e população. Cada cidade já vem comparada com a capital do estado, dá para comparar até 3 lado a lado e favoritar as suas, sempre com a fonte citada em cada painel.",
    tools: ["React 19", "TypeScript", "TanStack Router", "Tailwind v4", "Recharts", "PGLite", "Postgres Neon"], link: "https://github.com/leandro-25/Atlas_Municipal",
    repo: "https://github.com/leandro-25/Atlas_Municipal",
    objetivo: "Transformar dados públicos dispersos em um raio-X que qualquer cidadão entende e usa: do quanto a cidade arrecada à projeção de empregos, tudo visual, comparável, com fonte e pronto para cobrar resultado.",
    layout: "raiox",
    what: "Digite o nome de qualquer cidade do Brasil e receba um raio-X completo: quanto ela arrecada, quanto gasta, empregos, saneamento, saúde e até projeções futuras. Cada cidade já vem comparada com a capital do estado, e você pode montar seu próprio comparativo.",
    does: ["Busca nacional por nome ou código IBGE, com filtro por estado e link direto por URL para compartilhar", "Aba Finanças: receita própria versus transferências, despesa, resultado, funções orçamentárias, patrimônio e RGF/RREO", "Série histórica fiscal com CAGR, volatilidade e índice de qualidade, sempre contra a capital", "Aba Economia: admissões, desligamentos, saldo de 12 meses, salário médio, série mensal e recorte por setor via CAGED", "Aba Sociedade e Saúde: saneamento do Censo 2022, entorno com PIB regional do IBGE e rede CNES com UBS, USF e hospitais", "Aba Risco e Projeção: volatilidade de receita, dependência de transferências e projeção de empregos e população", "Comparador lado a lado de até 3 municípios, com troca, inversão e limpeza", "Visão agregada por estado, região e panorama nacional, mais lista de favoritos salva no navegador"],
    why: "Porque dados públicos existem aos montes, mas ninguém consegue ler. O Atlas traduz burocracia fiscal em gráficos que qualquer cidadão entende e usa para cobrar resultado e decidir com base em evidência, não em discurso.",
    kpis: [{ value: "5.5k+", label: "municípios cobertos" }, { value: "6", label: "abas de análise" }, { value: "3", label: "cidades comparadas de uma vez" }],
    gallery: ["/img/atlas/home2.PNG", "/img/atlas/home3.PNG", "/img/atlas/home4.PNG", "/img/atlas/comparar.PNG", "/img/atlas/rx-sp.PNG", "/img/atlas/rx-sp2.PNG", "/img/atlas/rx-sp3.PNG", "/img/atlas/rx-sp-economia.PNG", "/img/atlas/rx-sp-economia2.PNG", "/img/atlas/rx-sp-economia3.PNG", "/img/atlas/rx-sp-saude.PNG", "/img/atlas/rx-sp-saude2.PNG", "/img/atlas/rx-sp-saude3.PNG", "/img/atlas/rx-sp-saude4.PNG", "/img/atlas/rx-sp-sociedade.PNG", "/img/atlas/rx-sp-sociedade2.PNG", "/img/atlas/rx-sp-futuro.PNG", "/img/atlas/rx-sp-futuro2.PNG", "/img/atlas/rx-sp-futuro3.PNG"],
    imgFit: "contain",
    span: "col-span-4", height: "h-[200px]",
  },
  {
    id: "compass", title: "Compass PB", categories: ["Engenharia de Dados"],
    image: "/img/compass/sprint10.png",
    short: "10 sprints virando engenheiro de dados AWS.",
    tags: "#AWS #Python #SQL",
    details: "Trilha prática de 10 sprints em Engenharia de Dados na nuvem AWS, feita no programa CompassUOL com 400 horas de formação intensiva. Começa no Linux com scripts de automação, passa por modelagem relacional e dimensional, análise de dados da Play Store, Docker, consultas no S3, Lambda consumindo APIs, PySpark, processamento da camada RAW à Refined com Glue e termina num dashboard no QuickSight analisando orçamento versus bilheteria de Star Wars. Cada sprint com desafio, evidências e certificado.",
    tools: ["AWS", "Python", "SQL", "Docker", "PySpark", "Glue", "S3", "Athena", "Lambda", "QuickSight"], link: "https://github.com/leandro-25/Compass-PB-Leandro",
    repo: "https://github.com/leandro-25/Compass-PB-Leandro",
    objetivo: "Dominar o caminho completo do dado no programa CompassUOL: extrair, transformar, armazenar e consultar em escala, como fazem os times de dados, sprint após sprint.",
    layout: "jornada",
    what: "Dez sprints que contam uma evolução: scripts Linux e agendamentos, modelagem de dados, análise da Play Store, containers Docker, consultas direto no S3, APIs via Lambda, Spark, Glue com modelo estrela e um dashboard final. Tudo versionado com evidências.",
    does: ["Automação no Linux com scripts e agendamentos", "Modelagem relacional e dimensional no DBeaver", "Análise da Google Play Store em notebook", "Containers Docker com aplicações Python", "Consultas SQL direto no S3 (Tesouro Direto)", "Análise de Star Wars com Docker e S3", "APIs consumidas via Lambda e PySpark", "Processamento da camada RAW com CSV e JSON", "Glue, modelo estrela e camada Refined", "Dashboard final no QuickSight"],
    why: "Porque dado parado em arquivo não vale nada. Essa trilha me ensinou a construir a estrada que o dado percorre até virar decisão: pipeline escalável, documentado e testado, do terminal ao dashboard.",
    kpis: [{ value: "400h", label: "de formação intensiva" }, { value: "10", label: "sprints com evidências" }, { value: "8", label: "serviços AWS na prática" }],
    gallery: [],
    imgFit: "contain",
    span: "col-span-4", height: "h-[200px]",
  },
  {
    id: "powerbi", title: "Gestão Orçamentária BI", categories: ["Dados & BI"],
    image: "/img/powerbi/01-Visao-Geral.png",
    short: "Orçamento, forecast e simulação em Power BI.",
    tags: "#PowerBI #DAX #SQL",
    details: "Relatório de Business Intelligence para acompanhamento orçamentário, controle de execução e simulação estratégica do tipo e se. São 3 páginas com 21 visuais: visão geral dos custos com Pareto e auditoria mês a mês, comparativo de realizado contra orçado e forecast por centro de custo, e uma simulação onde mexer em preço, custo e volume projeta receita, resultado e ponto de equilíbrio na hora. São 27 medidas DAX sobre um modelo estrela, tudo em formato projetizado versionável no Git, com base 100% sintética feita para estudo.",
    tools: ["Power BI", "DAX", "Power Query", "Excel", "Git"], link: "https://github.com/leandro-25/PowerBI_Gestao_Orcamentaria",
    repo: "https://github.com/leandro-25/PowerBI_Gestao_Orcamentaria",
    objetivo: "Mostrar que orçamento parado em planilha vira decisão quando ganha visual, comparação e simulação: do realizado ao e se, num painel que qualquer gestor entende.",
    layout: "narrativa",
    what: "Um painel com 3 páginas: visão geral dos custos com Pareto e auditoria mês a mês, comparativo de realizado contra orçado e forecast por centro de custo, e uma simulação estratégica onde você move preço, custo e volume para ver o futuro da receita na hora.",
    does: ["Visão geral com cartões de custos, Pareto por conta e tabela de auditoria com variação mês a mês", "Budget versus forecast por ano, mês e centro de custo, com execução e desvio em valor e percentual", "Simulação what-if de preço, custo e volume com receita, resultado e ponto de equilíbrio ao vivo", "27 medidas DAX organizadas, do realizado e acumulado ao motor inteiro da simulação", "Modelo estrela com dimensões, fatos e parâmetros, tudo versionado em texto no Git"],
    why: "Porque orçamento bom não é o que acerta o número, é o que permite brincar com cenários. Esse painel transforma o e se da diretoria em resposta imediata.",
    kpis: [{ value: "27", label: "medidas DAX criadas" }, { value: "3", label: "páginas e 21 visuais" }, { value: "100%", label: "dados sintéticos para estudo" }],
    gallery: ["/img/powerbi/02-Budget-vs-Forecast.png", "/img/powerbi/03-Simulacao-Estrategica.png"],
    imgFit: "contain",
    span: "col-span-4", height: "h-[200px]",
  },
  {
    id: "iacontrole", title: "IA Controle de Gestos", categories: ["IA & LLMs"],
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=60",
    short: "Suas mãos viram o controle remoto do Windows.",
    tags: "#Python #OpenCV #MediaPipe",
    details: "Programa de visão computacional que transforma gestos das mãos em comandos do Windows. A webcam captura o vídeo em tempo real, a IA detecta e rastreia cada mão separadamente e cada gesto vira uma ação: a mão esquerda abre e fecha o Microsoft Paint, a direita controla o volume de 0 a 100% em 6 níveis. A imagem é espelhada para gesticular do jeito natural, cada gesto dispara uma única vez só quando muda, e o programa verifica antes de agir para nunca abrir nada duplicado. É só posicionar-se a meio metro da câmera com boa luz e apertar Q para sair.",
    tools: ["Python", "OpenCV", "cvzone", "MediaPipe", "PyCaw", "psutil"], link: "https://github.com/leandro-25/IA_Controle_gestos",
    repo: "https://github.com/leandro-25/IA_Controle_gestos",
    objetivo: "Provar que interação natural com a máquina é possível com uma webcam comum e visão computacional: gesticular para comandar, sem mouse, sem atalho, sem encostar em nada.",
    layout: "jornada",
    what: "Levante 1 dedo da mão esquerda e o Paint abre. Levante 4 e ele fecha. Mostre de 0 a 5 dedos da mão direita e o volume obedece em faixas de 20%. Posicione-se a meio metro da câmera, com boa luz, e aperte Q para sair. Dá para ajustar a câmera e a sensibilidade de detecção no código.",
    does: ["Mão esquerda com 1 dedo abre o Microsoft Paint, com verificação para não abrir duplicado", "Mão esquerda com 4 dedos fecha o Paint com segurança, sem matar processo errado", "Mão direita controla o volume em 6 níveis: 0, 20, 40, 60, 80 e 100%", "Cada gesto dispara uma única vez, só quando o gesto muda, sem repetir a cada frame", "Mãos esquerda e direita tratadas de forma totalmente independente", "Imagem espelhada para gesticular do jeito natural, como num espelho", "Sensibilidade de detecção ajustável para mais fácil ou mais preciso", "Encerra limpando tudo com um toque na tecla Q"],
    why: "Porque a forma mais natural de comandar uma máquina é gesticular. Uma prova de que IA não precisa de supercomputador para parecer mágica: webcam, Python e boa luz resolvem. E cada detalhe, do disparo único à verificação antes de agir, foi pensado para a experiência parecer instantânea e confiável.",
    kpis: [{ value: "6", label: "níveis de volume por gestos" }, { value: "2", label: "mãos independentes" }, { value: "0", label: "cliques necessários" }],
    gallery: ["https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=60", "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=60"],
    span: "col-span-4", height: "h-[200px]",
  },
  {
    id: "dataflow", title: "Dataflow", categories: ["Engenharia de Dados"],
    image: "/img/dataflow/dashboards.PNG",
    short: "Pipeline de dados completo no navegador, do arquivo ao dashboard.",
    tags: "#FastAPI #React #Docker",
    details: "Sistema local de pipeline de dados com interface web visual que faz ingestão, staging, modelagem dimensional, métricas e dashboards sem sair do navegador. Foi feito para analistas e times de dados que querem montar um fluxo de ponta a ponta sem escrever código nem depender de serviços pagos na nuvem. O problema que ele resolve é o retrabalho de fazer tudo em ferramentas separadas: aqui o dado entra, é transformado, modelado e vira gráfico no mesmo lugar, com clique e arrastar. A proposta é levar o poder de um data warehouse para a máquina de qualquer pessoa, subindo com Docker em um comando.",
    tools: ["Python", "FastAPI", "React", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "Pandas", "PostgreSQL", "MySQL", "SQLite", "Docker", "Git"],
    link: "https://github.com/leandro-25/dataflow",
    repo: "https://github.com/leandro-25/dataflow",
    objetivo: "Por que foi feito: aplicar de ponta a ponta tudo que aprendi em Engenharia de Dados numa ferramenta que qualquer analista consiga usar sozinho, do arquivo bruto ao dashboard, com a camada de execução escrita por mim, DAG incluída.",
    layout: "jornada",
    what: "Abra a página, cadastre uma fonte, aponte um arquivo ou banco, e siga as etapas na sidebar: ingestão, staging, dimensões, fatos, métricas e dashboards. No fim, clique em Executar Tudo e acompanhe o pipeline rodando com logs e tempos.",
    does: ["Conectores de banco: PostgreSQL e MySQL", "Arquivos: CSV, Excel, JSON, XML, Parquet, Avro, ORC e Delta Lake", "Ingestão para tabelas raw_* com preview antes de rodar", "Staging com 17 transformações em construtor visual drag-and-drop", "Dimensões e fatos com chave natural, surrogate key e granularidade", "Métricas com formatação de moeda, percentual e número", "Dashboards com KPIs, linha, barras, pizza, área e tabela editáveis", "Motor de execução com DAG automática e agendamento por cron", "Catálogo com SQL livre, exportação CSV e Excel"],
    why: "Porque todo curso ensina as peças soltas e nada ensina a montar a máquina inteira. O Dataflow é a máquina: eu escrevi o motor, a DAG e a interface para entender o que existe por baixo de qualquer ferramenta de BI que eu for usar na carreira.",
    kpis: [{ value: "11", label: "telas na interface" }, { value: "17", label: "transformações visuais" }, { value: "6", label: "camadas de pipeline" }],
    gallery: ["/img/dataflow/fonteDados.PNG", "/img/dataflow/ingestao.PNG", "/img/dataflow/staging.PNG", "/img/dataflow/dimensoes.PNG", "/img/dataflow/fatos.PNG", "/img/dataflow/metricas.PNG", "/img/dataflow/pipeline.PNG", "/img/dataflow/catalogo.PNG"],
    imgFit: "contain",
    span: "col-span-4", height: "h-[200px]",
  },
  {
    id: "vagas", title: "Jobs Radar", categories: ["IA & LLMs"],
    image: "/img/vagas/interface.PNG",
    short: "Vagas do LinkedIn com match de IA no seu currículo.",
    tags: "#Python #Flask #LLMs",
    details: "Monitor de vagas em tempo real que varre o LinkedIn por todas as combinações de cargo e local e mostra os resultados ao vivo na web. Você cadastra cargos e cidades, aplica filtros para cortar o ruído e acompanha tudo surgindo na tela com barra de progresso. O diferencial é a análise de aderência: envie seu currículo em PDF e a IA dá nota de 0 a 100 para cada vaga, mostrando o que você tem, o que falta e o motivo.",
    tools: ["Python", "Flask", "Groq", "LLMs", "BeautifulSoup", "SSE"], link: "https://github.com/leandro-25/Vagas_Automaticas",
    repo: "https://github.com/leandro-25/Vagas_Automaticas",
    objetivo: "Acabar com a peregrinação manual por vagas: um radar que monitora, filtra e ainda diz o quanto cada vaga combina com você, para candidatar-se onde a chance é real.",
    layout: "jornada",
    what: "Cadastre cargos e locais, ajuste os filtros, aperte iniciar e veja as vagas surgindo ao vivo. Envie seu currículo e receba a nota de aderência de cada uma, com o que conta a favor e contra.",
    does: ["Busca ao vivo via streaming: vagas aparecem uma a uma sem recarregar", "Todas as combinações de cargo e local varridas com progresso visível", "Filtros de ruído: termos excluídos, período, vagas por combinação e filtro inteligente de local", "Filtro positivo que só mantém títulos relacionados ao cargo buscado", "Descrição completa extraída logo após o card aparecer", "Nota de aderência CV contra vaga com tem, falta e motivo via IA", "Nota mínima que esconde vagas fracas sozinha", "Ordenação, busca, copiar link e descartar direto no card"],
    why: "Porque procurar emprego dói: é repetitivo, barulhento e cego. Automatizar a parte chata e usar IA onde importa, no match, devolve tempo e mira para quem procura.",
    kpis: [{ value: "0-100", label: "nota de aderência por vaga" }, { value: "live", label: "vagas surgindo ao vivo" }, { value: "1", label: "PDF de currículo resolve" }],
    gallery: [],
    imgFit: "contain",
    span: "col-span-4", height: "h-[200px]",
  },
  {
    id: "cripto", title: "CriptoRadar", categories: ["Web"],
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=60",
    short: "Radar de criptomoedas com dados de mercado.",
    tags: "#APIs #Dados",
    details: "Monitor de criptomoedas em tempo real direto no navegador, feito em dupla na disciplina de Desenvolvimento Web da FATEC. Puxa preços de APIs públicas, atualiza sozinho a cada intervalo e mostra gráficos de variação numa interface que funciona do celular ao PC, sem instalar nada e sem recarregar a página.",
    tools: ["JavaScript", "APIs", "HTML", "CSS"], link: "https://github.com/leandro-25/CriptoRadar",
    repo: "https://github.com/leandro-25/CriptoRadar",
    objetivo: "Acompanhar um mercado que não dorme sem apertar F5: dados ao vivo, sem instalar nada, com o aprendizado real de domar APIs e dados assíncronos.",
    layout: "raiox",
    what: "Abra a página e veja o preço das principais criptomoedas atualizando sozinho, com gráficos de variação. Sem instalar nada, sem recarregar.",
    does: ["Preços ao vivo puxados de APIs públicas", "Atualização automática a cada intervalo", "Gráficos de variação de preço", "Layout que funciona no celular e no PC", "Feito em dupla, com código organizado"],
    why: "Porque mercado de cripto não dorme e ninguém merece apertar F5. Foi onde aprendi a domar dados assíncronos, JSON e APIs de verdade, em dupla e com prazo.",
    kpis: [{ value: "live", label: "dados em tempo real" }, { value: "2", label: "devs em dupla" }, { value: "0", label: "instalação: roda no navegador" }],
    gallery: ["https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=60", "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=60"],
    span: "col-span-4", height: "h-[200px]",
  },
];

const matches = (item: WorkItem, filter: string) =>
  filter === "Todos" || item.categories.includes(filter);

const rows: { span: string; height: string; item: WorkItem }[][] = [
  [
    { span: "col-span-4", height: "h-[200px]", item: works[0] },
    { span: "col-span-4", height: "h-[200px]", item: works[1] },
    { span: "col-span-4", height: "h-[200px]", item: works[3] },
  ],
  [
    { span: "col-span-4", height: "h-[200px]", item: works[6] },
    { span: "col-span-4", height: "h-[200px]", item: works[7] },
    { span: "col-span-4", height: "h-[200px]", item: works[2] },
  ],
  [
    { span: "col-span-4", height: "h-[200px]", item: works[4] },
    { span: "col-span-4", height: "h-[200px]", item: works[8] },
    { span: "col-span-4", height: "h-[200px]", item: works[5] },
  ],
];

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.55, delay }}>{children}</motion.div>;
}

function SectionLabel({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <div>
      <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#D72323]">{children}</p>
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }} className="mt-2 h-px origin-left bg-gradient-to-r from-[#D72323] via-[#D72323]/40 to-transparent" />
    </div>
  );
}

function KpiCounter({ value, delay }: { value: string; delay: number }) {
  const m = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const [display, setDisplay] = React.useState(m ? `0${m[2]}` : value);
  React.useEffect(() => {
    const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return;
    const target = parseFloat(match[1]);
    const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;
    const controls = animate(0, target, {
      duration: 1.4, delay, ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals) + match[2]),
    });
    return () => controls.stop();
  }, [value, delay]);
  return <span>{display}</span>;
}

export default function Home() {
  const [active, setActive] = useState("IA & LLMs");
  const [openId, setOpenId] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = openId ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openId]);

  return (
    <div className="w-full bg-[#EEEEEE] text-[#303841]">
      {/* NAV - fixa no topo */}
      <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "border-b border-[#D72323]/20 bg-[#EEEEEE]/85 backdrop-blur-md" : "bg-transparent")}>
        <nav className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-10 py-5 text-[18px] font-bold text-[#303841] md:px-16">
          {nav.map((n) => (
            <a key={n.label} href={n.href} className="transition-colors hover:text-[#D72323]">{n.label}</a>
          ))}
        </nav>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative scroll-mt-20 overflow-hidden border-b border-[#303841]/10 bg-[#EEEEEE] pt-[76px]">
        <GlowHorizonFM variant="top" className="inset-x-0 bottom-auto top-0 h-[130%] opacity-70" />
        <div className="relative mx-auto flex min-h-[calc(100svh-76px)] w-full max-w-[1440px] flex-col items-center justify-center px-6 pb-10 pt-10 text-center">
          <motion.h1 initial={{ y: -80, opacity: 0, filter: "blur(12px)" }} animate={{ y: 0, opacity: 1, filter: "blur(0px)" }} transition={{ duration: 3.5, ease: [0.16, 1, 0.3, 1] }} className="relative -top-8 z-0 mt-40 whitespace-nowrap font-outline text-[8.5vw] font-normal uppercase leading-[1.02] tracking-wide text-[#D72323]">Engenheiro de Dados</motion.h1>
          <motion.h1 initial={{ y: -80, opacity: 0, filter: "blur(12px)" }} animate={{ y: 0, opacity: 1, filter: "blur(0px)" }} transition={{ duration: 3.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }} className="relative -top-8 z-0 mt-4 whitespace-nowrap font-outline text-[6vw] font-normal uppercase leading-[1.05] tracking-wide text-transparent" style={{ WebkitTextStroke: "2px #303841" }}>& Inteligência Artificial</motion.h1>
          <motion.div initial={{ opacity: 0, y: -32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 3.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }} className="relative z-30 mx-auto mt-32 max-w-[480px] pb-10">
            <p className="text-center text-[17px] font-medium leading-[1.8] text-[#303841]/75"><span className="font-bold text-[#303841]">Analista de Dados</span> e <span className="font-bold text-[#303841]">Analista de Sistemas</span>. Arquitetando soluções inteligentes, seguras e escaláveis para a web moderna.</p>
            <div className="mt-4 flex justify-center">
              <Button className="h-11 rounded-[3px] px-6 text-[13px]" size="sm">Ver Projetos</Button>
            </div>
            <motion.a href="#sobre" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }} className="mt-6 flex flex-col items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#303841]/70 transition-colors hover:text-[#D72323]" aria-label="Rolar para a próxima seção">
              Role para explorar
              <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
                <ChevronDown size={18} />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* SOBRE - faixa escura, foto funde no fundo */}
      <section id="sobre" className="w-full scroll-mt-20 border-y border-[#3A4750]/35 bg-white">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-6 py-14 md:grid-cols-[1.4fr_auto] md:gap-12 md:py-16">
          <div>
            <Reveal>
              <h2 className="text-[30px] font-black leading-[1.15] text-[#303841] md:text-[38px]">Transformo <span className="text-[#D72323]">dados</span> em decisões que geram <span className="text-[#D72323]">resultado</span></h2>
              <p className="mt-5 text-[17px] font-medium leading-[1.9] text-[#303841]/70">Eu ajudo empresas e projetos a <span className="font-bold text-[#303841]">saírem do achismo</span>: cruzo dados, machine learning e IA para entregar insights claros que orientam <span className="font-bold text-[#303841]">decisões de investimento e estratégia</span>, do diagnóstico à visualização que qualquer pessoa entende.</p>
              <p className="mt-4 text-[17px] font-medium leading-[1.9] text-[#303841]/70">Sou formado em <span className="font-bold text-[#303841]">Ciência da Computação</span> e <span className="font-bold text-[#303841]">Análise e Desenvolvimento de Sistemas</span>, atuo como freelancer desde 2021 e fiz formação intensiva de <span className="font-bold text-[#303841]">400h em Engenharia de Dados AWS na CompassUOL</span>, com certificações Scrum e XP.</p>
              <p className="mt-4 text-[17px] font-medium leading-[1.9] text-[#303841]/70">Criei o <span className="font-bold text-[#D72323]">GrowGuru</span>, <span className="font-bold text-[#303841]">selecionado pelo SEBRAE</span> para a Jornada Startup. Fui <span className="font-bold text-[#303841]">campeão RoboCode 2018</span> </p>
              <p className="mt-5 border-t border-[#303841]/10 pt-4 text-[12px] font-black uppercase tracking-widest text-[#303841]/70">
                SEBRAE <span className="mx-2 text-[#3A4750]">✦</span> CompassUOL <span className="mx-2 text-[#3A4750]">✦</span> AWS <span className="mx-2 text-[#3A4750]">✦</span> Fatec
              </p>
              <a href="https://www.linkedin.com/in/leandromarianojr" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex h-12 items-center rounded-[5px] bg-[#D72323] px-8 text-[14px] font-bold text-white transition-transform hover:scale-105">
                Quero trabalhar com o Leandro
              </a>
            </Reveal>
          </div>
          <div className="relative mx-auto self-end md:mx-0 md:-mb-16 md:-mt-16">
            <Reveal delay={0.1}>
              {/* eslint-disable-next-line @next/next/no-img-element */}<img src="/2.png?v=1" alt="Leandro Mariano Jr." className="max-h-[480px] w-auto max-w-full rounded-[10px] rounded-b-none object-contain md:max-h-[600px]" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRABALHOS & EXPERIMENTOS */}
      <section id="projetos" className="mx-auto w-full max-w-[1440px] scroll-mt-20 px-6 py-12 text-center">
        <Reveal><h2 className="text-[32px] font-black text-[#303841] md:text-[40px]">Trabalhos & Experimentos</h2>
        <p className="mx-auto mt-3 max-w-2xl text-[16px] leading-relaxed text-[#303841]/70">Aplicando Análise de Dados avançada e Análise de Sistemas para construir soluções inteligentes, escaláveis e orientadas a dados.</p></Reveal>
        <div className="mt-6 flex flex-wrap justify-center gap-2.5">
          {filters.map((f) => (
            <button key={f} onClick={() => { setActive(f); setOpenId(null); }} className={cn("rounded-[5px] border px-4 py-2.5 text-[13px] font-bold transition-all duration-300 ease-out", active === f ? "border-[#D72323] bg-[#D72323] text-white shadow-[3px_3px_0_#303841]" : "border-[#303841]/15 bg-white text-[#303841] hover:border-[#D72323] hover:text-[#D72323]")}>{f}</button>
          ))}
        </div>
        <AnimatePresence mode="popLayout">
        {(() => {
          const open = works.find((w) => w.id === openId);
          if (open) {
            return (
              <motion.div key={`panel-${open.id}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="fixed inset-0 z-[60] overflow-y-auto bg-[#EEEEEE]" onClick={() => setOpenId(null)}>
                <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[340px] overflow-hidden opacity-60">
                  <GlowHorizonFM variant="top" className="inset-0" />
                </div>
                <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} onClick={(e) => e.stopPropagation()} className="relative grid min-h-full md:grid-cols-2">
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="relative h-[42vh] p-4 md:sticky md:top-0 md:h-svh md:p-6">
                    <ProjectGallery images={[open.image, ...open.gallery]} title={open.title} contain={open.imgFit === "contain"} />
                  </motion.div>
                  <div className="relative px-6 py-10 md:p-14">
                    <div className="flex justify-end">
                      <button onClick={() => setOpenId(null)} className="fixed right-5 top-5 z-20 inline-flex items-center gap-1.5 rounded-full border border-[#303841]/15 bg-white/90 px-4 py-2 text-[12px] font-bold text-[#303841] backdrop-blur transition-colors hover:border-[#D72323] hover:bg-[#D72323] hover:text-[#EEEEEE] md:right-8 md:top-8">
                        <ArrowLeft size={13} /> Voltar aos projetos
                      </button>
                    </div>
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }} className="flex flex-wrap gap-2">
                      {open.categories.map((c) => (
                        <span key={c} className="rounded-full bg-[#D72323] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white">{c}</span>
                      ))}
                    </motion.div>
                    <h3 className="mt-4 text-[38px] font-black leading-[1.05] text-[#303841] md:text-[52px]">
                      {open.title.split(" ").map((w, i, arr) => (
                        <motion.span key={`${w}-${i}`} initial={{ opacity: 0, y: 30, filter: "blur(12px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1, delay: 0.3 + i * 0.14, ease: [0.16, 1, 0.3, 1] }} className={`inline-block ${i === arr.length - 1 ? "text-[#D72323]" : ""}`}>{w}&nbsp;</motion.span>
                      ))}
                    </h3>
                    {open.kpis.length > 0 && (
                      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }} className="mt-6 border-y border-[#303841]/10 py-5">
                        <div className="flex items-stretch divide-x divide-[#303841]/10">
                          {open.kpis.map((k, i) => (
                            <div key={k.label} className="flex-1 px-3 text-center first:pl-0 last:pr-0">
                              <p className="font-outline text-[38px] uppercase leading-none text-[#D72323] md:text-[46px]">
                                <KpiCounter value={k.value} delay={0.8 + i * 0.18} />
                              </p>
                              <p className="mt-2 text-[11px] font-black uppercase leading-tight tracking-[0.16em] text-[#303841]/70">{k.label}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }} className="mt-8">
                      <SectionLabel delay={0.9}>☑ Descrição</SectionLabel>
                      <p className="mt-4 text-[17px] font-medium leading-[1.9] text-[#303841]/85">{open.details}</p>
                    </motion.div>
                    {open.objetivo && (
                      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mt-8">
                        <SectionLabel delay={1.0}>☑ Objetivo</SectionLabel>
                        <p className="mt-4 text-[17px] font-medium leading-[1.9] text-[#303841]/80">{open.objetivo}</p>
                      </motion.div>
                    )}

                    {open.does.length > 0 && (
                      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }} className="mt-8">
                        <SectionLabel delay={1.1}>☑ Funcionalidades</SectionLabel>
                        {open.listFeatures ? (
                          <ul className="mt-5 space-y-3.5 text-left">
                            {open.does.map((d) => {
                              const [head, ...rest] = d.split(" — ");
                              return (
                                <li key={d} className="flex gap-3.5 text-[16px] font-medium leading-[1.7] text-[#303841]/80">
                                  <span className="mt-[7px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#D72323]" />
                                  <span>
                                    <span className="font-black text-[#303841]">{head}</span>
                                    {rest.length > 0 && <> — {rest.join(" — ")}</>}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        ) : (
                          <p className="mt-4 text-[17px] font-medium leading-[2] text-[#303841]/80">
                            {open.does.map((d, i) => (
                              <span key={d}>{i > 0 && <span className="mx-3 text-[#3A4750]">✦</span>}{d}</span>
                            ))}
                          </p>
                        )}
                      </motion.div>
                    )}
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1, ease: [0.16, 1, 0.3, 1] }} className="mt-8">
                      <SectionLabel delay={1.2}>☑ Tecnologias</SectionLabel>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {open.tools.map((t) => (
                          <span key={t} className="inline-flex items-center gap-2 rounded-full border border-[#303841]/15 bg-[#303841]/5 px-4 py-2 text-[14px] font-medium text-[#303841]/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D72323]/70 hover:bg-[#D72323]/10 hover:text-[#303841]">
                            <TechIcon name={t} />{t}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.3, ease: [0.16, 1, 0.3, 1] }} className="mt-9">
                      <SectionLabel delay={1.4}>☑ Link do projeto</SectionLabel>
                      <div className="mt-5 flex flex-wrap gap-3">
                        {!open.link.includes("github") && (
                          <a href={open.link} target="_blank" rel="noopener noreferrer">
                            <Button className="h-12 rounded-[5px] px-7 text-[13px]">
                              Ver projeto <ArrowUpRight size={15} />
                            </Button>
                          </a>
                        )}
                        <a href={open.repo} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="h-12 rounded-[5px] px-7 text-[13px]">
                            <FaGithub size={15} /> GitHub
                          </Button>
                        </a>
                        <a href={`${open.repo}#readme`} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" className="h-12 rounded-[5px] px-7 text-[13px]">
                            Documentação
                          </Button>
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          }
          return (
        <motion.div key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="mx-auto mt-6 max-w-[1320px] space-y-3 text-left">
          {rows.map((row, ri) => {
            const hasFeatured = row.some((s) => matches(s.item, active));
            return (
              <motion.div key={ri} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.1 + ri * 0.12, ease: [0.16, 1, 0.3, 1] }} className="flex gap-3">
                {row.map((slot) => {
                  const featured = matches(slot.item, active);
                  return (
                    <button
                      key={slot.item.id}
                      onClick={featured ? () => setOpenId(slot.item.id) : undefined}
                      className={`group relative h-[200px] overflow-hidden rounded-[10px] border border-[#303841]/30 text-left transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${featured ? "min-w-0 flex-1 cursor-pointer border-transparent bg-[#D72323] text-white ring-2 ring-[#D72323]" : `shrink-0 bg-white ${hasFeatured ? "w-[200px]" : "min-w-0 flex-1"}`}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}<img src={slot.item.image} alt={slot.item.title} className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${featured ? "opacity-0" : "opacity-100 grayscale"}`} />
                      {/* eslint-disable-next-line @next/next/no-img-element */}<img src={slot.item.image} alt="" aria-hidden className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02] ${featured ? "opacity-100" : "opacity-0"}`} />
                      <div className={`absolute inset-0 transition-all duration-[1100ms] ${featured ? "opacity-100" : "opacity-0"}`} style={{ background: "linear-gradient(to right, rgba(238,238,238,0.15) 0%, rgba(215,35,35,0.88) 45%, #D72323 75%, #3A4750 100%)" }} />
                      <span className={`absolute left-4 top-4 rounded-full bg-[#D72323] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white transition-all delay-200 duration-500 ${featured ? "opacity-100" : "opacity-0"}`}>
                        {active === "Todos" ? slot.item.categories[0] : active}
                      </span>
                      <motion.div key={featured ? active : "plain"} initial={{ opacity: 0, x: 24 }} animate={{ opacity: featured ? 1 : 0, x: featured ? 0 : 24 }} transition={{ duration: 0.6, delay: featured ? 0.35 : 0, ease: [0.16, 1, 0.3, 1] }} className="absolute inset-y-0 right-0 flex w-[46%] flex-col justify-center pr-5 text-right">
                        <p className="text-[28px] font-black leading-tight">{slot.item.title}</p>
                        <p className="ml-auto mt-2 max-w-[280px] text-[15px] font-medium leading-snug opacity-90">{slot.item.short}</p>
                        <p className="mt-2 text-[12px] font-black text-white">{slot.item.tags}</p>
                        <span className="mt-2 text-[12px] font-bold text-white">Clique para ver mais →</span>
                      </motion.div>
                    </button>
                  );
                })}
              </motion.div>
            );
          })}
        </motion.div>
          );
        })()}
        </AnimatePresence>
      </section>

      {/* ARSENAL TECNOLÓGICO - órbitas 21st.dev */}
      <section id="arsenal" className="mx-auto w-full max-w-[1440px] scroll-mt-20 px-6 py-10 text-center">
        <OrbitArsenal />
        <div className="mx-auto mt-12 h-px max-w-[1440px] bg-[#3A4750]/70" />

        {/* DESTAQUE - GrowGuru */}
        <h2 className="mt-10 text-[32px] font-black text-[#303841] md:text-[40px]">Destaque</h2>
        <p className="mx-auto mt-3 max-w-2xl text-[16px] leading-relaxed text-[#303841]/70">Projeto selecionado e apoiado pelo SEBRAE para se tornar uma startup.</p>
        <div className="relative mx-auto mt-6 h-[260px] max-w-[1320px] overflow-hidden rounded-[10px] bg-[#D72323] text-left text-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=60" className="absolute inset-y-0 left-0 h-full w-[50%] object-cover" style={{ maskImage: "linear-gradient(to right, black 30%, transparent 98%)", WebkitMaskImage: "linear-gradient(to right, black 30%, transparent 98%)" }} alt="GrowGuru" />
          <div className="absolute inset-y-0 right-0 flex w-[64%] flex-col justify-center pr-6 text-right">
            <span className="ml-auto inline-flex w-fit items-center gap-1 rounded-full bg-[#303841] px-2.5 py-1 text-[9px] font-black uppercase text-[#EEEEEE]">
              <Trophy size={10} /> Selecionado SEBRAE
            </span>
            <p className="mt-2 text-[24px] font-black leading-none">Grow<span className="opacity-70">Guru</span></p>
            <p className="ml-auto mt-2 max-w-[400px] text-[15px] font-medium leading-[1.7] text-white"><strong>Análise de dados, machine learning e redes neurais</strong> aplicados ao mercado financeiro. A <strong>IA</strong> traduz números em decisões de investimento. Selecionado pelo SEBRAE.</p>
            <p className="mt-2 text-[13px] font-bold text-white/90">#DataScience #MachineLearning #IA #Finanças</p>
            <a href="https://growguru.netlify.app/" target="_blank" rel="noopener noreferrer" className="mt-2.5 inline-flex w-fit items-center gap-1 self-end rounded-[5px] bg-[#303841] px-4 py-2.5 text-[13px] font-bold text-[#EEEEEE] transition-transform hover:scale-105">
              Acessar o projeto
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="mt-8 w-full scroll-mt-20 border-t border-[#303841]/10 bg-white">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-2 gap-8 px-6 py-10 text-[14px] md:grid-cols-[1fr_1fr_1.6fr]">
          <div><p className="border-b border-[#D72323]/40 pb-2 font-black text-[#D72323]">Portfólio</p>
            <ul className="mt-3 space-y-2 text-[#303841]/70">
              <li><a href="#sobre" className="transition-colors hover:text-[#D72323]">Sobre Mim</a></li>
              <li><a href="#projetos" className="transition-colors hover:text-[#D72323]">Projetos</a></li>
              <li><a href="#arsenal" className="transition-colors hover:text-[#D72323]">Arsenal</a></li>
              <li><a href="#sobre" className="transition-colors hover:text-[#D72323]">Formação</a></li>
              <li><a href="https://www.linkedin.com/in/leandromarianojr" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#D72323]">Certificados</a></li>
            </ul>
          </div>
          <div><p className="border-b border-[#D72323]/40 pb-2 font-black text-[#D72323]">Navegação</p>
            <ul className="mt-3 space-y-2 text-[#303841]/70">
              <li><a href="#inicio" className="transition-colors hover:text-[#D72323]">Início</a></li>
              <li><a href="#projetos" className="transition-colors hover:text-[#D72323]">Projetos</a></li>
              <li><a href="#arsenal" className="transition-colors hover:text-[#D72323]">Habilidades</a></li>
              <li><a href="mailto:lemariano25@gmail.com" className="transition-colors hover:text-[#D72323]">Contato</a></li>
              <li><a href="#inicio" className="transition-colors hover:text-[#D72323]">Voltar ao topo</a></li>
            </ul>
          </div>
          <div><p className="border-b border-[#D72323]/40 pb-2 font-black text-[#D72323]">Vamos Conversar?</p>
            <p className="mt-3 text-[15px] leading-relaxed text-[#303841]/70">Estou sempre aberto a novas oportunidades, colaborações em projetos de IA, ou apenas para trocar uma ideia sobre tecnologia.</p>
            <div className="mt-4 flex flex-col gap-2.5">
              <a href="mailto:lemariano25@gmail.com" className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#D72323] px-5 text-[14px] font-bold text-white transition-transform hover:scale-[1.02]">
                <Mail size={15} /> lemariano25@gmail.com
              </a>
              <div className="flex gap-2.5">
                <a href="https://www.linkedin.com/in/leandromarianojr" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-full border border-[#303841]/20 px-4 text-[14px] font-bold text-[#303841]/80 transition-colors hover:border-[#D72323] hover:text-[#D72323]">
                  <FaLinkedin size={15} /> LinkedIn
                </a>
                <a href="https://github.com/leandro-25" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-full border border-[#303841]/20 px-4 text-[14px] font-bold text-[#303841]/80 transition-colors hover:border-[#D72323] hover:text-[#D72323]">
                  <FaGithub size={15} /> GitHub
                </a>
              </div>
              <p className="mt-1 text-[13px] text-[#303841]/70">São Paulo · SP</p>
            </div>
          </div>
        </div>
        <div className="bg-[#303841]"><div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-3 text-[13px] text-[#EEEEEE]/70"><span>© 2026 - Todos os direitos reservados.</span><span>Privacy Policy - Terms Conditions</span></div></div>
      </footer>
    </div>
  );
}
