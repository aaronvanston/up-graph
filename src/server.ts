import app from './app'
import { config } from './config'

console.log(`Listening on port ${config.port}`)
app.listen(config.port)
