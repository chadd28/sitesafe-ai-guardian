
import { Button } from "@/components/ui/button";
import { HardHat } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <HardHat className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">SiteSafe AI</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
            <a href="#demo" className="text-gray-700 hover:text-blue-600 transition-colors">Demo</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Case Studies</a>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700">Sign In</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Start Free Trial</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
