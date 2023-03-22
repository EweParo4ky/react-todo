import { useState } from 'react';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
// import Users from './components/users';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  return (
    <div className="App">
      <label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>
    </div>
  );
}

export default App;