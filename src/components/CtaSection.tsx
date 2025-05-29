
import { Button } from "@/components/ui/button";
import { Shield, Phone, Mail } from "lucide-react";

export const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <Shield className="w-16 h-16 text-white mx-auto mb-8" />
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Safety Program?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of contractors who have reduced incidents by 45% and saved thousands 
            in fines with SiteSafe AI. Start your free trial today - no credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Start Free 30-Day Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              Schedule Demo
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">30 Days</div>
              <div className="text-blue-200">Free Trial</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">5 Minutes</div>
              <div className="text-blue-200">Setup Time</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Safety Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
