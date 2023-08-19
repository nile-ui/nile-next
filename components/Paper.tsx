import React from 'react'

export default function Paper({children, title}: {children: React.ReactNode, title: React.ReactNode}) {
  return (
    <div className='bg-white p-40 border-radius-2 mt-15 text-center'>
        <h1 className="mb-15 fw-500 fs-4">{title}</h1>
        {children}
    </div>
  )
}
