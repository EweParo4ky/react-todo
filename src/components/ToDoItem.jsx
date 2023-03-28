import { useDispatch } from "react-redux";
import { removeTodo, handleToogleComplited } from "../slices/todoSlice";

const ToDoItem = ({ id, complited, text }) => {
    const dispatch = useDispatch();
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center key={todo.id}">
            <input
                type="checkbox"
                checked={complited}
                onChange={() => dispatch(handleToogleComplited({id}))}
            />
            <span>{text}</span>
            <span className=" delete badge badge-pill badge-danger" onClick={() => dispatch(removeTodo({id}))}>
                close
            </span>
        </li>
    )
};
export default ToDoItem;