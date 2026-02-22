// API Route: /api/agents
// Returns all agents with current status

export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Mock data - in production this would query the database
  const agents = [
    {
      id: "vwap_momentum_alpha_v1_0_0",
      codename: "VORTEX",
      status: "PAPER",
      division: "technical",
      strategy: "VWAP Bounce",
      return: 0,
      sharpe: 0,
      trades: 0,
      quote: "I don't predict, I react."
    },
    {
      id: "orb_breakout_beta_v1_0_0",
      codename: "ORBITAL",
      status: "PAPER",
      division: "technical",
      strategy: "ORB Breakout",
      return: 0,
      sharpe: 0,
      trades: 0,
      quote: "The first move is the best move."
    },
    {
      id: "macro_wizard_delta_v1_0_0",
      codename: "ORACLE",
      status: "PAPER",
      division: "macro",
      tier: "COMMANDER",
      strategy: "Rate Cycle Play",
      return: 0,
      sharpe: 0,
      trades: 0,
      quote: "Don't fight the Fed."
    }
  ];

  // Stats
  const stats = {
    totalAgents: 79,
    liveAgents: 0,
    paperAgents: 79,
    pausedAgents: 0,
    todayTrades: 0,
    todayPnl: 0,
    alpacaStatus: "CONNECTED",
    alpacaEquity: 100000,
    marketStatus: "CLOSED",
    marketNextOpen: "09:30 ET"
  };

  res.status(200).json({
    agents,
    stats,
    timestamp: new Date().toISOString()
  });
}
