const mongoose = require('mongoose')

class MongoSingleton {
  static instance

  constructor (settings) {
    const MONGODB_CONNECT = `mongodb+srv://${process.env.db_user}:${process.env.db_password}@${process.env.db_host}/${process.env.db_name}?retryWrites=true&w=majority`

    mongoose.connect(MONGODB_CONNECT)
      .then(async r => {
        
      })
  }

  static getConnection(settings) {
    if (this.instance) {
      console.log('Ya existe una conexión a la base de datos')

      return this.instance
    }

    this.instance = new MongoSingleton(settings)
    console.log(`conectado a la base de datos ${settings.db_name}`)

    return this.instance
  }
}

module.exports = MongoSingleton