# 🛒 API de Productos

API REST para la gestión de productos utilizando **Node.js**, **Fastify**, **Sequelize** y **PostgreSQL**.

---

## 🚀 Tecnologías usadas

- ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
- ![Fastify](https://img.shields.io/badge/Fastify-000000?logo=fastify&logoColor=white)
- ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=white)
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
- ![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
- ![Zod](https://img.shields.io/badge/Zod-3E7CBA?logo=zod&logoColor=white)

---

## 📄 Descripción

Este proyecto es una API RESTful para la administración de productos. Permite crear, leer, actualizar y eliminar productos en una base de datos PostgreSQL.  
El backend está construido con Fastify y utiliza Sequelize como ORM.  
La validación de datos se realiza con Zod y la configuración de la base de datos se gestiona mediante Docker y variables de entorno.

---

## ⚡ Endpoints principales

- `GET /products` — Listar todos los productos
- `GET /products/:id` — Obtener un producto por ID
- `POST /products` — Crear un nuevo producto
- `PUT /products/:id` — Actualizar un producto existente
- `DELETE /products/:id` — Eliminar un producto

---

## 🐳 Uso con Docker

1. Copia el archivo `.env.example` a `.env` y configura tus variables.
2. Levanta la base de datos con Docker:
   ```sh
   docker-compose up -d
   ```
3. Instala dependencias y ejecuta el servidor:
   ```sh
   npm install
   npm run dev
   ```

---

## 📦 Estructura del proyecto

```
src/
  controllers/
  database/
  dto/
  models/
  routes/
  index.ts
```

---
