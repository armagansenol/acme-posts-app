import cors from "cors"
import express from "express"

import postsRouter from "./routes/posts"

const app = express()
const PORT = 4001

app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true,
  })
)

app.get("/", (req, res) => {
  res.send("All systems normal.")
})

// posts
app.use("/api", postsRouter)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
