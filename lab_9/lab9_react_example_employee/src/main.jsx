import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client' 
import './index.css' 
import App from './App.jsx'
 
createRoot(document.getElementById('root')).render( 
  <StrictMode>  
   <p>Welcome!</p><b> We Labs </b> 
 <table> 
    <tr> 
      <th>Name</th> 
    </tr> 
    <tr> 
      <td>Sidra</td> 
    </tr> 
    <tr> 
      <td>Shafi</td> 
    </tr> 
  </table> 
  <App />  
  </StrictMode>, 
) 
