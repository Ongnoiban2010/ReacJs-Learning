import { useState } from 'react';
import Toggle from './Toggle';
import './App.css'

function UseContextComponent() {
    const [theme, setTheme] = useState('dark');

    var toggleThemem = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    return (
        <div style={{padding: '20px'}}>
            <button onClick={toggleThemem}>Toggle theme</button>
            <Toggle theme={theme}/>
        </div>
    )
}

export default UseContextComponent;