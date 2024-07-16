import express from 'express'

import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(PORT, () => {
    console.log('\n==================================================')
    console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`)
    console.log('==================================================\n')
})