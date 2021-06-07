import React from "react"

export default function Layout({ children }) {
  return (
  	<div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
  	<h1>Header</h1>
  	{children}
  	<h3>Footer</h3>
  </div>
  )
  
}
