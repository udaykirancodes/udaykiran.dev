import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WellFoundLandingAnimation } from "@/core/wellfound-landing-animation"
import { Tabs } from "@radix-ui/react-tabs"

export default function page() {
  return (
    <div className="h-full w-full py-3">
      <p className="text-center">Choose the direction</p>
      <Tabs
        defaultValue="opposite"
        className="flex w-full flex-col items-center justify-center"
      >
        <TabsList className="flex w-full max-w-xl justify-start">
          <TabsTrigger value="opposite">Opposite</TabsTrigger>
          <TabsTrigger value="same">Same</TabsTrigger>
        </TabsList>
        <TabsContent value="opposite" className="h-full w-full">
          <WellFoundLandingAnimation direction={"opposite"} />
        </TabsContent>
        <TabsContent value="same" className="h-full w-full">
          <WellFoundLandingAnimation direction={"same"} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
