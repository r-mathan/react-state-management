// useState

import React, { useState } from 'react'

export default function StateExample() {

    const [user,setUser] = useState('Hi R.Mathan')

    const changeName = () => {
        setUser("Welcome :-)")
    }

  return (
    <>
        <h1>{user}</h1>
        <button onClick={changeName}>Click here</button>
    </>
  )
}

 