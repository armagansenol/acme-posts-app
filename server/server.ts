import express from "express"
import cors from "cors"

const app = express()
const PORT = 4001

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
)

app.get("/", (req, res) => {
  res.send("All systems normal.")
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
