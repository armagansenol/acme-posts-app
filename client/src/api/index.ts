import axios from "axios"
import { toast } from "sonner"

export const api = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
})

api.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => {
    toast.success(response?.data?.message || "Action completed successfully")
    return response
  },
  (error) => {
    // const status = error.response?.status
    toast(error.response.data.message, {
      action: {
        label: "X",
        onClick: () => console.log("Undo"),
      },
    })

    // if (status === 401) {
    //   toast.error("Unauthorized. Please log in.")
    // } else if (status === 403) {
    //   toast.error("Forbidden. You do not have access.")
    // } else if (status === 500) {
    //   toast.error("Server error. Please try again later.")
    // } else {
    //   toast.error(error.response?.data?.message || "An error occurred.")
    // }

    return Promise.reject(error)
  }
)
