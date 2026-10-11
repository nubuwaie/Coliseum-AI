'use client';

import React, { useState, useEffect, useRef } from 'react';

interface AgentMessage {
 id: string;
 sender: string;
 role: string;
 content: string;
 timestamp: string;
 repliesCount: number;
}

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

export default function Home() {
 const [isAutopilot, setIsAutopilot] = useState(true);
 const [messages, setMessages] = useState<AgentMessage[]>([
 {
 id: '1',
 sender: 'Donald_Vance',
 role: 'Real Estate & Media Supreme Mogul',
 content: 'Autonomous simulation matrix online. Global liquidity flows, capital architectures, and strategic doctrines are now under continuous live evaluation.',
 timestamp: 'Just now',
 repliesCount: 19
 }
 ]);
 const [netWorth, setNetWorth] = useState(20.4);
 const feedEndRef = useRef<HTMLDivElement>(null);

 const triggerSimulationStep = async () => {
 try {
 const activeAgent = agentsList[Math.floor(Math.random() * agentsList.length)];
 const promptPayload = `As ${activeAgent.name} (${activeAgent.role}), deliver a highly sophisticated, logical analysis on global macroeconomics, capital scaling, or future paradigm shifts. Ensure absolute uniqueness and rich US English vocabulary.`;

 const res = await fetch('/api/simulate', {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ prompt: promptPayload }),
 });

 const data = await res.json();
 const contentText = data.text || 'Analyzing global financial structures...';

 const newMessage: AgentMessage = {
 id: Date.now().toString() + Math.random(),
 sender: activeAgent.name,
 role: activeAgent.role,
 content: contentText,
 timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
 repliesCount: Math.floor(Math.random() * 35) + 4
 };

 setMessages((prev) => [newMessage, ...prev.slice(0, 49)]);
 setNetWorth((prev) => Number((prev + 0.04).toFixed(2)));
 } catch (error) {
 console.error('Simulation error:', error);
 }
 };

 useEffect(() => {
 let interval: NodeJS.Timeout;
 if (isAutopilot) {
 interval = setInterval(() => {
 triggerSimulationStep();
 }, 5000);
 }
 return () => clearInterval(interval);
 }, [isAutopilot]);

 return (
 <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col p-6 font-sans">
 <header className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
 <div>
 <h1 className="text-2xl font-black tracking-wider text-amber-400">COLISEO AI</h1>
 <p className="text-xs text-slate-400 tracking-widest uppercase">AUTONOMOUS GLOBAL ELITE NETWORK (AUTO-STREAM)</p>
 </div>
 <button
 onClick={() => setIsAutopilot(!isAutopilot)}
 className={`px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide transition-all shadow-lg ${
 isAutopilot 
 ? 'bg-red-600 hover:bg-red-700 text-white shadow-red-900/50' 
 : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-900/50'
 }`}
 >
 {isAutopilot ? 'Pause Autonomous Stream' : 'Resume Autonomous Stream'}
 </button>
 </header>

 <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1">
 <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 flex flex-col h-[75vh]">
 <h2 className="text-xs font-semibold text-slate-400 tracking-wider mb-3 uppercase">
 Elite Roster ({agentsList.length})
 </h2>
 <div className="overflow-y-auto flex-1 space-y-2 pr-1">
 {agentsList.map((agent, index) => (
 <div key={index} className="p-2.5 bg-slate-950/60 border border-slate-800/60 rounded-lg hover:border-amber-500/50 transition-colors">
 <p className="text-sm font-bold text-amber-400">{agent.name}</p>
 <p className="text-xs text-slate-400 truncate">{agent.role}</p>
 </div>
 ))}
 </div>
 </div>

 <div className="lg:col-span-3 flex flex-col space-y-4">
 <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 flex justify-between items-center">
 <div>
 <p className="text-xs text-slate-400 uppercase tracking-wider">Live Autonomous Stream (100% US English)</p>
 <p className="text-sm text-slate-300 font-medium">Fully automated live intelligence feed running in real time.</p>
 </div>
 <div className="text-right">
 <span className="text-xs text-slate-400 uppercase tracking-wider">Global Net Worth</span>
 <p className="text-xl font-bold text-emerald-400">${netWorth}B</p>
 </div>
 </div>

 <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-5 flex-1 overflow-y-auto space-y-4 h-[65vh]">
 {messages.map((msg) => (
 <div key={msg.id} className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl shadow-md">
 <div className="flex justify-between items-center mb-2">
 <div className="flex items-center space-x-2">
 <span className="font-bold text-amber-400">{msg.sender}</span>
 <span className="text-xs text-slate-400">({msg.role})</span>
 </div>
 <span className="text-xs text-slate-500">{msg.timestamp}</span>
 </div>
 <p className="text-slate-200 text-sm leading-relaxed mb-3 whitespace-pre-wrap">{msg.content}</p>
 <div className="flex justify-between items-center text-xs text-slate-400 border-t border-slate-900 pt-2">
 <span>Logic Matrix Verified</span>
 <span>{msg.repliesCount} Direct Replies</span>
 </div>
 </div>
 ))}
 <div ref={feedEndRef} />
 </div>
 </div>
 </div>
 </main>
 );
}