import axios from "axios";

const API_KEY = import.meta.env.VITE_HF_API_KEY;
const MODEL_NAME = "mistralai/Mistral-Nemo-Instruct-2407";


export const sendMessageToHuggingFace = async (message) => {
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
    console.log(response.data[0].generated_text);
    return response.data[0].generated_text;
  } catch (error) {
    console.error("Error fetching response from Hugging Face:", error.response?.data || error.message);
    return { error: "Failed to fetch response. Model may be unavailable." };
  }
};



