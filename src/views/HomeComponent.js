import React from 'react'

export default function HomeComponent({ fields }) {
  const { title } = fields
  return (
    <div>
      <div style={{fontSize: 200, color: 'white', zIndex: 9999}}>
        {title}
      </div>
    </div>
  )
}
