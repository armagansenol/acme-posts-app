import { Router, Request, Response } from "express"
import axios from "axios"

const router = Router()

export const all = router.get("/", async (req: Request, res: Response) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" })
  }
})

export default router
