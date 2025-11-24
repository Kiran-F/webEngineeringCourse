import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <hr />
    <Apps />
  </StrictMode>,
)

import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'; 
function Info() { 
const { firstname } = useParams();
return <h1>Hello, {firstname}!</h1>; 
} 
function Apps() { 
return ( 
<BrowserRouter> 
<nav> 
<Link to="/customer/Emil">Emil</Link> |  
<Link to="/customer/Tobias">Tobias</Link> | 
<Link to="/customer/Linus">Linus</Link> 
</nav> 
<Routes> 
<Route path="/customer/:firstname" element={<Info />} /> 
</Routes> 
</BrowserRouter> 
); 
} 