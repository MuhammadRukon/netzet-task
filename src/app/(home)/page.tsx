import { AnnouncementBar } from "@/components/announcement-bar";

export default function Home() {
  return (
    <div>
      <header>
        <AnnouncementBar
          icon={"🚀"}
          highlightText="FRESH BEGINNINGS SALE:"
          text="Extra 25% OFF, Limited Spots - start your journey today!"
        />
      </header>
    </div>
  );
}
