import { api } from "@/api"

export const login = async (username: string, password: string) => {
  const response = await api.post("/auth/login", new URLSearchParams({ username, password }), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
  return response.data
}

export const logout = async () => {
  const response = await api.post("/auth/logout")
  return response.data
}

export const checkAuthStatus = async () => {
  const response = await api.get("/auth/check-auth")
  return response.data
}
