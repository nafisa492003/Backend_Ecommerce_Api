const { Router } = require("express");
const {
  createProduct,
  getAllProducts,
  getSingalProduct,
  UpdateCategory,
  UpdateSubCategory,
  DeleteCatagory,
  DeleteSubCatagory,
} = require("../../controllers/productController");

const router = Router();

router.post("/createProduct", createProduct);
router.put("/updateCatagory/:id", UpdateCategory);
router.put("/updateSubCategory/:id",UpdateSubCategory)
router.get("/allProduct", getAllProducts);
router.get("/getSingalProduct/:id", getSingalProduct);
router.delete("/deleteCatagory/:id",DeleteCatagory)
router.delete("/deleteSubCatagory/:id",DeleteSubCatagory)
module.exports = router;
