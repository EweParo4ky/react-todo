const ToDoItem = ({ id, complited, text, removeTodo, handleToogleComplited }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center key={todo.id}">
            <input
                type="checkbox"
                checked={complited}
                onChange={() => handleToogleComplited(id)}
            />
            <span>{text}</span>
            <span className=" delete badge badge-pill badge-danger" onClick={() => removeTodo(id)}>
                close
            </span>
        </li>
    )
};
export default ToDoItem;