import 'dotenv/config'
import mongoose from "mongoose"


const username = encodeURIComponent(process.env.MONGODB_USERNAME);
const password = encodeURIComponent(process.env.MONGODB_PASSWORD);

mongoose.connect(`mongodb+srv://${username}:${password}@estudo.gr0fg.mongodb.net/alura-node`)

let db = mongoose.connection;

export default db