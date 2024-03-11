// routes/index.js
const { Router } = require("express");
const router = Router();
const mainController = require('../controllers/mainController');
const cors = require("cors");

router.options("*", cors({ origin: "*", optionsSuccessStatus: 200 }));

router.use(cors({ origin: "*", optionsSuccessStatus: 200 }));




router.get('/home',mainController.home);

module.exports = router;
