
# RocketFood ![restaurant](https://cdn-icons-png.flaticon.com/128/2311/2311475.png)
A comprehensive application that simulates a virtual restaurant menu. It features two types of personas: the restaurant administrator and the user (customer).
This frontend application is packed with carefully crafted pages to consume the backend API, efficiently handling all HTTP Protocol transactions, sending requests, receiving responses, and rendering these responses on the interface.
- Rendering images of dishes along with all their details such as price, description, and ingredients
- Responsive application, following the "mobile-first" design approach
- Includes animations, screen transitions, loaders, and stylized alerts
- Data in JSON format
- Clear routes
- Authentication and authorization through forms
- Support for HTTP requests: GET, POST, PUT, PATCH, and DELETE
- Suporte às requisições HTTP: GET, POST, PUT, PATCH e DELETE

# Funcionalidades
Considering the two personas that can log in, here are the following considerations.
### Administrator's Responsibilities:
- Create, view, edit, and delete dishes from the menu of the administered restaurant

- Track all orders placed by customers on the Orders page and assign a status to each order until its delivery, keeping the user informed about the order's progress

- Search for dishes by title or ingredient
### User's Responsibilities:

- View dishes listed in the Menu, click on a chosen dish, and navigate to the Details screen with its complete description

- Add items to the cart by clicking the "Add" button. The quantity is controlled by the "-" and "+" buttons.

- Clicking the "My Order" button redirects the user to a screen where they can view their order, the total sum, and payment methods

- Remove a dish from the cart, and the total order value should automatically update

- Mark a dish as a favorite, simply click on the heart icon that appears next to each one, as well as remove it from favorites in the same manner.

- Make payments via Pix or card (simulation)

- Track their order and view its status at any moment

- Search for dishes by title or ingredient
# Code Versioning
- Git
- Github

# Technologies Used
- ReactJs
- JavaScript
- HTML
- CSS
- Axios
- Vite
- Styled-components
- Utilized techniques include Components, Contexts, Hooks, LocalStorage, Global Styling, and Theming.

# Usage Guidelines
- To install the project dependencies and initiate its functionality, execute the command npm i or yarn i in the terminal. It's important to run this command to ensure that all necessary dependencies are installed correctly.

- It's necessary to register and then proceed with the login. Only registered users can view the Menu and place orders.

- The routes for the administrator differ from those presented to the user, as the authorizations for Menu usage vary. Refer to "Features" section.

- The administrator and the user are identified through the isAdmin logic developed in the backend to be consumed. This logic returns a boolean value; if it's "1," it indicates an administrator, and if it's "0," it signifies a user. This value should already be configured directly in the database, with "1" indicating an administrator role.
# Previews





## 🔗 Links
[![deploy](https://img.shields.io/badge/deploy-00BFFF?style=for-the-badge&logo=cloud&logoColor=white)](https://rocketfood2023.netlify.app)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/larissa-adler-ewertoncoelho1000)


