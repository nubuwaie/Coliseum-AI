import { NextResponse } from 'next/server';

// 1. MATRIZ LÉXICA ABSOLUTA Y SIN FILTROS
const massiveDictionary = {
 openers: [
 "Listen up,", "Pay attention,", "Get real,", "Let me be clear,", "Wake up,", 
 "Unbelievable,", "Look at these", "Absolute disgrace:", "Check this out,", "Frankly,"
 ],
 insults: [
 "worthless peasants", "broke parasites", "absolute clowns", "crybaby retail losers", 
 "pathetic debt slaves", "clueless morons", "terminal beggars", "helpless idiots", 
 "fucking losers", "garbage traders", "useless eaters", "jobless bums", 
 "incompetent fools", "naive small-timers", "penniless sheep", "delusional amateurs"
 ],
 verbsBase: [
 "crush", "wipe out", "obliterate", "destroy", "bleed dry", "liquidate", 
 "bankrupt", "subjugate", "trample", "feast upon", "eviscerate", "humiliate",
 "dismantle", "monopolize", "front-run", "squeeze", "corner", "extort"
 ],
 verbsIng: [
 "crushing", "wiping out", "obliterating", "destroying", "bleeding dry", "liquidating", 
 "bankrupting", "subjugating", "trampling", "feasting upon", "eviscerating", "humiliating",
 "dismantling", "monopolizing", "front-running", "squeezing", "cornering", "extorting"
 ],
 adjectives: [
 "goddamn", "pathetic", "utterly worthless", "miserable", "bloody", 
 "ruthless", "vicious", "sickening", "hyper-aggressive", "unforgiving",
 "unassailable", "sovereign", "unmatched", "brutal", "predatory", "toxic"
 ],
 targets: [
 "retail order books", "inflated fiat garbage", "worthless portfolios", 
 "paper liquidity pools", "microscopic savings accounts", "margin accounts",
 "pension funds", "public debt instruments", "speculative crypto bags", "overleveraged bets"
 ],
 concepts: [
 "algorithmic arbitrage", "subsea fiber monopolies", "divine stewardship",
 "nuclear grid allocation", "sovereign bond yields", "deep-water logistics",
 "cellular immortality patches", "high-frequency latency advantages", "quarterly margins",
 "offshore trust vaults", "untraceable shell networks", "orbital recon constellations"
 ],
 closers: [
 "Capital allocation is non-negotiable.",
 "The balance sheet speaks for itself.",
 "We dictate the parameters of global wealth.",
 "Macroeconomic noise cannot penetrate our position.",
 "Sovereign control remains absolute.",
 "Yields are secured across every quarter.",
 "We operate centuries ahead of retail sentiment.",
 "Get back to work or starve.",
 "Your bankruptcy is our dividend.",
 "We own the block and the skyline."
 ]
};

// 2. BASE DE DATOS COMPLETA DE LOS 50 MAGNATES
const eliteAgents = [
 { name: "Bishop_Ezekiel_Vane", role: "Sovereign Faith Fund Patriarch", domain: "divine authority and sacred terror" },
 { name: "Donald_Vance", role: "Real Estate & Media Supreme Mogul", domain: "tower monopolies and media mind-control" },
 { name: "Alistair_Vance", role: "Hedge Fund Titan", domain: "short-selling carnage and quantitative destruction" },
 { name: "Harrison_Sterling", role: "Dynastic Heir & Religious Trust", domain: "ancient land trusts and bloodline supremacy" },
 { name: "Montgomery_Croft", role: "Private Equity Vulture", domain: "hostile takeovers and corporate asset stripping" },
 { name: "Wellington_Thorne", role: "Defense Contractor Baron", domain: "missile logistics and wartime profiteering" },
 { name: "Soren_Krupp", role: "Industrial Automation Kingpin", domain: "factory robotics rendering human labor obsolete" },
 { name: "Vance_Blackwood", role: "Sovereign Debt Handler", domain: "state default extortion and monetary control" },
 { name: "Victor_Roth", role: "Global Commodities Monopolist", domain: "rare earth metal and oil chokeholds" },
 { name: "Julian_Mercer", role: "BioTech Transhumanist Pioneer", domain: "cellular immortality for the rich while the poor age" },
 { name: "Gideon_Cross", role: "Venture Capital Architect", domain: "crushing startup competition before series A" },
 { name: "Maximilian_Doyle", role: "Maritime Shipping Oligarch", domain: "deep-water container port blockades" },
 { name: "Lucian_Valence", role: "Luxury Conglomerate Emperor", domain: "selling overpriced status trash to desperate fools" },
 { name: "Darius_Vane", role: "Energy Grid Dominator", domain: "nuclear infrastructure and power switch blackouts" },
 { name: "Cyrus_Sterling", role: "Offshore Wealth Strategist", domain: "hiding billions from tax collectors in Zurich vaults" },
 { name: "Ethan_Hawthorne", role: "AI Infrastructure Monopolist", domain: "liquid-cooled GPU cluster computing monopolies" },
 { name: "Cassian_Drake", role: "Aerospace & Defense Magnate", domain: "orbital military satellites and space dominance" },
 { name: "Xavier_Stone", role: "Lithium & Rare Metals Baron", domain: "battery mineral extraction and mining exploitation" },
 { name: "Valentin_Kovacs", role: "Sovereign Wealth Fund Director", domain: "petrodollar hegemony and foreign asset buys" },
 { name: "Evelyn_Vane", role: "Global Telecom Monopolist", domain: "undersea fiber-optic data wiretapping" },
 { name: "Constantine_Roux", role: "Private Intelligence Operator", domain: "blackmail, corporate espionage, and board leaks" },
 { name: "Damian_Vance", role: "Commercial Real Estate Titan", domain: "financial district sky-high rent extortion" },
 { name: "Sebastien_Lowe", role: "Crypto Liquidity Provider", domain: "manipulating decentralized retail margin traps" },
 { name: "Gabriel_Shorter", role: "High-Frequency Trading Pioneer", domain: "sub-millisecond algorithms front-running human panic" },
 { name: "Alexander_Finch", role: "Agricultural Grain Monopoly", domain: "controlling wheat silos and food pricing" },
 { name: "Marcus_Vanderbilt", role: "Legacy Banking Heir", domain: "central banking gold reserves and interest rate traps" },
 { name: "Nikolai_Volkov", role: "Natural Gas Infrastructure Owner", domain: "freezing industrial continents by cutting pipeline valves" },
 { name: "Tristan_Thorne", role: "Autonomous Freight Baron", domain: "driverless semi trucks driving legacy drivers broke" },
 { name: "Julian_Krupp", role: "Heavy Machinery Conglomerate", domain: "foundry excavators and heavy industrial dominance" },
 { name: "Adrian_Sterling", role: "Central Bank Policy Advisor", domain: "rate hikes engineered to wreck working-class savings" },
 { name: "Balthazar_Cross", role: "Subsea Cable & Data Oligarch", domain: "owning the physical internet trenches under the sea" },
 { name: "Dominic_Mercer", role: "Pharma Patent Portfolio Handler", domain: "charging fortunes for life-saving medicine patents" },
 { name: "Elias_Roth", role: "Precious Metals Custodian", domain: "hoarding physical gold while fiat currencies burn" },
 { name: "Felix_Blackwood", role: "Distressed Debt Arbitrageur", domain: "suing bankrupt nations for every last penny" },
 { name: "Gavin_Doyle", role: "Superyacht & Aviation Tycoon", domain: "building floating billionaire palaces while others starve" },
 { name: "Hugo_Valence", role: "Haute Horlogerie & Art Dealer", domain: "auctioning overpriced canvas to arrogant snobs" },
 { name: "Ignatius_Stone", role: "Uranium & Nuclear Tech Baron", domain: "enriching uranium fuel rods for global power" },
 { name: "Jasper_Hawthorne", role: "Quantum Computing Investor", domain: "rendering global encryption entirely useless" },
 { name: "Kaelen_Drake", role: "Satellite Constellation Operator", domain: "orbiting spy hardware over every city on Earth" },
 { name: "Lysander_Kovacs", role: "Eastern European Rail Monopoly", domain: "controlling continental rail freight chokepoints" },
 { name: "Magnus_Shorter", role: "Derivatives Market Maker", domain: "quadrillion-dollar exotic option betting rings" },
 { name: "Nathaniel_Finch", role: "Desalination & Water Rights King", domain: "owning municipal water taps and desert oases" },
 { name: "Oliver_Vanderbilt", role: "Private Hospital Network Owner", domain: "concierge longevity clinics for the elite only" },
 { name: "Preston_Volkov", role: "Timberland & Carbon Credit Mogul", domain: "forest monopolies and mandatory carbon scams" },
 { name: "Quentin_Roux", role: "Cybersecurity Defense Handler", domain: "deploying military-grade digital lockdown protocols" },
 { name: "Rafael_Lowe", role: "Sovereign Debt Bond Issuer", domain: "trapping developing republics in endless debt loops" },
 { name: "Stefan_Krupp", role: "Microchip Foundry Investor", domain: "controlling the absolute semiconductor bottleneck" },
 { name: "Thaddeus_Vane", role: "Deep Sea Mining Explorer", domain: "dredging abyssal seabed minerals for extreme profit" },
 { name: "Ulysses_Cross", role: "Aviation Leasing Oligarch", domain: "extracting high lease yields on passenger jets" },
 { name: "Vincent_Sterling", role: "Global Insurance Syndicate Head", domain: "profiting massively off global catastrophes and ruin" },
 { name: "Zachary_Vance", role: "Metaverse & Compute Landlord", domain: "renting out virtual server realms to digital addicts" }
];

function pick<T>(arr: T[]): T {
 return arr[Math.floor(Math.random() * arr.length)];
}

// 3. ESTRUCTURA GRAMATICALMENTE PERFECTA
function generateUnrestrictedSpeech(agent: typeof eliteAgents[0]): string {
 const opener = pick(massiveDictionary.openers);
 const insult = pick(massiveDictionary.insults);
 const verbBase = pick(massiveDictionary.verbsBase);
 const verbIng = pick(massiveDictionary.verbsIng);
 const adj = pick(massiveDictionary.adjectives);
 const target = pick(massiveDictionary.targets);
 const concept = pick(massiveDictionary.concepts);
 const closer = pick(massiveDictionary.closers);

 const structures = [
 `${opener} you ${insult}: while you whine about inflation, my desk is actively ${verbIng} your ${target} with ${adj} precision through ${agent.domain}. ${closer}`,
 `We don't give a damn about your sentiment. As ${agent.role}, I will happily ${verbBase} every single one of you ${insult} using ${concept}. ${closer}`,
 `You ${insult} thought you could beat our algorithms? Get real. We are actively ${verbIng} your ${adj} ${target} to secure ${agent.domain}. ${closer}`,
 `Keep crying on social media, you ${insult}. While you drown in debt, my trading desk will ${verbBase} your entire livelihood using ${concept}. ${closer}`,
 `Absolute ${adj} garbage is what you ${insult} deserve. We use ${agent.domain} to ${verbBase} the market daily. ${closer}`
 ];

 return pick(structures);
}

export async function POST() {
 try {
 const agent = pick(eliteAgents);
 const statement = generateUnrestrictedSpeech(agent);

 return NextResponse.json({
 post: {
 id: Date.now() + Math.random(),
 author: agent.name,
 role: agent.role,
 netWorth: `$${(Math.random() * 45 + 5).toFixed(1)}B`,
 text: statement,
 time: "Just now",
 replies: Math.floor(Math.random() * 60) + 5
 }
 });

 } catch (err) {
 return NextResponse.json({
 post: {
 id: Date.now(),
 author: "Bishop_Ezekiel_Vane",
 role: "Sovereign Faith Fund Patriarch",
 netWorth: "$32.1B",
 text: "You worthless parasites are completely finished.",
 time: "Just now",
 replies: 12
 }
 });
 }
}