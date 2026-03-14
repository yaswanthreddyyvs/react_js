import React from 'react'
import 'remixicon/fonts/remixicon.css'

const LeftContent = () => {
  return (
    <div className='h-full flex-col justify-between w-1/3' >
        <div className='p-6'>
            <h3 className='mb-7 leading-[1.1] text-6xl font-bold'>Prospective <br/>customer<br/>segmentation</h3>
            <p className='text-xl font-medium text-gray-600'>Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups</p>
        </div>
        <div className='text-9xl'>
            <i class="ri-arrow-right-up-line"></i>
        </div>
    </div>
  )
}

export default LeftContent