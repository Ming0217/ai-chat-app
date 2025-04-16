 const express = require('express');
 const axios = require('axios');
 const router = express.Router();
 require('dotenv').config();

// Hugging Face API URL for model inference
const HUGGING_FACE_API_URL = 'https://api-inference.huggingface.co/models/deepseek-ai/DeepSeek-R1-Distill-Qwen-32B'; // Change this to the model you want to use
const API_KEY = process.env.HUGGING_FACE_API_KEY

router.post('/chat', async (req, res) => {
    const { message } = req.body;
    try {
        const response = await axios.post(
            HUGGING_FACE_API_URL,
            {
                inputs: message,
            },
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                },
            }
        );

        const aiReply = response.data[0]?.generated_text || 'Sorry, no response from AI.';
        res.json({ reply: aiReply });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error communicating with Hugging Face AI')
    }
 });

 module.exports = router;