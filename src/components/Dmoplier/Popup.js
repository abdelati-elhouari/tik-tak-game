import React from 'react'

function Popup(props) {
   
  return (
    <div className='popup'>
        <div className='popup-inner'>
            <p> rester :{props.second} s</p>
         <p>{props.num.num1} + {props.num.num2} + {props.num.num3} =</p>
         <p><input type="text" value={props.answer} onChange={props.reponse}/></p>
                <button className='ok-btn' onClick={props.onClick} >ok</button>
       </div>
      </div>
  )
}

export default Popup