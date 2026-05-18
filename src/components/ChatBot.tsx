import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";

type Message = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

const QUICK_REPLIES = [
  "Tell me about Aari classes",
  "Bridal jewellery pricing",
  "Saree pleating service",
  "Book a custom order",
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const t = setTimeout(() => setShowTeaser(true), 2500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      const viewport = scrollRef.current.querySelector("[data-radix-scroll-area-viewport]");
      if (viewport) viewport.scrollTop = viewport.scrollHeight;
    }
  }, [messages, isLoading]);

  const streamChat = async (userMessages: Message[]) => {
    const resp = await fetch(CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ messages: userMessages }),
    });

    if (!resp.ok) {
      const error = await resp.json();
      throw new Error(error.error || "Failed to get response");
    }
    if (!resp.body) throw new Error("No response body");

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let textBuffer = "";
    let assistantContent = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      textBuffer += decoder.decode(value, { stream: true });

      let newlineIndex: number;
      while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
        let line = textBuffer.slice(0, newlineIndex);
        textBuffer = textBuffer.slice(newlineIndex + 1);
        if (line.endsWith("\r")) line = line.slice(0, -1);
        if (line.startsWith(":") || line.trim() === "") continue;
        if (!line.startsWith("data: ")) continue;

        const jsonStr = line.slice(6).trim();
        if (jsonStr === "[DONE]") break;

        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) {
            assistantContent += content;
            setMessages(prev => {
              const last = prev[prev.length - 1];
              if (last?.role === "assistant") {
                return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantContent } : m));
              }
              return [...prev, { role: "assistant", content: assistantContent }];
            });
          }
        } catch {
          textBuffer = line + "\n" + textBuffer;
          break;
        }
      }
    }
  };

  const send = async (text: string) => {
    if (!text.trim() || isLoading) return;
    const userMsg: Message = { role: "user", content: text.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);
    try {
      await streamChat([...messages, userMsg]);
    } catch (error) {
      console.error("Chat error:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const openChat = () => {
    setIsOpen(true);
    setShowTeaser(false);
  };

  return (
    <>
      {/* Teaser bubble */}
      <AnimatePresence>
        {showTeaser && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-28 right-6 z-50 max-w-[260px]"
          >
            <button
              onClick={openChat}
              className="relative bg-card border-2 border-accent/40 shadow-elegant rounded-2xl rounded-br-md px-5 py-4 text-left hover:scale-[1.02] transition-transform"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTeaser(false);
                }}
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Dismiss"
              >
                <X className="w-3 h-3" />
              </button>
              <p className="font-display text-lg font-semibold text-foreground leading-tight">
                Namaste! ✨
              </p>
              <p className="text-sm text-foreground/80 mt-1">
                Questions about classes, bridal orders, or Aari work? I'm here to help!
              </p>
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-card border-r-2 border-b-2 border-accent/40 rotate-45" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => (isOpen ? setIsOpen(false) : openChat())}
        className="fixed bottom-6 right-6 z-50 group"
        whileTap={{ scale: 0.92 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
      >
        {/* Pulsing rings */}
        {!isOpen && (
          <>
            <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
            <span className="absolute inset-0 rounded-full bg-accent/20 animate-pulse" />
          </>
        )}
        <div className="relative w-16 h-16 rounded-full bg-gradient-burgundy shadow-glow flex items-center justify-center border-2 border-accent/60 group-hover:scale-110 transition-transform duration-300">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="w-7 h-7 text-primary-foreground" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                className="relative"
              >
                <MessageCircle className="w-7 h-7 text-primary-foreground" fill="currentColor" fillOpacity={0.15} />
                <Sparkles className="w-3 h-3 text-accent absolute -top-1 -right-1 animate-sparkle" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {!isOpen && (
          <span className="absolute -top-2 -left-2 px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-[10px] font-bold shadow-md">
            CHAT
          </span>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 240, damping: 24 }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-[420px] h-[600px] max-h-[80vh] bg-card rounded-3xl shadow-elegant border-2 border-accent/30 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="relative bg-gradient-burgundy text-primary-foreground p-5 flex items-center gap-3 overflow-hidden">
              <div className="absolute inset-0 bg-pattern opacity-20" />
              <div className="relative w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-md border-2 border-primary-foreground/30">
                <Sparkles className="w-6 h-6 text-foreground" />
              </div>
              <div className="relative flex-1">
                <h3 className="font-display text-xl font-bold leading-tight">Harini Assistant</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-xs opacity-90">Online · Replies instantly</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 px-4 py-4 bg-gradient-elegant" ref={scrollRef}>
              {messages.length === 0 && (
                <div className="text-center py-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-gold flex items-center justify-center shadow-glow"
                  >
                    <Sparkles className="w-8 h-8 text-foreground" />
                  </motion.div>
                  <h4 className="font-display text-xl font-bold text-foreground">Welcome to Harini Designer</h4>
                  <p className="text-sm text-foreground/80 mt-1 mb-5">
                    Ask anything about our embroidery, classes & custom orders.
                  </p>
                  <div className="grid gap-2">
                    {QUICK_REPLIES.map((q, i) => (
                      <motion.button
                        key={q}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.08 }}
                        onClick={() => send(q)}
                        className="text-left text-sm px-4 py-2.5 rounded-xl bg-card border border-accent/30 hover:border-accent hover:bg-accent/10 transition-all text-foreground font-medium"
                      >
                        {q}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}
              <div className="space-y-3">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.role === "assistant" && (
                      <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Sparkles className="w-4 h-4 text-foreground" />
                      </div>
                    )}
                    <div
                      className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${
                        msg.role === "user"
                          ? "bg-gradient-burgundy text-primary-foreground rounded-br-md"
                          : "bg-card border border-border text-foreground rounded-bl-md"
                      }`}
                    >
                      {msg.role === "assistant" ? (
                        <div className="prose prose-sm max-w-none prose-p:my-1 prose-headings:my-1 prose-ul:my-1 prose-li:my-0 text-foreground">
                          <ReactMarkdown>{msg.content}</ReactMarkdown>
                        </div>
                      ) : (
                        <p className="whitespace-pre-wrap">{msg.content}</p>
                      )}
                    </div>
                    {msg.role === "user" && (
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                    )}
                  </motion.div>
                ))}
                {isLoading && messages[messages.length - 1]?.role === "user" && (
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center shadow-sm">
                      <Sparkles className="w-4 h-4 text-foreground" />
                    </div>
                    <div className="bg-card border border-border rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-3 border-t border-border bg-card">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="flex gap-2 items-center"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 rounded-full border-accent/30 focus-visible:ring-accent bg-background"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="icon"
                  variant="hero"
                  className="rounded-full h-10 w-10 flex-shrink-0"
                  disabled={isLoading || !input.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
              <p className="text-[10px] text-center text-muted-foreground mt-2">
                Powered by Harini Designer · Available 24/7
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
