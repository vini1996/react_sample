import React,{useState, useEffect} from 'react'

function Todo() {
  const [todo, setTodo] = useState([])
  const [term, setTerm] = useState('')
  useEffect(() => {
    const fetchTodo = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      let user = await res.json()
      setTodo(user.slice(0,10))
      // console.log(user)
    }
    fetchTodo ()
   
  },[])
  let renderedUsers = todo.map((value) => {
    return (
      <p><strong key = {value.id}>{value.title}</strong></p>
    );
  });
    
  let filteredUsers = todo
  .filter(({ title }) => {
    const lowerCaseName = title.toLowerCase();
    const lowerCaseTerm = term.toLowerCase();
    return lowerCaseName.indexOf(lowerCaseTerm) >= 0;
  })
  .map((value) => {
    return (
      <p key={value.id}>
        <strong>{value.title}</strong>
      </p>
    );
  });
  
  return (
    <div className='container'> 
      <h1>Sample Text</h1>
      <input type = 'text' value = {term} onChange={(e) => setTerm(e.target.value)}/>
      <div>{filteredUsers}</div>
    </div>
    
  
  )
}

export default Todo