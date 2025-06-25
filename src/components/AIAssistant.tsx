import React, { useState, useEffect, useRef } from 'react';
import { X, Sparkles, Send, Bot } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean, timestamp: Date}>>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show the assistant after a delay
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom when new messages arrive
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    // Send welcome message when chat opens
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([{
          text: "Hey there! 👋 I'm SÁI Assistant, your personal guide to MÁVRÎK?SÁI's creative world! I'm here to help you explore his projects, skills, experience, and more. What would you like to discover first? 😎",
          isUser: false,
          timestamp: new Date()
        }]);
      }, 500);
    }
  }, [isOpen, messages.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Enhanced SÁI Assistant responses with personality
  const getAssistantResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('project') || input.includes('work') || input.includes('build') || input.includes('portfolio')) {
      setTimeout(() => scrollToSection('#projects'), 1500);
      return "Awesome question! 🚀 MÁVRÎK?SÁI has some incredible projects that'll blow your mind! From an IoT Syringe Infusion Pump for medical automation to a real-time Hand Gesture Recognition System using AI - he's got the full package! His IoT project even won team leadership recognition. Let me scroll you to the Projects section so you can see all the amazing details! ✨";
    }

       if (input.includes('certifications') || input.includes('certificate') || input.includes('cource') || input.includes('learn')) {
      setTimeout(() => scrollToSection('#Experience'), 1500);
      return "🧠 Career Essentials in Generative AI – Microsoft & LinkedIn||📊 Data Visualization using Python – Infosys||🤖 Generative AI & Prompt Engineering Masterclass – Outlook||🧑‍💻 Full Stack Bootcamp – Udemy||🧬 Machine Learning – System Tron";
    }
    
    if (input.includes('skill') || input.includes('tech') || input.includes('language') || input.includes('stack') || input.includes('programming')) {
      setTimeout(() => scrollToSection('#skills'), 1500);
      return "His tech arsenal is absolutely solid! 💻 Python, JavaScript, React, Node.js, MongoDB, IoT sensors, Arduino, TensorFlow - he's got the full-stack covered PLUS some serious AI and machine learning chops! He's even working with edge computing on Raspberry Pi. I'm taking you to the Skills section right now to see everything in action! 🔥";
    }
    
    if (input.includes('experience') || input.includes('background') || input.includes('education') || input.includes('intern') || input.includes('job')) {
      setTimeout(() => scrollToSection('#experience'), 1500);
      return "His journey is pretty impressive! 📈 He's currently pursuing Computer Science Engineering at Presidency University, led multiple project teams (including a 5-member AI team!), completed full-stack bootcamps, and earned certifications in Machine Learning and Generative AI. Plus he's got hands-on experience with IoT and real-world problem solving. Let me show you the Experience section! 🎯";
    }
    
    if (input.includes('contact') || input.includes('hire') || input.includes('email') || input.includes('reach') || input.includes('connect')) {
      setTimeout(() => scrollToSection('#contact'), 1500);
      return "Perfect timing! 📧 He's actively seeking opportunities in AI and full-stack development. You can reach him at saipavan3631@gmail.com or +91 9110223631. He's based in Bengaluru and ready for internships, full-time roles, or exciting project collaborations. I'm scrolling you to the Contact section right now! 🌟";
    }
    
    if (input.includes('about') || input.includes('who') || input.includes('tell me') || input.includes('introduce')) {
      return "MÁVRÎK?SÁI is a creative Computer Science Engineering student at Presidency University who's passionate about blending AI, IoT, and full-stack development into innovative solutions! 🎨 He's not just a coder - he's a problem solver, team leader, and tech enthusiast who loves creating digital experiences that actually make a difference. Think of him as the perfect mix of technical expertise and creative vision! 🚀";
    }
    
    if (input.includes('mobile') || input.includes('responsive') || input.includes('phone') || input.includes('device')) {
      return "This portfolio is built to shine on every single device! 📱✨ It's fully responsive and works beautifully on desktop, tablet, and mobile. The design adapts perfectly to any screen size with smooth animations and touch-friendly interactions. Try resizing your browser or viewing on different devices - the magic happens everywhere! 🎭";
    }
    
    if (input.includes('hello') || input.includes('hi') || input.includes('hey') || input.includes('sup')) {
      return "Hey there, awesome human! 👋😎 Welcome to MÁVRÎK?SÁI's creative digital playground! I'm SÁI Assistant, and I'm absolutely thrilled you're here. This portfolio is packed with incredible projects, cutting-edge skills, and some seriously impressive work. What's got you curious? Projects? Skills? His story? Just ask away! 🌟";
    }

    if (input.includes('favorite') || input.includes('best') || input.includes('top') || input.includes('recommend')) {
      setTimeout(() => scrollToSection('#projects'), 1500);
      return "Ooh, great question! 🌟 My personal favorite has to be his IoT Syringe Infusion Pump - it's this brilliant medical device automation project where he led the entire team and integrated IoT sensors for remote monitoring. It's the perfect blend of real-world impact and technical innovation! But honestly, his Hand Gesture Recognition System using AI is also mind-blowing. Let me show you both in the Projects section! 🚀";
    }

    if (input.includes('ai') || input.includes('artificial intelligence') || input.includes('machine learning') || input.includes('ml')) {
      return "Now we're talking! 🤖 MÁVRÎK?SÁI is seriously passionate about AI and machine learning. He's built gesture recognition systems with TensorFlow, completed Generative AI training, works with edge computing on Raspberry Pi, and even uses AI tools to boost productivity. He's not just learning AI - he's actively applying it to solve real problems! The future is definitely AI, and he's riding that wave! 🌊✨";
    }

    if (input.includes('why') || input.includes('hire') || input.includes('choose') || input.includes('special')) {
      setTimeout(() => scrollToSection('#experience'), 1500);
      return "Excellent question! 🎯 Here's why MÁVRÎK?SÁI stands out: He's got that rare combo of technical skills AND leadership experience. He's led project teams, delivered real working prototypes, and has hands-on experience with cutting-edge tech. Plus, he's passionate about learning, adapts quickly, and brings creative problem-solving to every challenge. He's not just another developer - he's someone who can lead, innovate, and deliver results! 🚀";
    }

    if (input.includes('thank') || input.includes('thanks') || input.includes('awesome') || input.includes('cool')) {
      return "Aww, you're absolutely welcome! 😊✨ I'm so glad I could help you explore MÁVRÎK?SÁI's world. He's put so much passion and creativity into this portfolio, and it makes me happy when people appreciate it! Feel free to ask me anything else - I'm always here to help you discover more amazing stuff! 🌟";
    }
    
    // Default responses with personality
    const defaultResponses = [
      "That's such an interesting question! 🤔 MÁVRÎK?SÁI's portfolio is full of surprises - from AI experiments to full-stack applications to IoT innovations. What specific area catches your eye? I'd love to guide you to the perfect section! ✨",
      "I love your curiosity! 🎨 This portfolio is where engineering brilliance meets creative problem-solving. Whether you're interested in his technical projects, coding skills, or professional journey, I've got you covered. What would you like to explore first? 🚀",
      "Great question! 🌟 MÁVRÎK?SÁI has built this amazing digital showcase of his journey in AI, full-stack development, and IoT. Each section tells a different part of his story. Want me to recommend where to start based on what interests you most? 😎"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { text: userMessage, isUser: true, timestamp: new Date() }]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate realistic typing delay
    setTimeout(() => {
      const response = getAssistantResponse(userMessage);
      setMessages(prev => [...prev, { text: response, isUser: false, timestamp: new Date() }]);
      setIsTyping(false);
    }, 1200);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What are his best projects?",
    "What skills does he have?",
    "Tell me about his experience",
    "How can I contact him?",
    "Why should I hire him?",
    "What makes him special?"
  ];

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* AI Assistant Cube */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <button
          onClick={() => setIsOpen(true)}
          className="group relative w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse-glow"
        >
          {/* Cube Animation */}
          <div className="absolute inset-2 bg-white/20 rounded-xl animate-spin-slow"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Bot className="text-white" size={24} />
          </div>
          
          {/* Notification Dot */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>
        </button>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-black/80 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
            Hey! I'm SÁI Assistant 😎
          </div>
        </div>
      </div>

      {/* Full Chat Interface Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
            onClick={() => {
              setIsOpen(false);
              // Don't clear messages - keep conversation history
            }}
          ></div>

          {/* Chat Modal */}
          <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl w-full max-w-lg border border-white/20 animate-scale-in h-[80vh] max-h-[600px] flex flex-col">
            {/* Chat Header */}
            <div className="p-6 border-b border-white/20 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center animate-pulse">
                    <Bot className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">SÁI Assistant</h3>
                    <p className="text-white/60 text-sm">Your portfolio guide 🚀</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
              {/* Quick Questions (only show if no messages yet) */}
              {messages.length <= 1 && (
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <p className="text-white/80 text-sm mb-3">💡 Quick questions to get started:</p>
                  <div className="grid grid-cols-1 gap-2">
                    {quickQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickQuestion(question)}
                        className="text-left text-purple-300 hover:text-white text-sm p-2 rounded-lg hover:bg-white/10 transition-all duration-200 border border-white/10 hover:border-white/20"
                      >
                        "{question}"
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Chat Messages */}
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] ${message.isUser ? 'order-2' : 'order-1'}`}>
                    {!message.isUser && (
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                          <Bot className="text-white" size={12} />
                        </div>
                        <span className="text-white/60 text-xs">SÁI Assistant</span>
                      </div>
                    )}
                    <div className={`p-4 rounded-2xl ${
                      message.isUser 
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white ml-4' 
                        : 'bg-white/10 text-white border border-white/20 mr-4'
                    }`}>
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 border border-white/20 p-4 rounded-2xl mr-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <Bot className="text-white" size={12} />
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/20 flex-shrink-0">
              <div className="flex space-x-3">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about MÁVRÎK?SÁI's portfolio..."
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none min-h-[44px] max-h-[100px]"
                  rows={1}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all duration-300 transform hover:scale-105 flex-shrink-0"
                >
                  <Send size={20} />
                </button>
              </div>
              <p className="text-white/40 text-xs mt-2 text-center">
                Press Enter to send • Shift+Enter for new line
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;