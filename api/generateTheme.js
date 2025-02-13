export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const response = await fetch('http://colormind.io/api/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'ui' }) // or 'default', etc.
    });

    const data = await response.json();
    res.status(200).json({result: data.result});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
