import {useEffect, useState} from 'react';

var tabs = ['posts', 'todos', 'albums'];

function Content() {

    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [showGoToTop, setShowGoToTop] = useState(false);

    useEffect(() => {
        document.title = title;
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts => {
            setPosts(posts);
        })
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true)
                console.log('state')
            } else {
                setShowGoToTop(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        console.log('add listener')

        // cleanup function
        // dc goi truoc khi component do bi unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
            console.log('remove listener')
        }
    }, [])

    console.log('re-render')

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
            {showGoToTop && (
                <button style={{position: 'fixed', bottom: '10px', right: '10px'}}>Go to top</button>
            )
            }
        </div>
    )
}

export default Content;