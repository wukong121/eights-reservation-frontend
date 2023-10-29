import React from 'react';
import './assets/styles/App.css';
import Login from "./components/sessions/Login";
import {Route, Routes} from "react-router-dom";
import Page404 from "./pages/404";
import Signup from "./components/sessions/Signup";
import Home from "./pages/Home";
import PublicRoute from "./components/routes/PublicRoute";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="*" element={<Page404/>}/>
          <Route path="/login" element={
            <PublicRoute>
              <Login/>
            </PublicRoute>
          }/>
          <Route path="/signup" element={
            <PublicRoute>
              <Signup/>
            </PublicRoute>
          }/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </div>
  );
}

export default App;
