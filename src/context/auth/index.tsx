'use client'
import { createContext, useContext, useState } from 'react'

import {
  AuthContextProps,
  AuthContextProviderType,
  LoginProps,
  messageDefaultError,
} from './interface'
import { isTokenValid } from '@/utils/Token'
import { POST } from '@/app/api/login/route'
import {
  getTokenLocalStorage,
  saveTokenLocalStorage,
} from '@/utils/LocalStorage'
import { useRouter } from 'next/navigation'

const AuthContext = createContext({} as AuthContextProps)

export function AuthContextProvider({ children }: AuthContextProviderType) {
  const [user, setUser] = useState<any>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()
  const errorToast = (err: string) => {
    alert(err)
  }

  const authentication = async (credentials: LoginProps) => {
    setIsLoading(true)
    try {
      const response = await POST(credentials)
      console.log('etnrou', response)
      if (response.situacao) {
        const { access_token, data } = response

        saveTokenLocalStorage(access_token)
        setUser(data)
        router.push('/cadastro')
        return true
      }

      const { error } = response || {}
      errorToast(error || messageDefaultError)
    } catch (error) {
      errorToast(messageDefaultError)
    }

    setIsLoading(false)
    return false
  }

  const handleLogout = () => {
    saveTokenLocalStorage('')

    window.location.href = '/'
  }

  const token = getTokenLocalStorage()

  const isAuthentication: boolean =
    typeof token === 'string' ? isTokenValid(token) : false

  return (
    <AuthContext.Provider
      value={{
        authentication: (credentials: LoginProps) =>
          authentication(credentials),
        handleLogout: () => handleLogout(),
        isLoading,
        user,
        isAuthentication,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
