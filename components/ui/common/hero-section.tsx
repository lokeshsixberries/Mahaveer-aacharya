'use client';

import React from "react";
import {
  Shield,
  Award,
  Users,
  Clock,
  ArrowRight,
  ChevronRight,
  Scale,
  Phone,
  Quote,
  Download,
} from "lucide-react";

const LawyerHeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-50 rounded-full opacity-20 blur-3xl"></div>

        <div className="absolute top-1/2 right-1/4 opacity-10">
          <Scale className="w-64 h-64 text-red-200" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-semibold mb-6 border border-red-100">
              <Shield className="w-4 h-4 mr-2" />
              Trusted Legal Representation Since 2015
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Trusted{" "}
              <span className="text-red-600 relative">
                Legal Partner
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></span>
              </span>{" "}
              in Times of Need
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              With over 10+ years of combined experience, our dedicated team of
              attorneys provides comprehensive legal solutions. We fight
              tirelessly to protect your rights and achieve the justice you
              deserve.
            </p>

            <div className="mb-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Our Expertise:
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Personal Injury",
                  "Criminal Defense",
                  "Family Law",
                  "Business Law",
                  "Employment Law",
                  "Real Estate",
                ].map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-white px-4 py-3 rounded-lg border border-gray-100 shadow-sm hover:border-red-200 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-red-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/images/card.png ";
                  link.download = "business-card.jpg";
                  link.click();
                }}
                className="cursor-pointer group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center">
               Download Bussiness Card
                <Download className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="cursor-pointer group bg-white hover:bg-gray-50 text-gray-800 border-2 border-red-200 hover:border-red-300 px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2 text-red-600" />
                Call Now: (+91) 92143-10537
              </button>
            </div>

            <div className="flex flex-wrap gap-8 pt-6 border-t border-gray-100">
              {[
                {
                  icon: <Award className="w-6 h-6 text-red-600" />,
                  value: "100%",
                  label: "Success Rate",
                },
                {
                  icon: <Users className="w-6 h-6 text-red-600" />,
                  value: "10+",
                  label: "Years Experience",
                },
                {
                  icon: <Clock className="w-6 h-6 text-red-600" />,
                  value: "24/7",
                  label: "Available",
                },
              ].map((stat, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="ml-4">
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative ">
            <div className="relative bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
              <div className="p-8">
                <div className="flex items-start mb-6">
                  <Quote className="w-6 h-6 text-red-300 mr-4 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700 italic">
                  Our practice is built on integrity, expertise, and unwavering dedication to protecting our clients’ rights at every stage of the legal process.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    "Experienced Trial Attorney",
                    "Strategic Case Analysis and Preparation",
                    "Recognized for Excellence in Legal Advocacy",
                    "Respected Leader within the Legal Community",
                  ].map((credential, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{credential}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -top-10 -right-1 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl shadow-2xl p-3">
              <div className="text-center">
                <div className="text-xl font-bold">100%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Free Case Evaluation
              </h4>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                  Get Free Consultation
                </button>
                <p className="text-xs text-gray-500 text-center">
                  Your consultation is confidential
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawyerHeroSection;
