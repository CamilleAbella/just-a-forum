import app from "../server"
import * as utils from "../utils"

app.get("/logout", function (req, res) {
  utils.checkoutSession(req, res, (user, req) => {
    utils.logout(req, res)
  })
})
