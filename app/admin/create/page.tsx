"use client";

import { useState, useRef } from "react";
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
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Type,
  Palette,
  Download,
  Save,
  RefreshCw,
  ImageIcon,
  Upload as UploadIcon,
} from "lucide-react";

export default function CreateImagePage() {
  const [textData, setTextData] = useState({
    headline: "Legal Excellence",
    subheading: "Advocate Mahaveer Aacharya",
    quote:
      "Justice is not just a legal outcome but a restoration of faith in humanity.",
    footer: "10+ Years of Professional Service",
  });

  const [design, setDesign] = useState({
    backgroundColor: "#ffffff",
    textColor: "#dc2626",
    accentColor: "#1f2937",
    fontSize: 48,
    fontFamily: "serif",
    layout: "centered",
    overlayOpacity: 0.1,
  });

  const [backgroundImage, setBackgroundImage] = useState<File | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleTextChange = (field: string, value: string) => {
    setTextData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDesignChange = (field: string, value: string | number) => {
    setDesign((prev) => ({ ...prev, [field]: value }));
  };

  const handleBackgroundUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setBackgroundImage(file);
    }
  };

  const handleGenerateImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = design.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = design.textColor;
    ctx.font = `${design.fontSize}px ${design.fontFamily}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.font = `bold ${design.fontSize}px ${design.fontFamily}`;
    ctx.fillText(textData.headline, centerX, centerY - 100);

    ctx.font = `${design.fontSize - 16}px ${design.fontFamily}`;
    ctx.fillText(textData.subheading, centerX, centerY - 40);

    ctx.font = `${design.fontSize - 8}px ${design.fontFamily}`;
    const lines = wrapText(
      ctx,
      textData.quote,
      canvas.width - 100,
      centerX,
      centerY
    );

    ctx.font = `${design.fontSize - 20}px ${design.fontFamily}`;
    ctx.fillText(textData.footer, centerX, centerY + 180);

    ctx.fillStyle = design.accentColor;
    ctx.fillRect(centerX - 50, centerY + 90, 100, 2);
  };

  const wrapText = (
    context: CanvasRenderingContext2D,
    text: string,
    maxWidth: number,
    x: number,
    y: number
  ) => {
    const words = text.split(" ");
    const lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = context.measureText(currentLine + " " + word).width;
      if (width < maxWidth) {
        currentLine += " " + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);

    const lineHeight = 30;
    for (let i = 0; i < lines.length; i++) {
      context.fillText(lines[i], x, y + i * lineHeight);
    }

    return lines;
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = `legal-quote-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const handleSaveToGallery = () => {
    console.log("Admin: Saving to gallery", { textData, design });
    alert("Image saved to gallery (Admin action)");
  };

  const templateDesigns = [
    {
      name: "Professional Red",
      backgroundColor: "#ffffff",
      textColor: "#dc2626",
      accentColor: "#1f2937",
      fontFamily: "serif",
    },
    {
      name: "Elegant Dark",
      backgroundColor: "#1f2937",
      textColor: "#f3f4f6",
      accentColor: "#dc2626",
      fontFamily: "sans-serif",
    },
    {
      name: "Minimalist",
      backgroundColor: "#f9fafb",
      textColor: "#374151",
      accentColor: "#dc2626",
      fontFamily: "monospace",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Create Images with Text
        </h1>
        <p className="text-gray-600 mt-2">
          Admin tool: Create custom images with text for the website
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Preview Canvas */}
        <Card className="lg:col-span-2 border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ImageIcon className="h-5 w-5 text-red-600" />
              Preview
            </CardTitle>
            <CardDescription>
              Admin preview: Generate images with custom text
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-red-200 rounded-xl p-4 bg-white">
              <canvas
                ref={canvasRef}
                width={800}
                height={600}
                className="w-full h-auto max-h-[500px] object-contain rounded-lg border border-red-100"
              />
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                onClick={handleGenerateImage}
                className="bg-red-600 hover:bg-red-700"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Generate Preview
              </Button>
              <Button
                onClick={handleDownload}
                variant="outline"
                className="border-red-200"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Image
              </Button>
              <Button
                onClick={handleSaveToGallery}
                className="bg-gray-900 hover:bg-black"
              >
                <Save className="h-4 w-4 mr-2" />
                Save to Gallery
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Design Controls */}
        <Card className="border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Type className="h-5 w-5 text-red-600" />
              Text Content
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="headline">Headline</Label>
                <Input
                  id="headline"
                  value={textData.headline}
                  onChange={(e) => handleTextChange("headline", e.target.value)}
                  className="mt-1 border-red-200"
                />
              </div>

              <div>
                <Label htmlFor="subheading">Subheading</Label>
                <Input
                  id="subheading"
                  value={textData.subheading}
                  onChange={(e) =>
                    handleTextChange("subheading", e.target.value)
                  }
                  className="mt-1 border-red-200"
                />
              </div>

              <div>
                <Label htmlFor="quote">Quote/Message</Label>
                <Textarea
                  id="quote"
                  value={textData.quote}
                  onChange={(e) => handleTextChange("quote", e.target.value)}
                  rows={3}
                  className="mt-1 border-red-200"
                />
              </div>

              <div>
                <Label htmlFor="footer">Footer Text</Label>
                <Input
                  id="footer"
                  value={textData.footer}
                  onChange={(e) => handleTextChange("footer", e.target.value)}
                  className="mt-1 border-red-200"
                />
              </div>
            </div>

            <Separator />

            <div>
              <CardTitle className="flex items-center gap-2 mb-4">
                <Palette className="h-5 w-5 text-red-600" />
                Design Settings
              </CardTitle>

              <div className="space-y-4">
                <div>
                  <Label>Quick Templates</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {templateDesigns.map((template, index) => (
                      <Button
                        key={index}
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setDesign((prev) => ({ ...prev, ...template }))
                        }
                        className="border-red-200 hover:bg-red-50"
                      >
                        {template.name}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Background Color</Label>
                  <div className="flex items-center gap-3 mt-2">
                    <Input
                      type="color"
                      value={design.backgroundColor}
                      onChange={(e) =>
                        handleDesignChange("backgroundColor", e.target.value)
                      }
                      className="w-12 h-12 p-1"
                    />
                    <span className="text-sm text-gray-600">
                      {design.backgroundColor}
                    </span>
                  </div>
                </div>

                <div>
                  <Label>Text Color</Label>
                  <div className="flex items-center gap-3 mt-2">
                    <Input
                      type="color"
                      value={design.textColor}
                      onChange={(e) =>
                        handleDesignChange("textColor", e.target.value)
                      }
                      className="w-12 h-12 p-1"
                    />
                    <span className="text-sm text-gray-600">
                      {design.textColor}
                    </span>
                  </div>
                </div>

                <div>
                  <Label>Font Size: {design.fontSize}px</Label>
                  <Slider
                    value={[design.fontSize]}
                    onValueChange={([value]) =>
                      handleDesignChange("fontSize", value)
                    }
                    min={24}
                    max={72}
                    step={4}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Font Family</Label>
                  <Select
                    value={design.fontFamily}
                    onValueChange={(value) =>
                      handleDesignChange("fontFamily", value)
                    }
                  >
                    <SelectTrigger className="mt-1 border-red-200">
                      <SelectValue placeholder="Select font" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="serif">Serif (Traditional)</SelectItem>
                      <SelectItem value="sans-serif">
                        Sans-serif (Modern)
                      </SelectItem>
                      <SelectItem value="monospace">
                        Monospace (Technical)
                      </SelectItem>
                      <SelectItem value="cursive">Cursive (Elegant)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Custom Background Image</Label>
                  <div className="mt-2">
                    <input
                      type="file"
                      id="background-upload"
                      accept="image/*"
                      onChange={handleBackgroundUpload}
                      className="hidden"
                    />
                    <label htmlFor="background-upload">
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full border-red-200 hover:bg-red-50"
                      >
                        <UploadIcon className="h-4 w-4 mr-2" />
                        {backgroundImage
                          ? "Change Background"
                          : "Upload Background"}
                      </Button>
                    </label>
                    {backgroundImage && (
                      <p className="text-sm text-gray-500 mt-2">
                        Using: {backgroundImage.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
