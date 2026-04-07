import React from 'react'

function Button({btnStyle,btnText,onClick}) {
  return (
<button className={btnStyle} onClick={onClick}>
   {btnText}
</button>
  )
}

export default Button
