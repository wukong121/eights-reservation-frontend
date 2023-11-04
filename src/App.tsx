import React from 'react';
import './assets/styles/App.css';
import Login from "./components/sessions/Login";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Page404 from "./pages/404";
import Signup from "./components/sessions/Signup";
import Home from "./pages/Home";
import PublicRoute from "./components/routes/PublicRoute";
import Success from "./pages/Success";
import {history} from "./helpers/history";

function App() {
  history.location = useLocation();
  history.navigate = useNavigate();
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
          <Route path="/success" element={<Success/>}/>
        </Routes>
      </div>
  );
}

export default App;
