## Getting Started

### Prerequisites

- [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Backend (API)

1. Open a terminal in the `API` directory.
2. Restore dependencies:
   ```sh
   dotnet restore
   ```
3. Apply database migrations and seed data:
   ```sh
   dotnet run
   ```
   The API will start at `https://localhost:5145`.

### Frontend (React Client)

1. Open a terminal in the `client` directory.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
   The client will run at `http://localhost:5173`.

### Accessing the App

- Open `http://localhost:5173` in your browser.
- The client will communicate with the API at `https://localhost:5145`.

### Troubleshooting

- Make sure both servers are running.
- If you encounter CORS issues, ensure the API allows requests from the client’s origin.
