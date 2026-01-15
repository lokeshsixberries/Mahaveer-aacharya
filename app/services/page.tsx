// app/components/ServicesPage.tsx
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Users,
  Shield,
  FileText,
  Scale,
  Briefcase,
} from "lucide-react";

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const practiceAreas = [
    {
      id: 1,
      title: "Criminal Law",
      description:
        "Expert defense in criminal cases including bail, anticipatory bail, appeals, and trial representation.",
      icon: <Shield className="h-8 w-8" />,
      features: [
        "Bail Applications",
        "Trial Defense",
        "Appeals",
        "Anticipatory Bail",
        "Bail Bonds",
      ],
      category: "criminal",
    },
    {
      id: 2,
      title: "Civil Litigation",
      description:
        "Comprehensive civil litigation services including property disputes, contract matters.",
      icon: <Scale className="h-8 w-8" />,
      features: [
        "Property Disputes",
        "Contract Enforcement",
        "Recovery Suits",
        "Specific Performance",
        "Injunctions",
      ],
      category: "civil",
    },
    {
      id: 3,
      title: "Family Law",
      description:
        "Sensitive handling of family matters including divorce, child custody, maintenance, and adoption.",
      icon: <Users className="h-8 w-8" />,
      features: [
        "Divorce Cases",
        "Child Custody",
        "Maintenance",
        "Adoption",
        "Domestic Violence",
      ],
      category: "family",
    },
    {
      id: 4,
      title: "Corporate Law",
      description:
        "Legal solutions for businesses including contracts, compliance, mergers, and corporate governance.",
      icon: <Briefcase className="h-8 w-8" />,
      features: [
        "Company Formation",
        "Contracts",
        "Compliance",
        "Mergers & Acquisitions",
        "Corporate Governance",
      ],
      category: "corporate",
    },
    {
      id: 5,
      title: "Property & Real Estate",
      description:
        "Legal assistance for property transactions, title verification, and real estate disputes.",
      icon: <FileText className="h-8 w-8" />,
      features: [
        "Title Verification",
        "Sale Agreements",
        "Property Registration",
        "Land Disputes",
        "Lease Agreements",
      ],
      category: "property",
    },
    {
      id: 6,
      title: "Constitutional Law",
      description:
        "Protection of fundamental rights and constitutional remedies including writ petitions.",
      icon: <Award className="h-8 w-8" />,
      features: [
        "Writ Petitions",
        "PILs",
        "Fundamental Rights",
        "Constitutional Remedies",
        "Public Interest",
      ],
      category: "constitutional",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      case: "Property Dispute",
      text: "Advocate Mahaveer Aacharya handled my property case with utmost professionalism.",
    },
    {
      id: 2,
      name: "Priya Sharma",
      case: "Divorce Settlement",
      text: "Sensitive and professional handling of my divorce case. Ensured fair settlement and minimal stress.",
    },
    {
      id: 3,
      name: "Vikram Singh",
      case: "Corporate Matter",
      text: "Expert guidance in corporate compliance matters. His knowledge of corporate law is exceptional.",
    },
  ];

  const filteredServices = practiceAreas.filter(
    (service) => activeTab === "all" || service.category === activeTab
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-red-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-100 border-red-200">
              <Award className="w-4 h-4 mr-2" />
              10+ Years of Legal Excellence
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Legal Services by{" "}
              <span className="text-red-600">Advocate Mahaveer Aacharya</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert legal representation with a proven track record of success
              in various legal domains. Committed to justice, integrity, and
              client satisfaction.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                onClick={()=>{
              window.open("https://calendly.com/advocate-mahaveer-aacharya/30min","_blank")
            }}
              className="cursor-pointer h-12 bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                className="cursor-pointer h-12 border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 text-lg"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Tabs */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Practice Areas
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive legal services across various domains
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card
                key={service.id}
                className="border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-red-100 text-red-600 rounded-lg mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900">
                        {service.title}
                      </CardTitle>
                      <Badge className="mt-2 bg-red-50 text-red-700 border-red-200">
                        {service.category.charAt(0).toUpperCase() +
                          service.category.slice(1)}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Tabs>

        {/* Why Choose Us */}
        <div className="bg-red-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Advocate Mahaveer Aacharya?
            </h2>
            <Separator className="w-24 mx-auto bg-red-400 h-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white border-red-200">
              <CardHeader>
                <div className="p-3 bg-red-100 text-red-600 rounded-lg w-fit mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <CardTitle>10+ Years Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Decades of successful practice in various courts
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-200">
              <CardHeader>
                <div className="p-3 bg-red-100 text-red-600 rounded-lg w-fit mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <CardTitle>High Success Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Proven track record with thousands of successful cases
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-200">
              <CardHeader>
                <div className="p-3 bg-red-100 text-red-600 rounded-lg w-fit mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle>Client-Centered Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Personal attention to every case and client
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-200">
              <CardHeader>
                <div className="p-3 bg-red-100 text-red-600 rounded-lg w-fit mb-4">
                  <Scale className="h-6 w-6" />
                </div>
                <CardTitle>Ethical Practice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Strict adherence to legal ethics and professional standards
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-gray-600 text-lg">
              What our clients say about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-red-100">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="text-red-400">
                          ★
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  </div>
                  <Separator className="my-4" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <Badge className="mt-1 bg-red-50 text-red-700 border-red-200">
                      {testimonial.case}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <Separator className="w-24 mx-auto bg-red-400 h-1" />
          </div>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1" className="border-red-200">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-red-600">
                What is your consultation fee?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Initial consultation fees vary based on case complexity. We
                offer flexible consultation options including in-person, phone,
                and video consultations. Please contact our office for specific
                fee details.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-red-200">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-red-600">
                How long does a typical case take?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Case duration depends on several factors including case
                complexity, court procedures, and legal requirements. We provide
                estimated timelines during initial consultation and keep clients
                updated throughout the process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-red-200">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-red-600">
                Do you handle cases outside your city?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, we handle cases across the country. For cases outside our
                primary jurisdiction, we collaborate with local counsel while
                maintaining overall case strategy and supervision.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-red-200">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-red-600">
                What documents should I bring for consultation?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Bring all relevant documents including identification, previous
                legal notices, court documents, contracts, photographs, and any
                correspondence related to your case. Our team will guide you on
                specific document requirements.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Contact CTA */}
        <Card className="bg-gradient-to-r from-red-600 to-red-700 text-white border-0">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Get Legal Assistance?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact Advocate Mahaveer Aacharya for expert legal consultation
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <span className="text-lg"> +91 9214310537</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <span className="text-lg">mahaveer.acharya@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3" />
                <span className="text-lg">
                  House No. 23,Green park colony Bhilwara (Rajasthan)
                </span>
              </div>
            </div>
            <Button 
            onClick={()=>{
              window.open("https://calendly.com/advocate-mahaveer-aacharya/30min","_blank")
            }}
            className="cursor-pointer mt-8 h-12 bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Book Immediate Appointment
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServicesPage;
