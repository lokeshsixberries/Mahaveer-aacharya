"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ImageIcon,
  FileText,
  Upload,
  Settings,
  Shield,
  Users,
  BarChart3,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useAuth, useUser, SignOutButton } from "@clerk/nextjs";

const AdminSidebar = () => {
  const pathname = usePathname();
  const { user } = useUser();

  const adminNavItems = [
    {
      label: "Dashboard",
      href: "/admin",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      label: "Upload Images",
      href: "/admin/upload",
      icon: <Upload className="h-5 w-5" />,
    },
    {
      label: "Create Images",
      href: "/admin/create",
      icon: <ImageIcon className="h-5 w-5" />,
    },
    {
      label: "Manage Gallery",
      href: "/admin/manage",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      label: "Analytics",
      href: "/admin/analytics",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      label: "User Management",
      href: "/admin/users",
      icon: <Users className="h-5 w-5" />,
    },
    {
      label: "Settings",
      href: "/admin/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  return (
    <div className="w-64 bg-white border-r border-red-100 min-h-screen sticky top-0">
      {/* Sidebar Header */}
      <div className="p-6 border-b border-red-100">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-100 to-red-50 border border-red-200">
            <Shield className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900">Admin Panel</h2>
            <p className="text-sm text-gray-500">Restricted Access</p>
          </div>
        </div>

        {/* Admin Badge */}
        <div className="mt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-sm font-medium text-green-700">
              Administrator
            </span>
          </div>
          {user && (
            <p className="text-xs text-gray-500 mt-2 truncate">
              {user.emailAddresses[0]?.emailAddress}
            </p>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="p-4">
        <nav className="space-y-1">
          {adminNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start gap-3 h-11 ${
                    isActive
                      ? "bg-red-50 text-red-700 hover:bg-red-100"
                      : "text-gray-700 hover:bg-red-50"
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                  {isActive && (
                    <div className="ml-auto w-1 h-4 bg-red-600 rounded-full"></div>
                  )}
                </Button>
              </Link>
            );
          })}
        </nav>

        <Separator className="my-6" />

        {/* Sign Out Button */}
        <SignOutButton>
          <Button
            variant="outline"
            className="w-full justify-start gap-3 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
          >
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Sign Out</span>
          </Button>
        </SignOutButton>
      </div>

      {/* Footer Stats */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-red-100 bg-white">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">25</div>
            <div className="text-xs text-gray-500">Images Today</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">1,247</div>
            <div className="text-xs text-gray-500">Total Images</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
