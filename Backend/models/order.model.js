import mongoose from "mongoose";

const OrderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },

     total: {
      type: Number,
      required:true
    },
    address: {
      type: String,
    },

    phone: {
      type: String,
    },
    email: {
      type: String,
    },

    role: {
      type: String,
      default: "user",
    },

    status: {
      type: Number,
      default: 0,
    },                                     
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order",OrderSchema);