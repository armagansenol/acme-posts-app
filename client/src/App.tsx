import { LogoutButton } from "./components/auth/logout"
import { Toaster } from "./components/ui/sonner"
import { AuthProvider } from "./context/AuthContext"
import Posts from "./components/posts"
import LoginScreen from "./components/auth/login"

function App() {
  return (
    <>
      <AuthProvider>
        <div className="relative min-h-screen overflow-hidden bg-background text-foreground flex items-center justify-center dark">
          <Posts />
          <LoginScreen />
          <LogoutButton />
        </div>
      </AuthProvider>
      <Toaster />
    </>
  )
}

export default App
