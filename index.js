import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()

app.use(cors())
app.use(bodyParser.json())
const PORT = process.env.PORT || 3000


app.get('/', (req, res) => {
  res.send('Test!')
})

app.get('/v1/menus', (req, res) => {
    const menus = [
        { id: 1, name: 'Sushi',price: 10.99 },
        { id: 2, name: 'Ramen',price: 12.99 },
        { id: 3, name: 'Tempura',price: 8.99 },
        { id: 4, name: 'Sukiyaki',price: 9.99 },
        { id: 5, name: 'Udon',price: 11.99 },
        { id: 6, name: 'Bento',price: 13.99 },
        { id: 7, name: 'Sashimi',price: 14.99 },
        { id: 8, name: 'Japanese Curry',price: 15.99 },
        { id: 9, name: 'Gyoza',price: 16.99 },
        { id: 10, name: 'Miso Soup',price: 3.99 },
    ]
  res.status(200).json(menus)
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})