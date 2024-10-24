import axios, { AxiosError, AxiosResponse } from "axios"
import { toast } from "sonner"

export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  withCredentials: true,
})

interface ApiErrorResponse {
  message: string
}

api.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    toast.success(response?.data?.message || "Action completed successfully")
    return response
  },
  (error: AxiosError<ApiErrorResponse>) => {
    if (!error.response) {
      toast.error("Unable to connect to the server. Please check your connection.")
      return Promise.reject(new Error("Server unreachable"))
    }

    if (error.response.data && error.response.data.message) {
      toast(error.response.data.message, {
        action: {
          label: "X",
          onClick: () => console.log("Undo"),
        },
      })
    }

    const status = error.response?.status

    if (status === 500) {
      toast.error("Server error. Please try again later.")
    }

    return Promise.reject(error)
  }
)
