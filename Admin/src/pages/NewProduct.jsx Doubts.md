🖼️ 1️⃣ src={URL.createObjectURL(selectedImage)}
“How is my image showing before upload?”
Step 1: What selectedImage really is

From this:

const imageChange = (e) => {
  if (e.target.files && e.target.files.length > 0) {
    setSelectedImage(e.target.files[0]);
  }
};


When you choose a file, this is what gets stored:

selectedImage = File { name: "photo.png", size: 234234, type: "image/png" }


⚠️ That is NOT a URL
⚠️ <img src="..."> cannot display File objects

Step 2: Why URL.createObjectURL() exists

This line:

URL.createObjectURL(selectedImage)


Means:

“Hey browser, give me a temporary fake URL for this file sitting on my computer.”

It returns something like:

blob:http://localhost:3000/9fa2-1b3c-77dd

Step 3: Why your <img> works

Now your code:

<img
  src={URL.createObjectURL(selectedImage)}
  alt="Product"
  className="h-full w-full object-cover rounded-md"
/>


This becomes:

<img src="blob:http://localhost:3000/..." />


✅ Browser can display it
✅ Even though it’s NOT uploaded
✅ Even though backend knows nothing
✅ Even with no internet

This is pure frontend preview illusion magic 🪄

⚠️ Important Reality Check

That blob URL:

❌ is NOT Cloudinary

❌ is NOT permanent

❌ dies on refresh

✅ is ONLY for preview before upload

Once you upload, this one becomes irrelevant:

const { url } = uploadRes.data; // ✅ REAL PERMANENT IMAGE