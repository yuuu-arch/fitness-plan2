module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const key = process.env.ANTHROPIC_API_KEY || 'NOT_FOUND';
  
  return res.status(200).json({ 
    key_status: key === 'NOT_FOUND' ? 'missing' : 'found',
    key_length: key.length,
    node_env: process.env.NODE_ENV,
    all_env_keys: Object.keys(process.env).filter(k => k.includes('ANTHRO'))
  });
}
