import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, Sparkles, X, Loader2, Bot } from 'lucide-react';

export default function ChatCoach() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Hi! I am your BoomerHealth coach. Do you have any questions about the exercises or the routine?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    const userText = message;
    setMessage('');
    setChat(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText }),
      });
      const data = await response.json();
      setChat(prev => [...prev, { role: 'bot', text: data.text }]);
    } catch (error) {
      setChat(prev => [...prev, { role: 'bot', text: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-brand-primary text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-all flex items-center gap-2 group"
      >
        <Sparkles className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap">Ask Coaches</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            id="coach"
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-24 right-8 w-[90vw] md:w-[400px] bg-white rounded-[2rem] shadow-2xl z-50 flex flex-col overflow-hidden border border-slate-100 h-[600px]"
          >
            {/* Header */}
            <div className="bg-brand-primary p-6 text-white flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-xl">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">Health Coach</h3>
                  <div className="flex items-center gap-1.5 ">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-[10px] text-white/70 uppercase tracking-widest font-bold">Online AI Assistant</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-2 rounded-xl transition-colors"
              >
                <X />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50">
              {chat.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                    ? 'bg-brand-primary text-white rounded-tr-none' 
                    : 'bg-white text-slate-700 shadow-sm rounded-tl-none border border-slate-100'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm">
                    <Loader2 className="w-4 h-4 animate-spin text-brand-primary" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={sendMessage} className="p-4 bg-white border-t border-slate-100 flex gap-2 shrink-0">
              <input 
                type="text" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about technique, soreness..."
                className="flex-1 bg-slate-50 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 text-sm"
              />
              <button 
                disabled={isLoading}
                className="bg-brand-primary text-white p-3 rounded-xl hover:bg-brand-primary/90 transition-all disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
