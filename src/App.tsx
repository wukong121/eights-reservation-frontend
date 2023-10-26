import React from 'react';
import logo from './logo.svg';
import './assets/styles/App.css';
import Login from "./components/sessions/Login";
import {Route, Routes} from "react-router-dom";
import Page404 from "./pages/404";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://github.com/wukong121"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Visit my profile :)
//         </a>
//       </header>
//     </div>
//   );
// }
function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="*" element={<Page404/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
  );
}

export default App;
