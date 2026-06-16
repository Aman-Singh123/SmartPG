import { useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { mockPGs } from "../data/mockData";
import { Link } from "react-router";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  pgRecommendations?: typeof mockPGs;
}

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content: "Hi! I'm your SmartPG AI Assistant. How can I help you find the perfect PG today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const suggestedPrompts = [
    "Find PG under ₹6000",
    "Girls PG with food",
    "PG near Electronic City",
  ];

  const handleSendMessage = (message?: string) => {
    const messageText = message || input;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: messageText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = getAIResponse(messageText);
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getAIResponse = (query: string): Message => {
    const lowerQuery = query.toLowerCase();

    let filteredPGs = [...mockPGs];

    if (lowerQuery.includes("6000") || lowerQuery.includes("under") || lowerQuery.includes("budget")) {
      filteredPGs = filteredPGs.filter((pg) => pg.rent <= 6000);
    }

    if (lowerQuery.includes("girl") || lowerQuery.includes("women") || lowerQuery.includes("female")) {
      filteredPGs = filteredPGs.filter((pg) => pg.gender === "Female" || pg.gender === "Any");
    }

    if (lowerQuery.includes("food")) {
      filteredPGs = filteredPGs.filter((pg) => pg.amenities.includes("Food"));
    }

    if (lowerQuery.includes("electronic city") || lowerQuery.includes("whitefield") || lowerQuery.includes("koramangala")) {
      const location = lowerQuery.match(/(electronic city|whitefield|koramangala)/i)?.[0];
      if (location) {
        filteredPGs = filteredPGs.filter((pg) => 
          pg.location.toLowerCase().includes(location)
        );
      }
    }

    const recommendations = filteredPGs.slice(0, 3);

    return {
      id: Date.now().toString(),
      type: "ai",
      content: recommendations.length > 0
        ? `Based on your requirements, here are the best PGs I found for you:`
        : "I couldn't find exact matches, but here are some great options:",
      pgRecommendations: recommendations.length > 0 ? recommendations : mockPGs.slice(0, 3),
    };
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center z-50"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-xl shadow-2xl flex flex-col z-50">
          <div className="bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] text-white p-4 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span>SmartPG AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id}>
                <div
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === "user"
                        ? "bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white"
                        : "bg-[#F9FAFB] text-[#111827]"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>

                {message.pgRecommendations && (
                  <div className="mt-3 space-y-2">
                    {message.pgRecommendations.map((pg) => (
                      <Link
                        key={pg.id}
                        to={`/pg/${pg.id}`}
                        className="block bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start gap-3">
                          <img
                            src={`https://source.unsplash.com/100x100/?${encodeURIComponent(pg.image)}`}
                            alt={pg.name}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="text-sm text-[#111827] mb-1">{pg.name}</div>
                            <div className="text-xs text-[#6B7280] mb-1">{pg.location}</div>
                            <div className="flex items-center justify-between">
                              <span className="text-[#2563EB]">₹{pg.rent.toLocaleString()}/mo</span>
                              <span className="text-xs bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white px-2 py-0.5 rounded-full">
                                AI {pg.aiScore}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[#F9FAFB] text-[#111827] p-3 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[#6B7280] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 bg-[#6B7280] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 bg-[#6B7280] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2 mb-3 flex-wrap">
              {suggestedPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSendMessage(prompt)}
                  className="text-xs bg-[#F9FAFB] text-[#6B7280] px-3 py-1.5 rounded-full hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#7C3AED] hover:text-white transition-all"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask AI to find PG for you..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-[#111827]"
              />
              <button
                onClick={() => handleSendMessage()}
                className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white p-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}