import {memo} from 'react';

function DemoMemo({onIncreae}) {

    console.log('re-render component con')

    return (
        <>
            <h2>Xin chào anh em</h2>
            <button onClick={onIncreae}>click</button>
        </>
    )
}

export default memo(DemoMemo)