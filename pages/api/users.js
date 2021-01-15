const { GoogleSpreadsheet } = require("google-spreadsheet")
import { fromBase64 } from "../../lib/base64"

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.CLIENT_EMAIL,
      private_key: fromBase64(process.env.PRIVATE_KEY),
    })
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[5]

    const rows = await sheet.getRows()
    const clients = rows.map((e) => {
      return {
        slug: e.Slug,
        name: e.Cliente,
        calendar: e.Calendar,
        perfilConfs: e.Perfil,
      }
    })
    res.send(clients)
  } catch (error) {
    console.log(error.message)
    res.json([])
  }
}
