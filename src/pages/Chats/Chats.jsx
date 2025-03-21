import React, { useState } from "react";
import { sendMessageToHuggingFace } from "../../huggingFaceAPI";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    setLoading(true);
    const data = await sendMessageToHuggingFace(message);
    setResponse(data.generated_text || "No response received.");
    setLoading(false);
  };

  return (
    <div>
      <h2>Hugging Face Chat</h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSendMessage} disabled={loading}>
        {loading ? "Loading..." : "Send"}
      </button>
      <p><strong>Bot:</strong> {response}</p>
    </div>
  );
};

export default Chat;
