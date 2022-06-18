import { useEffect, useRef, useState } from "react"

function UseRefComponent() {

    const [count, setCount] = useState(60);

    const timerId = useRef();
    const prevCount = useRef();
    const h1Ref = useRef();

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(pre => pre - 1)
        }, 1000)
        console.log('Start -> ', timerId);
    }

    const handleStop = () => {
        clearInterval(timerId.current);
        console.log('Stop -> ', timerId.current);
    }

    useEffect(() => {
        prevCount.current = count
    }, [count])

    console.log(count, prevCount.current)

    useEffect(() => {
        console.log(h1Ref.current.getBoundingClientRect())
    })

    return (
        <div style={{padding: 20}}>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default UseRefComponent