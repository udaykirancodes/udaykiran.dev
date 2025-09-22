"use client"
import { cn } from "@/lib/utils"
import { motion, useAnimate } from "motion/react"
import React from "react"

export type RocketLoginButtonProps = {
  onLogin: () => Promise<boolean>
  onSuccessAnimationEnd: () => void
}

export const RocketLoginButton: React.FC<RocketLoginButtonProps> = ({
  onLogin,
  onSuccessAnimationEnd,
}) => {
  const [scope, animate] = useAnimate()

  const startAnimation = async () => {
    // bring up the loader
    await animate(
      "#login-button-loader",
      {
        opacity: 1,
        width: "1rem",
      },
      {
        duration: 0.01,
      }
    )
    // rotate the loader
    animate(
      "#login-button-loader",
      {
        rotate: 360,
      },
      {
        duration: 0.5,
        repeat: Infinity,
      }
    )

    // Check if the login is successful
    const isSuccess = await onLogin()
    // remove the loader
    await animate(
      "#login-button-loader",
      {
        opacity: 0,
        width: 0,
      },
      {
        duration: 0.5,
      }
    )
    if (isSuccess) {
      // change the background color
      await animate("#login-button", {
        backgroundColor: `var(--color-green-500)`,
      })
      // Move the Login text
      await animate(
        "#login-button-text",
        {
          x: [0, "200px"],
        },
        {
          duration: 0.5,
        }
      )
      // bring up the rocket icon
      await animate(
        "#login-button-rocket",
        {
          opacity: 1,
          width: "1rem",
          x: ["-300%", "500%"],
        },
        {
          duration: 1.5,
        }
      )
      // reset the button background color
      await animate("#login-button", {
        backgroundColor: `var(--color-blue-600)`,
      })
      // reset the login text
      await animate(
        "#login-button-text",
        {
          x: ["-300px", 0],
        },
        {
          duration: 0.3,
        }
      )
      // reset the rocket icon
      await animate("#login-button-rocket", {
        opacity: 0,
        width: 0,
      })
      onSuccessAnimationEnd()
    } else {
      // move the login text
      await animate(
        "#login-button-text",
        {
          //   color: `var(--color-red-500)`,
          x: [-10, 0, 10, 0, -10, 0, 10, 0],
        },
        {
          duration: 0.3,
        }
      )
    }
  }

  return (
    <div ref={scope}>
      <motion.button
        className={cn(
          "h-9 w-[200px] px-12 py-2",
          "bg-blue-600 text-white shadow-xs hover:bg-blue-600/90",
          "rounded-md text-base font-medium",
          "flex items-center justify-center",
          "cursor-pointer",
          "overflow-hidden transition-none disabled:pointer-events-none"
        )}
        id="login-button"
        onClick={startAnimation}
      >
        <motion.div
          className="flex h-5 w-5 items-center justify-center text-white"
          id={"login-button-rocket"}
          style={{
            rotate: "45deg",
          }}
          initial={{ width: 0, opacity: 0 }}
        >
          🚀
        </motion.div>
        <span id="login-button-text" className="mr-1">
          Login
        </span>
        <motion.svg
          width={"24"}
          height={"24"}
          viewBox={"0 0 24 24"}
          fill={"none"}
          stroke={"currentColor"}
          strokeWidth={"2"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          className="loader h-5 w-5 text-white"
          id={"login-button-loader"}
          initial={{ width: 0, opacity: 0 }}
        >
          <path stroke="none" d="M0 oh24v24H0z" fill="none" />
          <path d="M12 3a9 9 0 1 0 9 9" />
        </motion.svg>
      </motion.button>
    </div>
  )
}
