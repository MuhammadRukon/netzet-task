import { Container } from "@/components/container/Container";
import { Hero } from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="w-full relative md:bg-[url('/heroImage.png')] bg-contain bg-[position:calc(100%-15%)_center] bg-no-repeat">
      <Container>
        <Hero />
      </Container>
    </div>
  );
}
