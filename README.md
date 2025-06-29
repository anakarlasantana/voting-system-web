# Voting System Web

> Plataforma para gerenciamento e participação em sessões de votação remota, integrada com backend Python via API RESTful.  
> Frontend React com Redux para estado global, React Query para dados, React Hook Form para formulários, Material UI para UI, e autenticação JWT.

---

## 📋 Descrição do Projeto

Este projeto é uma solução FullStack para gerenciar sessões de votação no contexto de cooperativismo, permitindo que associados votem online de forma segura e transparente.

A aplicação é composta por:

- Backend API RESTful em Python (não incluso neste repositório frontend, mas deve rodar via Docker integrado)
- Frontend React.js com:
  - Tela de login e registro
  - Dashboard com listagem de pautas
  - Tela de votação autenticada
  - Tela de resultados da votação
  - Estado global via Redux + React Query para dados
  - Proteção de rotas conforme autenticação

---

## 🚀 Tecnologias Utilizadas

- **Frontend**

  - React 19
  - Redux Toolkit (estado global)
  - React Query (fetch, cache e sincronização de dados)
  - React Hook Form (formulários)
  - Material UI (UI/UX)
  - React Router Dom v7 (rotas)
  - Axios (HTTP client)

- **Ferramentas de Desenvolvimento**
  - Vite (bundler rápido)
  - TypeScript
  - ESLint (qualidade de código)
  - Yarn 1 (gerenciador de pacotes)

---

## 🐳 Como Rodar a Aplicação

> O projeto frontend é parte da aplicação completa que deve rodar via Docker, contendo backend + frontend.  
> Abaixo as instruções para rodar localmente o frontend, assumindo backend rodando separado.

### Pré-requisitos

- Node.js v18+ e Yarn instalado
- Backend da aplicação rodando e acessível (docker-compose ou localmente)

### Passos

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio/voting-system-web

```

2. Instalar as dependências

```bash
yarn install
```

3. Configure a variável de ambiente VITE_API_URL no arquivo .env na raiz do frontend, apontando para a URL da API backend, ex:

```bash
VITE_API_URL=http://localhost:8000/api
```

4. Inicie o frontend em modo desenvolvimento:

```bash
yarn dev
```

⚙️ Funcionalidades

    Cadastro e Login via JWT

    Listagem de pautas com status dinâmico

    Abrir sessão de votação (tempo configurável)

    Votação restrita a usuários autenticados

    Visualização dos resultados após encerramento

    Tratamento de erros e alertas para o usuário

    Persistência do token e estado global

🧪 Testes
Não implementado testes automatizados no frontend por limitação de tempo, mas ideal seria usar Jest e React Testing Library para componentes e slices.
