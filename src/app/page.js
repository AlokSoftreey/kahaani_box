import NavbarWithSidebar from "@/components/navbarWithSidebar";

export default function Home() {
  return (
    <>
      <NavbarWithSidebar>
        <div>
          <h2 className="text-2xl font-bold">Welcome to the dashboard!</h2>
          <p>This is main content area.</p>
        </div>
      </NavbarWithSidebar>
    </>
  );
}
