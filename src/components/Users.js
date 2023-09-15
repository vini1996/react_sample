import React,{useState, useEffect} from 'react'
import Todo from './Todo'
function Users() {
  const [users, setUsers] = useState([])
  const [term, setTerm] = useState('')
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      let user = await res.json()
      setUsers(user)
      // console.log(user)
    }
    fetchUsers()
   
  },[])
  let renderedUsers = users.map((value) => {
    return (
      <p><strong key = {value.id}>{value.name}</strong></p>
    );
  });
    
  let filteredUsers = users
  .filter(({ name }) => {
    const lowerCaseName = name.toLowerCase();
    const lowerCaseTerm = term.toLowerCase();
    return lowerCaseName.indexOf(lowerCaseTerm) >= 0;
  })
  .map((value) => {
    return (
      <p key={value.id}>
        <strong>{value.name}</strong>
      </p>
    );
  });
  
  return (
    <>
    <div style={{display:'flex', justifyContent:'space-between'}}>
    <div className='container'> 
      <h1>Sample Text</h1>
      <input type = 'text' value = {term} onChange={(e) => setTerm(e.target.value)}/>
      <div>{filteredUsers}</div>
    </div>
    <div className='container'>
    <Todo/>
    </div>
    </div>
    
    </>
    
   
    
  
  )
}

export default Users