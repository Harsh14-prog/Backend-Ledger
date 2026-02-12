# 💳 Bank Transaction System Backend

A production-style Banking Transaction Backend System built using Node.js and Express.js.

---

## 🧠 Overview

This project simulates real-world banking operations:

- Account creation
- Deposits
- Withdrawals
- Inter-account transfers
- Transaction logging

---

## 🔄 System Architecture Flow

```mermaid
flowchart TD
    A[Client / Postman] --> B[Express Routes]
    B --> C[Controller Layer]
    C --> D[Service Layer - Business Logic]
    D --> E[Validation]
    E -->|Valid| F[Database Model]
    E -->|Invalid| G[Error Response]
    F --> H[(Database)]
    H --> I[Response Sent to Client]
```


## 💳 Money Transfer Processing Flow

```mermaid
flowchart TD
    A[Transfer Request] --> B[Validate Input]
    B -->|Invalid| Z[Return Error]

    B --> C[Check Sender Exists]
    C -->|Not Found| Z

    C --> D[Check Receiver Exists]
    D -->|Not Found| Z

    D --> E[Check Sufficient Balance]
    E -->|Insufficient Funds| Z

    E --> F[Start DB Transaction]
    F --> G[Debit Sender]
    G --> H[Credit Receiver]
    H --> I[Insert Transaction Record]
    I --> J[Commit Transaction]
    J --> K[Success Response]
```


## 🔁 Transaction Rollback Safety :

```mermaid
flowchart TD
    A[Begin DB Transaction] --> B[Debit Sender]
    B -->|Fail| R[Rollback]

    B --> C[Credit Receiver]
    C -->|Fail| R

    C --> D[Log Transaction]
    D -->|Fail| R

    D --> E[Commit]
    E --> F[Return Success]
```

---

## 🧾 Features

- Account Management
- Deposit & Withdrawal
- Safe Money Transfer
- Transaction History
- Input Validation
- Error Handling Middleware
- Modular Architecture
- Database Transaction Support
---

## 📦Tech Stack :

- Node.js
- Express.js
- MongoDB 
- Mongoose 
- Postman (Testing)

---

📌API Endpoints :

| Method | Endpoint            | Description      |
| ------ | ------------------- | ---------------- |
| POST   | `/api/accounts`     | Create Account   |
| GET    | `/api/accounts`     | Get All Accounts |
| GET    | `/api/accounts/:id` | Get Account      |

💰 Transactions :

| Method | Endpoint                     | Description         |
| ------ | ---------------------------- | ------------------- |
| POST   | `/api/transactions/deposit`  | Deposit Money       |
| POST   | `/api/transactions/withdraw` | Withdraw Money      |
| POST   | `/api/transactions/transfer` | Transfer Money      |
| GET    | `/api/transactions`          | Transaction History |

--- 

## 📁 Project Structure

```bash
src/
├── routes/
├── controllers/
├── services/
├── models/
├── middlewares/
├── config/
└── app.js
```
---

## ⚙ Installation :

- git clone https://github.com/Harsh14-prog/Backend-Ledger.git
- cd Backend-Ledger
- npm install

--- 

## Create .env file: 

- MONGODB_URI=your_mongodb_connection_string
- JWT_SECRET=your_jwt_secret
- CLIENT_ID=your_google_client_id
- CLIENT_SECRET=your_google_client_secret
- REFRESH_TOKEN=your_refresh_token
- EMAIL_USER=your_email

--- 

## Run:
npm run dev
