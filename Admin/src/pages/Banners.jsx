import { useState, useEffect } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { userRequest } from "./requestMethods";
import axios from "axios";

const Banner = () => {
  const [selectedImage, setSelectImage] = useState(null);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [banners, setBanners] = useState([]);
  const [uploading, setUploading] = useState("");

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectImage(e.target.files[0]);
    }
  };

  useEffect(() => {
    const getBanners = async () => {
      try {
        const res = await userRequest.get("/banners");
        setBanners(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBanners();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!selectedImage || !title || !subtitle) {
      alert("Please fill all fields and select an image");
      return;
    }

    const data = new FormData();
    data.append("file", selectedImage);
    data.append("upload_preset", "uploads");
    setUploading("Uploading...");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dkjenslgr/image/upload",
        data
      );
      const { url } = uploadRes.data;
      setUploading("Uploaded 100%");

      await userRequest.post("/banners", { img: url, title, subtitle });

      const res = await userRequest.get("/banners");
      setBanners(res.data);

      // Reset form
      setSelectImage(null);
      setTitle("");
      setSubtitle("");
      setUploading("");

      // Reset file input
      document.getElementById("file").value = "";
    } catch (error) {
      console.log(error);
      setUploading("Upload failed");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this banner?")) {
      try {
        await userRequest.delete(`/banners/${id}`);
        const res = await userRequest.get("/banners");
        setBanners(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Banner Management
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Banners Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                Active Banners
                <span className="ml-3 text-sm font-normal text-gray-500">
                  ({banners.length} total)
                </span>
              </h2>

              {banners.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <p className="text-lg">No banners yet</p>
                  <p className="text-sm mt-2">
                    Create your first banner using the form
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {banners.map((banner) => (
                    <div
                      key={banner._id}
                      className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200"
                    >
                      <img
                        src={banner.img}
                        alt={banner.title}
                        className="w-40 h-32 object-cover rounded-md flex-shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold text-gray-800 mb-1 truncate">
                          {banner.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {banner.subtitle}
                        </p>
                      </div>

                      <button
                        className="bg-red-500 hover:bg-red-600 p-3 rounded-lg text-white font-semibold transition-colors duration-200 flex items-center gap-2 flex-shrink-0"
                        onClick={() => handleDelete(banner._id)}
                      >
                        <FaTrash />
                        <span className="hidden sm:inline">Delete</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Upload Form Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Add New Banner
              </h2>

              <form onSubmit={handleUpload} className="space-y-6">
                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Banner Image
                  </label>
                  <div className="flex flex-col items-center">
                    {!selectedImage ? (
                      <label
                        htmlFor="file"
                        className="w-full h-40 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200"
                      >
                        <FaPlus className="text-3xl text-gray-400 mb-2" />
                        <span className="text-sm text-gray-500">
                          Click to upload image
                        </span>
                      </label>
                    ) : (
                      <div className="relative w-full">
                        <img
                          src={URL.createObjectURL(selectedImage)}
                          alt="Preview"
                          className="w-full h-40 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setSelectImage(null);
                            document.getElementById("file").value = "";
                          }}
                          className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors duration-200"
                        >
                          <FaTrash className="text-sm" />
                        </button>
                      </div>
                    )}
                    <input
                      type="file"
                      id="file"
                      onChange={imageChange}
                      accept="image/*"
                      className="hidden"
                    />
                    {uploading && (
                      <span className="text-sm font-semibold mt-2 text-green-600">
                        {uploading}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter banner title"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                    required
                  />
                </div>

                {/* Subtitle Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subtitle
                  </label>
                  <textarea
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    placeholder="Enter banner subtitle"
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all duration-200"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  disabled={uploading === "Uploading..."}
                >
                  {uploading === "Uploading..." ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Uploading...
                    </>
                  ) : (
                    <>
                      <FaPlus />
                      Create Banner
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
