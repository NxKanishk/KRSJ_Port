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
                style={{
                    position: "fixed",
                    bottom: 20,
                    right: 20,
                    backgroundColor: "#3b82f6",
                    color: "white",
                    borderRadius: "50%",
                    padding: 16,
                    cursor: "pointer",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    userSelect: "none",
                }}
            >
                💬
            </div>

            {/* Chat Box */}
            {isOpen && (
                <div
                    style={{
                        position: "fixed",
                        bottom: 80,
                        right: 20,
                        width: 320,
                        height: 400,
                        backgroundColor: "white",
                        borderRadius: 8,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                    }}
                >
                    <header
                        style={{
                            padding: "10px",
                            borderBottom: "1px solid #ddd",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <strong>Chatbot</strong>
                        <button onClick={() => setIsOpen(false)}>X</button>
                    </header>

                    <div
                        style={{
                            flex: 1,
                            padding: "10px",
                            overflowY: "auto",
                            fontSize: 14,
                        }}
                    >
                        {messages.length === 0 && (
                            <p style={{ color: "#666", textAlign: "center" }}>
                                Say hi to your AI assistant!
                            </p>
                        )}
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                style={{
                                    marginBottom: 10,
                                    textAlign: msg.role === "user" ? "right" : "left",
                                }}
                            >
                                <span
                                    style={{
                                        display: "inline-block",
                                        padding: "6px 12px",
                                        borderRadius: 12,
                                        backgroundColor:
                                            msg.role === "user" ? "#3b82f6" : "#e5e7eb",
                                        color: msg.role === "user" ? "white" : "black",
                                        maxWidth: "80%",
                                        wordWrap: "break-word",
                                    }}
                                >
                                    {msg.content}
                                </span>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div style={{ padding: 10, borderTop: "1px solid #ddd" }}>
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            disabled={loading}
                            style={{
                                width: "100%",
                                padding: "8px",
                                fontSize: 14,
                                borderRadius: 4,
                                border: "1px solid #ccc",
                            }}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
