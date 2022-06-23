
function logger(reducer2) {

    return (prevState, action) => {
        console.group(action.type)
        console.log('Prev State: ', prevState);
        console.log('Action: ', action)

        const newState = reducer2(prevState, action)

        console.log('New state: ', newState)
        console.groupEnd();
        return newState
    }
}

export default logger;