var express = require("express")
var router = express.Router()
var testController = require("./../../controllers/test/testController.test.js")

router.get("/testRoute/", testController.getTest)

module.exports = router