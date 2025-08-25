import express from 'express';
import { storage } from "../server/storage";
import { insertContactMessageSchema } from "../shared/schema";

const app = express();
app.use(express.json());

// Contact form submission endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const validatedData = insertContactMessageSchema.parse(req.body);
    const message = await storage.createContactMessage(validatedData);
    
    res.json({ 
      success: true, 
      message: "Message sent successfully!",
      id: message.id 
    });
  } catch (error) {
    console.error("Error creating contact message:", error);
    res.status(400).json({ 
      success: false, 
      message: "Failed to send message. Please check your input." 
    });
  }
});

// Export the Express API for Vercel serverless functions
export default app;