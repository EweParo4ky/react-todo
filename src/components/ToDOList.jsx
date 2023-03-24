import ToDoItem from "./ToDoItem";

const ToDoList = ({todos, removeTodo, handleToogleComplited}) => {
    return (
        <ul className="list-group">
            {
                todos.map((todo) => (
                    <ToDoItem 
                    key={todo.id} 
                    removeTodo={removeTodo} 
                    handleToogleComplited={handleToogleComplited} 
                    {...todo} />
                ))}
        </ul>
    )
};
export default ToDoList;
