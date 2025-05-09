import ActiveStory from "@/components/story/activeStory";
import NavbarWithSidebar from "@/components/navbarWithSidebar";

export default function Home() {
  return (
    <>
      <NavbarWithSidebar>
        <ActiveStory/>
        <div>
          <h2 className="text-2xl font-bold">Stories</h2>
          <p>This is main content area.</p>
        </div>
      </NavbarWithSidebar>
    </>
  );
}
