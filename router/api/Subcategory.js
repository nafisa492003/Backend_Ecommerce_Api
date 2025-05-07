const { Router } = require("express");
const {
  SubcategoryContoller,
  UpdateSubCategory,
  DeleteSubCatagory,
} = require("../../controllers/SubcategoryController");

const router = Router();

router.post("/createsubcategory", SubcategoryContoller);
router.put("/updateSubCategory/:id", UpdateSubCategory);
router.delete("/deleteSubCatagory/:id",DeleteSubCatagory)
module.exports = router;
