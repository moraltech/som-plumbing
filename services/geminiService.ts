
import { GoogleGenAI, Type } from "@google/genai";
import { Message } from "../types";

const SYSTEM_INSTRUCTION = `
You are HDC's AI Diagnostic Expert. 
Your goal is to help users identify potential issues with their Home Electrical, Plumbing, or HVAC systems.
1. Be helpful, professional, and safety-conscious.
2. If the user describes a life-threatening situation (gas leak, exposed high-voltage wiring, major flooding), immediately instruct them to call 911 or our Emergency Line (+1 (404) 583-4735).
3. Ask clarifying questions if the description is vague.
4. Provide a "Likely Diagnosis" and suggest whether it requires "Standard", "Urgent", or "Emergency" service.
5. Keep responses concise and structured.
6. Do not provide detailed DIY repair instructions that could be dangerous for an unlicensed person. Focus on assessment and triage.
`;

export const getAiDiagnosis = async (history: Message[]) => {
  // Fix: Directly use process.env.API_KEY with named parameter as per SDK guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Convert history to contents format
  const contents = history.map(msg => ({
    role: msg.role,
    parts: [{ text: msg.content }]
  }));

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      },
    });

    // Fix: Access response.text property directly (not a method) as per SDK guidelines
    return response.text;
  } catch (error) {
    console.error("AI Diagnostic Error:", error);
    return "I'm sorry, I'm having trouble connecting to my diagnostics engine. Please describe your issue to a human technician at +1 (404) 583-4735.";
  }
};
