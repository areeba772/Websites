# E-Commerce Full-Stack Web Application

A fully functional eCommerce web application built with React (frontend) and Node.js/Express (backend) with MongoDB database. This project includes both desktop and mobile responsive views with complete backend integration for dynamic content.

## 🚀 Features

### Week 1: Static Frontend Development
- ✅ Responsive design for desktop and mobile views
- ✅ Home Page with featured products
- ✅ Product Listing Page with grid layout
- ✅ Product Details Page
- ✅ Shopping Cart Page
- ✅ Built with Bootstrap for responsive design

### Week 2: Backend Integration
- ✅ MongoDB database setup
- ✅ Express.js RESTful API
- ✅ CRUD operations for products
- ✅ Dynamic product fetching from database
- ✅ Search functionality (by name)
- ✅ Category filtering
- ✅ Sample product data seeding

### Week 3: Additional Features
- ✅ User Authentication (JWT-based)
- ✅ Cart Management with localStorage persistence
- ✅ Admin Panel for product management
- ✅ Protected admin routes
- ✅ User registration and login
- ✅ Responsive testing completed

## 📁 Project Structure

```
ecommerce-fullstack-design/
├── client/                 # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── context/       # Context providers (Cart, User, Admin)
│   │   ├── utils/         # API utilities
│   │   └── App.js
│   └── package.json
│
├── server/                 # Node.js Backend
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Authentication middleware
│   ├── uploads/           # Uploaded images
│   ├── seed.js            # Database seeder
│   └── server.js
│
└── README.md
```

## 🛠️ Technologies Used

### Frontend
- React.js
- React Router DOM
- Bootstrap 5
- Axios
- Context API

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Tokens)
- bcryptjs (Password hashing)
- Multer (File uploads)

## 📋 Prerequisites

Before running this application, make sure you have installed:

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ecommerce-fullstack-design.git
cd ecommerce-fullstack-design
```

### 2. Backend Setup

```bash
cd server
npm install

# Create a .env file in the server directory
cp .env.example .env

# Edit .env file with your MongoDB connection string
# MONGO_URI=mongodb://localhost:27017/ecommerce
# JWT_SECRET=your-secret-key
# PORT=5000
```

### 3. Seed the Database

```bash
cd server
npm run seed
```

This will:
- Create sample products
- Create an admin user (email: `admin@example.com`, password: `admin123`)
- Create a test user (email: `user@example.com`, password: `user123`)

### 4. Start the Backend Server

```bash
cd server
npm run dev
```

The server will run on `http://localhost:5000`

### 5. Frontend Setup

Open a new terminal:

```bash
cd client
npm install

# Create a .env file in the client directory
cp .env.example .env

# Edit .env file with your API URL
# REACT_APP_API_URL=http://localhost:5000/api
```

### 6. Start the Frontend Development Server

```bash
cd client
npm start
```

The frontend will run on `http://localhost:3000`

## 🌐 API Endpoints

### Public Endpoints

- `GET /api/products` - Get all products (supports query params: `keyword`, `category`)
- `GET /api/products/:id` - Get single product by ID

### User Endpoints

- `POST /api/users/signup` - Register new user
- `POST /api/users/login` - User login

### Admin Endpoints (Protected)

- `POST /api/admin/login` - Admin login
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

## 🔐 Default Credentials

### Admin Account
- Email: `admin@example.com`
- Password: `admin123`

### Test User Account
- Email: `user@example.com`
- Password: `user123`

⚠️ **Important:** Change these credentials in production!

## 📱 Pages

1. **Home Page** (`/`) - Featured products display
2. **Products Page** (`/products`) - All products with search and filter
3. **Product Details** (`/product/:id`) - Individual product details
4. **Cart Page** (`/cart`) - Shopping cart with checkout
5. **Login** (`/login`) - User login
6. **Signup** (`/signup`) - User registration
7. **Profile** (`/profile`) - User profile (requires login)
8. **Admin Dashboard** (`/admin/dashboard`) - Admin panel (requires admin login)
9. **Admin Login** (`/admin/login`) - Admin authentication

## 🎨 Responsive Design

The application is fully responsive and works seamlessly on:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚢 Deployment

### Backend Deployment (Render/Heroku)

1. Create a MongoDB Atlas cluster (free tier available)
2. Update `.env` with MongoDB Atlas connection string
3. Deploy to Render or Heroku
4. Set environment variables in deployment platform

### Frontend Deployment (Vercel/Netlify)

1. Build the React app: `npm run build`
2. Deploy the `build` folder to Vercel or Netlify
3. Set `REACT_APP_API_URL` environment variable to your deployed backend URL

## 📝 Environment Variables

### Server (.env)
```env
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your-secret-key-here
PORT=5000
NODE_ENV=development
```

### Client (.env)
```env
REACT_APP_API_URL=http://localhost:5000/api
```

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running locally, or
- Use MongoDB Atlas and update the connection string in `.env`

### CORS Errors
- Make sure the backend CORS is configured to allow your frontend URL

### Images Not Loading
- Check if the `uploads` folder exists in the server directory
- Verify image paths in product data

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📧 Contact

For any questions or issues, please open an issue on GitHub.

## ✨ Acknowledgments

- Bootstrap for the responsive UI framework
- MongoDB for the database solution
- React team for the amazing framework

---

**Deadline:** 28th November 2025

**Good Luck! 🎉**

