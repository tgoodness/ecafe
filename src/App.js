import React from "react";
import "./App.css";
import Index from "./components/config/Index";
import LoadingBar from "./components/controls/preloader/react-top-loading-bar";
function App() {
  return (
    <div className="App">
      <LoadingBar />
      <Index />
    </div>
  );
}

export default App;
