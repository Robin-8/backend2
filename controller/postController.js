const inventoryModel = require("../model/item.js");


const getPost = async (req, res) => {
  const { title } = req.query;
  try {
    const items = await inventoryModel.find(title ? { title } : {});
    console.log(items, "items here");
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching items", error });
  }
};

// ✅ ADD post
const addPost = async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Data not submitted" });
  }

  try {

    const newItem = await inventoryModel.create({ title, content });
    console.log(newItem, "new item added");
    res.status(201).json({ message: "Item added successfully", item: newItem });
  } catch (error) {
    res.status(500).json({ message: "Error adding item", error });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPost = req.body;
    const post = await inventoryModel.findByIdAndUpdate(id, updatedPost, {
      new: true,
    });
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "Post updated successfully", post });
  } catch (error) {
    res.status(500).json({ message: "Error updating post", error });
  }
};

const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await inventoryModel.findByIdAndDelete(id);
    if (!data) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Some error happened", error });
  }
};

module.exports = { getPost, addPost, deleteData, updatePost };
