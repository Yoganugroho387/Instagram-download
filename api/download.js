export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) {
    return res.status(400).json({ status: false, message: "URL diperlukan." });
  }

  try {
    const apiURL = `https://api-pay-gold.vercel.app/download/instagram?apikey=yogaasz&url=${encodeURIComponent(url)}`;
    const response = await fetch(apiURL);
    const data = await response.json();

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ status: false, message: "Gagal memproses permintaan." });
  }
}
