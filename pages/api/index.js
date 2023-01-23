import { generateQrCode } from "../../modules/promptpay";

export default async function handler(req, res) {
  try {
    let { amount, id, dark, light } = req.query;

    if (!id) return res.status(400).send("Bad Request");

    if (!amount) amount = 0;

    let svg = await generateQrCode(id, parseFloat(amount));

    if(dark && light) 
      svg = await generateQrCode(id, parseFloat(amount), dark, light);

    res.statusCode = 200;
    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader(
      "Cache-Control",
      "public, immutable, no-transform, s-maxage=31536000, max-age=31536000"
    );
    return res.end(svg);
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
}
