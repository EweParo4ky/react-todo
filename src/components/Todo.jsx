import { useState } from 'react';
import ToDoList from './ToDOList';
import ToDoInput from './ToDoInput';
// import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
// import Users from './components/users';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addToDo = () => {
    if (text.trim().length)
      setTodos([...todos,
      {
        id: new Date().toISOString(),
        text,
        active: true,
        complited: false,
      }
      ]);
    setText('');
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToogleComplited = (id) => {
    setTodos(todos.map(
      todo => {
        if (todo.id !== id) {
          return todo;
        }
        todo.complited = !todo.complited;
        return todo;
      }));
  }

  return (
    <div className="App container">
      <ToDoInput
       text={text}
       setText={setText}
       addToDo={addToDo}
      />
     <ToDoList
      todos={todos}
      removeTodo={removeTodo}
      handleToogleComplited={handleToogleComplited}
      />
    </div>
  );
}

export default App;