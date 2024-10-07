import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express()
app.use(express.json())
app.use(cors({ origin: true }))


app.post('/authenticate', async (req, res) => {
    const { username } = req.body

    try {
        const response = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "f67db9cc-7c0c-4833-bbcf-43ffc33deb87" } }
        )
        return res.status(response.status).json(response.data)
    } catch (err) {
        return res.status(err.response.status).json(err.response.data)
    }
})

app.listen(3000)