//import logo from './logo.svg';
import React,{useState} from 'react';
import Header from './components/Header';
import Form from './components/FormModule';
import TodoList from './components/TodoList';
import './App.css';

const App =() => {
  const[value,setValue]=useState('');
  const[todos,setTodos]=useState([]);
  const[editTodo, setEditTodo] = useState(null);
  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>
        <div>
          <Form input={value} setInput={setValue} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/>
        </div>
        <div>
          <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
        </div>

      </div>
      
    </div>
  );
}

export default App;
