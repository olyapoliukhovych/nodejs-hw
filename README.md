# Notes App API

A feature-rich RESTful API for personal note management, featuring secure authentication, private collections, and cloud media storage.

## 🚀 Features

* **Auth & Security**: JWT-based sessions, HTTP-only cookies, and password hashing with `Bcrypt`.
* **Private Notes**: Users manage only their own data (CRUD).
* **Search & Filters**: Pagination, category filtering, and MongoDB text search.
* **Password Recovery**: Secure reset flow via `Brevo SMTP` and `Handlebars`.
* **Media**: Avatar uploads via `Multer` and `Cloudinary`.

## 🛠 Tech Stack

* **Server**: Node.js, Express.js
* **Database**: MongoDB & Mongoose
* **Security**: JSON Web Tokens (JWT), Bcrypt, Cors
* **Validation**: Celebrate (Joi)
* **Files**: Multer & Cloudinary
* **Logs**: Pino, Pino-http
* **Email**: Nodemailer, Brevo, Handlebars
* **Utilities**: Dotenv, Cookie-parser, Http-errors

## ⚙️ Setup

1. **Clone & Install**:
```bash
git clone https://github.com/olyapoliukhovych/nodejs-hw.git
npm install

```


2. **Environment**:
Copy `.env.example` to `.env` and fill in:
* `PORT`, `MONGO_URL`, `JWT_SECRET`, `FRONTEND_DOMAIN`
* Brevo SMTP credentials (`HOST`, `PORT`, `USER`, `PASSWORD`, `FROM`)
* Cloudinary credentials (`CLOUD_NAME`, `API_KEY`, `API_SECRET`)


3. **Run**:
```bash
npm run dev

```


## 🛣 API Summary

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/auth/register` | Create account |
| `POST` | `/auth/login` | Log in |
| `POST` | `/auth/logout` | Log out |
| `POST` | `/auth/refresh` | Refresh session |
| `POST` | `/auth/request-reset-email` | Send reset link |
| `POST` | `/auth/reset-password` | Reset Password |
| `PATCH` | `/users/me/avatar` | Update avatar |
| `GET` | `/notes` | List notes |
| `GET` | `/notes/:noteId` | Get note by id |
| `POST` | `/notes` | Create note |
| `DELETE` | `/notes/:noteId` | Delete note |
| `PATCH` | `/notes/:noteId` | Update note |
