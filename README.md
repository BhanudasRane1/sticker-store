# 🛍️ Sticker Shop – Full Stack Web App (React + Spring Boot)

A full-stack e-commerce application where users can **browse, add, and purchase custom stickers**.  
Built with **React** for the frontend and **Spring Boot (Java)** for the backend, the app provides a seamless shopping experience with **authentication, cart management, checkout, and admin order approvals**.  

---

## 🔗 Live Demo  
🚧 *http://eazystorefrontend.s3-website-us-east-1.amazonaws.com* (Deployed on AWS – EC2 + S3 + RDS + CloudFront)  

---

## 🎥 Demo Video  

👉 *https://drive.google.com/file/d/1oY_-chYGuaTjOC8YoQRyOHlUmZsnOxRE/view?usp=sharing*  

---

## ⚙️ Tech Stack  

### 🖥️ Frontend – React  
- **React (Vite)**  
- **React Router (Protected Routes)**  
- **Axios (API calls)**  
- **TailwindCSS (Dark/Light Mode)**  
- **Prop Drilling (state sharing across components)**  

### 🛠️ Backend – Spring Boot  
- **Java 17+**  
- **Spring Boot (REST APIs)**  
- **Spring Security (JWT + Role-based Access: USER, ADMIN, QA, DEV)**  
- **Spring Data JPA (MySQL)**  
- **Spring Caching (Caffeine TTL, @Cacheable, @CachePut)**  
- **SLF4J (Logging)**  

### ☁️ Cloud Deployment – AWS  
- **Frontend**: S3  
- **Backend**: EC2  
- **Database**: RDS (MySQL)  

---

## 📁 Project Structure  

```bash
sticker-shop/
│── eazystore/                 # Spring Boot (APIs, Security, DB)
│   ├── src/main/java/...    
│   ├── src/main/resources/
│── eazystore-ui/                # React (UI, Components, Routes)
│   ├── src/
│   ├── public/
│── README.md                # Project Documentation
```

---

## 🔑 Features  

- ✅ **User Authentication & Role-Based Access (JWT)**  
- ✅ **Add to Cart, Checkout, and Orders**  
- ✅ **Admin Panel – Approve/Reject Orders**  
- ✅ **Stripe Integration (Demo Payments)**  
- ✅ **CSRF & CORS Security Handling**  
- ✅ **Caching with Caffeine TTL**  
- ✅ **Logging with SLF4J**
- ✅ **Responsive UI with React + Tailwind (Dark/Light Mode)**
- ✅ **Protected Routes in React for role-based access**
- ✅ **State Management with Prop Drilling across components**
- ✅ **Multiple pages: Home, About, Contact, Product Details, Cart, Checkout, Orders, Admin Orders, Profile**

---

## 🚀 Getting Started  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/your-username/sticker-shop.git
cd sticker-shop
```

### 2️⃣ Setup Backend (Spring Boot)  
```bash
cd backend
./mvnw spring-boot:run
```

### 3️⃣ Setup Frontend (React + Vite)  
```bash
cd frontend
npm install
npm run dev
```

---

## 📌 Future Improvements  
- Docker + Kubernetes Deployment  
- Enhanced Analytics for Admin  

---

## 🤝 Contributing  
Pull requests are welcome. For major changes, please open an issue first to discuss.  

---

## 📜 License  
MIT License © 2025 Bhanudas Rane 
