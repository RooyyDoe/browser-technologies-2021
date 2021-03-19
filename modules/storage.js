const fs = require('fs')

module.exports = {
    // Checks if the file exists and gives back an boolean
    checksIfFileExists: path => fs.existsSync(path),
    // Gets the data if it exists and parse it to an object. the readFileSync 
    // reads the contents of the path synchronously with an extra option for utf-8
    getExistingData: path => JSON.parse(fs.readFileSync(path, {
        encoding: 'utf8',
        flag:'r',
    })),
    // Will save the new data to the path when it is submitted. Also turns the data
    // it into a JSON string and after that returns it.
    saveNewData: (data, path) => {
        fs.writeFileSync(path, JSON.stringify(data))
        return data
    }
}