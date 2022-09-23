import React from 'react'

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
   return (
      <button
         type='button'
         style={{ backgroundColor: bgColor, color, borderRadius }}
         className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor} duration-200`}
      >
         {icon} {text}
      </button>
   )
}

export default Button