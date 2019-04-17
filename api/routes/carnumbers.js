const express = require("express");
const router = express.Router();
const CarNumberController = require('../controllers/carnumbers');



router.get("/",  CarNumberController.get_all_carNumbers);
router.post("/", CarNumberController.create_carNumbers);
router.delete("/:itemId", CarNumberController.delete_carNumbers);

module.exports = router;