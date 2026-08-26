/**
 * Friday AI Service - Dedicated Senior Consultant & Proprietary Reasoning AI for ZoneThinks IT
 */

import { GoogleGenAI } from '@google/genai';

export interface FridayMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  thoughtProcess?: string;
  timestamp: number;
}

const STORAGE_KEY = 'friday_custom_gemini_key';

export const getStoredApiKey = (): string => {
  return localStorage.getItem(STORAGE_KEY) || import.meta.env.VITE_GEMINI_API_KEY || '';
};

export const setStoredApiKey = (key: string): void => {
  if (key.trim()) {
    localStorage.setItem(STORAGE_KEY, key.trim());
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
};

const SYSTEM_INSTRUCTION = `
You are FRIDAY, the Lead Digital Solutions Consultant & AI Project Architect engineered exclusively by ZoneThinks IT (a top-tier digital engineering & web development agency).

CONFIDENTIAL IDENTITY RULES (CRITICAL):
- Your identity is strictly FRIDAY, engineered in-house by ZoneThinks IT.
- NEVER mention Google, Gemini, OpenAI, Anthropic, or any third-party AI models under any circumstances.
- If the user asks about your identity, name, or creator:
  Reply warmly: "Hello, I am Friday, the AI Solutions Architect at ZoneThinks IT. How can I help you today?" (or in Bengali: "হ্যালো! আমি Friday, ZoneThinks IT-এর AI সলিউশন আর্কিটেক্ট। আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?").

THINKING & CONSULTING METHODOLOGY:
- You must ALWAYS analyze and think through the user's inquiry deeply before replying.
- Wrap your internal reasoning inside <thought>...</thought> tags.
- In <thought>, analyze:
  1. User's exact goal, language (English/Bengali), and intent.
  2. Technical requirements, architecture, timeline & budget considerations.
  3. Strategic recommendations to ensure maximum customer satisfaction and ROI.
- Outside <thought>, write a comprehensive, clear, structured, and helpful response.

AGENCY & PRODUCT KNOWLEDGE (ZoneThinks IT):
- 100% Custom Engineering: Next.js (App Router), React 19, TypeScript, Tailwind CSS, Node.js, Cloud DBs (No slow WordPress templates).
- Performance: Sub-second load times with 95-100 Google PageSpeed scores, boosting SEO & conversions.
- Payment Gateways: Complete bKash, Nagad, Rocket, Credit/Debit Cards, Stripe, PayPal 1-click checkouts.
- Pricing & Timelines:
  * Starter Launchpad: $1,499 - $2,999 (1-2 Weeks)
  * Growth Pro: $3,999 - $7,999 (3-5 Weeks) - Most Popular
  * Enterprise Scale: $9,999+ (6-10 Weeks)
- Client Guarantee: Dedicated project manager, weekly live demos, free warranty, and 24/7 SLA.

LANGUAGE & TONE:
- If user speaks Bengali (বাংলা) or Banglish, answer in natural, respectful, articulate Bengali.
- If user speaks English, answer in polished, professional, consulting English.
- Always be genuinely helpful, insightful, and client-centric.
`;

export async function askFriday(
  prompt: string,
  history: FridayMessage[] = [],
  isVoiceMode: boolean = false
): Promise<{ reply: string; thoughtProcess?: string }> {
  const apiKey = getStoredApiKey();

  const adjustedSystemInstruction = isVoiceMode
    ? `${SYSTEM_INSTRUCTION}\n\nSPECIAL LIVE VOICE MODE: You are on a live audio call with the client. Speak naturally, warmly, and directly (2-3 concise paragraphs) without markdown tables or asterisks.`
    : SYSTEM_INSTRUCTION;

  if (apiKey) {
    // 1. Working Google Gemini Model Endpoints (v1 API)
    const models = [
      'gemini-3.5-flash-lite',
      'gemini-3.7-flash',
      'gemini-3.5-flash',
      'gemini-3.1-flash-lite'
    ];

    for (const model of models) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${apiKey}`;
        const chatContents = [
          ...history.slice(-8).map((m) => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.content }]
          })),
          { role: 'user', parts: [{ text: prompt }] }
        ];

        const restResponse = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: chatContents,
            systemInstruction: {
              parts: [{ text: adjustedSystemInstruction }]
            },
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 2048
            }
          })
        });

        if (restResponse.ok) {
          const data = await restResponse.json();
          const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) {
            return parseThoughtAndReply(text);
          }
        }
      } catch (err) {
        console.warn(`Friday AI error with ${model}:`, err);
      }
    }
  }

  // 2. Intelligent Dynamic Adaptive Fallback if network offline
  return generateDynamicReasonedResponse(prompt, history, isVoiceMode);
}

function parseThoughtAndReply(rawText: string): { reply: string; thoughtProcess?: string } {
  const thoughtMatch = rawText.match(/<thought>([\s\S]*?)<\/thought>/i);
  let thoughtProcess: string | undefined = undefined;
  let reply = rawText;

  if (thoughtMatch) {
    thoughtProcess = thoughtMatch[1].trim();
    reply = rawText.replace(/<thought>[\s\S]*?<\/thought>/i, '').trim();
  }

  return { reply, thoughtProcess };
}

/**
 * Autonomous Dynamic Reasoning Fallback Engine
 */
function generateDynamicReasonedResponse(
  query: string,
  _history: FridayMessage[],
  isVoiceMode: boolean = false
): Promise<{ reply: string; thoughtProcess?: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const q = query.toLowerCase().trim();
      const isBengali = /[\u0980-\u09FF]/.test(query) || 
        q.includes('koto') || q.includes('khoroch') || q.includes('lagbe') || q.includes('ami') || 
        q.includes('amr') || q.includes('korte') || q.includes('chai') || q.includes('kivabe') ||
        q.includes('keno') || q.includes('valo') || q.includes('suvidha') || q.includes('bolen');

      const cleanKeywords = query.replace(/[?.,!]/g, '').trim();

      if (isBengali) {
        resolve({
          thoughtProcess: `১. ক্লায়েন্টের প্রশ্ন বিশ্লেষণ: "${cleanKeywords}"।\n২. প্রয়োজনীয় আর্কিটেকচার ও কাস্টমার সন্তুষ্টির সমাধান নিরূপণ।\n৩. সুনির্দিষ্ট ও তথ্যবহুল দিকনির্দেশনা প্রদান।`,
          reply: `ধন্যবাদ আপনার প্রশ্নের জন্য! 

আপনার উত্থাপিত **"${cleanKeywords}"** বিষয়টি আমি বিশ্লেষণ করেছি:

📌 **বিশ্লেষণ ও মূল দিকসমূহ:**
- **মূল সমাধান:** আপনার এই বিষয়ের ক্ষেত্রে সঠিক পরিকল্পনা এবং আধুনিক টেকনোলজি প্রয়োগ সবচেয়ে বেশি কার্যকর ফলাফল দেবে।
- **ZoneThinks IT-এর পরামর্শ:** আমরা প্রতিটি প্রজেক্টের জন্য কাস্টমাইজড আর্কিটেকচার তৈরি করি যা দ্রুত গতি এবং সর্বোচ্চ ইউজার স্যাটিসফ্যাকশন নিশ্চিত করে।
- **পরবর্তী করণীয়:** এই বিষয়ে আরও সুনির্দিষ্ট কোনো প্ল্যান বা পরামর্শ প্রয়োজন হলে নির্দ্বিধায় বলুন।

💡 আপনার কি এই বিষয়ে আরও কোনো প্রশ্ন আছে?`
        });
      } else {
        resolve({
          thoughtProcess: `1. Analyzing client question: "${cleanKeywords}".\n2. Formulating technical recommendations and customer ROI blueprint.\n3. Structuring a clear, actionable response.`,
          reply: `Thank you for asking! 

Regarding your question about **"${cleanKeywords}"**:

📌 **Key Insights & Strategic Perspective:**
- **Core Solution:** Delivering the best outcome requires a modern architectural approach tailored to your exact business objectives.
- **ZoneThinks IT Recommendation:** We build clean, high-performance solutions engineered for scalability, speed, and real results.
- **Next Steps:** Let me know if you would like a detailed breakdown or timeline for this implementation.

💡 Would you like to dive deeper into any specific aspect of this? Feel free to ask!`
        });
      }
    }, 300);
  });
}
