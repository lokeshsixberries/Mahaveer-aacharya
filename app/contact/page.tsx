"use client";

import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Calendar,
  MessageSquare,
  User,
  Building,
  AlertCircle,
  CheckCircle2,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle,
  FormIcon,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    caseType: "",
    subject: "",
    message: "",
    agreeToTerms: false,
    preferredContact: "email",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const caseTypes = [
    "Criminal Law",
    "Civil Litigation",
    "Family Law",
    "Corporate Law",
    "Property & Real Estate",
    "Constitutional Law",
    "Other",
  ];

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Consultation",
      description: "Direct phone consultation",
      details: "+91 98765 43210",
      badge: "24/7 Emergency",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Contact",
      description: "Detailed case discussions",
      details: "mahaveer.acharya@gmail.com",
      badge: "Response within 24h",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "WhatsApp Message",
      description: "Quick queries & appointments",
      details: "+91 98765 43210",
      badge: "Instant Reply",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office Visit",
      description: "In-person consultation",
      details: "House No 23,Green park colony Bhilwara (Rajasthan)",
      badge: "By Appointment",
      color: "bg-red-100 text-red-600",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", time: " 10:00 AM - 07:00 PM" },
    { day: "Saturday", time: "10:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Emergency Only" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        caseType: "",
        subject: "",
        message: "",
        agreeToTerms: false,
        preferredContact: "email",
      });
    }, 1500);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-red-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-100 border-red-200">
              <MessageSquare className="w-4 h-4 mr-2" />
              Get Legal Consultation
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Contact{" "}
              <span className="text-red-600">Advocate Mahaveer Aacharya</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Reach out for expert legal advice, case evaluation, or appointment
              scheduling. Your first step towards justice begins here.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Contact Methods Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Methods
            </h2>
            <Separator className="w-24 mx-auto bg-red-400 h-1" />
            <p className="text-gray-600 mt-4">
              Choose your preferred way to connect with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="border-red-100 hover:border-red-300 hover:shadow-lg transition-all"
              >
                <CardContent className="pt-6">
                  <div
                    className={`p-3 ${method.color} rounded-full w-fit mb-4`}
                  >
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{method.description}</p>
                  <p className="text-gray-800 font-medium mb-3">
                    {method.details}
                  </p>
                  <Badge className="bg-red-50 text-red-700 border-red-200">
                    {method.badge}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">
                  Send Your Query
                </CardTitle>
                <CardDescription className="text-lg">
                  Fill the form below and we'll respond promptly
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting Advocate Mahaveer Aacharya. We
                      have received your query and will respond within 24 hours.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700">
                          <User className="w-4 h-4 inline mr-2" />
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          placeholder="John Doe"
                          required
                          className="border-red-200 focus:border-red-400 h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700">
                          <Mail className="w-4 h-4 inline mr-2" />
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          placeholder="john@example.com"
                          required
                          className="border-red-200 focus:border-red-400 h-12"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700">
                          <Phone className="w-4 h-4 inline mr-2" />
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          placeholder="+91 98765 43210"
                          required
                          className="border-red-200 focus:border-red-400 h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="caseType" className="text-gray-700">
                          <Building className="w-4 h-4 inline mr-2" />
                          Case Type *
                        </Label>
                        <Select
                          value={formData.caseType}
                          onValueChange={(value) =>
                            handleInputChange("caseType", value)
                          }
                        >
                          <SelectTrigger
                            className="border-red-200 focus:border-red-400"
                            style={{
                              height: "48px",
                              width: "100%",
                            }}
                          >
                            <SelectValue placeholder="Select case type" />
                          </SelectTrigger>
                          <SelectContent>
                            {caseTypes.map((type) => (
                              <SelectItem
                                key={type}
                                value={type
                                  .toLowerCase()
                                  .replace(/ & /g, "-")
                                  .replace(/ /g, "-")}
                              >
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-700">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) =>
                          handleInputChange("subject", e.target.value)
                        }
                        placeholder="Brief description of your legal matter"
                        required
                        className="border-red-200 focus:border-red-400 h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700">
                        <MessageCircle className="w-4 h-4 inline mr-2" />
                        Detailed Message *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder="Please provide details about your legal issue..."
                        rows={5}
                        required
                        className="border-red-200 focus:border-red-400 h-40"
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-gray-700">
                          Preferred Contact Method
                        </Label>
                        <div className="flex gap-4">
                          {["email", "phone"].map((method) => (
                            <Button
                              key={method}
                              type="button"
                              variant={
                                formData.preferredContact === method
                                  ? "default"
                                  : "outline"
                              }
                              className={
                                formData.preferredContact === method
                                  ? "bg-red-600"
                                  : "border-red-200"
                              }
                              onClick={() =>
                                handleInputChange("preferredContact", method)
                              }
                            >
                              {method.charAt(0).toUpperCase() + method.slice(1)}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.agreeToTerms}
                          onCheckedChange={(checked) =>
                            handleInputChange(
                              "agreeToTerms",
                              checked as boolean
                            )
                          }
                          className="border-red-300 data-[state=checked]:bg-red-600"
                        />
                        <Label
                          htmlFor="terms"
                          className="text-sm text-gray-600"
                        >
                          I agree to the terms and privacy policy. I understand
                          that sending this form does not create an
                          attorney-client relationship.
                        </Label>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.agreeToTerms}
                      className="w-full bg-red-600 hover:bg-red-700 py-3 text-lg"
                    >
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      <AlertCircle className="w-4 h-4 inline mr-1" />
                      All communications are confidential and protected by
                      attorney-client privilege
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Office Information */}
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Office Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 bg-red-100 text-red-600 rounded-lg mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Main Office Address
                    </h4>
                    <p className="text-gray-600">
                      23, Green Park Socity
                      <br />
                      Bhilwara - 311001
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-red-100 text-red-600 rounded-lg mr-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Working Hours</h4>
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between py-1">
                        <span className="text-gray-700">{schedule.day}</span>
                        <span className="text-gray-600 font-medium mx-2 text-left">
                          {schedule.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                  <div className="flex items-center mb-3">
                    <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                    <h4 className="font-bold text-gray-900">
                      Emergency Contact
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-3">
                    For urgent legal emergencies outside office hours
                  </p>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-red-600 mr-2" />
                    <span className="text-lg font-bold text-red-700">
                      +91 98765 43210
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Appointment */}
            <Card className="border-red-200 bg-gradient-to-r from-red-50 to-white">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <Calendar className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Quick Appointment
                  </h3>
                  <p className="text-gray-600">
                    Book a consultation slot instantly
                  </p>
                </div>

                <div className="space-y-4">
                  <Button 
                  onClick={()=>{
                    window.open("https://calendly.com/advocate-mahaveer-aacharya/30min","_blank")
                  }}
                  className="h-12 cursor-pointer w-full bg-red-600 hover:bg-red-700">
                    <Calendar className="w-5 h-5" />
                    Book Online Consultation
                  </Button>
                  <Button
                  onClick={()=>{
                    window.open("https://docs.google.com/forms/d/e/1FAIpQLSeAiMkOwMS9FGJF_JNroaC00nVFFQn7r1AeciohcwMyED0nmA/viewform?usp=dialog","_blank");
                  }}
                    variant="outline"
                    className="h-12 cursor-pointer w-full border-red-600 text-red-600 hover:bg-red-50"
                  >
                    <FormIcon className="w-5 h-5" />
                  Apply from Google Form
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Connect With Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-4">
                  <Button
                  onClick={()=>{
                    window.open("https://www.facebook.com/profile.php?id=61585677192977","_blank")
                  }}
                    variant="outline"
                    size="icon"
                    className="cursor-pointer rounded-full border-red-200 hover:bg-red-50"
                  >
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button
                   onClick={()=>{
                    window.open("https://x.com/ma_advocate_","_blank")
                  }}
                    variant="outline"
                    size="icon"
                    className="cursor-pointer rounded-full border-red-200 hover:bg-red-50"
                  >
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button
                   onClick={()=>{
                    window.open("https://www.linkedin.com/in/mahaveer-aacharya-6485483a2/","_blank")
                  }}
                    variant="outline"
                    size="icon"
                    className="cursor-pointer rounded-full border-red-200 hover:bg-red-50"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button
                   onClick={()=>{
                    window.open("https://www.instagram.com/advocate.mahaveer.aacharya/","_blank")
                  }}
                    variant="outline"
                    size="icon"
                    className="cursor-pointer rounded-full border-red-200 hover:bg-red-50"
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <Card className="border-red-200 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Office Location
              </CardTitle>
              <CardDescription>
                Find us easily at our Supreme Court Road office
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-64 bg-gradient-to-r from-red-100 to-red-50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-medium">
                    House No 23,Green park colony Bhilwara (Rajasthan)
                  </p>
                  <p className="text-gray-600">
                    Landmark: Hotel Grand Vasante, Bhilwara
                  </p>
                </div>
              </div>
              <iframe
    src="https://www.google.com/maps?q=25.345681,74.612075&t=h&z=19&hl=en&output=embed"
    width="100%"
    height="400px"
    style={{border:"none"}}
    loading="lazy"
    aria-label="Google Map Location">
     </iframe>

            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
