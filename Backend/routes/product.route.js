import express from "express";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
  ratingProduct,
} from "../controller/product.controller.js";

const router = express.Router();

// IMPORTANT: Specific routes MUST come BEFORE generic routes
// Test route - specific
router.post("/test", (req, res) => {
  console.log("✅ Test route hit!");
  res.json({ message: "Test route works!" });
});

// Rating route - specific (must be before /:id)
router.put("/rating/:productId", ratingProduct);

// Get all products - must be before /:id
router.get("/", getAllProducts);

// Create product
router.post("/", createProduct);

// Get single product by ID
router.get("/:id", getProduct);

// Update product by ID
router.put("/:id", updateProduct);

// Delete product by ID
router.delete("/:id", deleteProduct);

export default router;
