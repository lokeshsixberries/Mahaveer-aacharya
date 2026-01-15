"use client";

import { redirect } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import AdminSidebar from "@/components/ui/common/AdminSidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { isSignedIn, user, isLoaded } = useAuth();

  // Show loading state while checking auth
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-50 to-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authorization...</p>
        </div>
      </div>
    );
  }

  // Check if user is admin
  const isAdmin =
    isSignedIn &&
    user?.emailAddresses?.[0]?.emailAddress ===
      "sharma.lokesh.222001@gmail.com";

  // Redirect non-admin users
  if (!isAdmin) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
