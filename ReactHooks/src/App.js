import React from 'react';
import './App.css';
import {useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { trash } from '@fortawesome/free-solid-svg-icons'
const TODOS_API='https://jsonplaceholder.typicode.com/todos';
const TodoForm=(props)=>{
  const {AddTodo}=props;
  const [todo,setTodos]=useState({id:'',Title:''})
  const onSubmit=(e)=>{
    e.preventDefault();
    AddTodo(todo);

  }
  const onHandleChange=(e)=>{
    
    setTodos(
      {
        ...todo,
        Title:e.target.value
      }
    )

  }
    return(
      <div>
          <form onSubmit={onSubmit}> 
            <input type="text" value={todo.Title} onChange={onHandleChange} placeholder="What do you want to do today..." className="col-8"/>
            <button type="submit" className="ml-2">Submit</button>
          </form>
      </div>
    )

}
const TodoItem=(props)=>{


  const{todos,onTodoDelete}=props;
  function onDelete(TodoId){
    onTodoDelete(TodoId);
  }
    return(
    <div className="row align-middle todo-item">
     <div>
       {todos.Title}
       </div> 
       <div className="d-flex cols-sm-2 py-2 buttons">
         <button onClick={()=>{onDelete(todos.id)}} className="btn btn-sm text-danger">
        
         Delete
         </button>

       </div>
      
      </div>

    )
}

const TodoList=(props)=>{

  const {todos,onTodoDelete}=props;
  const listUI=todos.map((t)=>{
    return(
           <TodoItem onTodoDelete={onTodoDelete} key ={t.id} todos={t}/>
           )}
    )
  return (
    <div>
        <div className="container">
          
          { todos.length >0 ? listUI : <h2>No Todos ... Add some :-)</h2>}
          
      
      
     </div>
    </div>
  )
    

}
function App() {
  
  const [todos,setTodos]=useState(
   [ {id:1,Title:"Todo 1",isCompleted:false},
    {id:2,Title:"Todo 2",isCompleted:false},
  ]);

  // used to fetch todos list from a remote server
  // useEffect(()=>{
  //   fetch(TODOS_API).then(res=> res.json()).then(data => setTodos(data))
  // },[])

 function onTodoDelete(TodoId){
   // alert(TodoId);
    const remainingTodos=todos.filter((t)=>{
      return t.id!= TodoId;
    })
   // alert(JSON.stringify(remainingTodos))
    setTodos(remainingTodos);
  
  }
  const AddTodo=(todo)=>{
    //alert(JSON.stringify(todo));
      todo.isCompleted=false;
      todo.id=new Date();
      setTodos([todo,...todos])
     
  }
  return (
    <div className="container app">
     <h1>TODO APP</h1> 
     <TodoForm AddTodo={AddTodo}/>
     <TodoList onTodoDelete={onTodoDelete} todos={todos}/>
    </div>
  );
}

export default App;
