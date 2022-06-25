import { useRef } from "react";
import { useStore } from "./store"
import { actions } from "./store"


function ContextUseReducer() {
    const [state, dispatch] = useStore();
    const {todos, todoInput} = state;
    const refInput = useRef();

    const handleSubmit = () => {
        dispatch(actions.addTodos(todos));
        dispatch(actions.setTOdoInput(''));
        refInput.current.focus();
    }

    return (
        <div>
            <h1>Hello anh em div 8</h1>
            <input value={todoInput} onChange={(e) => {
                dispatch(actions.setTOdoInput(e.target.value))
            }}
            ref={refInput}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {todos.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        </div>
    )
}

export default ContextUseReducer