"use client";

import { useState, useCallback, useEffect } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Image as ImageIcon,
  Camera,
  Video,
  Users,
  Building,
  Award,
  Gavel,
  GraduationCap,
  MapPin,
  Calendar,
  Filter,
  Grid,
  List,
  Download,
  Share2,
  Eye,
  Heart,
  X,
  Search,
  Upload,
  FolderOpen,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

// Sample gallery images with different aspect ratios
const galleryImages = [
  {
    id: 1,
    title: "Supreme Court Appearance",
    category: "courtroom",
    date: "2023-10-15",
    aspectRatio: "16:9",
    tags: ["Supreme Court", "Hearing", "Professional"],
    description: "Appearing before the Supreme Court in a landmark case",
  },
  {
    id: 2,
    title: "Client Consultation",
    category: "office",
    date: "2023-09-20",
    aspectRatio: "4:3",
    tags: ["Consultation", "Client", "Office"],
    description: "Detailed consultation session with a client",
  },
  {
    id: 3,
    title: "Legal Seminar",
    category: "events",
    date: "2023-08-10",
    aspectRatio: "1:1",
    tags: ["Seminar", "Speaking", "Education"],
    description: "Conducting a legal seminar on constitutional law",
  },
  {
    id: 4,
    title: "Award Ceremony",
    category: "awards",
    date: "2023-07-05",
    aspectRatio: "3:2",
    tags: ["Award", "Recognition", "Achievement"],
    description: "Receiving the Legal Excellence Award 2023",
  },
  {
    id: 5,
    title: "Media Interview",
    category: "media",
    date: "2023-06-18",
    aspectRatio: "9:16",
    tags: ["Interview", "Media", "TV"],
    description: "Featured interview on national television",
  },
  {
    id: 6,
    title: "Team Meeting",
    category: "office",
    date: "2023-05-22",
    aspectRatio: "16:9",
    tags: ["Team", "Strategy", "Meeting"],
    description: "Strategy meeting with legal team",
  },
  {
    id: 7,
    title: "Court Proceedings",
    category: "courtroom",
    date: "2023-04-30",
    aspectRatio: "4:3",
    tags: ["Court", "Proceedings", "Legal"],
    description: "Active participation in court proceedings",
  },
  {
    id: 8,
    title: "Community Outreach",
    category: "events",
    date: "2023-03-12",
    aspectRatio: "1:1",
    tags: ["Community", "Outreach", "Service"],
    description: "Legal awareness program in local community",
  },
  {
    id: 9,
    title: "International Conference",
    category: "events",
    date: "2023-02-28",
    aspectRatio: "3:2",
    tags: ["Conference", "International", "Networking"],
    description: "Speaking at international legal conference",
  },
  {
    id: 10,
    title: "Law Library",
    category: "office",
    date: "2023-01-15",
    aspectRatio: "9:16",
    tags: ["Library", "Research", "Books"],
    description: "Research session in the law library",
  },
  {
    id: 11,
    title: "Client Success",
    category: "courtroom",
    date: "2022-12-20",
    aspectRatio: "16:9",
    tags: ["Success", "Victory", "Client"],
    description: "Celebrating a successful case outcome",
  },
  {
    id: 12,
    title: "Mentoring Session",
    category: "events",
    date: "2022-11-08",
    aspectRatio: "4:3",
    tags: ["Mentoring", "Students", "Education"],
    description: "Mentoring young law students",
  },
];

const categories = [
  {
    id: "all",
    label: "All Photos",
    icon: <Grid className="h-4 w-4" />,
    count: 12,
  },
  {
    id: "courtroom",
    label: "Courtroom",
    icon: <Gavel className="h-4 w-4" />,
    count: 4,
  },
  {
    id: "office",
    label: "Office",
    icon: <Building className="h-4 w-4" />,
    count: 4,
  },
  {
    id: "events",
    label: "Events",
    icon: <Calendar className="h-4 w-4" />,
    count: 4,
  },
  {
    id: "awards",
    label: "Awards",
    icon: <Award className="h-4 w-4" />,
    count: 1,
  },
  {
    id: "media",
    label: "Media",
    icon: <Camera className="h-4 w-4" />,
    count: 1,
  },
];

const aspectRatios = [
  { value: "all", label: "All Ratios" },
  { value: "1:1", label: "Square (1:1)" },
  { value: "4:3", label: "Standard (4:3)" },
  { value: "16:9", label: "Widescreen (16:9)" },
  { value: "3:2", label: "Classic (3:2)" },
  { value: "9:16", label: "Portrait (9:16)" },
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("masonry");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedAspectRatio, setSelectedAspectRatio] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date-desc");
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);

  // Filter images based on selections
  const filteredImages = galleryImages.filter((image) => {
    const matchesCategory =
      selectedCategory === "all" || image.category === selectedCategory;
    const matchesAspectRatio =
      selectedAspectRatio === "all" ||
      image.aspectRatio === selectedAspectRatio;
    const matchesSearch =
      searchQuery === "" ||
      image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      image.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesAspectRatio && matchesSearch;
  });

  // Sort images
  const sortedImages = [...filteredImages].sort((a, b) => {
    switch (sortBy) {
      case "date-desc":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "date-asc":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "title-asc":
        return a.title.localeCompare(b.title);
      case "title-desc":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  // Handle image upload
  const handleImageUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(event.target.files || []);
      if (files.length > 0) {
        setUploadedImages((prev) => [...prev, ...files]);
        alert(`${files.length} image(s) uploaded successfully!`);
      }
    },
    []
  );

  // Toggle favorite
  const toggleFavorite = useCallback((id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  }, []);

  // Calculate image dimensions based on aspect ratio
  const getImageDimensions = (aspectRatio: string) => {
    switch (aspectRatio) {
      case "1:1":
        return { width: 300, height: 300 };
      case "4:3":
        return { width: 400, height: 300 };
      case "16:9":
        return { width: 480, height: 270 };
      case "3:2":
        return { width: 450, height: 300 };
      case "9:16":
        return { width: 300, height: 533 };
      default:
        return { width: 400, height: 300 };
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedAspectRatio("all");
    setSearchQuery("");
    setSortBy("date-desc");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-red-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-100 border-red-200">
              <ImageIcon className="w-4 h-4 mr-2" />
              Professional Gallery
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="text-red-600">Gallery</span> of Legal Excellence
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore moments from Advocate Mahaveer Aacharya's professional
              journey, courtroom appearances, seminars, awards, and more.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Gallery Controls */}
        <Card className="mb-8 border-red-200">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
              {/* Search Bar */}
              <div className="flex-1 w-full md:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search photos by title, tags, or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 border-red-200 focus:border-red-400 w-full"
                  />
                </div>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-4">
                <div className="flex border border-red-200 rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={viewMode === "grid" ? "bg-red-600" : ""}
                  >
                    <Grid className="h-4 w-4 mr-2" />
                    Grid
                  </Button>
                  <Button
                    variant={viewMode === "masonry" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("masonry")}
                    className={viewMode === "masonry" ? "bg-red-600" : ""}
                  >
                    <List className="h-4 w-4 mr-2" />
                    Masonry
                  </Button>
                </div>

                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="border-red-200 text-red-600 hover:bg-red-50"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </Button>
              </div>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="mt-6 pt-6 border-t border-red-100">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <Label className="text-gray-700 mb-2 block">Category</Label>
                    <Select
                      value={selectedCategory}
                      onValueChange={setSelectedCategory}
                    >
                      <SelectTrigger className="border-red-200">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            <div className="flex items-center">
                              <span className="mr-2">{category.icon}</span>
                              {category.label} ({category.count})
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-gray-700 mb-2 block">
                      Aspect Ratio
                    </Label>
                    <Select
                      value={selectedAspectRatio}
                      onValueChange={setSelectedAspectRatio}
                    >
                      <SelectTrigger className="border-red-200">
                        <SelectValue placeholder="Select ratio" />
                      </SelectTrigger>
                      <SelectContent>
                        {aspectRatios.map((ratio) => (
                          <SelectItem key={ratio.value} value={ratio.value}>
                            {ratio.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-gray-700 mb-2 block">Sort By</Label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="border-red-200">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="date-desc">
                          Date (Newest First)
                        </SelectItem>
                        <SelectItem value="date-asc">
                          Date (Oldest First)
                        </SelectItem>
                        <SelectItem value="title-asc">Title (A-Z)</SelectItem>
                        <SelectItem value="title-desc">Title (Z-A)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-end">
                    <Button
                      variant="outline"
                      onClick={clearFilters}
                      className="w-full border-red-200 text-red-600 hover:bg-red-50"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Clear Filters
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Category Quick Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={
                  selectedCategory === category.id
                    ? "bg-red-600"
                    : "border-red-200 text-red-600 hover:bg-red-50"
                }
              >
                {category.icon}
                <span className="ml-2">{category.label}</span>
                <Badge className="ml-2 bg-red-100 text-red-700 border-red-200">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Stats */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="border-red-100">
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-2 bg-red-100 text-red-600 rounded-lg mr-4">
                    <ImageIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Photos</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {galleryImages.length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-100">
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-2 bg-red-100 text-red-600 rounded-lg mr-4">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Favorites</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {favorites.length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-100">
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-2 bg-red-100 text-red-600 rounded-lg mr-4">
                    <FolderOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Categories</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {categories.length - 1}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-100">
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-2 bg-red-100 text-red-600 rounded-lg mr-4">
                    <Eye className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Showing</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {filteredImages.length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Gallery Grid */}
        {viewMode === "grid" ? (
          // Grid View
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {sortedImages.map((image) => {
              const { width, height } = getImageDimensions(image.aspectRatio);
              return (
                <Card
                  key={image.id}
                  className="border-red-100 hover:border-red-300 hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-red-50 to-white">
                    {/* Placeholder for image - Replace with actual Image component */}
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)`,
                        minHeight: "200px",
                      }}
                    >
                      <div className="text-center">
                        <ImageIcon className="h-12 w-12 text-red-300 mx-auto mb-2" />
                        <p className="text-red-400 font-medium">
                          {image.aspectRatio}
                        </p>
                        <Badge className="mt-2 bg-red-100 text-red-700 border-red-200">
                          {image.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Favorite Button */}
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm hover:bg-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(image.id);
                      }}
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          favorites.includes(image.id)
                            ? "fill-red-600 text-red-600"
                            : "text-gray-400"
                        }`}
                      />
                    </Button>

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Eye className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-900 truncate">
                        {image.title}
                      </h3>
                      <Badge className="bg-red-50 text-red-700 border-red-200 text-xs">
                        {new Date(image.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {image.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {image.tags.slice(0, 2).map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs border-red-100 text-gray-600"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {image.tags.length > 2 && (
                        <Badge
                          variant="outline"
                          className="text-xs border-red-100 text-gray-600"
                        >
                          +{image.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          // Masonry View
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 mb-12">
            {sortedImages.map((image) => {
              const { width, height } = getImageDimensions(image.aspectRatio);
              return (
                <div
                  key={image.id}
                  className="break-inside-avoid"
                  onClick={() => setSelectedImage(image)}
                >
                  <Card className="border-red-100 hover:border-red-300 hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
                    <div className="relative overflow-hidden bg-gradient-to-br from-red-50 to-white">
                      {/* Dynamic aspect ratio container */}
                      <div
                        className="w-full flex items-center justify-center"
                        style={{
                          aspectRatio: image.aspectRatio,
                          background: `linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)`,
                        }}
                      >
                        <div className="text-center p-4">
                          <ImageIcon className="h-12 w-12 text-red-300 mx-auto mb-2" />
                          <p className="text-red-400 font-medium">
                            {image.aspectRatio}
                          </p>
                          <Badge className="mt-2 bg-red-100 text-red-700 border-red-200">
                            {image.category}
                          </Badge>
                        </div>
                      </div>

                      {/* Favorite Button */}
                      <Button
                        size="icon"
                        variant="ghost"
                        className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm hover:bg-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(image.id);
                        }}
                      >
                        <Heart
                          className={`h-4 w-4 ${
                            favorites.includes(image.id)
                              ? "fill-red-600 text-red-600"
                              : "text-gray-400"
                          }`}
                        />
                      </Button>

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <Eye className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-gray-900 truncate">
                          {image.title}
                        </h3>
                        <Badge className="bg-red-50 text-red-700 border-red-200 text-xs">
                          {new Date(image.date).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                        {image.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {image.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs border-red-100 text-gray-600"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        )}

        {/* Upload Section */}
        <Card className="mb-12 border-red-200 border-dashed">
          <CardContent className="pt-6">
            <div className="text-center">
              <Upload className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Upload New Photos
              </h3>
              <p className="text-gray-600 mb-6">
                Upload photos from your professional events, court appearances,
                or achievements. All image formats and sizes are supported.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="relative">
                  <Input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <Label
                    htmlFor="image-upload"
                    className="cursor-pointer inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <Upload className="h-5 w-5 mr-2" />
                    Select Photos
                  </Label>
                </div>

                <Button
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50"
                >
                  <FolderOpen className="h-5 w-5 mr-2" />
                  Organize Albums
                </Button>
              </div>

              <div className="mt-6 text-sm text-gray-500">
                <p>Supports: JPG, PNG, GIF, WebP, SVG, HEIC</p>
                <p>Maximum file size: 20MB per image</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedImage.title}
                  </h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedImage(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="mb-6">
                  <div
                    className="w-full rounded-xl overflow-hidden bg-gradient-to-br from-red-50 to-white flex items-center justify-center"
                    style={{
                      aspectRatio: selectedImage.aspectRatio,
                      minHeight: "400px",
                    }}
                  >
                    <div className="text-center p-8">
                      <ImageIcon className="h-24 w-24 text-red-300 mx-auto mb-4" />
                      <p className="text-red-400 text-lg font-medium mb-2">
                        {selectedImage.aspectRatio} Image Preview
                      </p>
                      <Badge className="bg-red-100 text-red-700 border-red-200">
                        {selectedImage.category}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1">
                  <Card className="border-red-100">
                    <CardContent>
                      <CardTitle className="text-lg">
                        Description & Tags
                      </CardTitle>
                      <p className="text-gray-700 mb-4">
                        {selectedImage.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selectedImage.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            className="bg-red-50 text-red-700 border-red-200"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <Button
                    variant="outline"
                    className="border-red-200 text-red-600 hover:bg-red-50"
                    onClick={() => toggleFavorite(selectedImage.id)}
                  >
                    <Heart
                      className={`h-4 w-4 mr-2 ${
                        favorites.includes(selectedImage.id)
                          ? "fill-red-600 text-red-600"
                          : ""
                      }`}
                    />
                    {favorites.includes(selectedImage.id)
                      ? "Remove Favorite"
                      : "Add to Favorites"}
                  </Button>
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button
                    variant="outline"
                    className="border-red-200 text-red-600 hover:bg-red-50"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
