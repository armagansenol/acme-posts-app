import { PassportStatic } from "passport"
import { Strategy as LocalStrategy } from "passport-local"
import bcrypt from "bcryptjs"

// const pw = "password123"

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(pw, salt, (err, hash) => {
//     if (err) throw err
//     return `${hash}`
//   })
// })

const users = [
  {
    id: 1,
    username: "admin",
    password: "$2a$10$GevAxNBZkTb8b0mMCS70bethB.AwnEimjq5ShWEtmJ2MwDdy/TrFu", // bcrypt hash for 'password123'
  },
]

export function initialize(passport: PassportStatic) {
  const authenticateUser = (username: string, password: string, done: Function) => {
    const user = users.find((user) => user.username === username)
    if (!user) {
      return done(null, false, { message: "No user with that username" })
    }

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return done(err)
      }
      if (isMatch) {
        return done(null, user)
      } else {
        return done(null, false, { message: "Incorrect password" })
      }
    })
  }

  passport.use(new LocalStrategy(authenticateUser))

  passport.serializeUser((user: any, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id: number, done) => {
    const user = users.find((user) => user.id === id)
    done(null, user)
  })
}
