import React, { createContext, ReactNode, useEffect, useState } from "react"
import { login as loginService, logout as logoutService, checkAuthStatus } from "@/api/services/auth"
import { getAuthStatus, getUser, setAuthStatus, setUser, clearSession } from "@/lib/sessionStorage"

interface AuthContextType {
  isAuthenticated: boolean
  user: User | null
  login: (username: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

interface User {
  id: number
  username: string
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(getAuthStatus())
  const [user, setUserState] = useState<User | null>(getUser)

  useEffect(() => {
    const fetchAuthStatus = async () => {
      try {
        const data = await checkAuthStatus()
        if (data?.error) {
          console.error("Auth status check failed:", data.error)
          setIsAuthenticated(false)
          setUserState(null)
          clearSession()
          return
        }
        setIsAuthenticated(true)
        setUserState(data.user)
        setAuthStatus(true)
        setUser(data.user)
      } catch (error) {
        console.error("Auth check error:", error)
        setIsAuthenticated(false)
        setUserState(null)
        clearSession()
      }
    }

    fetchAuthStatus()
  }, [])

  const login = async (username: string, password: string) => {
    try {
      const data = await loginService(username, password)
      if (data?.error) {
        console.error("Login failed:", data.error)
        return
      }
      setIsAuthenticated(true)
      setUserState(data.user)
      setAuthStatus(true)
      setUser(data.user)
    } catch (error) {
      console.error("Login error:", error)
    }
  }

  const logout = async () => {
    try {
      const data = await logoutService()
      if (data?.error) {
        console.error("Logout failed:", data.error)
        return
      }
      setIsAuthenticated(false)
      setUserState(null)
      clearSession()
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  return <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>{children}</AuthContext.Provider>
}
