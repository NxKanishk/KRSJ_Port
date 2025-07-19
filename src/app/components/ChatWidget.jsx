"use client";
import { useState, useEffect, useRef } from "react";

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: [...messages, userMessage] }),
            });

            const data = await response.json();

            if (data.message) {
                setMessages((prev) => [...prev, data.message]);
            } else {
                setMessages((prev) => [
                    ...prev,
                    { role: "assistant", content: "No response from server." },
                ]);
            }
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: "Error communicating with server." },
            ]);
        }

        setLoading(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !loading) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            {/* Floating Button */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-5 right-5 bg-blue-500 text-white rounded-full p-4 cursor-pointer shadow-md select-none"
                style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }} // keep custom shadow for exact match
            >
                💬
            </div>

            {/* Chat Box */}
            {isOpen && (
                <div
                    className="fixed bottom-20 right-5 w-80 h-[400px] bg-white rounded-lg shadow-lg flex flex-col overflow-hidden"
                    style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
                >
                    <header className="p-2.5 border-b border-gray-300 flex justify-between items-center">
                        <strong>Chatbot</strong>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 hover:text-gray-900"
                        >
                            X
                        </button>
                    </header>

                    <div className="flex-1 p-2.5 overflow-y-auto text-sm">
                        {messages.length === 0 && (
                            <p className="text-gray-500 text-center">
                                Say hi to your AI assistant!
                            </p>
                        )}
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`mb-2.5 ${msg.role === "user" ? "text-right" : "text-left"
                                    }`}
                            >
                                <span
                                    className={`inline-block px-3 py-1.5 rounded-3xl max-w-[80%] break-words ${msg.role === "user"
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-200 text-black"
                                        }`}
                                >
                                    {msg.content}
                                </span>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-2.5 border-t border-gray-300">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            disabled={loading}
                            className="w-full px-2 py-2 text-sm rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            )}
        </>
    );

}
