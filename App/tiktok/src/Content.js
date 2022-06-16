import {useEffect, useState} from 'react';

var tabs = ['posts', 'todos', 'albums'];

function Content() {

    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');

    useEffect(() => {
        document.title = title;
        // fetch(`https://jsonplaceholder.typicode.com/${type}`)
        // .then(res => res.json())
        // .then(posts => {
        //     setPosts(posts);
        // })
        console.log('re-rendere')
    }, [])

    return (
        <div>
            {tabs.map(tab => (
                <button key={tab} 
                style={type === tab ? {backgroundColor: 'red'} : {}}
                onClick={() => setType(tab)}
                >{tab}</button>
            ))}
            <br></br>
            <input
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content;