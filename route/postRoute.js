const express = require("express");
const router = express.Router();

const {
  getPost,
  addPost,
  deleteData,
  updatePost,
} = require("../controller/postController.js");

router.use(express.json());

// Routes
router.get("/getPost", getPost);
router.post("/addPost", addPost);
router.delete("/delete/:id", deleteData);
router.patch("/updatePost/:id", updatePost);

router.use((req, res) => {
  res.status(404).json({ message: "Requested URL not found" });
});

module.exports = router;
