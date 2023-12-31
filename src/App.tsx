import React from 'react';
import './assets/styles/App.css';
import Login from "./components/sessions/Login";
import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Page404 from "./pages/404";
import Signup from "./components/sessions/Signup";
import Home from "./pages/Home";
import PublicRoute from "./components/routes/PublicRoute";
import Success from "./pages/Success";
import {history} from "./helpers/history";
import PrivateRoute from "./components/routes/PrivateRoute";

function App() {
  history.location = useLocation();
  history.navigate = useNavigate();
  return (
      <div className="App">
        <Routes>
          <Route path="/*" element={<Page404/>}/>
          <Route path='/' element={
            <Navigate to='/home'></Navigate>
          }/>
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
          <Route path="/home" element={
            <PrivateRoute>
              <Home/>
            </PrivateRoute>
          }/>
          <Route path="/success" element={
            <PublicRoute>
              <Success/>
            </PublicRoute>
          }/>
        </Routes>
      </div>
  );
}

export default App;
