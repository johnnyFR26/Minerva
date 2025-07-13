# Minerva API

This API serves as the backend for the Minerva platform.

## 🚀 Tech Stack

* **Fastify** – High-performance Node.js framework
* **Prisma** – Type-safe ORM for database access
* **TypeScript** – Modern JavaScript with types
* **Nx** – Monorepo management
* **PostgreSQL** – Relational database
* **Cypress/Jest** – Testing

---

## 📂 Project Structure

```
apps/
  api.minerva/          # API source code
    prisma/             # Prisma schema and migrations
    src/
      app/              # Fastify plugins, routes, controllers
      main.ts           # Entry point
libs/
  types/                # Shared TypeScript types
```

---

## ⚙️ Scripts

* `pnpm dev:api` – Start API in development
* `pnpm build` – Build the API
* `pnpm prisma:studio` – Launch Prisma Studio
* `pnpm test` – Run tests

---

## 🛠️ Environment Variables

Create a `.env` file in the root of the monorepo:

```
DATABASE_URL=postgresql://...
PORT=3000
```

---

## 🧪 Testing

E2E tests are configured via Nx. Run:

```
npx nx e2e api.minerva-e2e
```

Unit tests:

```
npx nx test api.minerva
```

---

## 🚀 Deployment

This project is designed to be deployed on Vercel.

**Important:** Ensure you set the `DATABASE_URL` environment variable in Vercel project settings.

---

## 📖 License

MIT License

---

*Developed by JohnnyFR26*
