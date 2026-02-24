# Checkout API

API REST desenvolvida com **Node.js, Express, TypeScript e Prisma ORM** para gerenciamento de produtos, atributos, variantes e categorias.

---

## Tecnologias

- Node.js  
- Express  
- TypeScript  
- Prisma ORM  
- Yup  
- Dotenv  
- Cors  

---

## Funcionalidades da API

A API permite gerenciar:

- Atributos
- Valores de atributos
- Produtos
- Variantes de produtos
- Categorias

---

## Estrutura do projeto:

- Controllers
- Factories
- Models 
- Repositories
- Routes
- Services
- Server

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/alantbarboza/checkout.git
cd checkout
```

Instale as dependências:

```bash
npm install
```

---

## Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="sua_string_de_conexao"
PORT=3000
```

## Banco de Dados

Execute as migrations do Prisma:

```bash
npx prisma migrate dev
```

Gerar client do Prisma:

```bash
npx prisma generate
```

Abrir Prisma Studio (opcional):

```bash
npx prisma studio
```

---

## Executando o Projeto

Modo desenvolvimento:

```bash
npm run dev
```

Build para produção:

```bash
npm run build
npm start
```

---