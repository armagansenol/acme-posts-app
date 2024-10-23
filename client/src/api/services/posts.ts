import { Post } from "@/types"
import { api } from "@/api"

export const all = async () => {
  const response = await api.get<Post[]>("/posts")
  return response.data
}
