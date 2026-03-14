# Notes App API

A feature-rich RESTful API for personal note management, featuring secure authentication, private collections, and cloud media storage.

## 🌿 Repository Structure

This project followed a staged development process. Each branch represents a completed assignment with specific milestones:

- **main** — The complete, production-ready version of the API.
- **01-express** — Initial setup, Express server, and basic routing.
- **02-mongodb** — MongoDB integration, Mongoose schemas, and Notes CRUD.
- **03-validation** — Added request validation using Joi/Celebrate and centralized error handling.
- **04-auth** — Implementation of secure authentication, sessions, and JWT-based access control.
- **05-mail-and-img** — Password reset via SMTP and cloud media management with Cloudinary.

## 🚀 Features

- **Auth & Security**: JWT-based sessions, HTTP-only cookies, and password hashing with `Bcrypt`.
- **Private Notes**: Users manage only their own data (CRUD).
- **Search & Filters**: Pagination, category filtering, and MongoDB text search.
- **Password Recovery**: Secure reset flow via `Brevo SMTP` and `Handlebars`.
- **Media**: Avatar uploads via `Multer` and `Cloudinary`.

## 🛠 Tech Stack

- **Server**: Node.js, Express.js
- **Database**: MongoDB & Mongoose
- **Security**: JSON Web Tokens (JWT), Bcrypt, Cors
- **Validation**: Celebrate (Joi)
- **Files**: Multer & Cloudinary
- **Logs**: Pino, Pino-http
- **Email**: Nodemailer, Brevo, Handlebars
- **Utilities**: Dotenv, Cookie-parser, Http-errors

## ⚙️ Setup

1. **Clone & Install**:

```bash
git clone https://github.com/olyapoliukhovych/nodejs-hw.git
npm install

```

2. **Environment**:
   Copy `.env.example` to `.env` and fill in:

- `PORT`, `MONGO_URL`, `JWT_SECRET`, `FRONTEND_DOMAIN`
- Brevo SMTP credentials (`HOST`, `PORT`, `USER`, `PASSWORD`, `FROM`)
- Cloudinary credentials (`CLOUD_NAME`, `API_KEY`, `API_SECRET`)

3. **Run**:

```bash
npm run dev

```

## 🛣 API Summary

| Method   | Endpoint                    | Description     |
| -------- | --------------------------- | --------------- |
| `POST`   | `/auth/register`            | Create account  |
| `POST`   | `/auth/login`               | Log in          |
| `POST`   | `/auth/logout`              | Log out         |
| `POST`   | `/auth/refresh`             | Refresh session |
| `POST`   | `/auth/request-reset-email` | Send reset link |
| `POST`   | `/auth/reset-password`      | Reset Password  |
| `PATCH`  | `/users/me/avatar`          | Update avatar   |
| `GET`    | `/notes`                    | List notes      |
| `GET`    | `/notes/:noteId`            | Get note by id  |
| `POST`   | `/notes`                    | Create note     |
| `DELETE` | `/notes/:noteId`            | Delete note     |
| `PATCH`  | `/notes/:noteId`            | Update note     |
