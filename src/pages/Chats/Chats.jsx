import React, { useState, useRef, useEffect } from "react";
import "./Chats.css";
import { sendMessageToHuggingFace } from "../../huggingFaceAPI";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";


const Chats = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (!hasInteracted && e.target.value.length > 0) {
      setHasInteracted(true);
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await sendMessageToHuggingFace(input);
      
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: response, sender: "ai" }]);
        setLoading(false);
      }, 500);
      
    } catch (error) {
      console.error("Error:", error);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "Sorry, I'm having trouble processing your request right now.", sender: "ai" }
        ]);
        setLoading(false);
      }, 500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleMicClick = () => {  
    console.log("Microphone clicked");   
  };

  const handlePlusClick = () => {    
    console.log("Plus button clicked");    
  };

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    detectSwipe();
  };
  const detectSwipe = () => {
    if (touchStartX.current && touchEndX.current) {
      const swipeDistance = touchEndX.current - touchStartX.current;

      if (swipeDistance > 50) {
        // ✅ If swipe is right, navigate to /home
        navigate("/shorts");
      }
      if (swipeDistance < -50) {
        // ✅ If swipe is right, navigate to /home
        navigate("/");
      }
    }
  };
  useEffect(() => {
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <>
    <div className="chat-container">
      <div className="bloop-animation"></div>
      
      <div className="chat-header">
        <h1>August Chat</h1>
        <div className="chat-subheader">
          Model 1.0
        </div>
      </div>
      
      <div className="chat-messages scrollbar-thin">
        {!hasInteracted && messages.length === 0 ? (
          <div className="welcome-container">
            <h1 className="welcome-title">Hello,User</h1>
            <p className="welcome-subtitle">
            I'm your health AI. Ask me anything!
            </p>
          </div>
        ) : (
          <>
            {messages.map((msg, index) => (
              <div key={index} style={{fontFamily:"q1"}} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="typing-indicator">
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
              </div>
            )}
          </>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="chat-input-container">
        <div className="chat-input-wrapper">
          <button className="plus-button" onClick={handlePlusClick}>
          <i className="ri-add-fill"></i>
          </button>
          
          <input
            ref={inputRef}
            type="text"
            className="chat-input"
            placeholder="Type your message..."
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            disabled={loading}
          />
           <div className="input-buttons">
            <button
              className="mic-button"
              onClick={handleMicClick}
              disabled={loading}
            >
            <i className="ri-mic-ai-fill"></i>
            </button>
            
            <button
              className="send-button"
              onClick={handleSendMessage}
              disabled={loading || !input.trim()}
            >
            <i className="ri-send-plane-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>   
    </>
  );
};

export default Chats;
