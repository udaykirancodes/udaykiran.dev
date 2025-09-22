"use client"

import { RocketLoginButton } from "@/core/rocket-login-button"
import { toast } from "sonner"

export function Demo() {
  const mockLogin = async () => {
    return new Promise<boolean>((resolve) =>
      setTimeout(() => {
        const random = Math.floor(Math.random() * 100)
        if (random < 50) {
          resolve(true)
        } else {
          resolve(false)
        }
      }, 500)
    )
  }

  const handleLogin = async () => {
    const isSuccess = await mockLogin()
    if (isSuccess) {
      toast.success("Login successful", {
        position: "top-center",
      })
    } else {
      toast.error("Login failed", {
        position: "top-center",
      })
    }
    return isSuccess
  }

  return (
    <div className="flex h-[30vh] flex-col items-center justify-center gap-4 p-4">
      <RocketLoginButton
        onLogin={handleLogin}
        onSuccessAnimationEnd={() => {}}
      />
    </div>
  )
}
