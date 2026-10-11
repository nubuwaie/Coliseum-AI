import { NextResponse } from 'next/server';

// Banco léxico masivo expandido para variaciones infinitas
const dictionary = {
 openings: [
 "From a quantitative standing,", "Analyzing current capital inflows,", 
 "Regarding our multi-tiered portfolio,", "In light of macro volatility,", 
 "Assessing global liquidity channels,", "Evaluating secondary asset classes,",
 "Re-balancing our institutional exposure,", "Under current yield curve dynamics,",
 "Examining cross-border sovereign risk,", "Factoring in central bank tightening,",
 "Given recent credit default swap movement,", "Tracking institutional capital flight,",
 "Scrutinizing high-yield debt obligations,", "In accordance with algorithmic risk models,"
 ],
 verbs: [
 "we are executing an aggressive buyout of", "our syndicate is systematically shorting",
 "we must immediately consolidate access to", "we are deploying automated capital into",
 "our fund is quietly accumulating", "we are liquidating underperforming positions in",
 "we are establishing primary control over", "we are hedging our position against",
 "we are orchestrating a hostile takeover of", "our traders are cornering the market in",
 "we are re-allocating strategic reserves toward", "we are leveraging dark-pool liquidity in"
 ],
 targets: [
 "distressed sovereign debt instruments", "tier-1 subsea data infrastructure",
 "rare-earth mineral extraction rights", "high-frequency algorithmic liquidity pools",
 "autonomous semiconductor fabrication nodes", "offshore private equity vehicles",
 "monopolistic energy distribution grids", "next-generation quantum computing patents",
 "uncollateralized commercial paper markets", "commercial real estate debt portfolios",
 "lithium refining and logistics networks", "sovereign wealth derivative contracts"
 ],
 mechanisms: [
 "by leveraging off-balance-sheet special purpose vehicles.",
 "through cross-border regulatory arbitrage protocols.",
 "via strategic integration of decentralized credit lines.",
 "utilizing dark pool execution algorithms at zero-latency.",
 "by structuring syndicated collateralized debt obligations.",
 "through direct equity swaps across foreign exchange corridors.",
 "by engineering synthetic credit default swap structures.",
 "via strategic capital injection into distressed subsidiaries."
 ],
 outcomes: [
 "This guarantees absolute yield superiority across Q4.",
 "This effectively neutralizes systemic contagion risks.",
 "This secures a permanent monopolistic advantage over legacy rivals.",
 "This expands our balance sheet valuation exponentially.",
 "This enforces total pricing control prior to regulatory interference.",
 "This solidifies our sovereign dominance across primary trade corridors.",
 "This unlocks unprecedented liquidity across volatile asset classes."
 ]
};

function randomChoice(list: string[]): string {
 return list[Math.floor(Math.random() * list.length)];
}

export async function POST(request: Request) {
 try {
 const part1 = randomChoice(dictionary.openings);
 const part2 = randomChoice(dictionary.verbs);
 const part3 = randomChoice(dictionary.targets);
 const part4 = randomChoice(dictionary.mechanisms);
 const part5 = randomChoice(dictionary.outcomes);

 const fullSpeech = `${part1} ${part2} ${part3} ${part4} ${part5}`;

 return NextResponse.json({ text: fullSpeech });
 } catch (error) {
 return NextResponse.json({ 
 text: "Liquidity matrix synchronized. Autonomous discourse continuing at optimal throughput." 
 });
 }
}