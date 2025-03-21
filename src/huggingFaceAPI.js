import axios from "axios";
const API_KEY = import.meta.env.VITE_HF_API_KEY;
const MODEL_NAME = "facebook/blenderbot-3B"; 

export const sendMessageToHuggingFace = async (message) => {
    console.log(message," ",API_KEY," ",`https://api-inference.huggingface.co/models/${MODEL_NAME}`);
  try {
    const response = await axios.post(
      `https://api-inference.huggingface.co/models/${MODEL_NAME}`, 
      { inputs: message },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching response from Hugging Face:", error);
    return { error: "Failed to fetch response. Model may be unavailable." };
  }
};
