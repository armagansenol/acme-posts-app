import { NextFunction, Request, Response, Router } from "express"
import passport from "passport"

const router = Router()

export const login = router.post("/login", (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("local", (err: any, user: Express.User | false, info: { message: string }) => {
    if (err) {
      return next(err)
    }

    if (!user) {
      return res.status(401).json({ message: info.message })
    }

    req.logIn(user, (err: any) => {
      if (err) {
        return next(err)
      }

      return res.json({ message: "Login successful", user })
    })
  })(req, res, next)
})

export const logout = router.post("/logout", (req: Request, res: Response, next: NextFunction) => {
  req.logout((err) => {
    if (err) {
      return next(err)
    }
    res.json({ message: "Logout successful" })
  })
})

export const checkAuth = router.get("/check-auth", (req: any, res: any) => {
  if (req.isAuthenticated()) {
    return res.json({
      authenticated: true,
      user: req.user,
      message: "User is authenticated successfully.",
    })
  } else {
    return res.status(401).json({
      authenticated: false,
      message: "User is not authenticated. Please log in to access this resource.",
    })
  }
})

export default router
