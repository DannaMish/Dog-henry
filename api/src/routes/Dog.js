const { Router } = require("express");
const controllers = require("../Controllers/Dog")


const router = new Router()

router.get("/dog/");



module.exports = router;