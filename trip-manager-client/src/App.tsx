import React from "react";
import "./App.css";
import AddIcon from "@mui/icons-material/Add";
import { QueryClient, QueryClientProvider } from "react-query";
import Trips from "./components/Trips/Trips";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <h1>Trip App Manager</h1>
          <AddIcon />
          <Trips />
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
