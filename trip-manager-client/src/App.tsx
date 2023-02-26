import React from "react";
import "./App.css";
import TripCard from "./components/TripCard/TripCard";
import AddIcon from "@mui/icons-material/Add";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trip App Manager</h1>
        <AddIcon />
        <TripCard
          title={"Trip to Paris"}
          description={"Travel in paris and see th Eifel tower"}
          startDate={"2023-01-01"}
          endDate={"2023-01-06"}
          maxTemp={10}
          minTemp={5}
        />
      </header>
    </div>
  );
}

export default App;
