import generatePayload from 'promptpay-qr' 
import qrcode from 'qrcode'

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

const generateQrCode = async (phone, amount, dark='#000', light='#fff') => {
    const payload = await generatePayload(phone, { amount })
    const svg = await getSvg(payload,dark,light)
    return svg
}

export { getSvg, generateQrCode, getPayload }