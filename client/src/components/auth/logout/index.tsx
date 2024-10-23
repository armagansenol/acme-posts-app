import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"

export const LogoutButton: React.FC = () => {
  const { isAuthenticated, logout } = useAuth()

  if (!isAuthenticated) {
    return null
  }

  return (
    <Button className="fixed top-3 right-3 bg-destructive" onClick={logout}>
      Logout
    </Button>
  )
}
