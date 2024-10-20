import React from 'react'

const Main = ({children}) => {
  return (
    <main id='contents' role='contentinfo'>
      {children}
    </main>
  )
}

export default Main
