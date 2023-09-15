import React, { useContext } from 'react'
import NoteContext from '../context/NoteContext';
const About = () => {
   const a = useContext(NoteContext)
  return (
    <div>
        {a.class}
    </div>
     );
}


export default About;