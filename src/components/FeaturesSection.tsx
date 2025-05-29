
import { Eye, MessageSquare, TrendingUp, Shield, Camera, ClipboardCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Eye className="w-8 h-8 text-blue-600" />,
      title: "AI Hazard Detection",
      description: "Real-time computer vision analyzes your jobsite through cameras or smartphones, instantly identifying safety violations like missing PPE, fall risks, and unsafe practices.",
      benefits: ["24/7 monitoring", "Instant alerts", "Visual evidence"]
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-600" />,
      title: "Smart Safety Coach",
      description: "Get instant answers to safety questions, auto-generated toolbox talks, and compliance reminders. Like having a safety expert in your pocket.",
      benefits: ["OSHA compliance", "Custom training", "Instant guidance"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
      title: "Predictive Analytics",
      description: "Track safety metrics, predict incident risks, and get actionable insights to prevent accidents before they happen.",
      benefits: ["Risk scoring", "Trend analysis", "Insurance savings"]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Three Powerful Tools in One Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combine real-time monitoring, intelligent coaching, and predictive insights 
            to transform your safety program from reactive to proactive.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-600 rounded-2xl p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">The Problem We Solve</h3>
              <p className="text-blue-100 mb-6">
                Small contractors suffer 77% of OSHA fines and have 5x higher accident rates 
                than large firms. Most can't afford dedicated safety managers or expensive 
                enterprise software.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-700 rounded-lg">
                  <div className="text-2xl font-bold">$170B</div>
                  <div className="text-sm text-blue-200">Annual cost of workplace injuries</div>
                </div>
                <div className="text-center p-4 bg-blue-700 rounded-lg">
                  <div className="text-2xl font-bold">2.8M</div>
                  <div className="text-sm text-blue-200">Workplace injuries per year</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-6 text-gray-900">
                <Camera className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-semibold mb-2">Smart Cameras</h4>
                <p className="text-sm text-gray-600">Use existing cameras or smartphones</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-gray-900">
                <ClipboardCheck className="w-8 h-8 text-green-600 mb-3" />
                <h4 className="font-semibold mb-2">Automated Reports</h4>
                <p className="text-sm text-gray-600">Generate compliance documentation</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-gray-900">
                <Shield className="w-8 h-8 text-orange-600 mb-3" />
                <h4 className="font-semibold mb-2">24/7 Protection</h4>
                <p className="text-sm text-gray-600">Always-on safety monitoring</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-gray-900">
                <TrendingUp className="w-8 h-8 text-purple-600 mb-3" />
                <h4 className="font-semibold mb-2">Cost Savings</h4>
                <p className="text-sm text-gray-600">Reduce fines and insurance premiums</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
