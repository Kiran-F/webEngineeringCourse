import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import DemoComponent from './App'
import Button from './components/Button.jsx'
import Parent from './App';

function Parentheses() { 
    return (<h1> 
                We are calling function component   
            </h1>) 
            } 
createRoot(document.getElementById('root')).render( 
<StrictMode>
    <h1>I am a Header.</h1> 
    <h1>I am a Header too. {(5 + 10) * 20}</h1> 
    <Parentheses />
    <Button />
    <hr />
    <Parent />
</StrictMode>, 
)
