import { Button } from "../ui/button"
import { HeaderTitle } from "./header-title"

export const About = () => {
  return (
    <section className="w-full">
      <HeaderTitle title="About" />
      <div className="space-y-2 p-2">
        <p className="text-primary/90 text-base">
          I&apos;m Udaykiran, a Software Developer at{" "}
          <Button
            asChild
            className="h-0 cursor-pointer p-0 underline"
            variant="link"
          >
            <a href="https://hexacluster.ai/" target="_blank">
              HexaCluster
            </a>
          </Button>
          , with 1.5+ years of experience building high-quality web applications
          using Next.js, React, and TypeScript.
        </p>
        <p className="text-primary/90 text-base">
          I also work on scalable backend services using Node.js, Spring Boot,
          and Golang, focusing on microservices architecture.
        </p>
        <p className="text-primary/90 text-base">
          I&apos;ve worked with{" "}
          <Button
            asChild
            className="h-0 cursor-pointer p-0 underline"
            variant="link"
          >
            <a
              href="https://micro-frontends.org/"
              className="text-base"
              target="_blank"
            >
              micro-frontends
            </a>
          </Button>{" "}
          and{" "}
          <Button
            asChild
            className="h-0 cursor-pointer p-0 underline"
            variant="link"
          >
            <a
              href="https://microservices.io/"
              className="text-base"
              target="_blank"
            >
              microservices
            </a>
          </Button>
          , building modular, scalable applications end-to-end.
        </p>
      </div>
    </section>
  )
}
