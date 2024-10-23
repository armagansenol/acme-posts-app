import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/hooks/useAuth"

const LoginScreen: React.FC = () => {
  const { login, isAuthenticated } = useAuth()
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault()
    await login(username, password)
  }

  if (isAuthenticated) {
    return null
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Welcome to the posts app</CardTitle>
        <CardDescription>Please Login</CardDescription>
      </CardHeader>
      <form onSubmit={handleLogin}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Login</Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default LoginScreen
