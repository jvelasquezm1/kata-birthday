const csvParser = require('csv-parser');
const fs = require('fs');

module.exports = (file) => {

  rows = []

  fs.createReadStream(file)
    .on('error', () => {
        console.error('Error occured')
    })

    .pipe(csvParser())
    .on('data', (row) => {
      rows.push(row)
    })

  console.log(rows)
}
