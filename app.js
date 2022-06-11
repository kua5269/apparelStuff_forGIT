const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
//require controller
const armoireController = require('./controllers/armoire');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

//20220611, test route
app.get('/test', armoireController.getAll)
app.get('/test/:id', armoireController.get)

app.listen(port, () => {
  console.log(`express is listening on http://localhost:${port}`)
})