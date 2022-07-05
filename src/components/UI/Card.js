import React from 'react'

export default function Card(props) {
  return (
    <div className='border border-info w-25 container mt-5 border-5 rounded-3'>
      {props.children}
    </div>
  )
}
