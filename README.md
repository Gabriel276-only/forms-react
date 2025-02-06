Forms-React: Sistema de Login, Verificação e Hospedagem de Quartos

Descrição

Forms-React é um sistema web desenvolvido em React para gerenciamento de hospedagem de quartos. O sistema permite que usuários se cadastrem, façam login, verifiquem suas contas e gerenciem reservas de quartos.

Tecnologias Utilizadas

React.js

React Hook Form

Tailwind CSS

Firebase (ou outra API para autenticação e banco de dados)

React Router

TypeScript

Vite

Funcionalidades

Cadastro de Usuário: Formulário para registro com validação de dados.

Login: Sistema de autenticação com armazenamento seguro de credenciais.

Verificação de Conta: Confirmação de e-mail via link enviado ao usuário.

Funcionalidades à Adicionar

Gerenciamento de Quartos: Interface para adicionar, editar e excluir quartos.

Reserva de Quartos: Usuários podem reservar quartos disponíveis.

Dashboard: Painel para visualização de reservas e status de quartos.

Instalação

Clone o repositório:

git clone https://github.com/seu-usuario/forms-react.git

Acesse a pasta do projeto:

cd forms-react

Instale as dependências:

npm install

Configure o Firebase no arquivo .env:

REACT_APP_FIREBASE_API_KEY=seu-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=seu-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=seu-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=seu-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=seu-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=seu-app-id

Execute o projeto:

npm run dev

Estrutura do Projeto

/

|-- public/
|-- src/
|   |-- assets/
|   |   |-- quartos/
|   |-- components/
|   |   |-- login.tsx
|   |   |-- roomDetails.tsx
|   |   |-- rooms.tsx
|   |-- App.css
|   |-- App.tsx
|   |-- index.css
|   |-- main.test.ts
|   |-- main.tsx


Contribuição

Faça um fork do repositório.

Crie uma nova branch:

git checkout -b minha-feature

Faça suas modificações e commit:

git commit -m "Adicionando nova funcionalidade"

Envie para o repositório remoto:

git push origin minha-feature

Abra um Pull Request.

Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Contato

Caso tenha dúvidas ou sugestões, entre em contato:

Email: gabrielmagaborges@gmail.com

LinkedIn: https://www.linkedin.com/in/gabriel-borges-ab85b1337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app

