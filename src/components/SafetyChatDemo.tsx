
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Send, Bot, User } from "lucide-react";

export const SafetyChatDemo = () => {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      message: "Hi! I'm your AI Safety Coach. Ask me anything about OSHA compliance, safety procedures, or best practices."
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const quickQuestions = [
    "What PPE is required for concrete work?",
    "How deep can I dig without shoring?",
    "Fall protection requirements at 6 feet?",
    "Generate today's toolbox talk"
  ];

  const handleQuickQuestion = (question: string) => {
    const responses = {
      "What PPE is required for concrete work?": "For concrete work, OSHA requires: Hard hats, safety glasses, work gloves resistant to cement, long pants, and closed-toe shoes. For wet concrete: rubber boots and aprons. Always check SDS for specific chemical hazards.",
      "How deep can I dig without shoring?": "Per OSHA 1926.652, excavations 5 feet or deeper require protective systems (shoring, sloping, or shielding) unless work is in stable rock. For 4+ feet, daily competent person inspections are mandatory.",
      "Fall protection requirements at 6 feet?": "OSHA requires fall protection at 6+ feet in construction. Options include guardrails, safety nets, or personal fall arrest systems. For residential construction, it's 6+ feet except scaffolds (10+ feet).",
      "Generate today's toolbox talk": "**Today's Toolbox Talk: Electrical Safety**\n\n• Inspect cords and tools before use\n• Use GFCI protection in wet locations\n• Lock out/tag out before electrical work\n• Maintain 10+ feet from power lines\n• Report damaged equipment immediately"
    };

    setMessages(prev => [
      ...prev,
      { type: "user", message: question },
      { type: "bot", message: responses[question as keyof typeof responses] }
    ]);
  };

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your AI Safety Coach in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get instant, expert answers to safety questions. Like having a certified safety professional 
            available 24/7 for your entire team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center">
                <MessageSquare className="w-6 h-6 mr-2" />
                SiteSafe AI Safety Coach
                <div className="ml-auto bg-green-400 text-green-900 px-2 py-1 rounded-full text-xs font-medium">
                  Online
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-96 overflow-y-auto p-6 space-y-4">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      msg.type === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <div className="flex items-start space-x-2">
                        {msg.type === 'bot' && <Bot className="w-4 h-4 mt-1 text-blue-600" />}
                        <div className="whitespace-pre-line text-sm">{msg.message}</div>
                        {msg.type === 'user' && <User className="w-4 h-4 mt-1" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t p-4">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {quickQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickQuestion(question)}
                      className="text-left justify-start h-auto py-2 px-3"
                    >
                      <div className="text-xs text-gray-600 truncate">{question}</div>
                    </Button>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask about safety procedures, OSHA compliance, or best practices..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
