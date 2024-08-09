import Todo from '../Todo'
import "./index.css"

const Todos = (props) => {
    return (
        <table className='todos'>
            {props.todos.map(todo => (
                <Todo 
                    key={todo.id} 
                    completed={todo.completed} 
                    content={todo.content} 
                    id={todo.id} 
                    updateTodos={props.updateTodos} 
                />
            ))}
        </table>
    )
}

export default Todos