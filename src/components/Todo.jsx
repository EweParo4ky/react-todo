import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addToDo } from "../slices/todoSlice"

import ToDoList from './ToDOList';
import ToDoInput from './ToDoInput';
// import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
// import Users from './components/users';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addToDo({ text }));
    setText('');
  };

  return (
    <div className="App container">
      <ToDoInput
        text={text}
        setText={setText}
        addToDo={addTask}
      />
      <ToDoList />
    </div>
  );
}

export default App;