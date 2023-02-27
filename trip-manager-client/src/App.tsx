import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Trips from "./components/Trips/Trips";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <h1>Trip App Manager</h1>
          <Trips />
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
