
import { Card, CardContent } from "@/components/ui/card";
import { Star, Building2, Users, DollarSign } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "SiteSafe AI caught 15 safety violations in our first week that we completely missed. It's like having a safety expert watching every corner of our jobsite 24/7.",
      author: "Mike Rodriguez",
      title: "Project Manager",
      company: "Rodriguez Construction",
      size: "25 employees",
      savings: "$35K saved in potential fines",
      image: "👨‍💼"
    },
    {
      quote: "Our insurance premiums dropped 20% after showing our carrier the safety improvements. SiteSafe AI paid for itself in the first quarter.",
      author: "Sarah Chen",
      title: "Owner",
      company: "Chen Brothers Electric",
      size: "12 employees",
      savings: "20% insurance reduction",
      image: "👩‍💼"
    },
    {
      quote: "The AI coach answers safety questions instantly. My crew loves having expert guidance right on their phones. No more calling me for every OSHA question.",
      author: "Tom Williams",
      title: "Safety Supervisor",
      company: "Williams Roofing",
      size: "40 employees",
      savings: "50% fewer incidents",
      image: "👨‍🔧"
    }
  ];

  const caseStudy = {
    company: "ABC Construction",
    size: "35 employees",
    before: {
      incidents: "12 per year",
      compliance: "67%",
      fines: "$25,000"
    },
    after: {
      incidents: "3 per year",
      compliance: "94%",
      fines: "$2,500"
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real Results from Real Contractors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how small and mid-sized contractors are transforming their safety programs 
            and saving thousands with SiteSafe AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                    <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                    <div className="flex items-center mt-2 space-x-4 text-xs text-gray-500">
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {testimonial.size}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-3 h-3 mr-1" />
                        {testimonial.savings}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Case Study: 12-Month Transformation</h3>
            <p className="text-blue-100">ABC Construction - Mid-size General Contractor</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Building2 className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h4 className="text-xl font-semibold mb-2">Company Profile</h4>
              <div className="space-y-2 text-blue-100">
                <div>{caseStudy.company}</div>
                <div>{caseStudy.size}</div>
                <div>Commercial & Residential</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-red-500 rounded-lg p-6 mb-4">
                <h4 className="text-xl font-semibold mb-4">Before SiteSafe AI</h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-bold">{caseStudy.before.incidents}</div>
                    <div className="text-sm">Safety Incidents</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{caseStudy.before.compliance}</div>
                    <div className="text-sm">PPE Compliance</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{caseStudy.before.fines}</div>
                    <div className="text-sm">Annual OSHA Fines</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-green-500 rounded-lg p-6 mb-4">
                <h4 className="text-xl font-semibold mb-4">After SiteSafe AI</h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-bold">{caseStudy.after.incidents}</div>
                    <div className="text-sm">Safety Incidents (-75%)</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{caseStudy.after.compliance}</div>
                    <div className="text-sm">PPE Compliance (+27%)</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{caseStudy.after.fines}</div>
                    <div className="text-sm">Annual OSHA Fines (-90%)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <div className="bg-white text-gray-900 rounded-lg p-6 max-w-md mx-auto">
              <div className="text-3xl font-bold text-green-600 mb-2">$67,500</div>
              <div className="text-sm">Total Annual Savings</div>
              <div className="text-xs text-gray-600 mt-2">
                Reduced fines, lower insurance, fewer work stoppages
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
