import { AnnouncementBar } from "@/components/announcement-bar/AnnouncementBar";
import { Header } from "@/components/header/Header";

export default function Home() {
  return (
    <div className="bg-black w-full h-screen">
      <AnnouncementBar
        icon={"🚀"}
        highlightText="FRESH BEGINNINGS SALE:"
        text="Extra 25% OFF, Limited Spots - start your journey today!"
      />

      <Header />
    </div>
  );
}
