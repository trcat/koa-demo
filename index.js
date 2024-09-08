const Koa = require("koa")
require("./dal")
const bodyParser = require("koa-bodyparser")
const students = require('./routes/students.routes')

const app = new Koa()

app.use(bodyParser())
app.use(students.routes()).use(students.allowedMethods())

app.listen(3000)
console.log('Listening on port 3000')