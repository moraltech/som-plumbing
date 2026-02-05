import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { getAiDiagnosis } from '../services/geminiService';

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: "Hello! I'm the Som Pulibing Diagnostic Assistant. Describe your issue and I'll help you figure out what's wrong." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  if (!isOpen) return null;

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const diagnosis = await getAiDiagnosis([...messages, userMsg]);
    
    setMessages(prev => [...prev, { role: 'model', content: diagnosis || 'Error' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-2xl h-[80vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-blue-900 p-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">🤖</div>
            <div>
              <h3 className="text-white font-bold leading-tight">AI Diagnostic Tool</h3>
              <p className="text-blue-200 text-xs font-medium uppercase tracking-widest">Som Pulibing Intelligence</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-grow overflow-y-auto p-6 space-y-4 bg-slate-50">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] p-4 rounded-2xl shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-white text-slate-800 rounded-bl-none border border-slate-200'
                }`}
              >
                <div className="prose prose-sm leading-relaxed whitespace-pre-wrap">
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex gap-2">
                <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce delay-75"></span>
                <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce delay-150"></span>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-6 bg-white border-t border-slate-100">
          <div className="flex gap-2">
            <input 
              type="text" 
              className="flex-grow px-4 py-3 bg-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="Describe your issue..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-700 transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;