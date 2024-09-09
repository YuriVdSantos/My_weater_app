My Weather App

My Weather App é uma aplicação de previsão do tempo que utiliza a API do OpenWeatherMap para fornecer informações climáticas em tempo real para diferentes cidades. A aplicação foi desenvolvida com Next.js, Tailwind CSS e implementa uma interface moderna e responsiva.

Funcionalidades

Busca e exibição da previsão do tempo para uma cidade.
Exibição de temperatura, descrição do clima e outras informações relevantes.
Interface de usuário responsiva com suporte a tema escuro (dark mode).
Autenticação simulada com redirecionamento para diferentes páginas.
Dashboard protegido, acessível apenas após o login.
Tecnologias Utilizadas

Next.js: Framework de React para aplicações server-side e renderização estática.
Tailwind CSS: Framework de CSS utilitário para criar layouts customizados rapidamente.
OpenWeatherMap API: API externa para obter dados climáticos.
React Icons: Biblioteca de ícones para React.
Requisitos

Node.js (versão 14 ou superior)
NPM ou Yarn
Chave da API do OpenWeatherMap (gratuita ou paga)
Como Rodar o Projeto Localmente

1. Clone o repositório
git clone https://github.com/seu-usuario/my-weather-app.git
cd my-weather-app

2. Instale as dependências
Se você estiver usando NPM:
npm install

Ou, se você estiver usando Yarn:
yarn install

3. Obtenha uma chave da API do OpenWeatherMap
Crie uma conta gratuita no OpenWeatherMap e gere uma chave de API.

4. Configure a chave da API
Crie um arquivo .env.local na raiz do projeto e adicione a chave da API:
NEXT_PUBLIC_OPENWEATHER_API_KEY=YOUR_API_KEY

Substitua YOUR_API_KEY pela sua chave.

5. Execute a aplicação
Execute o servidor de desenvolvimento:
npm run dev

Ou, se estiver usando Yarn:
yarn dev

Acesse http://localhost:3000 para visualizar a aplicação no seu navegador.

6. Login Simulado
Usuário para Dashboard:
Email: admin@admin.com
Senha: password
Usuário para Home:
Email: user@user.com
Senha: password

7. Testes
Para rodar os testes (caso haja testes configurados), execute:
npm run test
Ou
yarn test

Estrutura de Pastas
.
├── app
│   ├── components    # Componentes reutilizáveis como Sidebar, PrivateRoute, etc.
│   ├── dashboard     # Página do dashboard protegido
│   ├── settings      # Página de configurações
│   ├── home          # Página inicial
├── global.css            # Arquivos de estilos globais
├── README.md         # Este arquivo
├── next.config.js    # Configurações do Next.js
├── tailwind.config.js# Configurações do Tailwind CSS
├── .env.local        # Arquivo de variáveis de ambiente
└── package.json      # Dependências e scripts do projeto

Contribuições

Sinta-se à vontade para enviar Pull Requests ou abrir Issues caso encontre algum problema ou tenha sugestões de melhorias.

Licença

Este projeto está sob a licença MIT.
