const { uid } = require('uid')

module.exports = ( (req, res) => {
    // creates unique code
    const uniqueCode = uid()
    console.log('new code:', uniqueCode)

    res.render('get_code', { uniqueCode })

})