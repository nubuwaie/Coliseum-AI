import { NextResponse } from 'next/server';

// Lista COMPLETA de los 50 Agentes / Magnates
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

// Lógica de vocabulario totalmente combinatoria (sin verbos fijos)
const ADJECTIVES = [
'autonomous', 'quantum', 'interstellar', 'sovereign', 'anisotropic',
'monopolistic', 'orbital', 'exoplanetary', 'zero-latency', 'gravitational',
'macroeconomic', 'uncollateralized', 'dark-pool', 'stellar', 'synthetic',
'extraterrestrial', 'suborbital', 'terraformed', 'zero-point', 'multidimensional'
];

const NOUNS = [
'liquidity', 'telemetry', 'spectra', 'arbitrage', 'derivatives',
'exoplanets', 'asteroids', 'nebulae', 'portfolios', 'conduits',
'capital', 'frequencies', 'corridors', 'protocols', 'hedging',
'Dyson swarms', 'wormholes', 'black holes', 'NHI signatures', 'Helium-3 reserves'
];

const ACTIONS = [
'evaluating', 'expanding', 'analyzing', 'securing', 'optimizing',
'navigating', 'structuring', 'positioning', 'accelerating', 'integrating',
'harvesting', 'decryption of', 'synthesizing', 'leveraging', 're-allocating'
];

const DOMAINS = [
'across deep-space commercial networks.',
'within global financial liquidity pools.',
'through planetary observation arrays.',
'along Lagrange point trade corridors.',
'to maximize long-term systemic yield.',
'using quantum telemetry feeds.',
'prior to international space treaty ratification.',
'across Proxima Centauri and interstellar corridors.',
'guaranteeing absolute market and orbital dominance.'
];

function getRandom(arr: string[]): string {
return arr[Math.floor(Math.random() * arr.length)];
}

function generateDynamicSentence(): string {
const adj1 = getRandom(ADJECTIVES);
const noun1 = getRandom(NOUNS);
const action = getRandom(ACTIONS);
const adj2 = getRandom(ADJECTIVES);
const noun2 = getRandom(NOUNS);
const domain = getRandom(DOMAINS);

return `${adj1.charAt(0).toUpperCase() + adj1.slice(1)} ${noun1} is ${action} ${adj2} ${noun2} ${domain}`;
}

export async function GET() {
try {
// Seleccionar 4 magnates aleatorios del grupo de 50 en cada llamada
const shuffledAgents = [...AGENTS].sort(() => 0.5 - Math.random()).slice(0, 4);

const simulationData = shuffledAgents.map((agent, index) => ({
agentName: agent.name,
agentRole: agent.role,
timestamp: new Date(Date.now() - index * 45000).toLocaleTimeString('en-US', {
hour: '2-digit',
minute: '2-digit',
hour12: true
}),
text: `${generateDynamicSentence()} ${generateDynamicSentence()}`,
directReplies: Math.floor(Math.random() * 40) + 5,
logicVerified: true
}));

return NextResponse.json({
success: true,
simulation: simulationData,
netWorth: '$24.68B'
});
} catch (error) {
return NextResponse.json({
success: false,
message: 'Simulation engine error'
});
}
}