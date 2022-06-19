import { useCallback, useEffect, useRef, useState } from "react"
import DemoMemo from './DemoMemo';

function UseRefComponent() {

    const [count, setCount] = useState(60);
    const [number, setNumber] = useState(0);

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

    var handleIncrease = useCallback(() => {
        setNumber(pre => pre + 1)
    }, [])

    return (
        <div style={{padding: 20}}>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <br/>
            <DemoMemo onIncreae = {handleIncrease}/>
            <h2>{number}</h2>
            {/* <button onClick={handleIncrease}>click</button> */}
        </div>
    )
}

export default UseRefComponent