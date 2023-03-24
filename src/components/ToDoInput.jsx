const ToDoInput = ({text, setText, addToDo}) => {
    return (
        <label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button className="btn btn-success" onClick={() => addToDo()}>add Todo</button>
      </label>
    )
};
export default ToDoInput;