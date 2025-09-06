export const COMPONENTS = [
  {
    title: "Command",
    name: "command",
    href: "/components/command",
    path: "src/core/command/command.tsx",
    description: "A switcher for package manager commands with one-click copy",
  },
  {
    title: "WellFound Landing Animation",
    name: "wellfound-landing-animation",
    href: "/components/wellfound-landing-animation",
    path: "src/core/wellfound-landing-animation/wellfound-landing-animation.tsx",
    description:
      "Mouse-responsive floating tech buttons with smooth framer-motion animations",
  },
  {
    title: "Meet Our Team",
    name: "meet-our-team",
    href: "/components/meet-our-team",
    path: "src/core/meet-out-team/index.tsx",
    description: "A component for displaying a list of team members",
  },
].sort((a, b) => a.title.localeCompare(b.title))
