import {ThemeContext} from './ThemeContext'
import {useContext} from 'react';

function Paragrap() {
    const context = useContext(ThemeContext);
    return (
        <div>
            <p className={context.theme}>Paragrap aaaaaaaaa</p>
        </div>
    )
}

export default Paragrap;