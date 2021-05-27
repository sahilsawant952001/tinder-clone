import React from "react";
import Header from "./Header/Header";
import SwipeButton from "./SwipeButton/SwipeButton";
import TinderCards from "./TinderCards/TinderCards";

function App() {
  return (
    <div className="App">
        <Header/>
        <TinderCards/>
        <SwipeButton/>
    </div>
  );
}

export default App;
