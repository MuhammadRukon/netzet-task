import { Container } from "@/components/container/Container";
import { Hero } from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="w-full relative md:bg-[url('/heroImage.png')]  bg-right bg-[length:60%] lg:bg-contain xl:bg-[position:calc(100%-15%)_center] 2xl:bg-[position:calc(100%-20%)_center] bg-no-repeat">
      <Container>
        <Hero />
      </Container>
    </div>
  );
}
