"use client";

import { useState, useCallback } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Upload,
  ImageIcon,
  X,
  CheckCircle2,
  AlertCircle,
  FolderOpen,
  Globe,
  Lock,
} from "lucide-react";
import { useDropzone } from "react-dropzone";

export default function AdminUploadPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imageData, setImageData] = useState({
    title: "",
    description: "",
    category: "gallery",
    tags: "",
    visibility: "public" as "public" | "private",
  });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp"],
    },
    maxSize: 20 * 1024 * 1024, // 20MB
  });

  const handleUpload = async () => {
    if (files.length === 0) return;

    setUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          // Reset form after upload
          setFiles([]);
          setImageData({
            title: "",
            description: "",
            category: "gallery",
            tags: "",
            visibility: "public",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const categories = [
    { id: "courtroom", label: "Courtroom", count: 45 },
    { id: "events", label: "Events", count: 32 },
    { id: "office", label: "Office", count: 28 },
    { id: "gallery", label: "Gallery", count: 12 },
    { id: "awards", label: "Awards", count: 8 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Upload Images</h1>
        <p className="text-gray-600 mt-2">
          Admin-only: Upload images directly to the website gallery
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upload Section */}
        <Card className="lg:col-span-2 border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5 text-red-600" />
              Upload Images
            </CardTitle>
            <CardDescription>
              Admin privilege: Upload images to website gallery
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Drag & Drop Area */}
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
                isDragActive
                  ? "border-red-400 bg-red-50"
                  : "border-red-200 hover:border-red-300 hover:bg-red-50"
              }`}
            >
              <input {...getInputProps()} />
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mx-auto">
                  <ImageIcon className="h-8 w-8 text-red-600" />
                </div>
                {isDragActive ? (
                  <div>
                    <p className="text-lg font-medium text-red-700">
                      Drop the files here
                    </p>
                    <p className="text-sm text-gray-500">Release to upload</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-lg font-medium text-gray-900">
                      Drag & drop images here
                    </p>
                    <p className="text-sm text-gray-500">
                      or click to browse files
                    </p>
                  </div>
                )}
                <Button
                  variant="outline"
                  className="border-red-200 text-red-600 hover:bg-red-50"
                >
                  <FolderOpen className="h-4 w-4 mr-2" />
                  Browse Files
                </Button>
              </div>
            </div>

            {/* Selected Files Preview */}
            {files.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900">
                    Selected Files ({files.length})
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setFiles([])}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Clear All
                  </Button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {files.map((file, index) => (
                    <div key={index} className="relative group">
                      <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-red-50 to-red-100 border border-red-200">
                        <div className="w-full h-full flex items-center justify-center">
                          <ImageIcon className="h-8 w-8 text-red-300" />
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-xs font-medium text-gray-700 truncate">
                          {file.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {(file.size / (1024 * 1024)).toFixed(2)} MB
                        </p>
                      </div>
                      <button
                        onClick={() => removeFile(index)}
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-100 border border-red-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-3 w-3 text-red-600" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Upload Progress */}
            {uploading && (
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">
                    Uploading... (Admin Action)
                  </span>
                  <span className="font-medium text-red-600">
                    {uploadProgress}%
                  </span>
                </div>
                <div className="w-full bg-red-100 rounded-full h-2">
                  <div
                    className="bg-red-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Image Details Form */}
        <Card className="border-red-200">
          <CardHeader>
            <CardTitle>Image Details</CardTitle>
            <CardDescription>Add metadata for uploaded images</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={imageData.title}
                  onChange={(e) =>
                    setImageData((prev) => ({ ...prev, title: e.target.value }))
                  }
                  placeholder="Enter image title"
                  className="mt-1 border-red-200"
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={imageData.description}
                  onChange={(e) =>
                    setImageData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  placeholder="Describe this image..."
                  rows={3}
                  className="mt-1 border-red-200"
                />
              </div>

              <div>
                <Label htmlFor="category">Category</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      type="button"
                      variant={
                        imageData.category === category.id
                          ? "default"
                          : "outline"
                      }
                      size="sm"
                      onClick={() =>
                        setImageData((prev) => ({
                          ...prev,
                          category: category.id,
                        }))
                      }
                      className={
                        imageData.category === category.id
                          ? "bg-red-600 hover:bg-red-700"
                          : "border-red-200 text-gray-700 hover:bg-red-50"
                      }
                    >
                      {category.label}
                      <Badge className="ml-2 bg-red-100 text-red-700">
                        {category.count}
                      </Badge>
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  value={imageData.tags}
                  onChange={(e) =>
                    setImageData((prev) => ({ ...prev, tags: e.target.value }))
                  }
                  placeholder="comma, separated, tags"
                  className="mt-1 border-red-200"
                />
              </div>

              <div>
                <Label>Visibility</Label>
                <div className="flex gap-4 mt-2">
                  <Button
                    type="button"
                    variant={
                      imageData.visibility === "public" ? "default" : "outline"
                    }
                    onClick={() =>
                      setImageData((prev) => ({
                        ...prev,
                        visibility: "public",
                      }))
                    }
                    className={
                      imageData.visibility === "public"
                        ? "bg-red-600 hover:bg-red-700"
                        : "border-red-200"
                    }
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    Public
                  </Button>
                  <Button
                    type="button"
                    variant={
                      imageData.visibility === "private" ? "default" : "outline"
                    }
                    onClick={() =>
                      setImageData((prev) => ({
                        ...prev,
                        visibility: "private",
                      }))
                    }
                    className={
                      imageData.visibility === "private"
                        ? "bg-red-600 hover:bg-red-700"
                        : "border-red-200"
                    }
                  >
                    <Lock className="h-4 w-4 mr-2" />
                    Private
                  </Button>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <Button
                onClick={handleUpload}
                disabled={files.length === 0 || uploading}
                className="w-full bg-red-600 hover:bg-red-700"
              >
                {uploading ? (
                  <>Uploading... ({uploadProgress}%)</>
                ) : (
                  <>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload {files.length} Image{files.length !== 1 ? "s" : ""}
                  </>
                )}
              </Button>

              <div className="text-xs text-gray-500 space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3 w-3 text-green-500" />
                  <span>Admin-only: Direct upload to gallery</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-3 w-3 text-amber-500" />
                  <span>Max 20MB per image, unlimited total storage</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
