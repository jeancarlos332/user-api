# 📦 User API - Registro, Login y Autenticación con JWT

Este proyecto es una API REST creada con **Node.js**, **Express**, **MongoDB** y **JWT** para gestionar usuarios: registro, login, consulta y logout. Se ha dockerizado y está lista para desplegar en servicios como **Render**.

---

## 🚀 Funcionalidades

1. **Registro de usuario**  
   Endpoint: `POST /api/auth/register`  
   Registra un nuevo usuario con validaciones de formato.

2. **Login de usuario**  
   Endpoint: `POST /api/auth/login`  
   Permite iniciar sesión con teléfono o nombre de usuario y devuelve un token JWT.

3. **Consultar usuarios**  
   Endpoint: `GET /api/usuarios`  
   Devuelve la lista de usuarios registrados. Requiere autenticación (`x-token` en headers).

4. **Logout**  
   Endpoint: `POST /api/auth/logout`  
   Invalida el token.

---

## 🛠️ Tecnologías

- Node.js
- Express
- MongoDB + Mongoose
- JWT (Json Web Tokens)
- Docker
- Docker Compose

---

## ⚙️ Configuración

### Variables de entorno (`.env`)

Crea un archivo `.env` en la raíz del proyecto con:

```env
PORT=5000
MONGO_URI=mongodb://mongo:27017/userdb
JWT_SECRET=miclaveultrasecreta
TOKEN_EXPIRE=1d
```

### URL API expuesta

La api se encuentra expuesta en la siguiente URL pública : https://user-api-k93q.onrender.com/ 
