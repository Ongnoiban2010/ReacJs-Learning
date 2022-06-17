import {useEffect, useState} from 'react';

var tabs = ['posts', 'todos', 'albums'];
const lessons = [
    {
        id: 1,
        name: 'ReactJS là gì? Tại sao nên học ReacJS?'
    },
    {
        id: 2,
        name: 'SPA/MPA là gì?'
    },
    {
        id: 3,
        name: 'Arrow function'
    },
]

function Content() {

    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [showGoToTop, setShowGoToTop] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [countdown, setCountdown] = useState(180);
    const [count, setCount] = useState(1);
    const [avatar, setAvatar] = useState();
    const [lessonId, setLessonId] = useState(1);

    // useEffect(() => {
    //     document.title = title;
    //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
    //     .then(res => res.json())
    //     .then(posts => {
    //         setPosts(posts);
    //     })
    // }, [])

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY >= 200) {
    //             setShowGoToTop(true)
    //             console.log('state')
    //         } else {
    //             setShowGoToTop(false)
    //         }
    //     }
    //     window.addEventListener('scroll', handleScroll)
    //     console.log('add listener')

    //     // cleanup function
    //     // dc goi truoc khi component do bi unmount
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //         console.log('remove listener')
    //     }
    // }, [])


    // useEffect(() => {
    //     var handleResize = () => {
    //         setWidth(window.innerWidth);
    //     }
    //     window.addEventListener('resize', handleResize);

    //     // Cleanup
    //     //  remove listener before coponent be unmount
    //     return () =>  {
    //         window.removeEventListener('resize', handleResize)
    //     }
    // }, [])

    // useEffect(() => {
    //     const timeId = setInterval(() => {
    //         setCountdown(pre => pre - 1) 
    //     }, 1000)
    //     return () => clearInterval(timeId)
    // }, [])
    // // useEffect(() => {
    // //     setTimeout(() => {
    // //         setCountdown(countdown - 1) 
    // //     }, 1000)
    // // }, [countdown])

    // useEffect(() => {
    //     console.log(`Mounted or Re-render lan ${count}`)
    //     return () => {
    //         console.log(`cleanup lan ${count}`)
    //     }
    // }, [count])

    // const handlePreviewAvatar = (e) => {
    //     const file = e.target.files[0];
    //     file.preview = URL.createObjectURL(file);
    //     setAvatar(file)
    // }

    // useEffect(() => {
    //     // cleanup
    //     return () => {
    //         avatar && URL.revokeObjectURL(avatar.preview);
    //     }
    // }, [avatar])

    useEffect(() => {
        var handleComment = ({detail}) => {
            console.log(detail);
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])

    console.log('re-render')

    return (
        <div>
            {/* <div style={{display: 'none'}}>
                <h1>{width}</h1>
                <hr/>
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
            <h1>{countdown}</h1>
            <button onClick={() => setCount(count+1)}>Click me</button>
            <input type="file" onChange={handlePreviewAvatar} />
            <br/>
            { avatar && (
                <img src={avatar.preview} width="80%"/>
                )
            } */}
            <br/>
            <ul>
                {lessons.map(les => (
                    <li 
                        key={les.id}
                        style={les.id === lessonId ? {color: 'red'} : {}}
                        onClick={() => setLessonId(les.id)}
                    >{les.name}</li>
                ))

                }
            </ul>
        </div>
    )
}

export default Content;