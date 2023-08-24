# ![restaurant](https://cdn-icons-png.flaticon.com/128/2311/2311475.png)RocketFood
A comprehensive application that simulates a virtual restaurant menu. It features two types of personas: the restaurant administrator and the user (customer).
This frontend application is packed with carefully crafted pages to consume the backend API, efficiently handling all HTTP Protocol transactions, sending requests, receiving responses, and rendering these responses on the interface.
- Rendering images of dishes along with all their details such as price, description, and ingredients
- Responsive application, following the "mobile-first" design approach
- Includes animations, screen transitions, loaders, and stylized alerts
- Data in JSON format
- Clear routes
- Authentication and authorization through forms
- Support for HTTP requests: GET, POST, PUT, PATCH, and DELETE

# 🎯 Functionalities 
Considering the two personas that can log in, here are the following considerations.
### Administrator's Responsibilities
- Create, view, edit, and delete dishes from the menu of the administered restaurant

- Track all orders placed by customers on the Orders page and assign a status to each order until its delivery, keeping the user informed about the order's progress

- Search for dishes by title or ingredient
### User's Responsibilities
- View dishes listed in the Menu, click on a chosen dish, and navigate to the Details screen with its complete description

- Add items to the cart by clicking the "Add" button. The quantity is controlled by the "-" and "+" buttons.

- Clicking the "My Order" button redirects the user to a screen where they can view their order, the total sum, and payment methods

- Remove a dish from the cart, and the total order value should automatically update

- Mark a dish as a favorite, simply click on the heart icon that appears next to each one, as well as remove it from favorites in the same manner.

- Make payments via Pix or card (simulation)

- Track their order and view its status at any moment

- Search for dishes by title or ingredient
 # 🐱 Code Versioning
- Git
- Github

# 🚀 Technologies Used 
- ReactJs
- JavaScript
- HTML
- CSS

- Utilized techniques include Components, Contexts, Hooks, LocalStorage, Global Styling, and Theming.
# 📚 Libraries used 
- axios: ^1.4.0
- react: ^18.2.0
- react-dom: ^18.2.0
- react-icons: ^4.9.0
- react-loader-spinner: ^5.3.4
- react-responsive: ^9.0.2
- react-router-dom: ^6.14.2
- react-slick: ^0.29.0
- react-toastify: ^9.1.3
- styled-components: ^6.0.0-rc.3
- Vite

# 🧭 Usage Guidelines 
- To install the project dependencies and initiate its functionality, execute the command npm i or yarn i in the terminal. It's important to run this command to ensure that all necessary dependencies are installed correctly.

- The administrator and the user are identified through the isAdmin logic developed in the backend to be consumed. This logic returns a boolean value; if it's "1," it indicates an administrator, and if it's "0," it signifies a user. This value should already be configured directly in the database, with "1" indicating an administrator role.

- Steps to Run the Project:

1 Clone the Repository:
Open the terminal or command prompt and navigate to the directory where you want to clone the project. Then, execute the command: 'git clone <REPOSITORY_URL_TO_CLONE>'

2 Access the Project Directory:
Use the 'cd' command in the integrated terminal to enter the cloned project directory.

3 Install Dependencies:
Ensure that you have Node.js installed on your machine. Run the following command to install the project's dependencies listed in the package.json file: 'npm install'

4 Configure Environment Variables:
Set up environment variables as per the .env.example file.

5 Run the Project:
In the integrated terminal, run the command: 'npm run dev'

6 Access the Application:
After starting the project, open a web browser and access the local address indicated in the terminal output. It might be something like http://localhost:3000

# 🔗 Links

[![deploy](https://img.shields.io/badge/deploy-00BFFF?style=for-the-badge&logo=cloud&logoColor=white)](https://rocketfood2023.netlify.app)


[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/larissa-adler-ewertoncoelho1000)

# ⏯️ Previews
Here are just a few of the pages of this Application.

- SingIn
![signin](https://github.com/LaraAEC/api_foodExplorer/assets/91379960/7d48f1e9-6151-4aa3-8bab-d9f69b45a15c)

- Home screen
![home1](https://github.com/LaraAEC/api_foodExplorer/assets/91379960/82efd1e5-1114-4527-b955-af6bfda85ca9)
![home2](https://github.com/LaraAEC/api_foodExplorer/assets/91379960/70fcb680-3528-4b6f-98d1-23708df45198)

- Favorites Screen
![favorites2](https://github.com/LaraAEC/api_foodExplorer/assets/91379960/b119d421-5a92-4e3a-bf51-f1a1b204f43e)

- Favorites Screen
![favorites](https://github.com/LaraAEC/foodExplorer_page/assets/91379960/b5ff5ab4-dd16-42c0-b914-464a388226db)

- "User's 'My Order' Screen"
![request](https://github.com/LaraAEC/api_foodExplorer/assets/91379960/7c691bb7-74a5-4b1b-95a6-dd0fb4faf3a1)

- Payment Screen
![payment](https://github.com/LaraAEC/api_foodExplorer/assets/91379960/b489c0df-8112-4947-9c14-bbd31cc5c085)

- Administrator's New Dish Screen
![newdish](https://github.com/LaraAEC/api_foodExplorer/assets/91379960/9db1a087-f4ec-4c57-8dc3-8f64c0d120d1)

- Administrator's Dish Details Screen
![admindetails](https://github.com/LaraAEC/api_foodExplorer/assets/91379960/0f39672b-802a-4ccb-b5a5-0d87d535a8cb)

- Order Status Update Screen
![adminstatus](https://github.com/LaraAEC/api_foodExplorer/assets/91379960/bf642e47-62d1-4ea5-bc6f-7e47f6458b98)


