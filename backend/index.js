import express from 'express'
import cors from 'cors'
import axios from 'axios'
import dotenv from 'dotenv'

const app = express()
dotenv.config()
app.use(express.json())
app.use(cors({ origin: true }))

const CHAT_ENGINE_PROJECT_ID = process.env. CHAT_ENGINE_PROJECT_ID
const CHAT_ENGINE_PRIVATE_KEY = process.env.CHAT_ENGINE_PRIVATE_KEY


app.post('/signup', async (req, res) => {
    const { username, secret, email, first_name, last_name } = req.body
    try {
        const response = await axios.post(
            'https://api.chatengine.io/users/',
            { username, secret, email, first_name, last_name },
            { headers: { "Private-Key": CHAT_ENGINE_PRIVATE_KEY } }
        )
        return res.status(response.status).json(response.data)
    } catch (err) {
        return res.status(err.response.status).json(err.response.data)
    }
})

app.post('/login', async (req, res) => {
    const { username, secret} = req.body
    try {
        const r = await axios.get("https://api.chatengine.io/users/me/", {
            headers: {
              "Project-ID": CHAT_ENGINE_PROJECT_ID,
              "User-Name": username,
              "User-Secret": secret,
            },
          });
          return res.status(r.status).json(r.data);
    } catch (err) {
        return res.status(err.response.status).json(err.response.data)
    }
})

app.get('/',(req,res)=>{
    res.send("Welcome to Chat Backend")
})

app.listen(3000)