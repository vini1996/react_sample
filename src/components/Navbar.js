
// import PropTypes from 'prop-types'
// // import { Link } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'


// export default function Navbar(props) {
//   return (
//     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//     <div className="container-fluid">
//       <NavLink activeClassName="active" className="navbar-brand" to="/">{props.title}</NavLink>
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//             <NavLink activeClassName="active" className="nav-link active" aria-current="page" to="/">home</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink activeClassName="active" className="nav-link" aria-current="page" to="about">About</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink activeClassName="active" className="nav-link" aria-current="page" to="users">Users</NavLink>
//           </li>
//           <li className="nav-item"> <NavLink activeClassName="active" className="nav-link" aria-current="page" to="news">News</NavLink> </li>
            
//           <li className="nav-item"> <NavLink activeClassName="active" className="nav-link" aria-current="page" to="news/business">business</NavLink></li>
//           <li className="nav-item"> <NavLink activeClassName="active" className="nav-link" aria-current="page" to="news/entertainment">entertainment</NavLink></li>

//           <li className="nav-item"> <NavLink activeClassName="active" className="nav-link" aria-current="page" to="news/health">health</NavLink></li>
//           <li className="nav-item"> <NavLink activeClassName="active" className="nav-link" aria-current="page" to="news/science">science</NavLink></li>
//           <li className="nav-item"> <NavLink activeClassName="active" className="nav-link" aria-current="page" to="news/sports">sports</NavLink></li>
//           <li className="nav-item"> <NavLink activeClassName="active" className="nav-link" aria-current="page" to="news/technology">technology</NavLink></li>
//         </ul>
//         <div style={{height:20, width:20}} className='bg-primary rounded mx-2' onClick={() => {props.togglemode('primary')}}></div>
//         <div style={{height:20, width:20}} className='bg-secondary rounded mx-2' onClick={() => {props.togglemode('secondary')}}></div>
//         <div style={{height:20, width:20}} className='bg-success rounded mx-2' onClick={() => {props.togglemode('success')}}></div>
//         <div style={{height:20, width:20}} className='bg-warning rounded mx-2' onClick={() => {props.togglemode('warning')}}></div>
//         {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={() => {props.togglemode(null)}}> */}
//         <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={() => {props.togglemode(null)}}>
//         <label className="form-check-label" htmlFor="flexSwitchCheckDisabled ">{`Enable ${props.mode === 'light' ? 'dark' : 'light'} mode`}</label>
//             <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" />
            
//             </div>
//       </div>
//     </div>
//   </nav>
//   )
// }

// Navbar.propTypes = {title : PropTypes.string,
//                     about : PropTypes.string}
// Navbar.defaultProps = {
//     title : 'Set title',
//     about : 'set about'
// }

import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import { Link,NavLink, useLocation } from 'react-router-dom'


export default function Navbar(props) {
  const location = useLocation();
  const { pathname } = location;
  // console.log(location)
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">{props.title}</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="users">Users</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="form">Form</NavLink>
          </li>
          <li className="nav-item"> <NavLink className="nav-link" aria-current="page" to="news">News</NavLink> </li>
            
          <li className="nav-item"> <NavLink className="nav-link" aria-current="page" to="news/business">business</NavLink></li>
          <li className="nav-item"> <NavLink className="nav-link" aria-current="page" to="news/entertainment">entertainment</NavLink></li>

          <li className="nav-item"> <NavLink className="nav-link" aria-current="page" to="news/health">health</NavLink></li>
          <li className="nav-item"> <NavLink className="nav-link" aria-current="page" to="news/science">science</NavLink></li>
          <li className="nav-item"> <NavLink className="nav-link" aria-current="page" to="news/sports">sports</NavLink></li>
          <li className="nav-item"> <NavLink className="nav-link" aria-current="page" to="news/technology">technology</NavLink></li>
        </ul>
        <div style={{height:20, width:20}} className='bg-primary rounded mx-2' onClick={() => {props.togglemode('primary')}}></div>
        <div style={{height:20, width:20}} className='bg-secondary rounded mx-2' onClick={() => {props.togglemode('secondary')}}></div>
        <div style={{height:20, width:20}} className='bg-success rounded mx-2' onClick={() => {props.togglemode('success')}}></div>
        <div style={{height:20, width:20}} className='bg-warning rounded mx-2' onClick={() => {props.togglemode('warning')}}></div>
        {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={() => {props.togglemode(null)}}> */}
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={() => {props.togglemode(null)}}>
        <label className="form-check-label" htmlFor="flexSwitchCheckDisabled ">{`Enable ${props.mode === 'light' ? 'dark' : 'light'} mode`}</label>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" />
            
            </div>
      </div>
     
    </div>
  </nav>
  <div style={{backgroundColor:'black', color:'white'}} >
  <p className='container'>{pathname}</p>
  </div>
   
   </>
  )
}

Navbar.propTypes = {title : PropTypes.string,
                    about : PropTypes.string}
Navbar.defaultProps = {
    title : 'Set title',
    about : 'set about'
}