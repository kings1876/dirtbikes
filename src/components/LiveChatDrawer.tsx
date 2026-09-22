import React, { useState } from 'react';
import { X, Send, Bot, User, Sparkles, HelpCircle, Coins, Truck, Zap } from 'lucide-react';

interface LiveChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  tawkToId?: string;
}

interface ChatMessage {
  id: string;
  sender: 'agent' | 'user';
  text: string;
  time: string;
}

export const LiveChatDrawer: React.FC<LiveChatDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'agent',
      text: 'G’day and welcome to Kanvale Dirt Bikes! I am your live trail specialist. How can I help you today with electric dirt bike sizing, nationwide delivery, or our 10% crypto discount?',
      time: 'Just now',
    },
  ]);

  const quickPrompts = [
    { label: 'How does 10% Crypto discount work?', query: 'How does the 10% crypto discount work?' },
    { label: 'Is shipping free on all bikes?', query: 'Can you confirm free nationwide shipping on all bikes?' },
    { label: 'Recommend a kids bike', query: 'Which bike do you recommend for an 8 year old child?' },
    { label: 'Are the bikes waterproof?', query: 'Can I ride these bikes through creeks and rain?' },
  ];

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Generate intelligent responses tailored to Kanvale Dirt Bikes criteria
    setTimeout(() => {
      let replyText = 'Thanks for reaching out! Our pit crew is on standby. For immediate orders, you can use our Order Form to lock in your 10% crypto savings with free nationwide shipping.';

      const lower = query.toLowerCase();
      if (lower.includes('crypto') || lower.includes('discount') || lower.includes('btc') || lower.includes('usdt')) {
        replyText = 'When you select Crypto (BTC, ETH, SOL, or USDT) at checkout, our system automatically knocks 10% off your entire bike order! You get an instant order ID and dedicated wallet destination with zero processing markups.';
      } else if (lower.includes('ship') || lower.includes('delivery') || lower.includes('freight')) {
        replyText = 'Yes! All dirt bikes ship 100% FREE nationwide across the USA and Australia. Each bike is securely packed in a reinforced steel-caged wooden shipping crate with liftgate carrier delivery.';
      } else if (lower.includes('kid') || lower.includes('child') || lower.includes('junior') || lower.includes('age')) {
        replyText = 'For ages 4-8, the Micro Ripper 36V ($999) and GMX 70cc ($1,299) are perfect with training wheels and speed limits. For ages 8-14, check out the Volt Junior 48V ($1,799) or GMX CF110 ($1,599) with parental key-locked speed limiters and authentic inverted forks.';
      } else if (lower.includes('water') || lower.includes('rain') || lower.includes('creek') || lower.includes('mud')) {
        replyText = 'Our adult models (Apex 16kW, Storm Pro 72V, Nomad) have IP67 submersible ingress protection on both the IPM motor and lithium pack. You can ride through mud, rain, and stream crossings without worry!';
      }

      const agentMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'agent',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, agentMsg]);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs">
      <div 
        className="w-full max-w-md h-full bg-zinc-950 border-l border-zinc-800 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Chat Header */}
        <div className="p-4 border-b border-zinc-800 bg-zinc-900/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Zap className="w-5 h-5" />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-zinc-950 rounded-full"></span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-mono flex items-center gap-1.5">
                <span>Kanvale Trail Desk</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-normal">
                  Live
                </span>
              </h3>
              <p className="text-[11px] text-zinc-400 font-mono">
                Tawk.to Desk • Avg reply: &lt; 1 min
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg) => {
            const isAgent = msg.sender === 'agent';
            return (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${isAgent ? 'justify-start' : 'justify-end'}`}
              >
                {isAgent && (
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0 text-xs font-mono font-bold">
                    K
                  </div>
                )}
                <div
                  className={`max-w-[82%] p-3 rounded-2xl text-xs leading-relaxed ${
                    isAgent
                      ? 'bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-tl-sm'
                      : 'bg-emerald-500 text-zinc-950 font-medium rounded-tr-sm'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span
                    className={`block text-[9px] mt-1 text-right ${
                      isAgent ? 'text-zinc-400' : 'text-emerald-950'
                    }`}
                  >
                    {msg.time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Prompts */}
        <div className="p-2.5 bg-zinc-900/60 border-t border-zinc-850 overflow-x-auto flex gap-1.5 no-scrollbar">
          {quickPrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(p.query)}
              className="px-2.5 py-1 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-[11px] whitespace-nowrap transition-colors flex-shrink-0 cursor-pointer"
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 border-t border-zinc-800 bg-zinc-950 flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about bikes, specs, or crypto discount..."
            className="flex-1 px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500"
          />
          <button
            type="submit"
            className="p-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
