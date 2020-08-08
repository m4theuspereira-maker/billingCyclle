require('./configuration/database')
const app = require('./configuration/server')
require('./configuration/routes')(app)