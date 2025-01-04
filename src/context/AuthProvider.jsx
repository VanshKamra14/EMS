import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utilis/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  // localStorage.clear()

    const [userData, setuserData] = useState(null)

    useEffect(() => {
      setLocalStorage()
        const {employees} = getLocalStorage()
        setuserData(employees)
    }, [])
    

  return (
    <div>
        <AuthContext.Provider value={[userData,setuserData]}>
        {children}
        </AuthContext.Provider>
      
    </div>
  )
}

export default AuthProvider
