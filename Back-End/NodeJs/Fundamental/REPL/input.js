console.log('Hello World')

// show inputs
console.log(process.argv)


const args = require('minimist')(process.argv.slice(2))
console.log(args['name']);