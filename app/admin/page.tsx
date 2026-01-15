"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Upload,
  ImageIcon,
  Users,
  BarChart3,
  Clock,
  Shield,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const recentActivity = [
    {
      id: 1,
      action: "Uploaded image",
      item: "Court Hearing 2024",
      time: "10 minutes ago",
      user: "sharma.lokesh.222001@gmail.com",
    },
    {
      id: 2,
      action: "Created image",
      item: "Legal Quote Banner",
      time: "1 hour ago",
      user: "sharma.lokesh.222001@gmail.com",
    },
    {
      id: 3,
      action: "Updated gallery",
      item: "Awards Category",
      time: "3 hours ago",
      user: "sharma.lokesh.222001@gmail.com",
    },
    {
      id: 4,
      action: "Deleted image",
      item: "Old Office Photo",
      time: "5 hours ago",
      user: "sharma.lokesh.222001@gmail.com",
    },
  ];

  const stats = [
    {
      label: "Total Images",
      value: "1,247",
      change: "+12%",
      icon: <ImageIcon className="h-5 w-5" />,
    },
    {
      label: "Gallery Categories",
      value: "6",
      change: "+1",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      label: "Admin Users",
      value: "1",
      change: "Active",
      icon: <Users className="h-5 w-5" />,
    },
    {
      label: "Storage Used",
      value: "4.2 GB",
      change: "45%",
      icon: <Clock className="h-5 w-5" />,
    },
  ];

  const quickActions = [
    {
      label: "Upload New Images",
      description: "Add photos to gallery",
      href: "/admin/upload",
      icon: <Upload className="h-5 w-5" />,
    },
    {
      label: "Create Banner",
      description: "Design custom images",
      href: "/admin/create",
      icon: <ImageIcon className="h-5 w-5" />,
    },
    {
      label: "Manage Gallery",
      description: "Organize existing images",
      href: "/admin/manage",
      icon: <BarChart3 className="h-5 w-5" />,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Welcome back, Administrator. Manage website content and images.
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-red-50 border border-red-200 rounded-full">
          <Shield className="h-4 w-4 text-red-600" />
          <span className="text-sm font-medium text-red-700">
            Restricted Access
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="border-red-100 hover:border-red-300 transition-colors"
          >
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-green-600 mt-1">{stat.change}</p>
                </div>
                <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                  {stat.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-red-200">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks for content management
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {quickActions.map((action, index) => (
                <Link key={index} href={action.href}>
                  <Card className="border-red-100 hover:border-red-300 hover:shadow-sm transition-all cursor-pointer">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                          {action.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">
                            {action.label}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {action.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-200">
          <CardHeader>
            <CardTitle>Admin Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <div>
                  <p className="font-medium">Authentication Active</p>
                  <p className="text-sm text-gray-500">
                    Clerk authentication enabled
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <div>
                  <p className="font-medium">Email Verified</p>
                  <p className="text-sm text-gray-500">
                    sharma.lokesh.222001@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-amber-500" />
                <div>
                  <p className="font-medium">Storage Warning</p>
                  <p className="text-sm text-gray-500">45% of storage used</p>
                </div>
              </div>
            </div>
            <Separator />
            <div>
              <Badge className="bg-red-100 text-red-700 border-red-200">
                <Shield className="h-3 w-3 mr-1" />
                Super Admin Privileges
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="border-red-200">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your recent actions on the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between py-3 border-b border-red-50 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                    <ImageIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {activity.action}:{" "}
                      <span className="text-red-600">{activity.item}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      By {activity.user} • {activity.time}
                    </p>
                  </div>
                </div>
                <Badge variant="outline" className="border-red-200">
                  Completed
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
