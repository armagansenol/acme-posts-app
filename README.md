
# Full-stack React and Node.js Project

This project is a full-stack application consisting of a **Node.js/Express server** and a **React frontend** using Vite. The server handles authentication using Passport.js with bcrypt for password hashing, while the frontend uses React for the user interface, along with Tailwind CSS for styling.

## Project Structure

The project is divided into two main directories:

- **Server**: Contains the backend code, built with **Node.js**, **Express**, and **Passport.js** for authentication.
- **Client**: Contains the frontend code, built with **React**, **Vite**, and **Tailwind CSS** for styling.

### Folder Structure

```text
├── server/              # Backend code
├── client/              # Frontend code
└── README.md            # Project documentation
```

## Technologies Used

### Server

- **Node.js**: JavaScript runtime for server-side programming.
- **Express**: Fast, minimalist web framework for Node.js.
- **Passport.js**: Authentication middleware for Node.js.
- **bcryptjs**: Library for hashing passwords securely.
- **Express-Session**: Middleware for handling sessions in Express.
- **Axios**: Promise-based HTTP client for making API requests.
  
### Client

- **React**: JavaScript library for building user interfaces.
- **Vite**: Frontend build tool for fast development.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: HTTP client for making API requests.
- **Sonner**: Notification (toast) library for UI alerts.
- **Radix UI**: Primitives for building accessible React components.

## Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/armagansenol/acme-posts-app.git
   cd acme-posts-app
   ```

2. **Install dependencies**:

   For **Parent Directory**:

   ```bash
   npm install
   npm run install:all

   ```

   For **Server**:

   ```bash
   cd server
   npm install
   ```

   For **Client**:

   ```bash
   cd client
   npm install
   ```

### Running the Server and Client

The parent `package.json` includes scripts to run both the server and the client simultaneously using **concurrently**.

To start the server and client in development mode:

   ```bash
   npm run dev
   ```

   This will run both the client (React) and server (Express) at the same time.

By default, the **server** will run on `http://localhost:4000` and the **client** on `http://localhost:5173`.

### Environment Variables

Make sure to set up the environment variables for both the server and client based on your configuration. For example:

#### Server Variables

Create a `.env` file in the `server` directory to store sensitive configuration such as session secrets.

Example:

```text
SESSION_SECRET=your-secret-key
PORT=4000
CLIENT_URL=http://localhost:5173
```

#### Client Variables

Create a `.env` file in the `client` directory to store sensitive configuration such as session secrets.

Example:

```text
BASE_URL=http://localhost:5173
```

## Scripts

### Parent Directory Scripts

- `npm run dev`: Start both the server and the client in development mode concurrently.

### Server Scripts

- `npm run dev`: Start the server in development mode with auto-restart.

### Client Scripts

- `npm run dev`: Start the Vite development server for React.

## App Admin Credentials

username: `admin`
password: `password123`
