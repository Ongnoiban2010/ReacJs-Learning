import { useLayoutEffect, useState } from "react";

function Content2() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }
    
    // useEffect(() => {
    //     if (count > 3)
    //         setCount(0)
    // }, [count])

    useLayoutEffect(() => {
        if (count > 3)
            setCount(0)
    }, [count])
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Content2