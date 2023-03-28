import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
    const todos = useSelector(state => state.todos.todos);
    return (
        <ul className="list-group">
            {
                todos.map((todo) => (
                    <ToDoItem
                        key={todo.id}
                        {...todo} />
                ))}
        </ul>
    )
};
export default ToDoList;
