import { Code } from "@/components/code/code"
import { ContainerWrapper } from "@/components/site/container"

const code = `export default function page() {
  return <>Test Page</>
}`
export default function page() {
  return (
    <ContainerWrapper>
      <Code code={code} />
    </ContainerWrapper>
  )
}
