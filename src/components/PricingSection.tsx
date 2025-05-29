
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$149",
      period: "/month",
      description: "Perfect for small contractors",
      features: [
        "Up to 2 active jobsites",
        "Basic AI hazard detection",
        "Mobile safety coach",
        "Email alerts",
        "Monthly safety reports",
        "Standard support"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Most popular for growing companies",
      features: [
        "Up to 10 active jobsites",
        "Advanced AI hazard detection",
        "Smart safety coach with custom training",
        "Real-time alerts (SMS + email)",
        "Predictive analytics dashboard",
        "OSHA compliance tracking",
        "Integration with project management tools",
        "Priority support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large contractors and multiple locations",
      features: [
        "Unlimited jobsites",
        "Full AI suite with custom models",
        "White-label options",
        "API access",
        "Custom integrations",
        "Dedicated safety consultant",
        "24/7 phone support",
        "Custom training programs"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Affordable Safety for Every Size Company
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include our 30-day free trial 
            and can typically save you more than they cost in reduced fines and incidents.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
              plan.popular ? 'ring-2 ring-blue-600 scale-105' : ''
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="text-gray-600 mb-4">{plan.description}</div>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ROI Calculator</h3>
              <p className="text-gray-600 mb-6">
                Most customers see positive ROI within 60 days. Calculate your potential savings:
              </p>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">$35K</div>
                    <div className="text-sm text-red-700">Average cost per OSHA violation</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">$42K</div>
                    <div className="text-sm text-orange-700">Average cost per workplace injury</div>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">Break Even</div>
                  <div className="text-sm text-green-700">Prevent just 1 incident to pay for an entire year</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4">30-Day Free Trial Includes:</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2" />
                  Full access to all features
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2" />
                  Setup and training included
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2" />
                  No contract required
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2" />
                  Cancel anytime
                </li>
              </ul>
              <Button className="w-full mt-6 bg-white text-blue-600 hover:bg-gray-100" size="lg">
                Start Your Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
