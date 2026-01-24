//App.jsx 
import { useState } from 'react' 
import './App.css' 
import EmployeeComponent from './components/EmployeeComponent.jsx'

function App() { 
    const [count, setCount] = useState(0) 
    return ( 
        <> 
            <h1>Vite + React</h1> 
            <div className="card"> 
                <button className='btn' onClick={() => setCount((count) => count + 1)}> 
                    count is {count} 
                </button> 
            </div> 
<EmployeeComponent />
        </> 
    ) 
} 
export default App 