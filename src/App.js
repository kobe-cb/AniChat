import React, { useState } from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() { 
  const [{ user }, dispatch] = useStateValue();


  return (
  // BEM Naming Convention
  <div className="app">
    {!user ? (
      <Login />
    ) : ( 
      <div className="app__body"> {/* Main Panel */}
        {/* Manages Room ID Switching */}
        <Router>
          {/* Sidebar | Always Loads*/}
          <Sidebar />
          {/* Chooses URL depending on Room Chosen */}
          <Switch>

            <Route path="/rooms/:roomID">
              {/* Chat */ }
              <Chat />
            </Route>   
            <Route path="/">
              { /* <h1>Home Screen</h1> */ }
              <Chat />
            </Route>

          </Switch>
        </Router>
      </div>
    )}
  </div>
  );
}

export default App;
