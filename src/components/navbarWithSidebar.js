"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Bars3Icon,
  HomeIcon,
  UserIcon,
  Cog6ToothIcon,
  ClockIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import HeroSection from "./heroSection";

export default function NavbarWithSidebar({ children }) {
  const [profileCard, setProfileCard] = useState(false);
  // const profileCardRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out from your session.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Logged out!",
          "You have been successfully logged out.",
          "success"
        ).then(() => {
          router.push("/login");
        });
      }
    });
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`bg-white shadow-md h-full transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-0"
        }`}
      >
        <div className="flex items-center justify-start ml-5 h-16">
          <span className="text-lg font-bold">KahaaniBox</span>
        </div>
        <nav className="flex flex-col p-2">
          <Link
            href="/"
            className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded"
          >
            <HomeIcon className="w-5 h-5" />
            <span>Home</span>
          </Link>
          <Link
            href="/profile"
            className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded"
          >
            <UserIcon className="w-5 h-5" />
            <span>Profile</span>
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded"
          >
            <Cog6ToothIcon className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className={`transition-all duration-300 flex-1`}>
        {/* Navbar */}
        <header className="sticky top-0 z-30 bg-white shadow-md">
          <div className="flex items-center justify-between px-4 py-3">
            {/* LeftSide of nav bar-icon */}
            <Bars3Icon
              className="w-6 h-6 text-gray-900 cursor-pointer"
              onClick={() => setSidebarOpen((prev) => !prev)}
            />

            {/* RightSide of nav User profile */}
            <div
              className="relative flex items-center gap-2 cursor-pointer"
              onMouseEnter={() => setProfileCard(true)}
              onMouseLeave={() => setProfileCard(false)}
            >
              <div className="flex items-center gap-2 cursor-pointer">
                <Image
                  src="/assets/images/profile1.jpg"
                  alt="User Avatar"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="text-sm font-medium text-gray-800">
                  Pawan Seen
                </span>
              </div>

              {/* User Profile Card */}
              <div
                className={`absolute right-0 top-0 mt-8 w-44 z-10 rounded overflow-hidden 
                            bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg
                            origin-top transition-all duration-300 ease-in-out transform
                            ${
                              profileCard
                                ? "opacity-100 scale-y-100 translate-y-0"
                                : "opacity-0 scale-y-75 -translate-y-4 pointer-events-none"
                            }`}
              >
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                    Pawan Seen
                  </h3>
                  <h3 className="text-xs text-gray-400 dark:text-gray-400 mb-2 break-words whitespace-normal">
                    pawansee@example.com
                  </h3>
                </div>
                <div>
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 p-2 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    <UserIcon className="w-4 h-4" />
                    <p className="text-xs">Edit Profile</p>
                  </Link>
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 p-2 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    <ClockIcon className="w-4 h-4" />
                    <p className="text-xs">Activity Log</p>
                  </Link>
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 p-2 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Cog6ToothIcon className="w-4 h-4" />
                    <p className="text-xs">Account Setting</p>
                  </Link>
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 p-2 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    <ArrowRightStartOnRectangleIcon className="w-4 h-4" />
                    <p className="text-xs">Sign Out</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="bg-gray-100 overflow-y-auto h-full">
          {/* Hero Section */}
          <HeroSection />
          
          <div className="py-6 px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
