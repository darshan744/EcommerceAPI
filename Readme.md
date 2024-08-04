# eCommerce API

This is a simple eCommerce API built with Express.js, Node.js, and MongoDB. It allows you to manage products and orders in an eCommerce application. The API includes endpoints for creating orders, listing products, and retrieving details for individual products. When an order is placed, the quantity of the products in the database is automatically updated.

## Features

- **Create Orders**: Place new orders and automatically update product quantities.
- **Product Listings**: Retrieve details of individual products or list all products.
- **Error Handling**: Handle undefined or incorrect data requests with appropriate error messages.
- **Environment Configuration**: Configurable port and other settings via `.env` file.

## Technologies Used

- **Node.js**: JavaScript runtime for building scalable network applications.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing product and order data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Nodemon**:For compiling and running program every time file is saved
## Installation and Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/ecommerce-api.git
   cd ecommerce-api```
2. **Initailising**:
   ```bash
   npm init
   npm i mongoose
   npm i nodemon ```
