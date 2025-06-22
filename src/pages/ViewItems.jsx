import { useState } from "react";

const ViewItems = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">All Items</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="cursor-pointer border rounded shadow hover:shadow-lg"
          >
            <img
              src={item.coverImage}
              alt={item.name}
              className="w-full h-48 object-cover rounded-t"
            />
            <div className="p-3">
              <h3 className="font-semibold text-lg">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white max-w-2xl w-full rounded-lg overflow-hidden relative">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-2 right-2 text-gray-700 hover:text-red-500"
            >
              ✕
            </button>

            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{selectedItem.name}</h2>
              <p className="text-gray-600 mb-4">{selectedItem.type}</p>
              <p className="mb-4">{selectedItem.description}</p>

              {/* Carousel */}
              <div className="overflow-x-auto whitespace-nowrap space-x-2 mb-4">
                {[selectedItem.coverImage, ...selectedItem.images].map(
                  (img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Item img ${idx}`}
                      className="inline-block h-40 rounded"
                    />
                  )
                )}
              </div>

              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Enquire
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewItems;
