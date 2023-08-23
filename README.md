
# RocketFood 
Uma aplicação completa que simula um Menu virtual de um restaurante. Nela existem dois tipos de "persona": o administrador do restaurante e o usuário (cliente).
Esta aplicação Frontend está recheada de páginas cuidadosamente elaboradas para consumirem a API Backend, executando de modo eficiente toda a transação do Protocolo HTTP, enviando as solicitações e recebendo as respostas, bem como renderizando essas respostas na interface.
- Renderização das imagens dos pratos e todos os seus demais dados, como preço, descrição e ingredientes
- Aplicação responsiva, com base no modelo "mobile first"
- Possui animações, transições de tela, loader e alertas estilizados
- Dados em formato JSON
- Rotas claras
- Autenticação e autorização através de formulários
- Suporte às requisições HTTP: GET, POST, PUT, PATCH e DELETE

# Funcionalidades
Diante das duas "personas" que podem fazer login temos as seguintes considerações.

Compete ao Administrador:
- Criar, visualizar, editar e apagar os pratos do menu do restaurante o qual administra.

- Acompanhar todos os pedidos realizados pelos clientes na página Pedidos, e, conferir um status para cada pedido até o momento de sua entrega, mantendo o usuário informado da situação do seu pedido.

- Fazer busca pelo título ou apenas pelo ingrediente do prato.

Compete ao Usuário:
- Visualizar os pratos cadastrados no Menu, clicar no prato escolhido e ir para tela de Detalhes com sua descrição completa.

- Incluir itens no carrinho, clicando no botão incluir. Já a quantidade é controlada pelos botões “-” e “+”.

- Ao clicar no botão meu pedido, o usuário será redirecionado para uma tela onde irá ver o seu pedido, a soma e os métodos de pagamento.

- Excluir um prato do carrinho e o valor total do pedido deve ser atualizado automaticamente.

- Marcar um prato como favorito, basta clicar no coração que aparece ao lado de cada um;

- Realizar o pagamento via pix ou cartão (simulação).

- Acompanhar seu pedido visualizando seu status a qualquer instante.

- Fazer busca pelo título ou apenas pelo ingrediente do prato.

# Code Versioning
- Git
- Github

# Tecnologias utilizadas
- ReactJs
- JavaScript
- HTML
- CSS
- Axios
- Vite
- Styled-components
- Utilizamos das técnicas de Componentes, Contextos, Hooks, LocalStorage, Style Global e Theme.

# Orientações de uso
- É necessário se cadastrar e depois fazer no login. Apenas usuários cadastrados olham o Menu e fazem pedidos.

- As rotas para o administrador são diferentes das rotas apresentadas para o usuário, pois autorizações para uso do Menu são diferentes, vide "Funcionalidades".

- O administrador e o usuário são identificados através da lógica isAdmin que retorna um boolean em sendo "1" é administrador, em sendo "0" é usuário´. Esse valor já deve ser configurado direto no Banco de dados, apontando-se com o número "1" o administrador.
# Previews


## 🔗 Links
- Link do Deploy: rocketfood2023.netlify.app

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)


