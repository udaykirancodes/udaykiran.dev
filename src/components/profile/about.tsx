import { Button } from "../ui/button"
import { HeaderTitle } from "./header-title"

export const About = () => {
  return (
    <section className="w-full">
      <HeaderTitle title="About" />
      <div className="space-y-2 p-2">
        <h3 className="text-primary/90 text-base">
          I&apos;m Udaykiran, a Software Developer at{" "}
          <Button className="h-0 cursor-pointer p-0 underline" variant="link">
            HexaCluster
          </Button>
          , with 1+ years of experience building high-quality web applications
          using Next.js, React, and TypeScript.
        </h3>
        <h3 className="text-primary/90 text-base">
          I also work on scalable backend services using Node.js, Spring Boot,
          and Golang, focusing on microservices architecture.
        </h3>
        <h3 className="text-primary/90 text-base">
          I&apos;ve worked with{" "}
          <Button className="h-0 cursor-pointer p-0 underline" variant="link">
            <a href="https://micro-frontends.org/">micro-frontends</a>
          </Button>{" "}
          and{" "}
          <Button className="h-0 cursor-pointer p-0 underline" variant="link">
            <a href="https://microservices.io/">microservices</a>
          </Button>
          , building modular, scalable applications end-to-end.
        </h3>
      </div>
    </section>
  )
}
