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
import { Input } from "@/components/ui/input";
import {
  Search,
  Filter,
  Grid,
  List,
  Edit,
  Trash2,
  Eye,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function ManageGalleryPage() {
  const galleryItems = [
    {
      id: 1,
      title: "Supreme Court Appearance",
      category: "courtroom",
      status: "public",
      views: 1247,
      date: "2024-01-15",
      uploadedBy: "sharma.lokesh.222001@gmail.com",
    },
    {
      id: 2,
      title: "Legal Seminar 2024",
      category: "events",
      status: "public",
      views: 892,
      date: "2024-01-10",
      uploadedBy: "sharma.lokesh.222001@gmail.com",
    },
    {
      id: 3,
      title: "Office Meeting",
      category: "office",
      status: "private",
      views: 56,
      date: "2024-01-05",
      uploadedBy: "sharma.lokesh.222001@gmail.com",
    },
    {
      id: 4,
      title: "Award Ceremony",
      category: "awards",
      status: "public",
      views: 1567,
      date: "2024-01-02",
      uploadedBy: "sharma.lokesh.222001@gmail.com",
    },
    {
      id: 5,
      title: "Client Consultation",
      category: "office",
      status: "public",
      views: 743,
      date: "2023-12-28",
      uploadedBy: "sharma.lokesh.222001@gmail.com",
    },
    {
      id: 6,
      title: "Community Outreach",
      category: "events",
      status: "public",
      views: 621,
      date: "2023-12-20",
      uploadedBy: "sharma.lokesh.222001@gmail.com",
    },
    {
      id: 7,
      title: "Media Interview",
      category: "media",
      status: "private",
      views: 89,
      date: "2023-12-15",
      uploadedBy: "sharma.lokesh.222001@gmail.com",
    },
    {
      id: 8,
      title: "Court Proceedings",
      category: "courtroom",
      status: "public",
      views: 1034,
      date: "2023-12-10",
      uploadedBy: "sharma.lokesh.222001@gmail.com",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Manage Gallery</h1>
        <p className="text-gray-600 mt-2">
          Admin: Manage and organize gallery images
        </p>
      </div>

      {/* Search and Filter */}
      <Card className="border-red-200">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search images..."
                  className="pl-10 border-red-200"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="border-red-200">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <div className="flex border border-red-200 rounded-lg">
                <Button variant="ghost" size="sm" className="rounded-r-none">
                  <Grid className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="rounded-l-none">
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gallery Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {galleryItems.map((item) => (
          <Card
            key={item.id}
            className="border-red-200 hover:border-red-300 transition-colors"
          >
            <div className="aspect-video bg-gradient-to-br from-red-50 to-red-100 rounded-t-lg"></div>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900 truncate">
                  {item.title}
                </h3>
                <Badge
                  className={`${
                    item.status === "public"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.status === "public" ? "Public" : "Private"}
                </Badge>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Category:</span>
                  <Badge variant="outline" className="border-red-200">
                    {item.category}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span>Views:</span>
                  <span className="font-medium">
                    {item.views.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Uploaded:</span>
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                </div>
                <div className="truncate text-xs" title={item.uploadedBy}>
                  {item.uploadedBy}
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-red-200"
                >
                  <Edit className="h-3 w-3 mr-1" />
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-red-200"
                >
                  <Eye className="h-3 w-3 mr-1" />
                  View
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-red-200 text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Statistics */}
      <Card className="border-red-200">
        <CardHeader>
          <CardTitle>Gallery Statistics</CardTitle>
          <CardDescription>
            Admin insights for gallery management
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600">1,247</div>
              <div className="text-sm text-gray-600">Total Images</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">1,089</div>
              <div className="text-sm text-gray-600">Public Images</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">158</div>
              <div className="text-sm text-gray-600">Private Images</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">45,892</div>
              <div className="text-sm text-gray-600">Total Views</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
