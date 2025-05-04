const categorySchema = require("../models/categorySchema");
const subcategorySchema = require("../models/subcategorySchema");

const SubcategoryContoller = async (req, res) => {
  try {
    const { name, description, category } = req.body;

    if (!name || !description || !category) {
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

module.exports = SubcategoryContoller;
