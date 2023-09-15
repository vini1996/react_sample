import React,{useState, useContext} from 'react'
import NoteContext from '../context/NoteContext';

export default function TextForm(props) {
const [text, setText] = useState("")
const uppercase = () => {
   setText(text.toUpperCase())
   props.showAlert("Converted to uppercase", "success")
}
const lowercase = () => {
    setText(text.toLowerCase())
    props.showAlert("Converted to Lowercase", "success")
 }

 const cleartext = () => {
    setText('')
    props.showAlert("Text cleared", "success")
 }
const handleOnChange = (event) => {
    setText(event.target.value)

}
const a = useContext(NoteContext)
  return (
   <>
   <div className="container" style={{color : props.mode === 'light' ? 'black' : 'white'}}>
        <h1 className='mt-20'>{props.title} - {text}</h1>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" style={{color : props.mode === 'light' ? 'black' : 'white', backgroundColor : props.mode === 'light' ? 'white' : 'gray'}} value = {text} onChange={handleOnChange}></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={uppercase}>Convert to upper case</button>
        <button type="button" className="btn btn-primary" onClick={lowercase}>Convert to Lower case</button>
        <button type="button" className="btn btn-primary" onClick={cleartext}>clear text</button>
        <h1>Your text summary {a.name}</h1>
        <p>There are {text.length} characters are there</p>
        <p>There are {text.split(' ').length} words are there</p>
        <p>There are {text.split('\n').length} lines are there</p>

        <h1>Preview</h1>
        <p>{text}</p>
   </div>
  
   </>
  )
}
