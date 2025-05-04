const { Router } = require("express");
const SubcategoryContoller = require("../../controllers/SubcategoryController");

const router = Router();

router.post("/createsubcategory", SubcategoryContoller);

module.exports = router;
