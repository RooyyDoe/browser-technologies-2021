// const storage = require('../modules/storage')
const { uid } = require('uid')

module.exports = (req, res) => {
    // creates unique code
    const givenCode = uid(8)

    res.render('get_code', { uniqueCode: givenCode })

}