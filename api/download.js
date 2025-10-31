export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ status: false, message: "URL diperlukan." });
  }

  try {
    const apiURL = `https://api-pay-gold.vercel.app/download/instagram?apikey=yogaasz&url=${encodeURIComponent(url)}`;
    const response = await fetch(apiURL);

    // Pastikan API merespons JSON
    const text = await response.text();
    let data;

    try {
      data = JSON.parse(text);
    } catch (e) {
      return res.status(502).json({
        status: false,
        message: "Respon bukan JSON valid.",
        raw: text.slice(0, 200) // tampilkan potongan error HTML
      });
    }

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "Gagal memproses permintaan: " + err.message
    });
  }
}
