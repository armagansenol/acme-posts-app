import cors from "cors"
import express from "express"
import session from "express-session"
import { initialize } from "./lib/passport-config"

import postsRouter from "./routes/posts"
import authRouter from "./routes/auth"
import passport from "passport"

const app = express()
const PORT = 4001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true,
  })
)

app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
)

initialize(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use("/api/posts", postsRouter)
app.use("/api/auth", authRouter)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
