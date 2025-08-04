import { ContainerWrapper } from "@/components/container";

const Page = () => {
  return (
    <>
      <ContainerWrapper className="h-[250px]">
        <h1>UdayKiran</h1>
      </ContainerWrapper>
      <Line />
    </>
  );
};

export default Page;

function Line() {
  return <div className="w-screen h-px bg-edge" />;
}
