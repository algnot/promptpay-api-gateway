import generatePayload from 'promptpay-qr' 
import qrcode from 'qrcode'
import svg2png from 'svg2png';

const getSvg = async (payload,dark,light) => {
    return new Promise((resolve, reject) => {
        const options = { type: 'svg', color: { dark: dark, light: light } }
        qrcode.toString(payload, options, (err, svg) => {
            if (err) return reject(err)
            resolve(svg)
        })
    })
}

const getPayload = async (phone, amount) => {
    const payload = await generatePayload(phone, { amount })
    return payload
}

const convertSvgToPng = async (svgData) => {
    try {
        const pngBuffer = await svg2png(svgData, { width: 300, height: 300 })
        return pngBuffer
    } catch (err) {
        console.error("Error converting SVG to PNG:", err);
        throw err;
    }
};

const generateQrCode = async (phone, amount, dark='#000', light='#fff') => {
    const payload = await generatePayload(phone, { amount })
    const svg = await getSvg(payload,dark,light)
    const png = await convertSvgToPng(svg)
    return png
}

export { getSvg, generateQrCode, getPayload }