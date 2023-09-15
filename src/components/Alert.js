import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
         const lower = word.toLowerCase();
         return lower.charAt(0).toUpperCase() + word.slice(1);
    }
  return (
    props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert" style={{position:'absolute', top:50, width:'100%'}}>
  <strong>{props.alert.msg}</strong> :  {capitalize(props.alert.type)}
</div>
  )
}

export default Alert