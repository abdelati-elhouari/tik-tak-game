import React from 'react'

function Gane(props) {
  return (
    <div className='popup'>
    <div className='popup-inner'>
    {props.joueur=='X' ? <h1 style={{color:'red'}}> joueur {props.joueur}est  gagner</h1>:<h1 style={{color:'red'}}> joueur {props.joueur} est  gagner</h1>}
            <button className='ok-btn' onClick={props.onClick} >rester</button>
   </div>
  </div>
  )
}

export default Gane