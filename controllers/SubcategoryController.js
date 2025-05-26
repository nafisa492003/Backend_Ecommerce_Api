const categorySchema = require("../models/categorySchema");
const subcategorySchema = require("../models/subcategorySchema");

const SubcategoryContoller = async (req, res) => {
  try {
    const { name, description, category } = req.body;

    if (!name || !category) {
      return res.status(400).json({ error: "Required fields are missing" });
    }
    const foundcategory = await categorySchema.findOne({ name: category });

    const subcategory = new subcategorySchema({
      name,
      description,
      category: foundcategory._id,
    });
    await subcategory.save();
    await categorySchema.findOneAndUpdate(
      { _id: foundcategory._id },
      { $push: { Subcategory: subcategory._id } },
      { new: true }
    );
    res.status(201).json({ message: "subcategory created", subcategory });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
// function for update Subcategories
const UpdateSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };
    const product = await subcategorySchema.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!product) return res.status(404).json({ error: "Product not found" });

    res.status(200).json({ message: "Sub-Product updated", product });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// function for delete sub catagory product
const DeleteSubCatagory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await subcategorySchema.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Product not found" });

    res.status(200).json({ message: "Sub-Catagory product deleted" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
module.exports = { SubcategoryContoller, UpdateSubCategory, DeleteSubCatagory };
