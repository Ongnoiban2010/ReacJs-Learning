import {useEffect, useState} from 'react';

function Content() {

    const [title, setTitle] = useState('');

    useEffect(() => {
        document.title = title;
    })

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(post => {
            console.log(post);
        })

    return (
        <div>
            <input
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
            />
            {console.log('render')}
        </div>
    )
}

export default Content;