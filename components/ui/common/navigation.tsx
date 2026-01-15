"use client";

import React, { useState } from "react";
import { Menu, X, Phone, User, Shield } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
  useUser
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LogoVariant = "default" | "minimal" | "icon" | "horizontal" | "vertical";
type LogoSize = "xs" | "sm" | "md" | "lg" | "xl";

interface LegalLogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
  showBadge?: boolean;
}

export function Logo({
  variant = "default",
  size = "md",
  className,
  showBadge = false,
}: LegalLogoProps) {
  const sizeConfig = {
    xs: { text: "text-xs", icon: "h-6 w-6", gap: "gap-1" },
    sm: { text: "text-sm", icon: "h-8 w-8", gap: "gap-2" },
    md: { text: "text-lg", icon: "h-10 w-10", gap: "gap-3" },
    lg: { text: "text-2xl", icon: "h-12 w-12", gap: "gap-4" },
    xl: { text: "text-3xl", icon: "h-14 w-14", gap: "gap-5" },
  };

  const currentSize = sizeConfig[size];

  const renderIcon = () => (
    <div
      className={cn(
        currentSize.icon,
        "flex items-center justify-center rounded-md",
        "bg-gradient-to-br from-red-50 to-red-100",
        "border border-red-200 shadow-sm"
      )}
    >
      <svg
        className={cn(
          size === "xs"
            ? "h-3 w-3"
            : size === "sm"
            ? "h-4 w-4"
            : size === "md"
            ? "h-5 w-5"
            : size === "lg"
            ? "h-6 w-6"
            : "h-7 w-7",
          "text-red-700"
        )}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
        />
      </svg>
    </div>
  );

  const renderText = () => (
    <div
      className={cn(
        variant === "vertical" ? "flex flex-col items-center" : "flex flex-col"
      )}
    >
      <span
        className={cn(
          currentSize.text,
          "font-semibold text-gray-900 leading-tight"
        )}
      >
        Advocate Mahaveer
      </span>
      <span
        className={cn(
          size === "xs"
            ? "text-[10px]"
            : size === "sm"
            ? "text-xs"
            : size === "md"
            ? "text-sm"
            : size === "lg"
            ? "text-base"
            : "text-lg",
          "font-medium text-red-800 leading-tight"
        )}
      >
        Aacharya
      </span>
    </div>
  );

  const renderBadge = () =>
    showBadge && (
      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-50 border border-red-200">
        <span className="text-[10px] font-medium text-red-700">LEGAL</span>
        <div className="h-1 w-1 rounded-full bg-red-400"></div>
        <span className="text-[10px] font-medium text-red-700">ADVOCATE</span>
      </div>
    );

  if (variant === "icon") {
    return <div className={cn("inline-flex", className)}>{renderIcon()}</div>;
  }

  if (variant === "minimal") {
    return (
      <div
        className={cn("inline-flex items-center", currentSize.gap, className)}
      >
        {renderIcon()}
        {renderText()}
      </div>
    );
  }

  if (variant === "vertical") {
    return (
      <div
        className={cn(
          "inline-flex flex-col items-center",
          currentSize.gap,
          className
        )}
      >
        {renderIcon()}
        {renderText()}
        {renderBadge()}
      </div>
    );
  }

  // Default horizontal variant
  return (
    <div
      className={cn(
        "inline-flex flex-col",
        variant === "horizontal" && "md:flex-row md:items-center",
        variant === "horizontal" ? "md:gap-4" : currentSize.gap,
        className
      )}
    >
      <div className={cn("flex items-center", currentSize.gap)}>
        {renderIcon()}
        {renderText()}
      </div>
      {renderBadge()}
    </div>
  );
}

interface NavLink {
  label: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
}

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const { isSignedIn } = useAuth();
  const {user} = useUser();

  // Check if the logged-in user is the admin
  const isAdmin =
    isSignedIn &&
    user?.emailAddresses?.[0]?.emailAddress ===
      "sharma.lokesh.222001@gmail.com";

  const navItems: NavLink[] = [
    {
      label: "Home",
      href: "/",
      description: "Welcome to our legal practice",
    },
    {
      label: "Services",
      href: "/services",
      description: "Our legal practice areas",
    },
    {
      label: "About",
      href: "/about",
      description: "About Advocate Mahaveer Aacharya",
    },
    {
      label: "Contact",
      href: "/contact",
      description: "Get in touch with us",
    },
    ...(isAdmin
      ? [
          {
            label: "Admin",
            href: "/admin",
            description: "Admin dashboard for content management",
            icon: <Shield className="h-4 w-4 mr-1" />,
          },
        ]
      : []),
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-white shadow-xs border-b border-red-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center",
                  isActive(item.href)
                    ? "text-red-700 bg-red-50 font-semibold"
                    : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                )}
                title={item.description}
              >
                {item.icon}
                {item.label}
                {isActive(item.href) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600 rounded-full"></div>
                )}
              </Link>
            ))}

            {/* Desktop Auth Buttons */}
            <div className="flex items-center space-x-3 ml-4">
              <SignedOut>
                <SignInButton mode="modal">
                  <Button
                    variant="outline"
                    className="border-red-200 text-gray-700 hover:bg-red-50 hover:text-red-600"
                  >
                    <User className="h-4 w-4" />
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Sign Up
                  </Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center gap-3">
                  {isAdmin && (
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-50 border border-green-200 rounded-full">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-xs font-medium text-green-700">
                        Admin
                      </span>
                    </div>
                  )}
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "h-8 w-8",
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-red-200 text-gray-700 hover:bg-red-50"
                >
                  <User className="h-3 w-3" />
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center gap-2">
                {isAdmin && (
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                )}
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "h-7 w-7",
                    },
                  }}
                />
              </div>
            </SignedIn>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-red-50 focus:outline-none transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white border-t border-red-50 shadow-lg rounded-b-lg">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200",
                  isActive(item.href)
                    ? "text-red-700 bg-red-50 font-semibold border-r-4 border-red-600"
                    : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span>{item.label}</span>
                    {item.description && (
                      <span className="text-xs text-gray-500 mt-1">
                        {item.description}
                      </span>
                    )}
                  </div>
                  {item.icon}
                </div>
              </Link>
            ))}

            {/* Mobile Auth Buttons */}
            <div className="px-3 py-4 border-t border-red-100">
              <div className="grid grid-cols-2 gap-3">
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button
                      onClick={() => setIsOpen(false)}
                      variant="outline"
                      className="w-full border-red-200 text-gray-700 hover:bg-red-50"
                    >
                      <User className="h-4 w-4" />
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button
                      onClick={() => setIsOpen(false)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                    >
                      Sign Up
                    </Button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <div className="col-span-2 flex justify-center items-center gap-3">
                    {isAdmin && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-green-50 border border-green-200 rounded-full">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-xs font-medium text-green-700">
                          Admin Mode
                        </span>
                      </div>
                    )}
                    <UserButton
                      appearance={{
                        elements: {
                          avatarBox: "h-10 w-10",
                        },
                      }}
                    />
                  </div>
                </SignedIn>
              </div>
            </div>

            {/* Mobile Emergency Contact */}
            <div className="pt-2 px-3">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 shadow-sm">
                  <Phone className="h-5 w-5" />
                  Emergency Consultation
                </Button>
              </Link>
              <p className="text-xs text-gray-500 text-center mt-2">
                24/7 Emergency Legal Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
