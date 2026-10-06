# Portfólio Leandro Mariano Jr.

Site pessoal e portfólio de projetos de um Analista de Dados & Engenheiro de Dados, com galeria de trabalhos filtráveis, fichas detalhadas e arsenal tecnológico animado.

## 📸 Demonstração

**Ao vivo:** [https://leandro-25.github.io/Portifolio/](https://leandro-25.github.io/Portifolio/)

- Hero com título em contorno e animação de entrada
- Seção "Sobre Mim" com trajetória e reconhecimentos (SEBRAE, CompassUOL, FATEC)
- Grade de projetos com filtros por categoria e painel fullscreen de detalhes
- Arsenal de tecnologias em órbitas animadas e destaque do GrowGuru

## ✨ Funcionalidades

- **Navegação âncora fixa** com efeito de blur e borda ao rolar a página
- **Filtros de projetos** por categoria: `IA & LLMs`, `Dados & BI`, `Engenharia de Dados`, `Web` e `Todos`, com reflow animado dos cards
- **Ficha de projeto fullscreen** com galeria de screenshots (sticky), KPIs animados (count-up), descrição, objetivo, funcionalidades, tecnologias e links para demo/repositório/documentação
- **Arsenal tecnológico** com ícones em órbita animada
- **Seção de destaque** do GrowGuru (selecionado pelo SEBRAE)
- **Animações e transições** com Framer Motion (entrada de seções, reveal on scroll, crossfade entre estados)
- **Layout totalmente responsivo**, do celular ao desktop
- **Export estático** (`output: "export"`), sem servidor — hospedável em qualquer static host

## 🛠️ Tecnologias

| Área | Ferramentas |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, export estático) |
| Linguagem | TypeScript 5 |
| UI | React 19, Tailwind CSS 4 |
| Animações | Framer Motion |
| Carrossel | Embla Carousel |
| Ícones | lucide-react, react-icons |
| Utilitários | clsx, tailwind-merge, class-variance-authority |
| Qualidade | ESLint 9 + eslint-config-next |
| Fontes | Unbounded, Anton, Inter (next/font) |

## 📦 Instalação

Pré-requisitos: [Node.js](https://nodejs.org) 20+ e npm.

```bash
# 1. Clone o repositório
git clone https://github.com/leandro-25/Portifolio.git
cd Portifolio

# 2. Instale as dependências
npm install
```

## ⚙️ Configuração

O build é estático e lê uma única variável de ambiente:

| Variável | Padrão | Descrição |
| --- | --- | --- |
| `NEXT_BASE_PATH` | `""` | Prefixo do caminho na hospedagem. Ex.: `/Portifolio` no GitHub Pages |

```bash
# Windows (PowerShell)
$env:NEXT_BASE_PATH = "/Portifolio"

# Linux/macOS
export NEXT_BASE_PATH=/Portifolio
```

> Se o repositório for `<usuario>.github.io`, deixe a variável vazia.
> Arquivo de configuração: [`next.config.ts`](./next.config.ts).

## 🚀 Como usar

```bash
npm run dev    # servidor de desenvolvimento em http://localhost:3000
npm run build  # gera a exportação estática na pasta out/
npm run start  # serve o build de produção
npm run lint   # verifica o código com ESLint
```

Edite o conteúdo em [`src/app/page.tsx`](./src/app/page.tsx) — a lista `works` concentra todos os projetos exibidos (título, categorias, imagens, KPIs, links e textos).

## 📁 Estrutura do projeto

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Layout raiz, fontes e metadados
│   │   ├── page.tsx          # Página única (hero, sobre, projetos, arsenal, footer)
│   │   └── globals.css       # Tailwind e tokens de estilo
│   ├── components/
│   │   ├── landing/
│   │   │   ├── glow-horizon.tsx    # Efeito de brilho de fundo
│   │   │   ├── orbit-arsenal.tsx   # Órbitas do arsenal tecnológico
│   │   │   ├── project-gallery.tsx # Galeria de imagens da ficha
│   │   │   └── tech-icons.tsx      # Ícones por tecnologia
│   │   └── ui/
│   │       ├── button.tsx
│   │       └── card.tsx
│   └── lib/
│       └── utils.ts          # cn() (clsx + tailwind-merge)
├── public/                   # Imagens e assets estáticos
├── img/                      # Screenshots dos projetos
├── .github/workflows/        # Deploy automático no GitHub Pages
├── deploy-pages.ps1          # Deploy manual via PowerShell
├── netlify.toml              # Configuração opcional do Netlify
└── next.config.ts            # Export estático e basePath
```

## 🧪 Testes

O projeto não possui suíte de testes unitários. A verificação atual é estática:

```bash
npm run lint   # ESLint (regras eslint-config-next)
npx tsc --noEmit  # checagem de tipos do TypeScript
```

## 🚢 Deploy

Há três caminhos prontos:

1. **GitHub Pages (automático)** — workflow [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml), disparado manualmente (`workflow_dispatch`). Define o `NEXT_BASE_PATH` sozinho, publica a pasta `out/`.
2. **GitHub Pages (manual)** — `./deploy-pages.ps1`, que builda, cria o `.nojekyll` e faz push da pasta `out/` para a branch `gh-pages`.
3. **Netlify** — [`netlify.toml`](./netlify.toml) já aponta `npm run build` e publish `out/`.

A saída é sempre estática: qualquer host que sirva arquivos (Vercel, GitHub Pages, Netlify, S3) funciona.

## 🗺️ Roadmap

- [ ] Modo escuro
- [ ] Busca e paginação nos projetos
- [ ] Página de projeto individual com URL própria (SEO)
- [ ] Blog / notas de estudo
- [ ] CMS headless para cadastro de projetos sem tocar no código
- [ ] Testes unitários e E2E (Vitest + Playwright)
- [ ] Análise de acessibilidade e Core Web Vitals

## 🤝 Contribuindo

Contribuições são bem-vindas:

1. Faça um fork do repositório
2. Crie uma branch: `git checkout -b feature/minha-melhoria`
3. Commit suas mudanças: `git commit -m "feat: descrição da mudança"`
4. Envie: `git push origin feature/minha-melhoria`
5. Abra um Pull Request

Siga o padrão do ESLint (`npm run lint`) e mantenha o estilo existente.

## 📄 Licença

Este projeto está sob a licença MIT — sinta-se livre para usá-lo, desde que mantenha os créditos.
