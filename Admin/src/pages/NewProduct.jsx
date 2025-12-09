import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import axios from "axios";
import { userRequest } from "./requestMethods";

const NewProduct = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [inputs, setInputs] = useState({});
  const [uploading, setUploading] = useState({ status: "idle", message: "" });
  const [selectedOptions, setSelectedOptions] = useState({
    concern: [],
    skintype: [],
    categories: [],
  });

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;

    // Prevent adding duplicates
    if (selectedOptions[name].includes(value)) {
      return;
    }

    setSelectedOptions((prev) => ({
      ...prev,
      [name]: [...prev[name], value],
    }));

    // Reset select to default
    e.target.value = "";
  };

  const handleRemoveOption = (name, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [name]: prev[name].filter((option) => option !== value),
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!selectedImage) {
      alert("Please select a product image");
      return false;
    }
    if (!inputs.title) {
      alert("Please enter product name");
      return false;
    }
    if (!inputs.desc) {
      alert("Please enter product description");
      return false;
    }
    if (!inputs.originalPrice || !inputs.discountedPrice) {
      alert("Please enter both original and discounted prices");
      return false;
    }
    return true;
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const data = new FormData();
    data.append("file", selectedImage);
    data.append("upload_preset", "uploads");

    setUploading({ status: "uploading", message: "Uploading image..." });

    try {
      // Upload image to Cloudinary
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/detg3atgg/image/upload",
        data
      );
      const { url } = uploadRes.data;

      setUploading({ status: "uploading", message: "Creating product..." });

      // Create product with the uploaded image URL
      await userRequest.post("/products", {
        img: url, // FIX: Use the uploaded URL, not the old state
        ...inputs,
        ...selectedOptions,
      });

      setUploading({
        status: "success",
        message: "Product created successfully!",
      });

      // Reset form after success
      setTimeout(() => {
        setSelectedImage(null);
        setInputs({});
        setSelectedOptions({ concern: [], skintype: [], categories: [] });
        setUploading({ status: "idle", message: "" });
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      setUploading({
        status: "error",
        message:
          error.response?.data?.message || "Upload failed. Please try again.",
      });
    }
  };

  const getUploadStatusColor = () => {
    switch (uploading.status) {
      case "success":
        return "text-green-600";
      case "error":
        return "text-red-600";
      case "uploading":
        return "text-blue-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="p-5 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-3xl font-semibold">New Product</h1>
      </div>

      <div className="mt-5 bg-white p-5 shadow-lg rounded-lg">
        <form
          className="flex flex-col md:flex-row gap-5"
          onSubmit={handleUpload}
        >
          {/* Left Column */}
          <div className="flex-1 space-y-5">
            <div>
              <label className="block mb-2 font-semibold">
                Product Image <span className="text-red-500">*</span>
              </label>
              {!selectedImage ? (
                <div className="border-2 h-[100px] w-[100px] border-gray-400 border-dashed rounded-md flex items-center justify-center hover:border-gray-600 transition">
                  <label htmlFor="file" className="cursor-pointer">
                    <FaPlus className="text-[20px] text-gray-500" />
                  </label>
                </div>
              ) : (
                <div className="relative h-[100px] w-[100px]">
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    //src={URL.createObjectURL(selectedImage)}  when we upload img in Frontend browser receives{size: xyz , type:xyz } so this line creates url of obj to display img  temp on Frontend
                    alt="Product"
                    className="h-full w-full object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => setSelectedImage(null)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  >
                    <FaTrash size={12} />
                  </button>
                </div>
              )}
              <input
                type="file"
                id="file"
                accept="image/*"
                onChange={imageChange}
                style={{ display: "none" }}
              />
            </div>

            {uploading.message && (
              <div className={`font-medium ${getUploadStatusColor()}`}>
                {uploading.message}
              </div>
            )}

            <div>
              <label className="block mb-2 font-semibold">
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={inputs.title || ""}
                placeholder="Product Name"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Product Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="desc"
                value={inputs.desc || ""}
                onChange={handleChange}
                cols={15}
                rows={7}
                placeholder="Product Description"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Product Original Price <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="originalPrice"
                value={inputs.originalPrice || ""}
                placeholder="Original Price"
                onChange={handleChange}
                min="0"
                step="0.01"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Product Discounted Price <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="discountedPrice"
                value={inputs.discountedPrice || ""}
                placeholder="Discounted Price"
                onChange={handleChange}
                min="0"
                step="0.01"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-5">
            <div>
              <label className="block mb-2 font-semibold">
                Wholesale Price
              </label>
              <input
                type="number"
                name="wholesalePrice"
                value={inputs.wholesalePrice || ""}
                placeholder="50"
                onChange={handleChange}
                min="0"
                step="0.01"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Wholesale Minimum Quantity
              </label>
              <input
                type="number"
                name="wholesaleMinimumQuantity"
                value={inputs.wholesaleMinimumQuantity || ""}
                onChange={handleChange}
                placeholder="10"
                min="1"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Brand</label>
              <input
                type="text"
                name="brand"
                value={inputs.brand || ""}
                onChange={handleChange}
                placeholder="Kylie"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Concern Select */}
            <div>
              <label className="block mb-2 font-semibold">Concern</label>
              <select
                name="concern"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleSelectChange}
                defaultValue=""
              >
                <option value="" disabled>
                  Select Concern
                </option>
                <option>Dry Skin</option>
                <option>Pigmentation</option>
                <option>Oil Control</option>
                <option>Anti Acne</option>
                <option>Sunburn</option>
                <option>Skin Brightening</option>
                <option>Tan Removal</option>
                <option>Night Routine</option>
                <option>UV Protection</option>
                <option>Damaged Hair</option>
                <option>Frizzy Hair</option>
                <option>Stretch Marks</option>
                <option>Color Protection</option>
                <option>Dry Hair</option>
                <option>Soothing</option>
                <option>Dandruff</option>
                <option>Greying</option>
                <option>Hairfall</option>
                <option>Hair Color</option>
                <option>Well Being</option>
                <option>Acne</option>
                <option>Hair Growth</option>
              </select>
              {selectedOptions.concern.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedOptions.concern.map((option) => (
                    <div
                      key={option}
                      className="flex items-center space-x-2 bg-blue-100 px-3 py-1 rounded-full"
                    >
                      <span className="text-sm">{option}</span>
                      <FaTrash
                        className="cursor-pointer text-red-500 hover:text-red-700"
                        size={12}
                        onClick={() => handleRemoveOption("concern", option)}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Skin Type Select */}
            <div>
              <label className="block mb-2 font-semibold">Skin Type</label>
              <select
                name="skintype"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleSelectChange}
                defaultValue=""
              >
                <option value="" disabled>
                  Select Skin Type
                </option>
                <option>All</option>
                <option>Oily</option>
                <option>Dry</option>
                <option>Sensitive</option>
                <option>Normal</option>
              </select>
              {selectedOptions.skintype.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedOptions.skintype.map((option) => (
                    <div
                      key={option}
                      className="flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full"
                    >
                      <span className="text-sm">{option}</span>
                      <FaTrash
                        className="cursor-pointer text-red-500 hover:text-red-700"
                        size={12}
                        onClick={() => handleRemoveOption("skintype", option)}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Categories Select */}
            <div>
              <label className="block mb-2 font-semibold">Categories</label>
              <select
                name="categories"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleSelectChange}
                defaultValue=""
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option>Serums</option>
                <option>Toners</option>
                <option>Lotions</option>
                <option>Foundations</option>
              </select>
              {selectedOptions.categories.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedOptions.categories.map((option) => (
                    <div
                      key={option}
                      className="flex items-center space-x-2 bg-purple-100 px-3 py-1 rounded-full"
                    >
                      <span className="text-sm">{option}</span>
                      <FaTrash
                        className="cursor-pointer text-red-500 hover:text-red-700"
                        size={12}
                        onClick={() => handleRemoveOption("categories", option)}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={uploading.status === "uploading"}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-2 px-4 rounded font-medium transition"
            >
              {uploading.status === "uploading"
                ? "Creating..."
                : "Create Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
