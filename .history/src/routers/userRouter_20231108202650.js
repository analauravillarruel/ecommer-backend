const BaseRouter = require("./BaseRouter");
const userDao = require("../DAOs/")

class UserRouter extends BaseRouter {
  init () {
    this.get('/', ["ADMIN", "PREMIUM"], (req, res) => {
      return res.sendSuccess('Hola Coders')
    })
  }
}

module.exports = UserRouter