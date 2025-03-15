import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//import LogoDark from "./LogoDark.svg" 
//import LogoLight from "./LogoLight.jpg"
//import Cart from "./Cart.jpg"
//import github from "./githublogo.png"
//import google from "./google.png"
//import payment from "./payment.png"


//export {LogoDark , LogoLight , Cart , github , google , payment};
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
