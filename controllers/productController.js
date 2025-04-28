const categorySchema = require("../models/categorySchema");

const createProduct = async (req, res) => {
  const { name, description } = req.body;
  try {
    if (!name) {
      return res.status(400).json({ error: "Required fields are missing" });
    }
    const existingCategory = await categorySchema.findOne({ name });
    if (existingCategory) {
      return res
        .status(400)
        .json({ error: "This name is already used please use another name" });
    }
    const product = new categorySchema({
      name,
      description,
    });
    await product.save();
    res.status(201).json({ message: "Product created", product });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
const getAllProducts = async (req, res) => {
  try {
    const products = await categorySchema.find({}).populate("name");

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
const getSingalProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const singalCategory = await categorySchema.findById({ _id: id });

    res.status(200).json(singalCategory);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
module.exports = { createProduct, getAllProducts, getSingalProduct };
