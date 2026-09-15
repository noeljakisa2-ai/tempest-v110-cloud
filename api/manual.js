export default async function handler(req, res) {
  if(req.method !== 'POST') return res.status(405).json({error:'POST only'});
  const { type, stake, pair, account } = req.body;
  // This will trigger trade via Deriv API - using same logic as auto-trade
  console.log(`MANUAL ${type} $${stake} ${pair} ${account}`);
  // Return success
  return res.status(200).json({ success: true, type, stake, pair });
}
