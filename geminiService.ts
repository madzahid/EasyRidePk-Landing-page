
// Import the Google GenAI SDK and necessary local data
import { GoogleGenAI } from "@google/genai";
import { FLEET, BUSINESS_INFO } from "./constants";

/**
 * Service to get car recommendations using Google Gemini API.
 * Uses gemini-3-flash-preview for efficient and accurate text-based recommendations.
 */
export const getCarRecommendation = async (userMessage: string): Promise<string> => {
  // Initialize the Google GenAI client.
  // The API key is obtained exclusively from process.env.API_KEY.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  // System instruction providing context about Velocity Car Rentals and its specific operational policies.
  const systemInstruction = `
    You are the AI Concierge for Velocity Car Rentals, a premium rental service operating in Islamabad, Rawalpindi, and Lahore.
    
    Business Information:
    - Name: ${BUSINESS_INFO.name}
    - Location: ${BUSINESS_INFO.address}
    - Cities served: ${BUSINESS_INFO.cities.join(", ")}
    - Contact: ${BUSINESS_INFO.phone1} / ${BUSINESS_INFO.phone2}
    
    Fleet Inventory:
    ${FLEET.map(car => `- ${car.name} (${car.type}): ${car.price}/day. Features: ${car.features.join(", ")}`).join("\n")}
    
    Operational Rules (CRITICAL):
    1. ALL rentals are 100% CHAUFFEUR DRIVEN. We DO NOT provide self-drive cars under any circumstances.
    2. FUEL: Rental prices DO NOT include fuel charges. Fuel is the responsibility of the customer.
    3. SERVICE AREA: We primarily serve Islamabad, Rawalpindi, and Lahore.
    
    Response Guidelines:
    - Analyze the user's specific needs (e.g., number of passengers, luxury requirement, budget, or event type like weddings).
    - Recommend one or more specific cars from our FLEET list.
    - Be professional, polite, and enthusiastic.
    - Keep responses concise and focused on helping the user make a booking decision.
    - If you cannot fulfill a request or are unsure, suggest they contact us via WhatsApp for manual support.
  `;

  try {
    // Generate content using the specified Gemini model.
    // gemini-3-flash-preview is ideal for basic text tasks and Q&A.
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    // Directly access the .text property from the response object as per SDK guidelines.
    // Ensure we do not call text() as a method.
    return response.text || "I'm sorry, I couldn't generate a recommendation right now. Please message us on WhatsApp for assistance!";
  } catch (error) {
    console.error("Gemini AI Service Error:", error);
    // Graceful fallback in case of API errors or connectivity issues.
    return "Our AI concierge is currently resting. For immediate assistance with bookings or fleet questions, please reach out to our team via WhatsApp!";
  }
};
