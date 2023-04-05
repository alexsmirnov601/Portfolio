import React from 'react'
import Typewriter from 'typewriter-effect'

const type = () => {
  return (
    <Typewriter
      options={{
        strings: ['Frontend developer'],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default type
