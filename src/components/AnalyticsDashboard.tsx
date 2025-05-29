
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Shield, AlertTriangle, CheckCircle } from "lucide-react";

export const AnalyticsDashboard = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real-Time Safety Analytics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track safety performance, predict risks, and prove ROI with comprehensive analytics 
            that help you make data-driven safety decisions.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between text-sm">
                  Safety Score
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">92%</div>
                <div className="text-sm text-green-700">+12% this month</div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between text-sm">
                  PPE Compliance
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600">87%</div>
                <div className="text-sm text-blue-700">+25% this quarter</div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between text-sm">
                  Risk Alerts
                  <AlertTriangle className="w-4 h-4 text-orange-600" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange-600">3</div>
                <div className="text-sm text-orange-700">-67% this week</div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between text-sm">
                  Cost Savings
                  <TrendingDown className="w-4 h-4 text-purple-600" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600">$43K</div>
                <div className="text-sm text-purple-700">This year</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Recent Safety Alerts</h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-red-50 border border-red-200 rounded-lg">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  <div className="flex-1">
                    <div className="font-medium text-red-800">Fall Protection Required</div>
                    <div className="text-sm text-red-600">Zone C - Worker at 8ft elevation</div>
                  </div>
                  <div className="text-xs text-red-500">2 min ago</div>
                </div>
                <div className="flex items-center p-3 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <div className="flex-1">
                    <div className="font-medium text-orange-800">Missing Safety Glasses</div>
                    <div className="text-sm text-orange-600">Zone A - Electrical work detected</div>
                  </div>
                  <div className="text-xs text-orange-500">15 min ago</div>
                </div>
                <div className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <div className="flex-1">
                    <div className="font-medium text-green-800">Safety Issue Resolved</div>
                    <div className="text-sm text-green-600">Zone B - Proper PPE now worn</div>
                  </div>
                  <div className="text-xs text-green-500">1 hour ago</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Safety Trends</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Hard Hat Compliance</span>
                      <span className="text-sm text-green-600">94%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Safety Glasses</span>
                      <span className="text-sm text-blue-600">87%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '87%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Fall Protection</span>
                      <span className="text-sm text-orange-600">76%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '76%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Tool Safety</span>
                      <span className="text-sm text-purple-600">91%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '91%' }}></div>
                    </div>
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
