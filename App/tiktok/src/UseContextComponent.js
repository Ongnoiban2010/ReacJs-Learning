import Toggle from './Toggle';
import './App.css'
import {ThemeContext} from './ThemeContext'
import { useContext } from 'react';


function UseContextComponent() {
    const context = useContext(ThemeContext);
    return (
            <div style={{padding: '20px'}}>
                <button onClick={context.toggleThemem}>Toggle theme</button>
                <Toggle/>
            </div>
    )
}

export default UseContextComponent;