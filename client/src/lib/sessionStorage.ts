import { User } from "@/types"

const AUTH_KEY = "isAuthenticated"
const USER_KEY = "user"

export const getAuthStatus = (): boolean => !!sessionStorage.getItem(AUTH_KEY)

export const setAuthStatus = (isAuthenticated: boolean): void => {
  if (isAuthenticated) {
    sessionStorage.setItem(AUTH_KEY, "true")
  } else {
    sessionStorage.removeItem(AUTH_KEY)
  }
}

export const getUser = (): User | null => {
  const storedUser = sessionStorage.getItem(USER_KEY)
  return storedUser ? JSON.parse(storedUser) : null
}

export const setUser = (user: User | null): void => {
  if (user) {
    sessionStorage.setItem(USER_KEY, JSON.stringify(user))
  } else {
    sessionStorage.removeItem(USER_KEY)
  }
}

export const clearSession = (): void => {
  sessionStorage.removeItem(AUTH_KEY)
  sessionStorage.removeItem(USER_KEY)
}
