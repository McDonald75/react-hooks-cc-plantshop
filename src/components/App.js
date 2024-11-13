import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { ContextProvider } from "./context";

function App() {
  return (
    <div className="app">
      <ContextProvider>
      <Header />
      <PlantPage />
      </ContextProvider>
    </div>
  );
}

export default App;
