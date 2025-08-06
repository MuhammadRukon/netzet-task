import { AnnouncementBar } from "@/components/announcement-bar/AnnouncementBar";
import { Navbar } from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="bg-black w-full h-screen">
      <header>
        <AnnouncementBar
          icon={"🚀"}
          highlightText="FRESH BEGINNINGS SALE:"
          text="Extra 25% OFF, Limited Spots - start your journey today!"
        />

        <Navbar />
      </header>
    </div>
  );
}
