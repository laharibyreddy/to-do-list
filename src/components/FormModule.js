import React,{useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

const FormModule = ({input,setInput,todos,setTodos,editTodo,setEditTodo}) => {
    
    const updateTodo = (title, id, completed) =>{
        const newTodo = todos.map((todo) => 
            todo.id === id ? {title, id, completed} : todo
        )
        setTodos(newTodo);
        setEditTodo("")
    }
    useEffect(() =>{
        if(editTodo){
            setInput(editTodo.title);
        }
        else{
            setInput('');
        }
    },[setInput,editTodo]);
    const onChangeInput= e =>{
        setInput(e.target.value);
    }
    const onSubmitHandler=e=>{
        e.preventDefault();
        if(!editTodo){
        setTodos([...todos,{id:uuidv4(),title:input,completed:false}]);
        setInput('');
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    }
  return (
    <form onSubmit={onSubmitHandler}>
    <input type='text' placeholder='Enter a todo..' className='task-input' value={input} onChange={onChangeInput}/>
    <button className='button-add' type='submit'>
    {editTodo? 'Ok':'Add'}
    </button>
</form>
  )
}

export default FormModule
