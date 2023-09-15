import React,{useState} from 'react'

export default function Form() {
const [formData, setFormData] = useState(
    {fname : '',
    age : '',
    email : '',
    phone : ''}
)
const [showFormData, setShowFormData] = useState(false)
const handlesubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    setShowFormData(true)
}

  return (
    <>
    <div className='container'>
    <h2 className='text-center'> Form </h2> 
   <form onSubmit={handlesubmit}>
   <div className='text-center'>
        <p>Name</p>
        <input type="text" value = {formData.fname} onChange={(event) => setFormData({ ...formData, fname: event.target.value })} />
        <p>Age</p>
        <input type="text" value = {formData.age} onChange={(event) => setFormData({ ...formData, age: event.target.value })} />
        <p>Email</p>
        <input type="email" value = {formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
        <p>Phone Number</p>
        <input type="text" value = {formData.phone} onChange={(event) => setFormData({  ...formData, phone: event.target.value })} />
        <p><input type='submit'/></p>
    </div>
   </form>

    {showFormData && Object.entries(formData).map(([key,value]) => {
        return (
            <p key = {key}>{key} : {value}</p>
        )
    })}
    </div>
    
    </>
  )
}
