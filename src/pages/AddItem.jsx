// import { useState } from "react";

// const AddItem = ({ addNewItem }) => {
//   const [name, setName] = useState("");
//   const [type, setType] = useState("");
//   const [description, setDescription] = useState("");
//   const [coverImage, setCoverImage] = useState(null);
//   const [additionalImages, setAdditionalImages] = useState([]);
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Convert file objects to object URLs for preview (in real app use cloud upload)
//     const coverImageURL = URL.createObjectURL(coverImage);
//     const additionalImageURLs = Array.from(additionalImages).map((file) =>
//       URL.createObjectURL(file)
//     );

//     // Create item object
//     const newItem = {
//       name,
//       type,
//       description,
//       coverImage: coverImageURL,
//       images: additionalImageURLs,
//     };

//     // Add item and reset form
//     addNewItem(newItem);
//     setSuccess(true);

//     // Reset form
//     setName("");
//     setType("");
//     setDescription("");
//     setCoverImage(null);
//     setAdditionalImages([]);
//     e.target.reset();

//     // Hide message after 3s
//     setTimeout(() => setSuccess(false), 3000);
//   };

//   return (
//     <div className="max-w-xl mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Add New Item</h2>

//       {success && (
//         <div className="mb-4 p-3 bg-green-100 text-green-700 border border-green-300 rounded">
//           Item successfully added!
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           placeholder="Item Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full border p-2 rounded"
//           required
//         />

//         <input
//           type="text"
//           placeholder="Item Type (e.g., Shirt, Shoes, etc.)"
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//           className="w-full border p-2 rounded"
//           required
//         />

//         <textarea
//           placeholder="Item Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="w-full border p-2 rounded"
//           required
//         />

//         <div>
//           <label className="block font-semibold mb-1">Cover Image</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setCoverImage(e.target.files[0])}
//             required
//           />
//         </div>

//         <div>
//           <label className="block font-semibold mb-1">Additional Images</label>
//           <input
//             type="file"
//             accept="image/*"
//             multiple
//             onChange={(e) => setAdditionalImages(e.target.files)}
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
//         >
//           Add Item
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddItem;



import { useState } from "react";

const AddItem = ({ addNewItem }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [additionalImages, setAdditionalImages] = useState([""]);
  const [success, setSuccess] = useState(false);

  const handleAddImageField = () => {
    setAdditionalImages([...additionalImages, ""]);
  };

  const handleImageChange = (index, value) => {
    const updated = [...additionalImages];
    updated[index] = value;
    setAdditionalImages(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name,
      type,
      description,
      coverImage,
      images: additionalImages.filter((img) => img.trim() !== ""),
    };

    addNewItem(newItem);
    setSuccess(true);

    // Reset form
    setName("");
    setType("");
    setDescription("");
    setCoverImage("");
    setAdditionalImages([""]);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Item</h2>

      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 border border-green-300 rounded">
          Item successfully added!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          placeholder="Item Type (e.g., Shirt, Shoes)"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <textarea
          placeholder="Item Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          placeholder="Cover Image URL"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <div>
          <label className="block font-semibold mb-2">Additional Image URLs</label>
          {additionalImages.map((img, index) => (
            <input
              key={index}
              type="text"
              value={img}
              onChange={(e) => handleImageChange(index, e.target.value)}
              placeholder={`Image ${index + 1} URL`}
              className="w-full border p-2 mb-2 rounded"
            />
          ))}
          <button
            type="button"
            onClick={handleAddImageField}
            className="text-sm text-blue-600 hover:underline"
          >
            + Add another image
          </button>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;
