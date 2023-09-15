
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const state = {
        'name' : 'vinay',
        'class' : '10b'
    }
    return (
        <NoteContext.Provider value = {state}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;






