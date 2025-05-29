
import { Button } from "@/components/ui/button";
import { Play, Shield, Eye, TrendingUp } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-orange-50 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                AI-Powered Safety
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Virtual
              <span className="text-blue-600"> Safety Manager</span>
              <br />for Every Jobsite
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Stop accidents before they happen. SiteSafe AI brings enterprise-level safety monitoring 
              to small contractors through intelligent hazard detection, real-time compliance coaching, 
              and predictive analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Start Free 30-Day Trial
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 px-8 py-4 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">77%</div>
                <div className="text-sm text-gray-600">Reduction in OSHA Fines</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">45%</div>
                <div className="text-sm text-gray-600">Fewer Incidents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">$50K+</div>
                <div className="text-sm text-gray-600">Average Annual Savings</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-green-400 text-sm">Live Feed</div>
                </div>
                <div className="bg-blue-900 rounded h-40 flex items-center justify-center">
                  <Eye className="w-16 h-16 text-blue-300" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-red-50 border border-red-200 rounded-lg">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  <div className="text-sm">
                    <div className="font-medium text-red-800">Missing Hard Hat Detected</div>
                    <div className="text-red-600">Worker at Zone A - Immediate attention required</div>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <div className="text-sm">
                    <div className="font-medium text-orange-800">Fall Protection Alert</div>
                    <div className="text-orange-600">Elevated work detected without safety harness</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
