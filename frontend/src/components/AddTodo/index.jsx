import './index.css'

const AddTodo = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        const todo = form.todo.value
        // console.log(event.currentTarget.todo.value)

        if(todo !== ''){
            const body = {
                todo,
            }
            fetch(`http://localhost:3000/api/todo`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            .then(() => {
                form.reset()
                props.updateTodos()
            })
        }
    }

    return (
        <form className='add-todo' onSubmit={handleSubmit}>
            <input className='add-todo-input' type='text' name="todo" id="todo" placeholder='Get a jug of milk'></input>
            <button className='btn add-todo-button' type='submit'>Add</button>
        </form>
    )
}

export default AddTodo