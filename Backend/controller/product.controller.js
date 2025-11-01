import Product from '../models/product.model.js';
import asyncHandler from 'express-async-handler';

// ✅ CREATE PRODUCT
const createProduct = asyncHandler(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
});

// ✅ UPDATE PRODUCT
const updateProduct = asyncHandler(async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );

  if (!updatedProduct) {
    res.status(404);
    throw new Error("Product not found");
  }

  res.status(200).json(updatedProduct);
});

// ✅ DELETE PRODUCT
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  res.status(200).json({ message: "Product deleted successfully" });
});

// ✅ GET SINGLE PRODUCT
const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  res.status(200).json(product);
});

// ✅ GET ALL PRODUCTS WITH FILTERS
const getAllProducts = asyncHandler(async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  const qSearch = req.query.search;

  let products;

  if (qNew) {
    products = await Product.find().sort({ createdAt: -1 });
  } else if (qCategory) {
    products = await Product.find({
      categories: { $in: [qCategory] },
    });
  } else if (qSearch) {
    products = await Product.find({
      $text: { $search: qSearch },
    });
  } else {
    products = await Product.find();
  }

  res.status(200).json(products);
});

// ✅ RATE PRODUCT (Prevents duplicate ratings)
const ratingProduct = asyncHandler(async (req, res) => {
  const { star, comment, name, postedBy } = req.body;
  const { productId } = req.params;

  if (!star || !name || !comment || !postedBy) {
    res.status(400);
    throw new Error("All fields required to rate a product");
  }

  const product = await Product.findById(productId);
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  // check if user already rated
  const existingRating = product.ratings.find(
    (r) => r.postedBy === postedBy
  );

  if (existingRating) {
    // update existing rating
    await Product.updateOne(
      { _id: productId, "ratings.postedBy": postedBy },
      {
        $set: {
          "ratings.$.star": star,
          "ratings.$.comment": comment,
          "ratings.$.name": name,
        },
      }
    );
  } else {
    // add new rating
    await Product.findByIdAndUpdate(productId, {
      $push: { ratings: { star, name, comment, postedBy } },
    });
  }

  const updatedProduct = await Product.findById(productId);
  res.status(201).json({
    message: "Product rated successfully",
    product: updatedProduct,
  });
});

export {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
  ratingProduct,
};
