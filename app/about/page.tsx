// app/components/AboutPage.tsx
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Award,
  GraduationCap,
  Briefcase,
  Users,
  Scale,
  Target,
  BookOpen,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Shield,
  Heart,
  Gavel,
} from "lucide-react";

const AboutPage: React.FC = () => {
  const qualifications = [
    {
      year: "1998",
      title: "LL.B. (Hons)",
      institution: "National Law School of India University, Bangalore",
      description: "Graduated with honors in Constitutional Law",
    },
    {
      year: "2000",
      title: "Bar Council Registration",
      institution: "Bar Council of Delhi",
      description: "Enrolled as an Advocate",
    },
    {
      year: "2005",
      title: "LL.M. in Criminal Law",
      institution: "Delhi University",
      description: "Specialization in Criminal Law and Procedure",
    },
    {
      year: "2012",
      title: "Certified Mediator",
      institution: "Indian Institute of Arbitration & Mediation",
      description: "Certified in Alternative Dispute Resolution",
    },
  ];

  const careerMilestones = [
    {
      year: "2000-2005",
      title: "Junior Advocate",
      firm: "Sharma & Associates",
      description:
        "Started career focusing on civil litigation and property disputes",
    },
    {
      year: "2005-2010",
      title: "Senior Associate",
      firm: "Delhi High Court Chambers",
      description:
        "Handled complex criminal appeals and constitutional matters",
    },
    {
      year: "2010-Present",
      title: "Founding Partner",
      firm: "Aacharya Legal Associates",
      description:
        "Established own practice specializing in diverse legal domains",
    },
    {
      year: "2015",
      title: "Notable Achievement",
      firm: "Supreme Court of India",
      description: "Successfully argued landmark case on property rights",
    },
  ];

  const values = [
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Justice & Fairness",
      description:
        "Unwavering commitment to justice and equitable treatment for all clients",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Integrity",
      description:
        "Maintaining highest ethical standards in all legal proceedings",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Client Compassion",
      description: "Understanding client needs with empathy and sensitivity",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "Pursuing excellence in legal strategy and representation",
    },
  ];

  const professionalAffiliations = [
    "Bar Council of India",
    "Delhi High Court Bar Association",
    "Supreme Court Bar Association",
    "Indian Law Institute",
    "International Bar Association",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-red-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-red-100 text-red-700 hover:bg-red-100 border-red-200">
                  <Award className="w-4 h-4 mr-2" />
                  Senior Advocate
                </Badge>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Advocate{" "}
                  <span className="text-red-600">Mahaveer Aacharya</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  With over 10+ years of distinguished legal practice, Advocate
                  Mahaveer Aacharya stands as a pillar of justice and legal
                  excellence. His journey in law has been marked by unwavering
                  dedication, profound legal expertise, and a deep commitment to
                  serving justice.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="h-12 cursor-pointer bg-red-600 hover:bg-red-700 text-white">
                    <Phone className="w-4 h-4" />
                    Contact Now
                  </Button>
                  <Button
                    variant="outline"
                    onClick={()=>{
                      window.open("https://www.linkedin.com/in/mahaveer-aacharya-6485483a2/")
                    }}
                    className="h-12 cursor-pointer border-red-600 text-red-600 hover:bg-red-50"
                  >
                    View Full Profile
                  </Button>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/images/hero.png"
                  className="bg-red-600 h-96 w-80 rounded-2xl mx-auto object-cover object-top shadow-lg border border-red-100"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-red-100">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">
                      10+
                    </div>
                    <div className="text-gray-700 font-semibold">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-5">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Legal Philosophy
          </h2>
          <Separator className="w-24 mx-auto bg-red-400 h-1 mb-8" />
          <div className="bg-red-50 rounded-2xl p-8">
            <Scale className="h-16 w-16 text-red-600 mx-auto mb-6" />
            <p className="text-2xl text-gray-700 italic mb-6">
              The law is not merely a profession but a sacred duty. Every case
              represents a human story, and justice is not just a legal outcome
              but a restoration of faith.
            </p>
            <p className="text-lg text-gray-600 font-semibold">
              - Advocate Mahaveer Aacharya
            </p>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="journey" className="mb-16">
       
          <TabsContent value="qualifications">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {qualifications.map((qual, index) => (
                <Card
                  key={index}
                  className="border-red-100 hover:border-red-300 transition-all"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge className="bg-red-100 text-red-700 border-red-200">
                        {qual.year}
                      </Badge>
                      <GraduationCap className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle className="text-xl mt-2">{qual.title}</CardTitle>
                    <CardDescription className="font-semibold text-gray-700">
                      {qual.institution}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{qual.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="values">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border-red-100 hover:border-red-300 transition-all"
                >
                  <CardContent className="pt-6">
                    <div className="p-3 bg-red-100 text-red-600 rounded-lg w-fit mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Professional Affiliations */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Affiliations
            </h2>
            <Separator className="w-24 mx-auto bg-red-400 h-1" />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {professionalAffiliations.map((affiliation, index) => (
                <div
                  key={index}
                  className="bg-red-50 rounded-lg p-4 border border-red-100"
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-800 font-medium">
                      {affiliation}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Community Involvement */}
        <div className="bg-red-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Community Involvement
            </h2>
            <Separator className="w-24 mx-auto bg-red-400 h-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white border-red-200">
              <CardHeader>
                <div className="p-3 bg-red-100 text-red-600 rounded-lg w-fit mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle>Pro Bono Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Regular pro bono work for underprivileged clients and NGOs
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-200">
              <CardHeader>
                <div className="p-3 bg-red-100 text-red-600 rounded-lg w-fit mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <CardTitle>Legal Awareness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Conducting legal literacy programs in schools and colleges
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-200">
              <CardHeader>
                <div className="p-3 bg-red-100 text-red-600 rounded-lg w-fit mb-4">
                  <Gavel className="h-6 w-6" />
                </div>
                <CardTitle>Mentorship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mentoring young law graduates and interns
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Information */}
        <Card className="max-w-4xl mx-auto border-red-200">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-gray-900">
              Contact Information
            </CardTitle>
            <CardDescription className="text-lg">
              Reach out for consultations and legal advice
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-red-100 rounded-xl">
                <div className="p-3 bg-red-100 text-red-600 rounded-full w-fit mx-auto mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
                <p className="text-sm text-gray-500 mt-1">
                  Mon-Sat: 10:00 AM - 07:00 PM
                </p>
              </div>

              <div className="text-center p-6 border border-red-100 rounded-xl">
                <div className="p-3 bg-red-100 text-red-600 rounded-full w-fit mx-auto mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">mahaveer.acharya@gmail.com</p>
                <p className="text-sm text-gray-500 mt-1">
                  Response within 24 hours
                </p>
              </div>

              <div className="text-center p-6 border border-red-100 rounded-xl">
                <div className="p-3 bg-red-100 text-red-600 rounded-full w-fit mx-auto mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Office</h3>
                <p className="text-gray-600">23,Green Park Socity</p>
                <p className="text-sm text-gray-500 mt-1">Bhilwara - 311001</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button 
              onClick={()=>{
                window.open("https://calendly.com/advocate-mahaveer-aacharya/30min","_blank");
              }}
              className="h-12 cursor-pointer bg-red-600 hover:bg-red-700 px-8 py-3">
                <Calendar className="w-5 h-5" />
                Schedule an Appointment
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                Initial consultation available online or in-person
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;
