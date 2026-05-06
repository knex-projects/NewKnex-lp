# Knex LP

Uma landing page moderna desenvolvida com Next.js, React, TypeScript e Tailwind CSS.

## Descrição

Este projeto é uma landing page para a Knex, construída utilizando as tecnologias mais recentes do ecossistema React. Inclui páginas para Home, Sobre, FAQ e Contatos, com componentes reutilizáveis para cartões, formulários, layout e seções.

## Tecnologias Utilizadas

- **Next.js 16.2.2**: Framework React para produção.
- **React 19.2.4**: Biblioteca para interfaces de usuário.
- **TypeScript 5**: Superset JavaScript com tipagem estática.
- **Tailwind CSS 4**: Framework CSS utilitário.
- **ESLint 9**: Ferramenta de linting para JavaScript/TypeScript.
- **Fontes**: Geist, Geist Mono, Quantico e Montserrat.

## Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx          # Página inicial (Home)
│   ├── contatos/
│   │   └── page.tsx      # Página de Contatos
│   ├── faq/
│   │   └── page.tsx      # Página de FAQ
│   └── sobre/
│       └── page.tsx      # Página Sobre
└── components/
    ├── cards/            # Componentes de cartões
    ├── forms/            # Componentes de formulários
    ├── layout/           # Componentes de layout
    └── sections/         # Componentes de seções
public/
└── assets/
    ├── photos/           # Imagens e fotos
    ├── icons/            # Ícones
    └── logos/            # Logos
```


## Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd NewKnex-lp
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Constrói a aplicação para produção.
- `npm run start`: Inicia o servidor de produção.
- `npm run lint`: Executa o ESLint para verificar o código.

## Como Usar

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

2. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

3. Edite os arquivos em `src/app/` para personalizar as páginas.

## Desenvolvimento

Este projeto utiliza:
- **TypeScript** para tipagem estática.
- **Tailwind CSS** para estilização.
- **Next.js App Router** para roteamento.

Certifique-se de seguir as melhores práticas do Next.js, conforme descrito na documentação oficial.

