"use client"

import { RocketLoginButton } from "@/core/rocket-login-button"

export default function page() {
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

  return (
    <div className="flex h-[70vh] flex-col items-center justify-center gap-4 p-4">
      <RocketLoginButton onLogin={mockLogin} onSuccessAnimationEnd={() => {}} />
    </div>
  )
}
