import {useEffect, useState} from 'react';

function Content() {

    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        document.title = title;
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(post => {
            setPosts(post);
        })
    }, [])

    return (
        <div>
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