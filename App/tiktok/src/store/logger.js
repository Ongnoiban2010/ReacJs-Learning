
function logger(reducer) {
    return (preState, action) => {
        console.group(action.type);
        console.log("Prev state: ", preState)
        const nextState = reducer(preState, action)
        console.log("Next State")
        console.groupEnd()
        return nextState;
    }
}

export default logger