import './index.css'

const Todo = (props) => {
    const handleCompleted = (event) => {
        // console.log(event.currentTarget.checked)
        const body = {
            id: props.id,
            content: props.content,
            completed: event.currentTarget.checked ? 1 : 0
        }
        fetch(`http://localhost:3000/api/todo/${props.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(props.updateTodos)
    }

    const handleDelete = () => {
        fetch(`http://localhost:3000/api/todo/${props.id}`, {
            method: "DELETE"
        })
        .then(props.updateTodos)
    }
    return (
        <tr className='todo'>
            <td className='todo-column'>
                <input 
                    type='checkbox' 
                    id={props.id} 
                    checked={props.completed} 
                    onChange={handleCompleted} 
                />
                <label htmlFor={props.id}>{props.content}</label>
            </td>
            <td className='todo-column'><button className='btn' onClick={handleDelete}>Delete</button></td>
        </tr>
    )
}

export default Todo