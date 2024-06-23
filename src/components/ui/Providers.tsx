"use client"
import {SessionProvider} from 'next-auth/react'
import React from 'react'

type Props = {}

const Providers = ({children} : any) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default Providers;