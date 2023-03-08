
  const getTodos = async()=>{
    // let todos = await fetch("http://localhost:3001/api/todo/list");
       let todos = await fetch([{
        id:123,
        name:"zarnain",
        isdone: false
      },
    {
      id: 678,
        name:"adeena",
        isdone: true

    }]);

    return todos.json();
  }
    
    export default  async  function TodoList(){
    const {todos } =await getTodos()
console.log(todos);
    return(
    <div>
      <ul style={{listStyleType  : "none" , padding:0}}>
        <li style={{padding: "5px 0"}}>Todo1</li>
        <li style={{padding: "5px 0"}}>Todo2</li>
        <li style={{padding: "5px 0"}}>Todo3</li>
      </ul>
    </div>
    );
}