
```markdown
# Sistema de Agendamento de Doação de Sangue

## Descrição
Este projeto é uma API RESTful que gerencia o agendamento de doações de sangue em uma instituição. A API permite realizar operações de CRUD (Create, Read, Update, Delete) nas entidades de tipos sanguíneos, pessoas, locais de coleta e doações.

## Tecnologias Utilizadas
- Node.js
- Express
- TypeScript
- PostgreSQL

## Instalação

### Pré-requisitos
- Node.js instalado (versão 14 ou superior)
- npm ou yarn (gerenciador de pacotes)

### Estrutura do Projeto
/src
  /controllers
    /tipos_sanguineos
      crud.js  # Funções CRUD para tipos sanguíneos
  /routes
    tipos_sanguineos.js  # Rotas para a entidade tipos sanguíneos
  server.js  # Arquivo principal do servidor
/database
  client.js  # Prisma Client configurado

### Passo a passo
```bash
1. Clone o repositório:
2. Acesse o diretório do projeto: cd sistema-doacao-sangue
3. Instale as dependências: npm install
4. Configure o banco de dados no arquivo .env : DATABASE_URL="file:./dev.db"
5. Crie o banco de dados e execute as migrações: npx prisma migrate dev --name init
6. Gere o cliente Prisma: npx prisma generate
7. Inicie o servidor em modo de desenvolvimento:npm run dev
8. Para ver o funcionamento do seu Banco de dados:  npx prisma studio
9. servidor do banco de dados estará disponível em http://localhost:5555.
10. Para acessar o servidor, deve-se executar o seguinte comando: node src/server.js
11. O servidor começará a rodar na porta 3000
12. Recomenda-se o uso do Insomnia para teste 
