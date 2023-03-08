// import { useState } from "react"
// export default () =>  {
//   const [todos,setTodos] =useState (["todo1" , "todo2"])
//   const [todo,setTodo] =useState ('')
//   const removeTodo=(todo)=>{
//     setTodos(todos.filter (t =>t !== todo))
//   }
//   return (  
//      <>
//      <input value={todo} onChange={(e)=>setTodo(e.target.value)}/>
//      <button onClick={()=>setTodos([ ...todos, todo])}>Add</button>
//       {todos.map(todo  =>(
//          <>
//          <h1>{todo}</h1>
//           <button onClick={()=>removeTodo( todo)}>Remove</button>
//         </>
//         ))}
//     </>

// import AddNewTodo from "./add-new-todo";
// import todoList from "./todo-list";
//   )
// }
import AddNewTodo from "./add-new-todo";
import TodoList from "./todo-list";
export default function Page() {
  return(
    <div>
    <AddNewTodo/>
   <TodoList/>
    
  </div >
);
}