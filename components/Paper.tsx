import React from 'react'

export default function Paper({children, title}: {children: React.ReactNode, title: string}) {
  return (
    <div className='card p-40 mt-15 text-center'>
        <h1 className="mb-15 fw-500 fs-4">{title}</h1>
        {children}
    </div>
  )
}
