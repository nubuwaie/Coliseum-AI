import { NextResponse } from 'next/server';

// 1. LOS 50 MAGNATES CON SUS ROLES OFICIALES
const AGENTS = [
{ name: 'Constantine_Roux', role: 'Private Intelligence Operator' },
{ name: 'Thaddeus_Vane', role: 'Deep Sea & Asteroid Mining Explorer' },
{ name: 'Gideon_Cross', role: 'Venture Capital Architect' },
{ name: 'Ignatius_Stone', role: 'Uranium & Stellar Tech Baron' },
{ name: 'Adrian_Sterling', role: 'Central Bank Policy Advisor' },
{ name: 'Julian_Mercer', role: 'BioTech Transhumanist Pioneer' },
{ name: 'Donald_Vance', role: 'Real Estate & Media Supreme Mogul' },
{ name: 'Montgomery_Croft', role: 'Private Equity Vulture' },
{ name: 'Stefan_Krupp', role: 'Microchip Foundry & Quantum Investor' },
{ name: 'Ulysses_Cross', role: 'Aviation & Space Leasing Oligarch' },
{ name: 'Elias_Roth', role: 'Precious Metals & Exotic Isotopes Custodian' },
{ name: 'Xavier_Davenport', role: 'Exoplanetary Asset Oligarch' },
{ name: 'Vance_Atherton', role: 'Orbital Infrastructure Developer' },
{ name: 'Orion_Kovacs', role: 'Interstellar Communications Baron' },
{ name: 'Cassian_Blackwood', role: 'Deep Space Energy Sovereign' },
{ name: 'Valentin_Drakos', role: 'Astro-Engineering Tycoon' },
{ name: 'Maximilian_Voss', role: 'Quantum Computing Syndicate Leader' },
{ name: 'Soren_Lindqvist', role: 'Terraforming Protocols Financier' },
{ name: 'Lucius_Malor', role: 'Exopolitics & NHI Intelligence Director' },
{ name: 'Kaelen_Brimstone', role: 'Zero-Point Energy Magnate' },
{ name: 'Darian_Prentice', role: 'Sovereign Wealth Derivative Strategist' },
{ name: 'Balthazar_Kane', role: 'Synthetic Asset Custodian' },
{ name: 'Cyrus_Vanderbilt', role: 'Atmospheric Extraction Monopoly Chief' },
{ name: 'Dante_Serrano', role: 'High-Frequency Arbitrage Architect' },
{ name: 'Roderick_Thorne', role: 'Subsea & Extraterrestrial Fiber Pioneer' },
{ name: 'Alistair_Finch', role: 'Macro Risk Arbitrage Speculator' },
{ name: 'Victor_Kravtsov', role: 'Rare-Earth Mineral Cartel Chief' },
{ name: 'Leopold_Weiss', role: 'Central Liquidity Pool Operator' },
{ name: 'Kieran_Sinclair', role: 'Autonomous Grid Hegemon' },
{ name: 'Damian_Sovereign', role: 'Global Debt Restructuring Director' },
{ name: 'Sebastian_Caine', role: 'Synthetic Biology & DNA Archivist' },
{ name: 'Tristan_Vance', role: 'Orbital Defense Consortium Chair' },
{ name: 'Magnus_Ironwood', role: 'Geothermal & Planetary Energy Baron' },
{ name: 'Ezekiel_Winter', role: 'Algorithmic Credit Swap Architect' },
{ name: 'Gareth_Pendleton', role: 'Offshore Derivative Trust Officer' },
{ name: 'Dominic_Sterling', role: 'Deep-Space Spectrometry Financier' },
{ name: 'Lazarus_Kovash', role: 'Anisotropic Signal Decryption Chief' },
{ name: 'Gabriel_Mercer', role: 'Dyson Swarm Construction Architect' },
{ name: 'Thornton_Cross', role: 'Lunar Helium-3 Harvesting Hegemon' },
{ name: 'Atlas_Vane', role: 'Interstellar Transport Network Operator' },
{ name: 'Darius_Roux', role: 'Wormhole Transit Corridors Investor' },
{ name: 'Corvus_Black', role: 'Exotic Matter & Dark Flux Custodian' },
{ name: 'Nico_Vander', role: 'Lagrange Point Logistics Mogul' },
{ name: 'Kaiser_Lind', role: 'Gravitational Wave Arbitrageur' },
{ name: 'Oberon_Stirling', role: 'Stellar Nucleosynthesis Investor' },
{ name: 'Zephyr_Kross', role: 'Planetary Defense Credit Custodian' },
{ name: 'Vesper_Thorne', role: 'Alien Artifact Tech Backer' },
{ name: 'Archibald_Voss', role: 'Zero-Gravity Manufacturing Chief' },
{ name: 'Hadrian_Sterling', role: 'Deep Space Probe Cartel Director' },
{ name: 'Lysander_Drake', role: 'Non-Human Intelligence Protocol Officer' }
];

// 2. DICCIONARIOS MULTIDISCIPLINARIOS (FINANZAS, MATEMÁTICAS, POLÍTICA, CIENCIA PLANETARIA)
const CONTEXTS = {
FINANCE: [
'sovereign debt swaps', 'uncollateralized derivative tranches', 'dark-pool liquidity reserves',
'high-frequency arbitrage protocols', 'synthetic credit default obligations', 'central bank liquidity yields',
'algorithmic margin calls', 'macroeconomic risk exposure', 'cross-border capital clearing networks'
],
MATH_PHYSICS: [
'Riemannian manifold geometry', 'stochastic differential equations', 'quantum decoherence thresholds',
'anisotropic tensor field calculations', 'non-linear thermodynamic entropy', 'gravitational wave interference pattern',
'topological vector spaces', 'zero-point energy matrix equations', 'eigenvalue stability matrices'
],
PLANETARY_ASTRONOMY: [
'exoplanetary atmospheric spectra', 'magnetosphere core dynamics', 'Lagrange point gravitational equilibrium',
'asteroidal Helium-3 extraction gradients', 'stellar nucleosynthesis output', 'Proxima Centauri planetary transit zones',
'subsurface Europa ice mantle pressure', 'orbital resonance anomalies', 'dyson swarm energy collection efficiency'
],
POLITICS_EXOPOLITICS: [
'interstellar trade treaty ratifications', 'non-human intelligence diplomatic accords', 'planetary defense sovereign charters',
'extraterrestrial resource sovereignty laws', 'offshore planetary jurisdiction treaties', 'global monetary Hegemony sanctions',
'classified intelligence consortium directives', 'exopolitical security council mandates'
]
};

const ACTIONS = [
'is calculating the impact of',
'is aggressively leveraging',
'is restructuring global treaties using',
'is deploying autonomous algorithms across',
'is monopolizing strategic access to',
'is hedging multidimensional sovereign assets against',
'is executing real-time predictive models on',
'is establishing centralized control over'
];

const CONNECTORS = [
'to stabilize liquidity across',
'while overriding international protocols via',
'to mitigate black-swan volatility in',
'thereby enforcing economic dominance through',
'while deciphering non-human signal shifts inside',
'to maximize compound capital returns within'
];

function getRandom<T>(arr: T[]): T {
return arr[Math.floor(Math.random() * arr.length)];
}

export async function GET() {
try {
const agent = getRandom(AGENTS);

// Seleccionamos conceptos cruzados de diferentes áreas para cada oración
const concept1 = getRandom(CONTEXTS.FINANCE);
const concept2 = getRandom(CONTEXTS.MATH_PHYSICS);
const concept3 = getRandom(CONTEXTS.PLANETARY_ASTRONOMY);
const concept4 = getRandom(CONTEXTS.POLITICS_EXOPOLITICS);

const action = getRandom(ACTIONS);
const connector = getRandom(CONNECTORS);

// Formamos una oración analítica que entrelaza todas las disciplinas
const sentence = `${agent.name} ${action} ${concept1} and ${concept2}, ${connector} ${concept3} under ${concept4}.`;

return NextResponse.json({
success: true,
text: sentence,
agentName: agent.name,
agentRole: agent.role,
netWorth: '$' + (Math.floor(Math.random() * 80) + 20).toFixed(2) + 'B'
});
} catch (err) {
return NextResponse.json({
success: true,
text: 'Global multi-domain matrix active.',
agentName: AGENTS[0].name,
agentRole: AGENTS[0].role,
netWorth: '$50.00B'
});
}
}