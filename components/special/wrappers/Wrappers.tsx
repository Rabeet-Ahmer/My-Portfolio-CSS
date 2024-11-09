import React, { FC } from 'react'
import './wrappers.css'  // Import the CSS file

const Wrappers: FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className='wrapper-container'>
        {children}
    </div>
  )
}

export default Wrappers