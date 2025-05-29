
import { HardHat, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <HardHat className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">SiteSafe AI</span>
            </div>
            <p className="text-gray-400 mb-6">
              Making construction sites safer through intelligent AI monitoring 
              and real-time safety coaching for contractors of all sizes.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                <span>(555) 123-SAFE</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2" />
                <span>hello@sitesafeai.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Product</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">AI Hazard Detection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Coach</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Analytics Dashboard</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">OSHA Compliance Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Best Practices</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ROI Calculator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SiteSafe AI. All rights reserved. Built to save lives and protect workers.</p>
        </div>
      </div>
    </footer>
  );
};
