import React from 'react'

const Icon = ({iu}) => {
  return (

    <div className='w-8 h-8 bg-blue-950 rounded-full text-gray-300 flex justify-center items-center'>
            {iu?
              <img src="/robot.png" alt="robot" className="rounded-full object-fit" />
            :"U"}
        </div>
  )
}

export default Icon
