import dotenv from "dotenv"
import cors from "cors"
import express from "express"
import session from "express-session"
import passport from "passport"

import { initialize } from "./lib/passport-config"
import authRouter from "./routes/auth"
import postsRouter from "./routes/posts"

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
)

app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
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
