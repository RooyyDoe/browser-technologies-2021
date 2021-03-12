require("dotenv").config()

const port = process.env.PORT || 3000
const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

const app = express();

// Creating routes
const router = {
    start: require('./routes/start')
}

// Defining my template engine
const hbs = exphbs.create({
    extname: '.hbs',
    defaultLayout: 'main',
})

// Public folder for the assets
app.use(express.static(path.join(__dirname + "/public")))

// Allowing to send data through URL
app.use(
	express.urlencoded({
		extended: true,
	})
)

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

// navigation
app.get('/', router.start)

// Starting up the server
app.listen(port, () => console.log(`App now listening on port ${port}`))