const { Command, flags } = require('@oclif/command')
const fs = require('fs');
const path = require('path')
const csvRead = require('../services/csv.read.js')

class GreetCommand extends Command {
  static args = [
    {
      name: 'file'
    }
  ]
  async run () {
    const { flags, args } = this.parse(GreetCommand)
    const { format, verbose } = flags
    const { file } = args

    if (verbose) {
      this.log('Starting...')
    }

    let formats = fs.readdirSync(path.join(__dirname, '../services'))

    formats = formats
                .filter(elem => elem.includes('.read.js'))
                .map(elem => elem.split('.')[0])

    if (verbose) {
      this.log("Supported formats found: ", formats)
    }

    switch (format) {
      case 'csv':
        csvRead(file)
        break;
    
      default:
        break;
    }

  }
}

GreetCommand.description = `Reads from a file or a database`

GreetCommand.flags = {
  format: flags.string({
    char: 'f',
    description: 'Input format',
    default: 'csv',
  }),
  verbose: flags.boolean({
    char: 'v',
    description: 'Display debug info',
    default: false,
  }),
}

module.exports = GreetCommand
