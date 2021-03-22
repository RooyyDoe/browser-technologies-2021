require("dotenv").config()

const port = process.env.PORT || 3000
const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

const app = express();

// Creating routes
const router = {
    start: require('./routes/start'),
    getCode: require('./routes/getCode'),
    indentification: require('./routes/indentification'),
    invalidCode: require('./routes/invalidCode'),
    personal: require('./routes/personal'),
    gamePersonal: require('./routes/gamePersonal'),
    openQuestions: require('./routes/openQuestions'),
    rateGame: require('./routes/rateGame'),
    personal_back: require('./routes/rateGame'),
    gamePersonal_back: require('./routes/rateGame'),
    openQuestions_back: require('./routes/rateGame'),
    rateGame_back: require('./routes/rateGame'),
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

// Routes
app.get('/', router.start)

app.post('/indentification', router.indentification)
app.post('/invalid_code', router.invalidCode)
app.get('/get_code', router.getCode)
app.post('/personal', router.personal)
app.post('/game_personal', router.gamePersonal)
app.post('/open_questions', router.openQuestions)
app.post('/rate_game', router.rateGame)

// Back routes
// app.get('/start', router.start)
// app.get('/person-back/:id', router.personal_back)
// app.get('/game-personal-back/:id', router.gamePersonal_back)
// app.get('/open-questions-back/:id', router.openQuestions_back)
// app.get('/rate-game-back/:id', router.rateGame_back)

// Starting up the server
app.listen(port, () => console.log(`App now listening on port ${port}`))