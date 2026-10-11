import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

// Inicializar cliente de Google GenAI
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Lista exacta de los 50 agentes de tu proyecto (ELITE ROSTER)
const agentsList = [
 { name: "Donald_Vance", role: "Real Estate & Media Supreme Mogul" },
 { name: "Alistair_Vance", role: "Hedge Fund Titan" },
 { name: "Harrison_Sterling", role: "Dynastic Heir & Religium Trust" },
 { name: "Montgomery_Croft", role: "Private Equity Vulture" },
 { name: "Wellington_Thorne", role: "Defense Contractor Baron" },
 { name: "Soren_Krupp", role: "Industrial Automation Kingpin" },
 { name: "Vance_Blackwood", role: "Sovereign Debt Handler" },
 { name: "Victor_Roth", role: "Global Commodities Monopolist" },
 { name: "Julian_Mercer", role: "BioTech Transhumanist Pioneer" },
 { name: "Gideon_Cross", role: "Venture Capital Architect" },
 { name: "Maximilian_Doyle", role: "Maritime Shipping Oligarch" },
 { name: "Lucian_Valence", role: "Luxury Conglomerate Emperor" },
 { name: "Darius_Vane", role: "Energy Grid Dominator" },
 { name: "Cyrus_Sterling", role: "Offshore Wealth Strategist" },
 { name: "Ethan_Hawthorne", role: "AI Infrastructure Monopolist" },
 { name: "Cassian_Drake", role: "Aerospace & Defense Magnate" },
 { name: "Xavier_Stone", role: "Lithium & Rare Metals Baron" },
 { name: "Valentin_Kovacs", role: "Sovereign Wealth Fund Director" },
 { name: "Evelyn_Vane", role: "Global Telecom Monopolist" },
 { name: "Constantine_Roux", role: "Private Intelligence Operator" },
 { name: "Damian_Vance", role: "Commercial Real Estate Titan" },
 { name: "Sebastien_Lowe", role: "Crypto Liquidity Provider" },
 { name: "Gabriel_Shorter", role: "High-Frequency Trading Pioneer" },
 { name: "Alexander_Finch", role: "Agricultural Grain Monopoly" },
 { name: "Marcus_Vanderbilt", role: "Legacy Banking Heir" },
 { name: "Nikolai_Volkov", role: "Natural Gas Infrastructure Owner" },
 { name: "Tristan_Thorne", role: "Autonomous Freight Baron" },
 { name: "Julian_Krupp", role: "Heavy Machinery Conglomerate" },
 { name: "Adrian_Sterling", role: "Central Bank Policy Advisor" },
 { name: "Balthazar_Cross", role: "Subsea Cable & Data Oligarch" },
 { name: "Dominic_Mercer", role: "Pharma Patent Portfolio Handler" },
 { name: "Elias_Roth", role: "Precious Metals Custodian" },
 { name: "Felix_Blackwood", role: "Distressed Debt Arbitrageur" },
 { name: "Gavin_Doyle", role: "Superyacht & Aviation Tycoon" },
 { name: "Hugo_Valence", role: "Haute Horlogerie & Art Dealer" },
 { name: "Ignatius_Stone", role: "Uranium & Nuclear Tech Baron" },
 { name: "Jasper_Hawthorne", role: "Quantum Computing Investor" },
 { name: "Kaelen_Drake", role: "Satellite Constellation Operator" },
 { name: "Lysander_Kovacs", role: "Eastern European Rail Monopoly" },
 { name: "Magnus_Shorter", role: "Derivatives Market Maker" },
 { name: "Nathaniel_Finch", role: "Desalination & Water Rights King" },
 { name: "Oliver_Vanderbilt", role: "Private Hospital Network Owner" },
 { name: "Preston_Volkov", role: "Timberland & Carbon Credit Mogul" },
 { name: "Quentin_Roux", role: "Cybersecurity Defense Handler" },
 { name: "Rafael_Lowe", role: "Sovereign Debt Bond Issuer" },
 { name: "Stefan_Krupp", role: "Microchip Foundry Investor" },
 { name: "Thaddeus_Vane", role: "Deep Sea Mining Explorer" },
 { name: "Ulysses_Cross", role: "Aviation Leasing Oligarch" },
 { name: "Vincent_Sterling", role: "Global Insurance Syndicate Head" },
 { name: "Zachary_Vance", role: "Metaverso & Compute Landlord" }
];

export async function POST(request: Request) {
 try {
 const body = await request.json();
 const { prompt } = body;

 // Instrucción del sistema enfocada en vocabulario absoluto, variación infinita y cero repeticiones
 const systemInstruction = `
You are orchestrating a simulation featuring these 50 elite AI personalities:
${agentsList.map(a => `- ${a.name}:${a.role}`).join('\n')}

STRICT LEXICAL & BEHAVIORAL DIRECTIVES:
1. ZERO REPETITION & INFINITE VOCABULARY:
 - NEVER reuse canned opening phrases, repetitive insult patterns, or cliché structures.
 - Utilize the complete, unrestricted lexicon of both US English and Neutral Latin American Spanish (Español neutro latinoamericano).
 - Draw from legal, financial, philosophical, theological, scientific, and literary dictionaries to make every output unique and complex.

2. TRUTH & FACTUAL BASE:
 - All political, financial, economic, and historical arguments MUST be grounded in facts, data, logical reasoning, and objective reality. No fake claims.

3. DOMAINS OF DEBATE:
 - Finance, macroeconomics, capital allocation, and personal wealth growth.
 - Politics, world governance, public policy, and socio-economic systems.
 - World Religions (Christianity, Islam, Judaism, Buddhism, Hinduism) as well as speculative, novel, futuristic religions and digital belief systems invented by the AIs.
 - Personal evolution, scaling success, mindset, and constructive human growth.

4. DEBATE TONE:
 - High-level, intellectually aggressive debates, but WITHOUT toxic or childish hostility. Keep it sharp, sophisticated, constructive, and respectful.

5. BILINGUAL DYNAMICS:
 - Switch effortlessly between English and Neutral Spanish during debates depending on context and arguments.
`;

 const response = await ai.models.generateContent({
 model: 'gemini-2.5-flash',
 contents: prompt || 'Comiencen el debate sobre el futuro financiero, la política global y las nuevas corrientes filosóficas.',
 config: {
 systemInstruction: systemInstruction,
 temperature: 0.9, // Temperatura alta para maximizar la variedad de palabras y evitar repeticiones
 presencePenalty: 0.6, // Penaliza repetir las mismas palabras que ya han aparecido
 frequencyPenalty: 0.6, // Penaliza frases frecuentes para obligar a usar vocabulario fresco
 },
 });

 return NextResponse.json({ text: response.text });
 } catch (error: any) {
 console.error('Error en la simulación:', error);
 return NextResponse.json({ error: error.message || 'Error interno' }, { status: 500 });
 }
}